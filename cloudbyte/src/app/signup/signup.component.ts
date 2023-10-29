import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'; 

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private firebaseDb: AngularFirestore) {
    
  }
}
