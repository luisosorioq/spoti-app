import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html'
})
export class MeComponent {

  user: any = [];
  load:boolean = false;
  constructor( private spotify: SpotifyService) { 
    this.getMe();
  }

  getMe() {
    this.spotify.getMe()
      .subscribe( (dataMe:any) => {
        this.user = dataMe;
        this.load = true;
    });
  }
}
