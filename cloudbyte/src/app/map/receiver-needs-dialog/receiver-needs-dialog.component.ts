import { Component, Inject } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import openai, { OpenAI } from 'openai';
import { Toast } from 'primeng/toast';
import { Receiver } from 'src/app/models/receiver.model';

@Component({
  selector: 'app-receiver-needs-dialog',
  templateUrl: './receiver-needs-dialog.component.html',
  styleUrls: ['./receiver-needs-dialog.component.css']
})
export class ReceiverNeedsDialogComponent {
  needsArray = [];
  expandedElement: any | null;
  openai = new OpenAI({
    apiKey: "<api-key>",
    dangerouslyAllowBrowser: true
  });

  columnsToDisplay = ['name', 'quantity', 'chose_donation', 'donate'];
  receiver: Receiver;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private store: AngularFirestore) {}

  ngOnInit() {
    this.needsArray = Array.from(this.data.receiver.needs.entries())
    .filter(([key, value]) => value > 0)
    .map(([key, value]) => ({ key, value, donationAmount: 0, isExpanded: false }));
    this.receiver = this.data.receiver;
  }


  onDonate(element: any) {
    event.stopPropagation();
    const donatedValue = element.sliderValue

    element.value = element.value - donatedValue
    

    console.log(`Donating for ${element.key} with quantity ${donatedValue}`);

    
    const prompt: string = "You have to generate a score that indicates the amount of generousity you can identify in the following donation: " + element.key + "in a quantity of " + donatedValue + ". The score should be proportional to the real world cost of the items in US dollars. Give it a score from 10 to 100 in JSON format: ";
    this.openai.chat.completions.create({
        messages: [{ role: "user", content: prompt }],
        model: "gpt-3.5-turbo",
    })
    .then((completion) => {
      const scoreRegex = /"score"\s*:\s*([\d.]+)/;
      const match = String(completion.choices[0].message.content).match(scoreRegex);
    
      const score = parseFloat(match[1]);
      alert("Congratulations! You have recieved " + score + " points. Thanks for the donation!")

      const accountSid = '<account-sid>';
      const authToken = '<auth-token>';
      const yourNumber = '<your-number>'; 
      const availableNumber = '<available-number>'; 
      const message = `You should have recieved a donation of ${donatedValue} ${element.key}. If you haven't, please report it at https://zci5jz0hs0s.typeform.com/to/sm1LNn29`;
      
      fetch(`https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages`, {
        method: 'POST',
        headers: {
          'Authorization': 'Basic ' + btoa(`${accountSid}:${authToken}`),
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `Body=${message}&From=${availableNumber}&To=${yourNumber}`,
      })
        .then(response => response.text())
        .then(data => {
          console.log(data);
        })
        .catch(error => {
          console.error(error);
        });

        const info = localStorage.getItem("UserInfo");

        const obj = JSON.parse(info);
  

        obj.score = score + obj.score;
        
        obj.donations[element.key] = donatedValue;
        localStorage.setItem("UserInfo", JSON.stringify(obj))

        setTimeout(() => {
          window.location.reload();
        }, 2000)
         
    })  
  }
  finalizeDonation(element: any) {
    console.log(`Finalizing donation for ${element.key} with quantity ${element.donationAmount}`);
    // Implement your donation logic here
  }
}

