import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenProvider {
    constructor( ) {}

    getToken() {
        if ( localStorage.getItem('spotify_auth_state') !== '' ) {
            return localStorage.getItem('SpotiLuigiToken');
        } else {
            return '';
        }
    }

}