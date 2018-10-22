    import * as angular from "angular";
    import { IRootScopeService, IHttpBackendService } from "angular";
    import "angular-mocks";
    import { UserService } from "./user.services";
    
    describe("Service", () => {
    
        let UserService: UserService;
        let $rootScope: IRootScopeService;
        let $httpBackend: IHttpBackendService;

    
        beforeEach(angular.mock.module("app"));
    
        beforeEach(inject((_service_, _$rootScope_, _$httpBackend_) => {
            UserService = _service_;
            $rootScope = _$rootScope_;
            $httpBackend = _$httpBackend_;
        }));
    
        it("should get message", () => {
            $httpBackend.whenGET("data.json").respond(200);                
            $rootScope.$digest();        
        });
    });
    