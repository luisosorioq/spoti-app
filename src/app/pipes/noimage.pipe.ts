import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(myimage: any[]): string {
    if( !myimage ) {
      return 'assets/img/no-image.png';
    }
    if ( myimage.length > 0 ) {
      return myimage[0].url
    } else {
      return 'assets/img/no-image.png';
    }
  }

}
