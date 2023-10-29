import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { FirebaseServiceService } from '../firebase-service/firebase-service.service';
import { Receiver } from '../models/receiver.model';
import { MatDialog } from '@angular/material/dialog';
import { ReceiverNeedsDialogComponent } from './receiver-needs-dialog/receiver-needs-dialog.component';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  receivers : Receiver[];
  map: L.Map;




  constructor(private firebaseService: FirebaseServiceService,
              private dialog: MatDialog) { }


  ngOnInit(): void {
    this.firebaseService.mockReceivers();
 
     this.map = L.map('map').setView([44.4268, 26.1025], 12);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    const receiverIcon = L.icon({
      iconUrl: '../../assets/receiver-icon.svg',
      iconSize: [38, 95],
      iconAnchor: [22, 94],
      popupAnchor: [-3, -76]
  });

      this.receivers = this.firebaseService.getReceivers();
      setTimeout(() => {
        this.receivers.forEach(receiver => {
            L.marker([receiver.x, receiver.y], { icon: receiverIcon }).addTo(this.map)
                .bindPopup(`<div style="
                    background-color: #ffffff;
                    border-radius: 8px;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                    padding: 15px;
                    width: 250px;
                ">
                    <h2 style="
                        font-size: 20px;
                        margin-bottom: 10px;
                        color: #333;
                        border-bottom: 2px solid #FE6B8B;
                        padding-bottom: 5px;
                    ">${receiver.name}</h2>
                    <p style="margin-bottom: 10px; color: #555;">
                        <strong>Email:</strong> ${receiver.email}<br>
                        <strong>Phone:</strong> ${receiver.phone}
                    </p>
                    <button mat-raised-button class="open-dialog-btn" 
                        style="
                            background: linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%);
                            border: none;
                            color: white;
                            padding: 10px 20px;
                            text-align: center;
                            text-decoration: none;
                            display: inline-block;
                            font-size: 16px;
                            margin: 10px 2px;
                            cursor: pointer;
                            border-radius: 5px;
                            box-shadow: 0 3px 5px 2px rgba(255, 105, 135, .3);
                            transition: 0.3s;
                        ">View Needs</button>
                </div>`)
                .on('popupopen', (event) => {
                    const popup = event.popup;
                    const button = popup.getElement().querySelector('.open-dialog-btn');
                    button.addEventListener('click', () => {
                        this.openDialog(receiver);
                    });
                });
        });
    }, 1000);

  }

  openDialog(receiver: Receiver) {
    this.dialog.open(ReceiverNeedsDialogComponent, {
      width: '900px',
      height: '600px',
      data: { receiver: receiver }
    });
  }
}
