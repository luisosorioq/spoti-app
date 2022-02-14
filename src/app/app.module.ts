import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { SearchComponent } from './component/search/search.component';
import { ArtistComponent } from './component/artist/artist.component';
import { NavbarComponent } from './component/shared/navbar/navbar.component';
import { CardsComponent } from './component/cards/cards.component';
import { LoadingComponent } from './component/shared/loading/loading.component';
import { IndexComponent } from './component/index/index.component';
import { FavoriteComponent } from './component/favorite/favorite.component';
import { FooterComponent } from './component/footer/footer.component';

// Importar las rutas para tener mas orden
import { ROUTES } from './app.routes';

// Importar el PIPE creado
import { NoimagePipe } from './pipes/noimage.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { MeComponent } from './component/me/me.component';
import { TokenProvider } from './services/token.service';

export function tokenProviderFactory( provider: TokenProvider ) {
  return () => provider.getToken();
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    ArtistComponent,
    NavbarComponent,
    NoimagePipe,
    DomseguroPipe,
    CardsComponent,
    LoadingComponent,
    IndexComponent,
    FavoriteComponent,
    MeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot( ROUTES ),
  ],
  // RouterModule.forRoot( ROUTES ), { useHash: true } ),
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: tokenProviderFactory,
      deps: [TokenProvider ],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
