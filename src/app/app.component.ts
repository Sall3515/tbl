import { Component } from '@angular/core';
import { Post } from './pages/types/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'TBL-angular-project';
  book = 'a';
}
