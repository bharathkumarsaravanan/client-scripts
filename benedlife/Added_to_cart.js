function productsConversion(productsArr) {
    var products = [];
    for (var i = 0; i < productsArr.length; i++) {
    var productsStructure = {};
    for (key in productsArr[i]) {
        switch (key) {
        case "item_name":
            productsStructure["product_name"] = {
            t: "string",
            v: productsArr[i]["item_name"]|| "UNKNOWN",
            };
            break;
        case "item_id":
            productsStructure["product_id"] = {
            t: "string",
            v: productsArr[i]["item_id"] || "UNKNOWN",
            };
            break;
        case "price":
            productsStructure["product_price"] = {
            t: "number",
            v: productsArr[i]["price"] || 1,
            };
            break;
        case "item_category":
            productsStructure["product_category"] = {
            t: "string",
            v: productsArr[i]["category"]|| "UNKNOWN",
            };
            break;
        case "item_quantity":
            productsStructure["product_quantity"] = {
            t: "number",
            v: productsArr[i]["quantity"]|| "UNKNOWN",
            };
            break;
        case "item_variant":
            productsStructure["product_variant"] = {
            t: "string",
            v: productsArr[i]["variant"] || "UNKNOWN",
            };
            break;
        case "item_brand":
            productsStructure["product_brand"] = {
            t: "number",
            v: productsArr[i]["brand"] || "UNKNOWN",
            };
            break;
        default:
            if (productsArr[i][key]) {
            var isNum = /^\d+$/.test(productsArr[i][key]);
            var type =
                Number.isFinite(productsArr[i][key]) || isNum
                ? "number"
                : typeof productsArr[i][key];
            productsStructure["product_" + key] = {
                t: type,
                v: productsArr[i][key],
            };
            }
        }
    }
    products.push(productsStructure);
    }
    return products;
}
function customConversion(customProps) {
    var customStructure = {};
    for (key in customProps) {
    switch (key) {
        case "currency":
        customStructure["currency"] = customProps[key] || "USD";
        break;
        case "value":
        customStructure["value"] = customProps[key];
        break;
        case "content_type":
        customStructure["content_type"] = customProps[key];
        break;
    }
    }
    return customStructure;
}
if (!window.cl_added_to_cart) {
    window.cl_added_to_cart = (function () {
        if (((window.CLabsgbVar || {}).generalProps || {}).uid) {
            var cdl = dataLayer || {};
            for (var i in cdl) {
            obj = cdl[i];
            for (var j in obj) {
                if (obj[j] == "add_to_cart") {
                var product_properties = obj[2] || {};
                var properties = {};

                if (product_properties.items) {
                    properties["customProperties"] = customConversion(product_properties);
                    properties["productProperties"] = productsConversion(product_properties["items"]);
                _cl.track("Added to cart", properties);

                } else {
                    _cl.track("Added to cart", properties);

                }
                }
            }
            }
        }
    })();
}