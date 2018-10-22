    import * as angular from "angular";
    import 'angular-mocks/ngMock';
    import { UserController } from "./app.component";
    
    describe("Twitter feed component", () => {
    
        let controller: UserController;
        let $componentController: angular.IComponentControllerService;
        let $rootScope: angular.IRootScopeService;
        let $q;
        const appService = jasmine.createSpyObj('app', ['getAll']);
        const filter = jasmine.createSpyObj('filter', ['filter']);
        const sce = jasmine.createSpyObj('sce', ['trustAsHtml']);

        const stub = {};
    
        beforeEach(() => {
            angular.mock.module('app', ($provide) => {
            $provide.value('app', appService);
            $provide.value('filter', filter);
            $provide.value('sce', sce);
        });
    
        beforeEach(inject(($controller, $q) => {
           controller = $controller("controller", {
               service: appService
           });
        }));

        function createController(): UserController {
            return $componentController('app', { $scope: $rootScope.$new() }, {}) as UserController;
        }
    
        it("should get data from service", () => {
            appService.getAll.and.returnValue($q.resolve());
            const ctrl = createController();       
            controller.getData();
            $rootScope.$apply();
            expect(ctrl.users).toEqual(stub);
        });

        it('getNumberOfPages method should be called', () => {
            const ctrl = createController();
            spyOn(ctrl, 'getNumberOfPages').and.callThrough();
            ctrl.getNumberOfPages();
            $rootScope.$apply();
            expect(ctrl.getNumberOfPages).toHaveBeenCalled();
        });

        it('getPageNumber method should be triggered', () => {
            const ctrl = createController();
            spyOn(ctrl, 'getPageNumber').and.callThrough();
            ctrl.getPageNumber();
            $rootScope.$apply();
            expect(ctrl.getPageNumber).toHaveBeenCalled();
        });

        it('convertTrusted method should be triggered', () => {
            const ctrl = createController();
            spyOn(ctrl, 'convertTrusted').and.callThrough();
            ctrl.convertTrusted('<span>html bind</span>');
            $rootScope.$apply();
            expect(ctrl.convertTrusted).toEqual('html bind');;
        });
    });
});

