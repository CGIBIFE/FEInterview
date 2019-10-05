import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweetsComponent } from './tweets.component';
import { TweetsService } from '../../service/tweets.service';

describe('TweetsComponent', () => {
  let component: TweetsComponent;
  let fixture: ComponentFixture<TweetsComponent>;
  let tweetsService : TweetsService

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetsComponent);
    component = fixture.componentInstance;
    const tweetsService = fixture.debugElement.injector.get(TweetsService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should get data from service", () => {
    const tweets = [{ text: 'Hello I am here' }];
    spyOn(tweetsService, 'getAllTweets').and.returnValue(tweets);
    fixture.detectChanges();
    const compile = fixture.debugElement.nativeElement;
    const tweetsText = compile.querySelector('p');
    expect(tweetsText.textContent).toBe('Hello I am here');
});
});
