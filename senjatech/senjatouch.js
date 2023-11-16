(function() {
    var emailInput = document.querySelector("input[name='email'][id*='input']");
    var phoneInput = document.querySelectorAll("input[name='phone']")[0];

    // Function to be triggered
    function triggerFunction() {
      var firstName = document.querySelector("input[name='first_name'][id*='input']").value || "";
      var lastName = document.querySelector("input[name='last_name'][id*='input']").value || "";
      var email = emailInput.value || "";
      var phone = phoneInput.value || "";
    
      // Compose the properties object
      var properties = {
        "customProperties": {
          "user_traits": {
            "t": "Object",
            "v": {
              "first_name": {
                "t": "string",
                "v": firstName
              },
              "last_name": {
                "t": "string",
                "v": lastName
              },
              "phone": {
                "t": "number",
                "v": phone
              },
              "email": {
                "t": "string",
                "v": email
              }
            }
          },
          "identify_by_email": {
            "t": "string",
            "v": email,
            "ib": true
          }
        }
      };
      _cl.identify(properties);
    }
     // Add event listeners for email input
     emailInput.addEventListener("blur", triggerFunction);
     emailInput.addEventListener("input", triggerFunction);
     
     // Add event listeners for phone input
     phoneInput.addEventListener("blur", triggerFunction);
     phoneInput.addEventListener("input", triggerFunction);
     
})();