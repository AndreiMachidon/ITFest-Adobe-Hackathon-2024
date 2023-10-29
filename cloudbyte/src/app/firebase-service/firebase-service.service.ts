import { Injectable } from '@angular/core';
import { FirebaseApp, initializeApp } from 'firebase/app';
import { Firestore, addDoc, collection, getFirestore } from 'firebase/firestore';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore'; 
import { Receiver } from '../models/receiver.model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseServiceService {
  receivers: Receiver[] = [];

  private firebaseConfig = {
    apiKey: "<firebase-api-key>",
    authDomain: "<auth-domain>",
    projectId: "<project-id>",
    storageBucket: "<storage-bucket>",
    messagingSenderId: "<sender-id>",
    appId: "<app-id>"
  };

  private dbPath = '/receivers';

  tutorialsRef: AngularFirestoreCollection<Receiver>;

  constructor(private store: AngularFirestore) {}

  
   add (name: string, email:string, phone: string, x: number, y: number, needs: Map<string, number>) {
    try {
      
      this.store.collection('recievers').add({
        name: name,
        email: email,
        phone: phone,
        x: x,
        y: y,
        needs: Object.fromEntries(needs)
      })
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  mockReceivers(){
    const needs1: Map<string, number> = new Map();
    needs1.set("conserve mâncare", 20);
    needs1.set("bidoane apă 0.5L", 50);
    this.add("Asociația pentru nevoiași", 
             "asociatia.nevoiasi@gmail.com", 
             "0749382021", 
             44.4377, 26.0973,
             needs1);

    const needs2: Map<string, number> = new Map();
    needs2.set("haine  iarna", 30);
    needs2.set("încălțăminte iarna", 15);
    this.add("Asociația Fii un sprijin", 
             "fiiunsprijin@gmail.com", 
             "0749382021", 
             44.4268, 26.1025,
             needs2);

    const needs3: Map<string, number> = new Map();
    needs3.set("conserve mâncare pisici", 25);
    needs3.set("jucării copii", 10);
    this.add("Asociația Ajutorul", 
             "ajutorul@gmail.com", 
             "0749382032", 
             44.4323, 26.1064,
             needs3);


    const needs10: Map<string, number> = new Map();
    needs10.set("conserve mancare", 20);
    needs10.set("bidoane apă 0.5L", 40);
    this.add("Asociația Speranța", 
             "speranta@gmail.com", 
             "0749382091", 
             44.4382, 26.1353,
             needs10);

             const needs4: Map<string, number> = new Map();
  needs4.set("conserve mancare", 15);
  needs4.set("apă", 45);
  this.add("Asociația Inimă Bună", 
         "inima.buna@gmail.com", 
         "0749382043", 
         44.4189, 26.1466,
         needs4);

const needs5: Map<string, number> = new Map();
needs5.set("haine iarna", 25);
needs5.set("încălțăminte iarna", 20);
this.add("Asociația Lumina", 
         "lumina@gmail.com", 
         "0749382054", 
         44.4048, 26.1269,
         needs5);

const needs6: Map<string, number> = new Map();
needs6.set("conserve mancare", 30);
needs6.set("jucării copii", 5);
this.add("Asociația Copii Fericiti", 
         "copii.fericiti@gmail.com", 
         "0749382065", 
         44.4354, 26.0752,
         needs6);

const needs7: Map<string, number> = new Map();
needs7.set("conserve mancare", 10);
needs7.set("apă", 60);
this.add("Asociația Zâmbet", 
         "zambet@gmail.com", 
         "0749382076", 
         44.4212, 26.0887,
         needs7);

const needs8: Map<string, number> = new Map();
needs8.set("haine iarna", 40);
needs8.set("încălțăminte", 10);
this.add("Asociația Împreună", 
         "impreuna@gmail.com", 
         "0749382087", 
         44.4123, 26.1107,
         needs8);
  }

  getReceivers(): Receiver[] {
    let receivers: Receiver[] = [];
  
    this.store.collection('recievers').valueChanges()
      .subscribe((dataList: any[]) => {
        dataList.forEach(data => {
          receivers.push(new Receiver(data));
        });
      });
  
    return receivers;
  }

}
