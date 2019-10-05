import { Component, OnInit, Inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Ng2SearchPipe  } from 'ng2-search-filter';
import { TweetsService } from '../../service/tweets.service';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css'],
  providers: [Ng2SearchPipe]
})
export class TweetsComponent implements OnInit {
  tweets: any;
  currentPage = 0;
  pageSize = 10;
  searchText = '';
  tweetType = '';
  selectedIndex = 0;
  pageNumbers: any;

  constructor(@Inject(TweetsService)private tweetsService: TweetsService, private sanitized: DomSanitizer, private filter: Ng2SearchPipe) {
    this.tweets = this.tweetsService.getAllTweets();
    this.pageNumbers = this.getCurrentPageNumbers();
  }

  ngOnInit() {
    this.tweetType = 'All tweets';
  }

  getFilteredData() {
    return this.filter.transform(this.tweets, this.searchText);
  }

  getCurrentPageNumbers() {
      return new Array(Math.ceil(this.getFilteredData().length / this.pageSize));
  }

  allowTrusted(text) {
    return this.sanitized.bypassSecurityTrustHtml(text);
  }

  toggleClass(index) {
      this.selectedIndex = index;
  }
}
