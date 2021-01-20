const mockGetItemsResponse = {
    author: {
        "name": "Sebastian",
        "lastName": "Gamba"
    },
    categories: [
        "Computación"
    ],
    items: [
        {
            id: "MLA864004074",
            title: "Procesador Gamer Amd Ryzen 3 3200g Yd3200c5fhbox De 4 Núcleos Y 3.6ghz De Frecuencia Con Gráfica Integrada",
            price: {
                currency: "ARS",
                amount: 14706.11,
                decimals: 2
            },
            picture: "http://http2.mlstatic.com/D_765679-MLA40219168655_122019-I.jpg",
            condition: "new",
            free_shipping: true
        }]
};

const mockItemResponse = {
    author: {
        name: "Sebastian",
        lastName: "Gamba"
    },
    item: {
        id: "MLA832271671",
        title: "Cuchillo Artesanal De Campo Disco De Arado Acero Al Carbono",
        price: {
            currency: "ARS",
            amount: 1600,
            decimals: 0
        },
        picture: "http://http2.mlstatic.com/D_894355-MLA43571190774_092020-I.jpg",
        condition: "new",
        free_shipping: true,
        sold_quantity: 175,
        description: "mockDesc"
    }
};

class ItemsSvcMock {
    constructor() {
    }

    async getItems(tags) {
        return mockGetItemsResponse
    }

    async getItem(itemId) {
        return mockItemResponse
    }

}

module.exports = {
    mockGetItemsResponse,
    mockItemResponse,
    ItemsSvcMock
};