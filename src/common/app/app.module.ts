import * as angular from 'angular';
import {AppService} from './app.service';

export const AppModule = angular
                         .module('twitterfeed.app', [])
                         .service('twitterfeed.app', AppService).name;

