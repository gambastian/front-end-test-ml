const assert = require("assert");
const proxyquire = require("proxyquire");

const {mockGetItemsResponse, mockItemResponse, ItemsSvcMock} = require("../util/mocks");
const testServer = require("../util/testServer");

describe("routes - api - items", function() {
    const route = proxyquire("../routes/api/itemsRoute", {
        "../../services/itemsSvc": ItemsSvcMock
    });

    const request = testServer(route);

    describe("GET /api/items", function() {
        it("should respond with status 200", function(done) {
            request.get("/api/items").expect(200, done);
        });

        it("should respond with not error", function(done) {
            request.get("/api/items").end((err, res) => {
                assert.strictEqual(err, null);
                done();
            });
        });

        it("should respond with the list of items", function(done) {
            request.get("/api/items").end((err, res) => {
                assert.deepStrictEqual(res.body, mockGetItemsResponse);
                done();
            });
        });
    })

    describe("GET /api/items/:id", function() {
        it("should respond with status 200", function(done) {
            request.get("/api/items/id").expect(200, done);
        });

        it("should respond with not error", function(done) {
            request.get("/api/items/id").end((err, res) => {
                assert.strictEqual(err, null);
                done();
            });
        });

        it("should respond with item", function(done) {
            request.get("/api/items/id").end((err, res) => {
                assert.deepStrictEqual(res.body, mockItemResponse);
                done();
            });
        });
    });
});
