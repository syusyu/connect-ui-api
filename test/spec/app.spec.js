
describe("Test case", function() {
    it("1", function() {
        expect(getMethod('GET')).toEqual('GET');
    });
    it("2", function() {
        expect(getMethod('?method=GET')).toEqual('GET');
    });
    it("3", function() {
        expect(getMethod('/items?method=GET&foo=bar')).toEqual('GET');
    });
    it("4", function() {
        expect(getMethod('/items?foo=bar&method=POST')).toEqual('POST');
    });
    it("5", function() {
        expect(getMethod('?method=FOO')).toEqual('GET');
    });
});