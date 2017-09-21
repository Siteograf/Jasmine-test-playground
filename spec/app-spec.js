import sum from "../app";

describe("Sum", function () {
    it("sum a and b", function () {
        expect(sum(2, 3)).toEqual(5);
    });
});