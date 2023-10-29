import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userName: string = '';
  userRole: string = '';
  userScore: string = '';

  ngOnInit(): void {
    const info = localStorage.getItem("UserInfo");

    const obj = JSON.parse(info);

    this.userName = obj.name
    this.userRole = "Giver"
    this.userScore = obj.score
  }
}
