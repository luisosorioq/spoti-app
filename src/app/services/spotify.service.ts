import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { TokenProvider } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  token: string = '';
  user_id = '';
  constructor(private http:HttpClient, private access_token: TokenProvider) {
    this.token = "" + this.access_token.getToken();
    if ( localStorage.getItem('SpotiLuigiToken') !== '' ) {
      this.token = "" + localStorage.getItem('SpotiLuigiToken');
    }
  }

  getQuery( query: string, scope?: string) {
    const url = `https://api.spotify.com/v1/${ query }`;
    const headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${ this.token }`
    });
    return this.http.get(url, { headers } );
  }

  getMe() {
    return this.getQuery(`me`);
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases')
      .pipe( map( (data:any) => {
        return data.albums.items;
      }));
  }

  getArtists(searchText: string) {
    return this.getQuery(`search?q=${ searchText }&type=track,artist&limit=15`)
      .pipe( map( (data:any) => {
        return data['artists'].items;
      }));
  }

  getPlaylists() {
    return this.getQuery(`users/${this.user_id}/playlists?offset=0&limit=20`)
      .pipe( map( (data:any) => {
        return data['items'];
      }));
  }

  getArtist(id: string) {
    return this.getQuery(`artists/${ id }`);
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${ id }/top-tracks?market=US`)
      .pipe( map( (dataTracks: any) => dataTracks['tracks'] ));
  }

  getSaved() {
    return this.getQuery(`me/tracks`)
      .pipe( map( (dataTracks: any) => dataTracks['items'] ));
  }
}
