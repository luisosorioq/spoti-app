import { Routes } from '@angular/router'
import { ArtistComponent } from './component/artist/artist.component';
import { FavoriteComponent } from './component/favorite/favorite.component';
import { HomeComponent } from './component/home/home.component'
import { IndexComponent } from './component/index/index.component';
import { MeComponent } from './component/me/me.component';
import { SearchComponent } from './component/search/search.component'
// import { GuardGuard } from './services/guard.guard';

export const ROUTES: Routes = [
    { path: 'index', component: IndexComponent },
    { path: 'home', component: HomeComponent },
    { path: 'favorite', component: FavoriteComponent },
    { path: 'search', component: SearchComponent },
    { path: 'me', component: MeComponent },
    { path: 'artist/:id', component: ArtistComponent },
    { path: '', pathMatch: 'full', redirectTo: 'index' },
    { path: '**', pathMatch: 'full', redirectTo: 'index' },
];
