import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  readonly chatId: number = 1234;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goChat(){
    this.router.navigateByUrl('/profile/' + this.chatId)
  }

}
