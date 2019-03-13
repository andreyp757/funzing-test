import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  private chatId: number;
  public hostName: string = 'Incognito';

  constructor(private route:ActivatedRoute, private router: Router, private navCtrl: NavController) {
  }

  ngOnInit() {
    this.route.params.subscribe(param => {
      this.chatId = param.id;
      this.hostName = param.name;
    })
  }

  goChat(){
    this.router.navigateByUrl('/profile/chat/' + this.chatId)
  }

  goHome(){
    this.navCtrl.navigateBack('/home');
  }

}
