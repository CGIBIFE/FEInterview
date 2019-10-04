const tweetsData = require('./data.json');
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TweetsService {

  constructor() { }

  public getAllTweets() {
    return tweetsData;
  }
}
