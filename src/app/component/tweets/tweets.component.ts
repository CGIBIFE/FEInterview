import { Component, OnInit } from '@angular/core';
import { TweetsService } from '../../service/tweets.service';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit {
  tweets: any;

  constructor(private tweetsService: TweetsService) {
    this.tweets = this.tweetsService.getAllTweets();
  }

  ngOnInit() {
  }

}
