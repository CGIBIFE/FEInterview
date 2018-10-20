import * as angular from 'angular';
import {TwitterFeedModule} from './twitterfeed/twitterfeed.module';

export const ComponentsModule = angular
                                .module('twitterfeed.components', [TwitterFeedModule]).name;