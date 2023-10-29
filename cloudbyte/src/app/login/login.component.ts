import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'; 
import { Giver } from '../models/giver.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  giver: Giver = new Giver(); 
   
  hidePassword: boolean = true;

  loginFormGroup = new FormGroup({
    emailFormControl: new FormControl('', [Validators.required, Validators.email]),
    passwordFormControl: new FormControl('', [Validators.required])
  });

  constructor(private firebaseDb: AngularFirestore, private router: Router) {
    
  }

  ngOnInit(){
    this.giver.name="Mircea";
    this.giver.email="mircea.boss@mereuaproape.ro";
    this.giver.phone = "0712345678";
    this.giver.password = "12345";
    this.giver.x= 44.550; 
    this.giver.y= 26.9732;
    this.giver.donations = new Map<string, number>();
    this.giver.donations.set("Haine", 35);
    this.giver.donations.set("Alimente", 35);
    this.giver.score = 0;
  }

  loginUser(){
    this.router.navigate(['home']);
    window.localStorage.setItem("UserInfo", JSON.stringify(this.giver)); 
  }
}
