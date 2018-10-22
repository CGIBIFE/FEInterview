describe("CustomFilter", () => {
    
            var $filter : ng.IFilterService;
    
            beforeEach(angular.mock.module("app"));
    
            beforeEach(() => {
                inject(function (_$filter_) {
                    $filter = _$filter_;
                });
            });
    
            it("should initialize correctly", () => {
                var startFrom = $filter('startFrom');
                expect(startFrom).toBeDefined();
            });
})
