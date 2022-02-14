import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html'
})
export class FavoriteComponent implements OnInit {

  playlist: any[] = [];
  favorite: any[] = [];
  loadFav:boolean = false;
  loadPl:boolean = false;

  constructor( private spotify: SpotifyService ) {}

    ngOnInit(): void {
      this.spotify.getSaved()
        .subscribe( (data: any) => {
          console.log('Mis favotiros EPAAAAAA', data);
          this.favorite = data;
        });
      }
    }
