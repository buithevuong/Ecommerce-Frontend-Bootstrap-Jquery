function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
axios.defaults.headers.common['Authorization'] = getCookie("jwtToken");
/*---------------------------------------------------------------------------------------------------*/

axios.get('http://localhost:8081/api/item/allitem')
.then(function (response) {

	response.data.map(function(index, elem) {
		

		var addItem = '<!-- PRODUCT -->'+
        '<div class="row item-product">'+
        '<div class="col-12 col-sm-12 col-md-2 text-center">'+
        '<img class="img-responsive" src="http://placehold.it/120x80" alt="prewiew" width="120" height="80">'+
        '</div>'+
        '<div class="text-sm-center text-md-left">'+
        '<strong class="d-none itemid">'+index.itemid+'</strong>'+
        '</div>'+
        '<div class="col-12 text-sm-center col-sm-12 text-md-left col-md-6">'+
        '<h4 class="product-name"><strong>'+index.productName+'</strong></h4>'+
        '</div>'+
        '<div class="col-12 col-sm-12 text-sm-center col-md-4 text-md-right row">'+
        '<div class="col-3 col-sm-3 col-md-6 text-md-right" style="padding-top: 5px">'+
        '<h6><strong>'+'<span class="isPrice">'+index.price+'</span>'+'<span class="text-muted">.VND x</span></strong></h6>'+
        '</div>'+
        '<div class="col-4 col-sm-4 col-md-4">'+
        '<div class="quantity">'+
        '<input type="button" value="+" class="plus">'+
        '<input type="number" step="1" max="99" min="1" value="'+index.quantity+'" title="Qty" class="qty"'+
        'size="4">'+
        '<input type="button" value="-" class="minus">'+
        '</div>'+
        '</div>'+
        '<div class="col-2 col-sm-2 col-md-2 text-right">'+
        '<button type="button" class="btn btn-outline-danger btn-xs btn-deleteItem">'+
        '<i class="fa fa-trash" aria-hidden="true"></i>'+
        '</button>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '<hr>'+
        '<!-- END PRODUCT -->';

        var addc = $(".mycart");
        $(addc).append(addItem);

    })

	// var priceEls = document.getElementsByClassName("isPrice");
	// for (var i = 0; i < priceEls.length; i++) {
 //     var price = priceEls[i].innerText;
 //     console.log("Price: " + price);
 // }	

})
.catch(function (error) {
    // handle error
    console.log(error);
})
.then(function () {
    // always executed
});

/* ------------------------------------------Get Cart---------------------------*/

axios.get('http://localhost:8081/api/cart/1')
.then(function (response) {
	
  $('.subTotal').text(response.data.subtotal);
  $('.totalPrice').text(response.data.totalPrice);
  $(document).ready(function() {

    if (response.data.totalPrice == 0) {
        

        
    }
});

})
.catch(function (error) {
    // handle error
    console.log(error);
})
.then(function () {
    // always executed
});


/* ----------------------------------DELETE ITEM-----------------------------------*/



$('body').on('click', '.btn-deleteItem', function() {
	
	axios({
       method: 'delete',
       url: 'http://localhost:8081/api/item',
       data: {
          id : $(this).parents('.item-product').find('.itemid').text()
      }
  })
    .then(function (response) {
       if(response.data != null){

          console.log('delete success');
      }

  });
    $(this).parents('.item-product').remove();
});







/*--------------------------------------------GET SHIPMENT PAYMENT------------------------------------------*/
axios({
    method: 'get',
    url: 'http://localhost:8081/api/shipment/allshipment',
})
.then(function (response) {
    if(response.data != null){
        response.data.map(function(index, elem) {
            var shipment = '<option id="chooseShipment" value="'+index.shipmentid+'">'+index.name+'</option>';
            var shipments = $('.btn-shipment');
            shipments.append(shipment);
            $('.shipment-price').text(index.price);
        })

    }

});


axios({
    method: 'get',
    url: 'http://localhost:8081/api/payment/allpayment',
})
.then(function (response) {
    if(response.data != null){
        response.data.map(function(index, elem) {
            var payment = '<option value="'+index.paymentid+'">'+index.name+'</option>';
            var payments = $('.btn-payment');
            payments.append(payment);
            $('.payment-price').text(index.price);
        })

    }

});






var idShip = null;
/*-----------------------------------CHOOSE SELECT---------------------------------------------------*/
$(document).ready(function() {
    $('.btn-shipment').change(function(event) {
    
    idShip = $(this).val();
   
});
});

