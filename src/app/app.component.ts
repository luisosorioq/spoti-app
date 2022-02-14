import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Spoty Luigi';
  login:boolean = false;

  constructor() {
    if ( localStorage.getItem('spotify_auth_state') ) {
      this.login = true;
    }
  }

}
