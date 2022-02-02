import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html'
})
export class CardsComponent {

  // artistCount: number = 0;

  @Input() items: any[] = [];

  constructor( private router: Router) { }

  showArtist( item: any) {
    console.log(item);
    
    let artistId;
    if ( item.type === 'artist' ) {
      artistId = item.id;
    } else {
      artistId = item.artists.id;
    }
    // console.log(artistId);
    // this.artistCount = item.length;
    this.router.navigate(['/artist', artistId]);
  }

}
