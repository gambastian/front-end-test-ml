const constants = require("../util/appConstants");

function ItemResponse(item) {
    this.author = constants.AUTHOR;
    this.item = item;
}

module.exports = ItemResponse;
