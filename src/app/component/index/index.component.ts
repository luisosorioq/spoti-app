import { Component, OnInit } from '@angular/core';
// import { window } from 'rxjs';
import { AppComponent } from 'src/app/app.component';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html'
})
export class IndexComponent implements OnInit {

  login = false;
  stateKey = 'spotify_auth_state';
  title: string = this.dato.title;
  constructor(private dato:AppComponent,
              private spotify: SpotifyService ) {}

  ngOnInit():void {
    localStorage.removeItem('SpotiLuigiAuth');
    localStorage.removeItem('SpotiLuigiToken');
    localStorage.removeItem('spotify_auth_state');
    this.login = false;
  }

  getAccess(){
    const client_id = 'aaf2e7da36984914bf73c7664916cb03';
    const redirect_uri = 'http://localhost:4200/home';
    const state = this.generateRandomString(16);

    localStorage.setItem(this.stateKey, state);
    const scope = 'user-read-private,user-read-email,playlist-modify-public,user-library-read,user-library-modify';

    let url = 'https://accounts.spotify.com/es-ES/authorize';
      url += `?client_id=${ client_id }`;
      url += `&scope=${ scope }`;
      url += `&redirect_uri=${ redirect_uri }`;
      url += `&response_type=token`;
      url += `&show_dialog=true`;
    window.open(url, "_self");
  }

  generateRandomString(length: number) {
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  };

}
