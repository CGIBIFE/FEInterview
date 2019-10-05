import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'
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
  tweetType = '';
  selectedIndex = 0;
  pageNumbers: any;

  constructor(private tweetsService: TweetsService, private sanitized: DomSanitizer) {
    this.tweets = this.tweetsService.getAllTweets();
    this.pageNumbers = this.getCurrentPageNumber();
  }

  ngOnInit() {
    this.tweetType ='All tweets';
  }

  getFilteredData() {
    // return this.filter('filter')(this.tweets, this.searchText);
    return this.tweets;
  }

  // getTotalNumberOfPages() {
  //     return Math.ceil(this.getFilteredData().length / this.pageSize);
  // }

  getCurrentPageNumber() {
      return new Array(Math.ceil(this.getFilteredData().length / this.pageSize));
  }

  allowTrusted(text) {
    return this.sanitized.bypassSecurityTrustHtml(text);
  }
  
  toggleClass(index) {
      this.selectedIndex = index;
  };
}
