import { TestBed } from '@angular/core/testing';

import { TweetsService } from './tweets.service';

describe('TweetsService', () => {
  let service: TweetsService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TweetsService,
      ]
    });

    service = TestBed.get(TweetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all tweets', () => {
    spyOn(service, 'getAllTweets').and.callThrough();
    service.getAllTweets();
    expect(service.getAllTweets).toHaveBeenCalled();
});
});
