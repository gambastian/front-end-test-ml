const constants = require("../util/appConstants");

function SearchResponse(categories, items) {
    this.author = constants.AUTHOR;
    this.categories = categories;
    this.items = items;
}

module.exports = SearchResponse;
