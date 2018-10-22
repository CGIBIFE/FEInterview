
export class ParseUrl { 
    public static Factory() {
        let urls = /(\b(https?|http):\/\/[A-Z0-9+&@#\/%?=~_|!:,.;-]*[-A-Z0-9+&@#\/%=~_|])/gim;
        let handler = /(@\w+)|./gim;
        /*istanbul ignore next*/
        return (text: any) => {
            if(text.match(urls)) {
                text = text.replace(urls, "<a href=\"$1\" target=\"_blank\">$1</a>");
            }            
            return text;
        }
    }
}