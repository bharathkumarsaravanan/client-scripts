  function clProductsConversion(productsData){
    var products = [];
    for(var cli in  productsData){
        var product = productsData[cli];
        var newproduct = {};
        for(prodkey in product){
            switch(prodkey){
                case "item_id":
                    newproduct["product_id"] = product[prodkey];
                    break;
                case "item_name": 
                    newproduct["product_name"] = product[prodkey];
                    break;
                case "price":
                    newproduct["product_price"] = product[prodkey];
                    break;
                case "item_brand":
                    newproduct["product_brand"] = product[prodkey];
                    break;
                case "item_category":
                    newproduct["product_category"] = product[prodkey];
                    break;
                case "quantity":
                    newproduct["product_qty"]= product[prodkey]
                case "item_variant": 
                    newproduct["product_variant"] = product[prodkey]
                default:
                    newproduct["product_" + prodkey] = product[prodkey];
                    break;
            }
        }
        products.push(newproduct);
    }
    return products;
};

var cl_removed_from_cart = setInterval(function(){
    if(((window.CLabsgbVar || {}).generalProps || {}).uid){
        var data = window.google_tag_manager["GTM-KCKSPP2"].dataLayer.get("cart");
        var properties = {}
        if (data && data.remove) {
            properties["customProperties"] = {
                "currency": {
                    "t": "string",
                    "v": data.currencyCode
                },
                "content_type": {
                    "t": "string",
                    "v": "product_group"
                }
            }
            properties["productProperties"] = clProductsConversion(data.remove.product)
            _cl.trackClick("Removed from cart", properties)
        }
        clearInterval(cl_product_viewed) 
    }
}, 1000);

