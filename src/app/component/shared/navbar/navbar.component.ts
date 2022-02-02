import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {

  user: any = [];
  error: boolean = false;
  login = false;
  titleApp: string = '';

  constructor( private spotify: SpotifyService, private app:AppComponent) { 
    this.getMe();
    this.titleApp = app.title;
  }

  getMe() {
    this.spotify.getMe()
      .subscribe( (dataMe:any) => {
        this.user = dataMe;
        this.login = true;
    });
  }

}
