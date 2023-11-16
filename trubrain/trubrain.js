function clProductsConversion(productsData){
    var products = [];
    for(var cli in  productsData){
        var product = productsData[cli];
        var newproduct = {};
        for(prodkey in product){
            switch(prodkey){
            case "item_id":
                newproduct["product_id"] = {"t":"string", "v": product[prodkey]}
                break;
            case "item_name": 
                newproduct["product_name"] = {"t":"string", "v": product[prodkey]}
                break;
            case "price":
                newproduct["product_price"] = {"t":"number", "v": product[prodkey]}
                break;
            case "item_category":
                newproduct["product_category"] = {"t":"string", "v": product[prodkey]}
                break;
            case "quantity":
                newproduct["product_quantity"] = {"t":"string", "v": product[prodkey]}
                break;
            case "image":
                newproduct["product_image"]= {"t":"string", "v": product[prodkey]}
            default:
                newproduct["product_" + prodkey] = {"t":"string", "v": product[prodkey]}
                break;
            }
        }
        products.push(newproduct);
    }
    return products;
};
var cl_added_to_cart = setInterval(function(){
    if(((window.CLabsgbVar || {}).generalProps || {}).uid){
        var ecommerceEvent = window.google_tag_manager["GTM-NQJ97PM"].dataLayer.get("ecommerce");//Dl container code
        if((ecommerceEvent || {}).items){
            var properties = {};
            properties["customProperties"] = {
                "currency": {
                    "t": "string",
                    "v": ecommerceEvent["currency"] || "USD"
                },
                "content_type": {
                    "t": "string",
                    "v": "product_group"
                },
                "value": {
                    "t": "string",
                    "v":  ecommerceEvent["value"]
                }
            }
            properties["productProperties"] = clProductsConversion(ecommerceEvent.items);             
            _cl.trackClick("Added to cart", properties)               
            clearInterval(cl_added_to_cart)    
        }          
    }    
}, 1000);

function clProductsConversion(productsData){
    var products = [];
    for(var cli in  productsData){
        var product = productsData[cli];
        var newproduct = {};
        for(prodkey in product){
            switch(prodkey){
            case "id":
                newproduct["product_id"] = {"t":"string", "v": product[prodkey]}
                break;
            case "name": 
                newproduct["product_name"] = {"t":"string", "v": product[prodkey]}
                break;
            case "price":
                newproduct["product_price"] = {"t":"number", "v": product[prodkey]}
                break;
            case "brand":
                newproduct["product_brand"] = {"t":"string", "v": product[prodkey]}
                break;
            case "category":
                newproduct["product_category"] = {"t":"string", "v": product[prodkey]}
                break;
            case "image":
                newproduct["product_image"]= {"t":"string", "v": product[prodkey]}
            default:
                newproduct["product_" + prodkey] = {"t":"string", "v": product[prodkey]}
                break;
            }
        }
        products.push(newproduct);
    }
    return products;
};
function getProductValue(productsData){
    var val = 0;
    for(var cli in  productsData){
        var product = productsData[cli];
        var qty = 1;
        if(product["quantity"]){
            try{
                qty = Number(product["quantity"]);
            }catch(e){}
        }
        var price = Number(product["price"])
        var product_price = qty * price
        val = val + product_price 
    }
    return val
};
(function(){
    if(((window.CLabsgbVar || {}).generalProps || {}).uid){
        var ecommerceEvent = {{DL container code}}.get("ecommerce");
        if((ecommerceEvent.add || {}).products){
            var properties = {}
            var value = getProductValue(ecommerceEvent.add.products)
            properties["customProperties"] = {
                "currency": {
                    "t": "string",
                    "v": ecommerceEvent["currencyCode"] || ecommerceEvent["currency"]
                },
                "content_type": {
                    "t": "string",
                    "v": "product_group"
                },
                "value":  {
                    "t": "number",
                    "v": value || 1
                }
            }
            properties["productProperties"] = clProductsConversion(ecommerceEvent.add.products);
            _cl.trackClick("Added to cart", properties)               
        }   
    }
})()

