<script>
    function productsConversion(productsArr) {
        var products = [];
        for (var i = 0; i < productsArr.length; i++) {
        var productsStructure = {};
        for (key in productsArr[i]) {
            switch (key) {
            case "name":
                productsStructure["product_name"] = {
                t: "string",
                v: productsArr[i]["name"]|| "UNKNOWN",
                };
                break;
            case "id":
                productsStructure["product_id"] = {
                t: "string",
                v: productsArr[i]["id"] || "UNKNOWN",
                };
                break;
            case "price":
                productsStructure["product_price"] = {
                t: "number",
                v: productsArr[i]["price"] || 1,
                };
                break;
            case "category":
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
            case "variantId":
                productsStructure["product_variant"] = {
                t: "string",
                v: productsArr[i]["variantId"] || "UNKNOWN",
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


        if (!window.cl_product_view) {
            window.cl_product_view = (function(){
                if (((window.CLabsgbVar || {}).generalProps || {}).uid) {
                    var products = window.google_tag_manager["GTM-KP23M6W"].dataLayer.get("products");
                    var currencyCode = (((products || [])[0] || {})["currency"]) || "USD";
                    var properties = {};
                    properties["productProperties"] = productsConversion((products || []));
                    properties["customProperties"] = {
                        "currency": {
                            "t": "string",
                            "v": currencyCode
                        }
                    }
                    _cl.track("Added to cart", properties);
                }
            })();
        }
</script>



