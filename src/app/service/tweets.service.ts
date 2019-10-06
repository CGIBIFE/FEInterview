const tweetsData = require('./data.json');
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TweetsService {

  constructor() { }
  /*
  This method will get all teh data from the json.
  */
  public getAllTweets() {
    return tweetsData;
  }
}
