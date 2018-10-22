
export class CustomFilter { 
    static NAME: string = 'userFilter';
    public static Factory() {
        /*istanbul ignore next*/
        return (input: any, start: any) => {
            start = +start;
            return input.slice(start);
        }
    }
}
