import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// search module
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AppComponent } from './app.component';
import { TweetsComponent } from './component/tweets/tweets.component';
import { ParseurlPipe } from './pipe/parseurl.pipe';


@NgModule({
  declarations: [
    AppComponent,
    TweetsComponent,
    ParseurlPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
