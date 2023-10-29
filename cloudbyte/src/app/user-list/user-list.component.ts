import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'; 
import { Giver } from '../models/giver.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  giver: Giver = new Giver();
  quantityDonated: number = 0;

  constructor (private firebaseDb: AngularFirestore, private router: Router) {
    
  }

  ngOnInit(){
    const info = localStorage.getItem("UserInfo");

    const obj = JSON.parse(info);

    this.giver = obj;

    Object.entries(this.giver.donations).forEach(([key, value]: [string, number]) => {
        this.quantityDonated += value;
    });
  }

  goBack(){
    this.router.navigate(['home']);
  }
}
