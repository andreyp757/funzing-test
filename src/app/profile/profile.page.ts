import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  readonly chatId: number = 1234;
  public hostName: string = 'Incognito';

  constructor(private router: Router, private navCtrl: NavController) {
  }

  ngOnInit() {
    
  }

  goChat(){
    this.router.navigateByUrl('/profile/' + this.chatId)
  }

  goHome(){
    this.navCtrl.navigateBack('/home');
  }

}
