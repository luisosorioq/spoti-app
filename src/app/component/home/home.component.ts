import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  token: string = '';
  newSongs: any[] = [];
  loading: boolean;
  error: boolean;
  messageError: string = '';
  codeError: number = 0;

  constructor( private spotify: SpotifyService ) { 
    this.loading = true;
    this.error = false;
    this.spotify.getNewReleases()
      .subscribe( data => {
        this.newSongs = data
        this.loading = false;
      }, ( errorService ) => {
        this.error = true;
        this.messageError = errorService.error.error.message;
        this.codeError = errorService.error.error.status;
        this.loading = false;
      });
  }

  ngOnInit(): void {
    if ( localStorage.getItem('SpotiLuigiToken') == 'undefined' || localStorage.getItem('SpotiLuigiToken') == null )
    {
      const myHash = window.location.hash.substring(1);
      
      const myUrl = myHash.substring(1).split("&");
      localStorage.setItem('SpotiLuigiToken', myUrl[0].split("=")[1]);
      localStorage.setItem('SpotiLuigiAuth', 'true');
    }
    this.token = "" + localStorage.getItem('SpotiLuigiAuth');
  }
 
}
