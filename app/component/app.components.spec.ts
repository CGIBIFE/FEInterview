    import * as angular from "angular";
    import "angular-mocks";
    //import { UserController } from "./app.component";
    
    describe("Controller", () => {
    
       // let controller: UserController;
        let mockService: any = {
            getAll: jasmine.createSpy("getAll")
        };
    
        beforeEach(angular.mock.module("app"));
    
        beforeEach(inject(($controller, $q) => {
           // controller = $controller("controller", {
               // service: mockService
            //});
        }));
    
        it("should get message from service", () => {
    
            //UserController.getNumber();
    
            //expect(mockService.getNumber).toHaveBeenCalled();
        });
    });
    