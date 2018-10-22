const jsonData = require('./data.json');

import * as angular from "angular";
export class UserService {
    static NAME: string = 'userService';
    /*istanbul ignore next*/
    constructor(private $http: any) {
    }

    public getAll(): any {
        return jsonData;
    }
}