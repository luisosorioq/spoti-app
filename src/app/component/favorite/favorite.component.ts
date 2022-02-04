import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html'
})
export class FavoriteComponent {

  playlist: any[] = [];
  favorite: any[] = [];
  loadFav:boolean = false;
  loadPl:boolean = false;

  constructor( private spotify: SpotifyService ) {
    this.spotify.getSaved()
      .subscribe( (data: any) => {
        // console.log('Mis favotiros', data);
        this.favorite = data;
        this.loadFav = true;
      });

    this.spotify.getPlaylists()
      .subscribe( (dataPl: any) => {
        // console.log(dataPl);
        this.playlist = dataPl;
        this.loadPl = true;
      });
  }
}
