$.get( "http://localhost:8081/api/product/allproduct", function( data ) {

  data.map(function(index) {
  	var list = $(".listProduct");
  	var link = 'item.html'+'?code='+index.productid;
  	
  	var insertProduct = '<div class="col-lg-4 col-md-6 mb-4">'+
    '<div class="card h-100">'+
    '<a href="'+link+'"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>'+
    '<div class="card-body">'+
    '<h4 class="card-title">'+
    '<a class="product-name" href="'+link+'">'+index.productName+'</a>'+
    '</h4>'+
    '<h5 class="product-price">'+index.price+'</h5>'+
    '<p class="card-text product-des" >'+index.description+'</p>'+
    '</div>'+
    '<div class="card-footer">'+
    '<small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>'+
    '</div>'+
    '</div>'+
    '</div>';

    list.before(insertProduct);

  })

});


$.get( "http://localhost:8081/api/category/allcategory", function( data ) {


	data.map(function(index){
		
		var categorys = '<a href="'+index.addressCategory+'" class="list-group-item">'+index.nameCategory+'</a>';
		var addc = $(".addcategory");
		addc.before(categorys);

	})
});

