
var products = {
    'white': {
        
        'plain': {
            'unit_price': 5.12,
            'photo': 'v-white.jpg' 
        },
        'printed': {
            'unit_price': 8.95,
            'photo': 'v-white-personalized.jpg' 
        }
    },
    
    'colored': {
        'plain': {
            'unit_price': 6.04,
            'photo': 'v-color.jpg' 
        },
        'printed': {
            'unit_price': 9.47,
            'photo': 'v-color-personalized.png' 
        }
    }
}


// Search params

var search_params = {
    "quantity": "",
    "color": "",
    "quality": "",
    "style": "",
}


// Additional pricing rules:

// 1. The prices above are for Basic quality (q150). 
// The high quality shirt (190g/m2) has a 12% increase in the unit price.

// 2. Apply the following discounts for higher quantities: 
    // 1: above 1.000 units - 20% discount
    // 2: above 500 units - 12% discount
    // 3: above 100 units - 5% discount


// Solution:

$(function(){

  //$("#quantity").val()
  //$("#style").val()
  //$("#color .option-button.selected").attr('id'); 
  //$("#quality .option-button.selected").attr('id'); 

  function uptade_params() {
      search_params.quantity = $("#quantity").val()
      search_params.color = $("#style").val()
      search_params.quality = $("#color .option-button.selected").attr('id'); 
      search_params.style = $("#quality .option-button.selected").attr('id'); 
      console.log(search_params);
  }

  uptade_params();

});










