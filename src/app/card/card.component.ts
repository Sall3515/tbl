import { Component, Input } from '@angular/core';
import { Post } from '../pages/types/post';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() card!: Post;

  constructor(private router: Router) {}
  navigateToOpenedArticle() {
    this.router.navigate(['articles']);
  }
}
