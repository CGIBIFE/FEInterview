import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { async, ComponentFixture, TestBed, } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipe  } from 'ng2-search-filter';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { TweetsComponent } from './tweets.component';
import { TweetsService } from '../../service/tweets.service';
import { ParseurlPipe } from '../../pipe/parseurl.pipe';

describe('TweetsComponent', () => {
  let tweetsComponent: TweetsComponent;
  let fixture: ComponentFixture<TweetsComponent>;
  let tweetsService: TweetsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, Ng2SearchPipeModule ],
      declarations: [ TweetsComponent, ParseurlPipe],
      providers: [Ng2SearchPipe, ParseurlPipe],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweetsComponent);
    tweetsComponent = fixture.componentInstance;
    tweetsService = fixture.debugElement.injector.get(TweetsService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(tweetsComponent).toBeTruthy();
  });

  it('should get all data from service', () => {
    const tweets = [{ text: ' Product Haunt 👻 (@ProductHunt) ' }];
    spyOn(tweetsService, 'getAllTweets').and.returnValue(tweets);
    fixture.detectChanges();
    const compile = fixture.debugElement.nativeElement;
    const tweetsText = compile.querySelector('p');
    expect(tweetsText.textContent).toBe(' Product Haunt 👻 (@ProductHunt) ');
  });

  it('test ngOnInit method', () => {
    const tweetComponent = TestBed.createComponent(TweetsComponent).componentInstance;
    expect(tweetComponent.tweetType).toBe('');
    tweetComponent.ngOnInit();
    fixture.detectChanges();
    expect(tweetComponent.tweetType).toBe('All tweets');
  });

  it('test getNumberOfPages method', () => {
    spyOn(tweetsComponent, 'getCurrentPageNumbers').and.callThrough();
    fixture.detectChanges();
    tweetsComponent.getCurrentPageNumbers();
    expect(tweetsComponent.getCurrentPageNumbers).toHaveBeenCalled();
  });

  it('test getFilteredData method', () => {
      spyOn(tweetsComponent, 'getFilteredData').and.callThrough();
      fixture.detectChanges();
      tweetsComponent.getFilteredData();
      expect(tweetsComponent.getFilteredData).toHaveBeenCalled();
  });

  it('test allowTrusted method', () => {
      spyOn(tweetsComponent, 'allowTrusted').and.callThrough();
      fixture.detectChanges();
      tweetsComponent.allowTrusted('Hello i am<hr>Mark');
      expect(tweetsComponent.allowTrusted).toHaveBeenCalled();
  });
});
