import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(){
  }

  login(){
    console.log('tentaria de login');
  }
  signUp(){
    console.log('tentaria de signUp');
  }
}
