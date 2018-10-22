const jsonData = require('./data.json');

import * as angular from "angular";

export class UserService {
    static NAME: string = 'userService';
    constructor(private $http: any) {
    }

    public getAll(): any {
        return jsonData;
    }
}