import * as angular from 'angular';
import {AppService} from './common/app/app.service';

class MainController {
    static $inject = [
        'app',
        'twitterfeed.app',
        '$q'
    ]
    
    private controller: MainController;

    constructor(private app: any, private appService: AppService, private $q: angular.IQService) {
        appService.set(app);
    }
}

export default MainController;