import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Create a map and set its view to a specific location and zoom level
    const map = L.map('map').setView([44.4268, 26.1025], 12);

    // Add a tile layer to the map (You can use various tile providers)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Add a marker to the map
    L.marker([44.4268, 26.1025]).addTo(map)
      .bindPopup('Hello, this is your marker!')
      .openPopup();
  }
}
