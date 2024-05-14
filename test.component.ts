import { Component } from '@angular/core';
import { User as ExternalUser } from "../user";

import { CommonModule } from '@angular/common';

export interface LocalUser {
  userId: number;
  username: string;
  type: string;
}

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

export class TestComponent {
  isLogin: boolean = false;
  isLogout: boolean = true;

  list = [1, 2, 3, 4, 5];

  loginName = "admin";

  users: LocalUser[] = [
    {userId:1, username: "John Doe", type:"employee"},
    {userId:2, username: "Jane Doe", type:"student"},
    {userId:3, username: "Billy Doe", type:"student"},
    {userId:4, username: "Telly Doe", type:"employee"},
  ]

  externalUsers: ExternalUser[] = [
    {userId:1, username: "John Doe", type:"employee"},
    {userId:2, username: "Jane Doe", type:"student"},
    {userId:3, username: "Billy Doe", type:"student"},
    {userId:4, username: "Telly Doe", type:"employee"},
  ]
}
