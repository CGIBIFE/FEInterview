import * as angular from 'angular';
import {AppModule} from './app/app.module';

export const CommonModule = angular
                            .module('twitterfeed.common', [AppModule]).name;