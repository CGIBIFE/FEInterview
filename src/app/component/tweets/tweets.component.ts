import { Component, OnInit } from '@angular/core';
import { TweetsService } from '../../service/tweets.service';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent implements OnInit {
  tweets: any;
  currentPage = 0;
  pageSize = 10;
  searchText = '';
  selectedIndex = 0;

  constructor(private tweetsService: TweetsService) {
    this.tweets = this.tweetsService.getAllTweets();
  }

  ngOnInit() {
  }

}
