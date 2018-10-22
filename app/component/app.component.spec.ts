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

        it('numberOfPages method should be called', () => {
            const ctrl = createController();
            spyOn(ctrl, 'numberOfPages').and.callThrough();
            ctrl.numberOfPages();
            $rootScope.$apply();
            expect(ctrl.numberOfPages).toHaveBeenCalled();
        });

        it('getNumber method should be triggered', () => {
            const ctrl = createController();
            spyOn(ctrl, 'getNumber').and.callThrough();
            ctrl.numberOfPages();
            $rootScope.$apply();
            expect(ctrl.getNumber).toHaveBeenCalled();
        });

        it('to_trusted method should be triggered', () => {
            const ctrl = createController();
            spyOn(ctrl, 'to_trusted').and.callThrough();
            ctrl.to_trusted('<span>html bind</span>');
            $rootScope.$apply();
            expect(ctrl.to_trusted).toEqual('html bind');;
        });
    });
});

