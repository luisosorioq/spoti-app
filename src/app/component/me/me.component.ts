import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.css']
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
        // console.log('Datos ME', dataMe);
        this.user = dataMe;
        this.load = true;
    });
  }
}
