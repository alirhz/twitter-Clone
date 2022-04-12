import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { tweetsService } from '../home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  durationInSeconds: number = 50;
  liked: boolean = false;
  tweets: any = [];
  trends: any = [{
    title:"Music",
    name: "Metallica",
    tweets: 6420
  },
  {
    title:"Music",
    name: "Metallica",
    tweets: 6420
  },
  {
    title:"Music",
    name: "Metallica",
    tweets: 6420
  },
  {
    title:"Music",
    name: "Metallica",
    tweets: 6420
  },
  {
    title:"Music",
    name: "Metallica",
    tweets: 6420
  },
]
  tweet = new FormControl('');

  constructor(private TweetsService: tweetsService,private toastr: ToastrService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.TweetsService.getTweets.subscribe((res) => {
      this.tweets = res;
      console.log(this.tweet);
    });
  }

  likePost() {
    this.liked = !this.liked;
    this.toastr.success('You Like this Post', 'success');
  }

  createData() {  
    this.TweetsService.postTwitter({text: this.tweet.value});
    this.toastr.success('Twitt successfully submited', 'success');
  }
}
