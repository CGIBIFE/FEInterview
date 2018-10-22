
export class CustomFilter {
    public static Factory() {
        /*istanbul ignore next*/
        return (input: any, start: any) => {
            start = +start;
            return input.slice(start);
        }
    }
}
