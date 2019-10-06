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
  startfrom = 0;
  endAt = this.pageSize - 1;

  constructor(@Inject(TweetsService)private tweetsService: TweetsService, private sanitized: DomSanitizer, private filter: Ng2SearchPipe) {
    this.tweets = this.tweetsService.getAllTweets();
    this.getCurrentPageNumbers();
  }

  ngOnInit() {
    this.tweetType = 'All tweets';
  }

  getFilteredData() {
    return this.filter.transform(this.tweets, this.searchText);
  }

  getCurrentPageNumbers() {
    if (Number(this.pageSize) !== 0) {
      this.pageNumbers = new Array(Math.ceil(this.getFilteredData().length / Number(this.pageSize)));
    }
  }

  allowTrusted(text) {
    return this.sanitized.bypassSecurityTrustHtml(text);
  }

  toggleClass(index) {
      this.selectedIndex = index;
      this.startfrom = (this.selectedIndex) * Number(this.pageSize);
      const end =  this.startfrom + (Number(this.pageSize));
      this.endAt = this.getFilteredData().length > end ? end : this.getFilteredData().length ;
  }
}
