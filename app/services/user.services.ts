const json = require('./data.json');

export class UserService {
  static $inject = ['$q', '$http', '$sce'];
  static NAME: string = 'userService';
  constructor(protected $q: ng.IQService, protected $http: ng.IHttpService, protected $sce: any) { }
  public getAll(): angular.IHttpPromise<any> {
    // return this.$http.get(this.$sce.trustAsUrl(json));
    return json;

  }
}
