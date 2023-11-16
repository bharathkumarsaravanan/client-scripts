  var cl_create_user = setInterval(function(){
    console.log('Purchase triggered', _clInterval);
    if(window.CLabsgbVar && window.CLabsgbVar.generalProps){
        var userInfo = {{user_info (parsed from JotForms and SHA256 hashed)}}
        if (userInfo && Object.keys(userInfo).length > 0) {
            var properties = {
                "customProperties": {
                    "user_traits": {
                        "t": "Object",
                        "v": {
                            "first_name": {
                                "t": "string",
                                "v": userInfo.fn
                            },
                            "last_name": {
                                "t": "string",
                                "v": userInfo.ln
                            },
                            "phone": {
                                "t": "string",
                                "v": userInfo.ph
                            },
                            "email": {
                                "t": "string",
                                "v": userInfo.em
                            },
                            "gender": {
                                "t": "string",
                                "v": userInfo.ge
                            }
                        }
                    },
                    "identify_by_email": {
                        "t": "string",
                        "v": userInfo.em,
                        "ib": true
                    }
                }
            }
            _cl.identify(properties)

        }
        clearInterval(_clInterval)
    }
}, 500);
