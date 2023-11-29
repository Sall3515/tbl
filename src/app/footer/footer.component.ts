import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SubscribeService } from '../services/subscribe.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  email!: '';

  onSubscribe() {
    console.log(this.email);
  }
}
