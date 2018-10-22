import { module, element, bootstrap, ILogService } from 'angular';
import '@uirouter/angularjs';
import { UserComponent } from '../app/component/app.component';
import { UserService } from '../app/service/user.services';
import { CustomFilter } from '../app/filter/user.filter';
import { ParseUrl } from '../app/filter/parseurl.filter';
import { HandlerFilter } from '../app/filter/handler.filter';

import './sass/app.less';

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
    .filter('startFrom', [CustomFilter.Factory])
    .filter('parseUrl', [ParseUrl.Factory])
    .filter('handlerFilter', [HandlerFilter.Factory]);
element(document).ready(() => {
    bootstrap(document, ['app']);
});
