// import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  newSongs: any[] = [];
  loading: boolean;
  error: boolean;
  messageError: string = '';
  codeError: number = 0;

  // constructor( private http: HttpClient, ) { 
  constructor( private spotify: SpotifyService ) { 
    this.loading = true;
    this.error = false;
    this.spotify.getNewReleases()
      .subscribe( data => {
        this.newSongs = data
        this.loading = false;
      }, ( errorService ) => {
        // console.log(errorService);
        console.log(errorService);
        this.error = true;
        this.messageError = errorService.error.error.message;
        this.codeError = errorService.error.error.status;
        this.loading = false;
      });
        // console.log(data.albums.items);
        // this.newSongs = data.albums.items
        // this.newSongs = data
      // })
  }
 
}
