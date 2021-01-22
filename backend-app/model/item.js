function Item(id, title, price, picture, condition, free_shipping, sold_quantity) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.picture = picture;
    this.condition = condition;
    this.free_shipping = free_shipping;
    this.sold_quantity = sold_quantity !== null ? sold_quantity : undefined;
}

Item.prototype.setDescription = function(description) {
    this.description = description
};

Item.prototype.setCategory = function(category) {
    this.category = [category]
};

module.exports = Item;
