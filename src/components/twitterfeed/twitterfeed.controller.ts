export class TwitterFeedController {
    static $inject = ['$http'];

    public message: string;

    constructor(private $http: ng.IHttpService) {}

    $onInit() {
        
    }
}