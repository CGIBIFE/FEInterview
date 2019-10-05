import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'parseurl'
})
export class ParseurlPipe implements PipeTransform {

  transform(text: any): any {
    const urls = /(\b(https?|http):\/\/[A-Z0-9+&@#\/%?=~_|!:,.;-]*[-A-Z0-9+&@#\/%=~_|])/gim;
    if(text.match(urls)) {
      text = text.replace(urls, "<a href=\"$1\" target=\"_blank\">$1</a>");
    }            
    return text;
  }

}
