let CryptoApp = {

    btn: document.getElementById("cipherBtn"),
    message: "",
    method: "",
    action: "",
    shift: 0,
    key: "",

    init: function() {
        // Identify all the UI control event handlers - we only have the button
        // Notice that the button is actually a property of the App (this).
        this.btn.onclick=this.renderMessage;
    },
    
    getData: function() {
        // Load all the GUI control data into object property values
        this.message = document.getElementById("message_input").value;
        // Here is unique way to get the value from a radio button - works wth checkboxes too!
        this.method = document.querySelector('input[name="cipher_method"]:checked').value;
    },

    renderMessage: function() {
       // Should we encrypt or decrypt?
       // Should we use Caesar or Vignere?
       // Should we send the shift value or the key value?
       // Incomplete Example:
       CryptoApp.getData();
       let cipherText = CaesarCipher.encrypt(CryptoApp.message, CryptoApp.shift);
       document.getElementById("processed_message").textContent = cipherText;
    },

}

let CaesarCipher = {

    encrypt: function(clearText, shift) {
      //remember this code?
      let cipherText = clearText
      return cipherText;
    },

    decrypt: function(cipherText, shift) {
        //remember this code?
        return cipherText;
    }
}

let VignereCipher = {
    
    encrypt: function(clearText, key) {
        //remember this code?
        let cipherText = clearText;
        return cipherText;
    },
  
    decrypt: function(cipherText, key) {
        //remember this code?
        return cipherText;
    }
}

// This method gets called once the scriot is loaded into memory
// This is a way to get your app to initialize itself
CryptoApp.init();