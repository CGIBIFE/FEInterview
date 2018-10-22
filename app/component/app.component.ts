import { UserService } from '../service/user.services';

class UserController implements ng.IController {
    static $inject = ['userService', '$filter', '$sce'];
    users: any;
    currentPage = 0;
    pageSize = 10;
    searchText = '';

    constructor(public user: UserService, public filter: any, public $sce: any) {
        this.users = this.user.getAll();
        this.pageSize = this.pageSize;
    }

    getData() {
        return this.filter('filter')(this.users, this.searchText);
    }

    numberOfPages() {
        return Math.ceil(this.getData().length / this.pageSize);
    }

    getNumber() {
        return new Array(Math.ceil(this.getData().length / this.pageSize));
    }

    to_trusted(text) {
        return this.$sce.trustAsHtml(text);
    }
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
