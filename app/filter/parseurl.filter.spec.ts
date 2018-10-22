describe("ParseUrl", () => {

    var $filter: ng.IFilterService;

    beforeEach(angular.mock.module("app"));

    beforeEach(() => {
        inject(function (_$filter_) {
            $filter = _$filter_;
        });
    });

    it("should initialize correctly", () => {
        var parseUrl = $filter('parseUrl');
        expect(parseUrl).toBeDefined();
    });

    it("should add up prices", () => {
        var sumFilter = $filter('parseUrl');
        expect(sumFilter).not.toBeNull();
    });
})