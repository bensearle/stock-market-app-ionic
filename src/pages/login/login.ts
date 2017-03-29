import { Component } from '@angular/core';
import { User } from '../../providers/user';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  user: any = { email: '', password: '' };

  constructor(private userService: User) {}

  closeModal() {
    //this.modalService.closeModal();
  };

  signup(user) {
    //this.userService.signup(user);
  };

  login(user) {
    //this.userService.login(user);
  };

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
