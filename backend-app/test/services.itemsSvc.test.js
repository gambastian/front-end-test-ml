const assert = require("assert");
const ItemsSvc = require("../services/itemsSvc");

const subject = new ItemsSvc();

describe("services - items", function () {

    describe("getItems", function () {

        it("should respond with the list of items", function (done) {
            subject.getItems({q: "cuchillo"}).then(function (res) {
                if (res == null) {
                    assert.fail()
                }
                done();
            }).then(() => {
                assert.fail();
                done();
            })
        });
    });

    describe("GetItem", function () {
        it("should respond with the an of items", function (done) {
            subject.getItem("1").then(function (res) {
                if (res == null) {
                    assert.fail()
                }
                done();
            }).then(() => {
                assert.fail();
                done();
            });

        });
    });
});
