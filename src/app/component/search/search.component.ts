import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {

  artists: any[] = [];
  loading: boolean;

  constructor( private spotify: SpotifyService ) { 
    this.loading = true;
  }

  searchArtist(searchText: string){
    this.spotify.getArtists(searchText)
      .subscribe( data => this.artists = data );
      this.loading = false;
  }
}
