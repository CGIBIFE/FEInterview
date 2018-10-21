import { module, element, bootstrap, ILogService } from 'angular';
import '@uirouter/angularjs';
import { UserComponent } from '../app/app.component';
import { UserService } from '../app/services/user.services';
import { CustomFilter } from '../app/filter/user.filter';

import './app.less';

export let app = module('app', [
    'ui.router'
])
    .config(['$stateProvider', '$urlRouterProvider', ($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) => {
        $stateProvider.state({
            name: 'app',
            url: '/app',
            component: UserComponent.NAME
        });

        $urlRouterProvider.otherwise('/app');
    }])
    .component(UserComponent.NAME, new UserComponent())
    .service(UserService.NAME, UserService)
    .filter('startFrom', [CustomFilter.Factory]);
element(document).ready(() => {
    bootstrap(document, ['app']);
});
