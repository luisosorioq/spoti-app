import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenProvider {

  token: string = '';
  user_id: string = '31whl5oxcrfsbsfj5wnatatmx3v4';
  client_id = 'aaf2e7da36984914bf73c7664916cb03';
  client_secret = '7c96e95d7763455897f49dcbcab8e2cc';
  endpoint = `https://spotify-get-token.herokuapp.com/spotify/${ this.client_id }/${ this.client_secret }`;
  parameters: any[] = [];

  constructor(private http: HttpClient) {}

  getToken(){
    return this.http.get(this.endpoint)
      .toPromise()
      .then((response: any) => {
        // console.log('Token en el provider', response);
        // this.parameters = response.parameters;
        this.token = response.access_token;
      }
    );
  }

}