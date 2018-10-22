export class HandlerFilter {
    public static Factory() {
        let handler = /(@\w+)|./gim;
        /*istanbul ignore next*/
        return (text: any) => {
            if(text.match(handler)) {
                text = text.replace(handler, "<a href=\"#\" target=\"_blank\">$1</a>");
            }            
            return text;
        }
    }
}