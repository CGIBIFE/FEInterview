import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'parseurl'
})
export class ParseurlPipe implements PipeTransform {

  transform(text: any): any {
    const urls = /(\b(https?|http):\/\/[A-Z0-9+&@#\/%?=~_|!:,.;-]*[-A-Z0-9+&@#\/%=~_|])/gim;
    if (text.match( urls )) {
      let exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi;
      text = text.replace(exp, '<a class="action_link" href=\"$1\" target=\"_blank\">$1</a>');
      exp = /(^|\s)#(\w+)/g;
      text = text.replace(exp, '$1<a class="action_link" href="https://twitter.com/hashtag/$2?src=hash" target="_blank">#$2</a>');
      exp = /(^|\s)@(\w+)/g;
      text = text.replace(exp, '$1<a class="action_link" href="http://www.twitter.com/$2" target="_blank">@$2</a>');
    }
    return text;
  }

}


