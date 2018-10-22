    import * as angular from "angular";
    import 'angular-mocks';
    import { UserService } from "./user.services";
    
    describe("App Service", () => {
    
        let UserService = {
            getAll() {

            }
        };
        let $http: ng.IHttpBackendService;
        const httpMock = {
            get() {
                return {
                    then() {
                        // ignore this
                    }
                };
            }
        };
    
        beforeEach(() => {
            angular.mock.module('app', ($provide) => {
                $provide.value('$http', httpMock);
            });
    
            inject(($injector) => {
                $http = $injector.get('$http');
            });
        });
    
        it("should get message", () => {
            spyOn(UserService, 'getAll').and.callThrough();
            UserService.getAll();
            expect(UserService.getAll).toHaveBeenCalled();
           
        });
    });
