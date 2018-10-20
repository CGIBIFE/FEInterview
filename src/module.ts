import * as angular from 'angular';

import MainController from './main.controller';
import {ComponentsModule} from './components/components.module';
import {CommonModule} from './common/common.module';

angular.module('app.twitterfeed', [ComponentsModule, CommonModule])
       .controller('twitterfeed.mainController', MainController as angular.IControllerConstructor)