import * as angular from 'angular';
import {TwitterFeedComponent} from './twitterfeed.components';

export const TwitterFeedModule = angular
                                 .module('twitterfeed.twitterfeed', [])
                                 .component('twitterfeed', TwitterFeedComponent).name;