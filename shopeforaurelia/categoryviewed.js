  var cl_category_viewed = setInterval(function() {
    if (((window.CLabsgbVar || {}).generalProps || {}).uid) {
        var ecommerce = window.google_tag_manager["GTM-KCKSPP2"].dataLayer.get("ecommerce")
        if(ecommerce !== undefined) {
            var eventName = "Category viewed"
            var properties = {
                "customProperties": {
                    "page_url": {
                        "t": "string",
                        "v": {{Page URL}}
                      },
                    "page_title": {
                        "t": "string",
                        "v": ecommerce.menuName
                    }
              }
            }
           _cl.pageview(eventName, properties)
          }
        clearInterval(cl_category_viewed)
    }
}, 1000);
