import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ArticlesComponent } from './pages/articles/articles.component';
import { HomeComponent } from './pages/home/home.component';
import { PostComponent } from './pages/post/post.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';

export const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'post', component: PostComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }, //'' this route configuration matches the base URL of my application.
];
