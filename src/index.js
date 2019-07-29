//product: 
//Worker
//register

//NAME.push
//hire
//newProduct
//checkout
var shop = {
    products: [],
    employees:[],
    cart: [],
    balance: 100,
    newProduct: function(product){
        this.products.push(product)
    },
    newHire: function(product){
        this.products.push(product)
    },
    addToCart: function(product){
        this.products.push(product)
    },
    checkout: function(){
        var total = 0
        for(i=0;i<this.cart.length;i++)
        {
            var productId = this.cart[i]
            var productSearch = this.product.find(function(o){
                return o.id ===productId
            })        
        }
    },
}
shop.newProduct({
    id: 12321,
    name: 'apple',
    price: 5,
    description: 'healthy food'
})
shop.newProduct({
    id: 12322,
    name: 'pear',
    price: 3,
    description: 'healthy food'
})
shop.newProduct({
    id: 12323,
    name: 'watermellon',
    price: 10,
    description: 'healthy food'
})
shop.newProduct({
    id: 12324,
    name: 'orange',
    price: 4,
    description: 'healthy food'
})
shop.newProduct({
    id: 12325,
    name: 'banana',
    price: 6,
    description: 'healthy food'
})