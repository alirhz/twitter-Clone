import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class tweetsService {
  private tweets$ = new BehaviorSubject<any>([]);

  get getTweets(): Observable<any> {
    this.tweets$.next([
      {
        text: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
        image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      },
      {
        text: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
        image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      },
      {
        text: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
        image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      },
      {
        text: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
        image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      },
      {
        text: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
        image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      },
      {
        text: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
        image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      },
      {
        text: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
        image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      },
      {
        text: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
        image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      },
    ]);
    return this.tweets$.asObservable();
  }

  postTwitter(model: object) {
      let formData = [];
      console.log(this.tweets$.value);
      formData = this.tweets$.value;
      formData.unshift(model)
     this.tweets$.next(formData);
  }
}
