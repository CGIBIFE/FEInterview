describe("HandlerFilter", () => {

    var $filter: ng.IFilterService;

    beforeEach(angular.mock.module("app"));

    beforeEach(() => {
        inject(function (_$filter_) {
            $filter = _$filter_;
        });
    });

    it("should initialize correctly", () => {
        var handlerFilter = $filter('parseUrl');
        expect(handlerFilter).toBeDefined();
    });

    it("should add up prices", () => {
        var textFilter = $filter('handlerFilter');
        expect(textFilter).not.toBeNull();
    });
})