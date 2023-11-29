import { Component } from '@angular/core';
import { Post } from '../types/post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  cards: Post[] = [
    {
      image:
        'https://static.wixstatic.com/media/ad420a_1f0de414af0e48808a067779e92736ed~mv2.jpg/v1/fill/w_568,h_851,fp_0.50_0.50,q_90,enc_auto/ad420a_1f0de414af0e48808a067779e92736ed~mv2.jpg',
      title: 'How reading changes your perspective',
      description:
        'Create a blog post subtitle that summarizes your post in a few short, punchy sentences and enticesyour audience to continue reading.',
      id: 1,
    },
    {
      image:
        'https://static.wixstatic.com/media/84770f_d9b23fce65354d53a8866f9b8da0dcf1~mv2.jpg/v1/fill/w_454,h_666,fp_0.50_0.50,q_90,enc_auto/84770f_d9b23fce65354d53a8866f9b8da0dcf1~mv2.jpg',
      title: 'The art of writing',
      description: `Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....`,
      id: 2,
    },
    {
      image:
        'https://static.wixstatic.com/media/84770f_453c55f05b8c451fa0455d6c792666bd~mv2.jpg/v1/fill/w_454,h_569,fp_0.50_0.50,q_90,enc_auto/84770f_453c55f05b8c451fa0455d6c792666bd~mv2.jpg',
      title: 'You want your child to read these books',
      description:
        'Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.',
      id: 3,
    },
    {
      image:
        'https://static.wixstatic.com/media/ad420a_b81dce182a684673a08d4c1a529845b2~mv2.jpg/v1/fill/w_960,h_1440,al_c,q_90/ad420a_b81dce182a684673a08d4c1a529845b2~mv2.webp',
      title: '“The Traitor’s Daughter”',
      description:
        ' Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....',
      id: 4,
    },
    {
      image:
        'https://static.wixstatic.com/media/84770f_c32940b6202c4d96a182a0d57868e04e~mv2.jpg/v1/fill/w_454,h_681,fp_0.50_0.50,q_90,enc_auto/84770f_c32940b6202c4d96a182a0d57868e04e~mv2.jpg',
      title: '8 must-read books',
      description:
        'Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.',
      id: 5,
    },
    {
      image:
        'https://static.wixstatic.com/media/84770f_dd1192028d8842c789ebfa9bdaa66937~mv2.jpg/v1/fill/w_740,h_490,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_dd1192028d8842c789ebfa9bdaa66937~mv2.jpg',
      title: 'My new digital reading habits',
      description:
        ' Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading.',
      id: 6,
    },
  ];
}
