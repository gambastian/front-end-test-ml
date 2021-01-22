const fetch = require("node-fetch");
const Item = require("../model/item")
const Price = require("../model/price")
const SearchResponse = require("../model/searchResponse")
const ItemResponse = require("../model/itemResponse")
const constants = require("../util/appConstants");

class ItemsSvc {
    constructor() {
    }

    async getItems(tags) {

        const url = new URL(constants.BACKEND_HOST + constants.GET_ITEMS_RESOURCE);
        const query = new URLSearchParams(tags);

        const response = await fetch(url + query);
        const data = await response.json();
        return buildGetItemsResults(data)
    }

    async getItem(itemId) {

        let url = new URL(constants.BACKEND_HOST + constants.GET_ITEM_RESOURCE + itemId);

        let response = await fetch(url);

        const item = await response.json();
        if (response.status !== 200) {
            return item
        }

        url = new URL(constants.BACKEND_HOST + constants.GET_ITEM_RESOURCE + itemId + constants.GET_ITEM_DESCRIPTION_RESOURCE);
        response = await fetch(url);
        const description = await response.json();

        url = new URL(constants.BACKEND_HOST + constants.GET_CATEGORY_NAME_RESOURCE + item.category_id);
        response = await fetch(url);
        const category = await response.json();

        return buildItemsResult(item, description, category.name)
    }

}

function buildItemsResult(item, description, categoryName) {

    const decimalsSplit = String(item.price).split('.');
    let mappedItem = new Item(item.id,
        item.title,
        new Price(item.currency_id, item.price, decimalsSplit.length > 1 ? decimalsSplit[1].length : 0),
        item.thumbnail,
        item.condition,
        item.shipping.free_shipping,
        item.sold_quantity);

    mappedItem.setDescription(description.plain_text);
    mappedItem.setCategory(categoryName);

    return new ItemResponse(mappedItem);
}

function buildGetItemsResults(response) {

    const categories = obtainCategoriesFromResponse(response);
    const items = obtainItemsFromResponse(response)
    return new SearchResponse(categories, items);
}

function obtainCategoriesFromResponse(response) {
    let filters = response.available_filters;
    const categories = filters.filter(filter => filter.id === "category");

    if (categories.length !== 0) {
        return categories[0].values.sort((a, b) => (a.results > b.results) ? -1 : ((b.results > a.results) ? 1 : 0)).map(cat => cat.name)
    }
    return [];
}

function obtainItemsFromResponse(response) {

    const responseResults = response.results;
    if (response.length !== 0) {
        return responseResults.slice(0,4).map((item) => {
            const decimalsSplit = String(item.price).split('.');
            return new Item(item.id,
                item.title,
                new Price(item.currency_id, item.price, decimalsSplit.length > 1 ? decimalsSplit[1].length : 0),
                item.thumbnail,
                item.condition,
                item.shipping.free_shipping,
                null)
        })
    }
    return [];
}

module.exports = ItemsSvc;