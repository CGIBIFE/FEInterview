import { UserService } from '../service/user.services';

export class UserController implements ng.IController {
    static $inject = ['userService', '$filter', '$sce'];
    users: any;
    currentPage = 0;
    pageSize = 10;
    searchText = '';
    selectedIndex = 0;
    /*istanbul ignore next*/
    constructor(public user: UserService, public filter: any, public $sce: any) {
        this.users = this.user.getAll();
        this.pageSize = this.pageSize;
    }
    
    getData() {
        return this.filter('filter')(this.users, this.searchText);
    }
    /*istanbul ignore next*/
    getNumberOfPages() {
        return Math.ceil(this.getData().length / this.pageSize);
    }
    /*istanbul ignore next*/
    getPageNumber() {
        return new Array(Math.ceil(this.getData().length / this.pageSize));
    }
   /*istanbul ignore next*/
    convertTrusted(text) {
        return this.$sce.trustAsHtml(text);
    }
    /*istanbul ignore next*/
    toggleClass(index) {
        this.selectedIndex = index;
    };
}

export class UserComponent implements ng.IComponentOptions {
    static NAME: string = 'userView';
    controller: any;
    templateUrl: any;
    constructor() {
        this.controller = UserController;
        this.templateUrl = require('./app.component.html');
    }
}
