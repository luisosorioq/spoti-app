import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {

  login = false;
  title: string = this.dato.title;
  constructor(private dato:AppComponent,
              private spotify: SpotifyService ) {}

  getToken(){
    // this.spotify.getToken();
  }

}
