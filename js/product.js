

axios.defaults.headers.common['Authorization'] = getCookie("jwtToken");



/*---------------------------------------------------------------------------------------------------*/

axios.get('http://localhost:8081/api/product/allproduct')
.then(function (response) {
  
  response.data.map(function(index) {
    var list1 = $(".listProduct");
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
    '<small class="text-muted">**Vote**</small>'+
    '</div>'+
    '</div>'+
    '</div>';

    list1.before(insertProduct);
    
  })
})
.catch(function (error) {
  console.log(error);
})
.then(function () {
    // always executed
  });



/*---------------------------------------------------------------------------------------------------*/

let searchParamsType = new URLSearchParams(window.location.search);

let paramType = searchParamsType.get('type');
let paramSearch = searchParamsType.get('search');



if(paramType != null){
  axios.get('http://localhost:8081/api/product/type/'+paramType)
.then(function (response) {
  
  response.data.map(function(index){

    var list = $(".listProductByType");
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
    '<small class="text-muted">**Vote**</small>'+
    '</div>'+
    '</div>'+
    '</div>';

    list.before(insertProduct);

  })
})
.catch(function (error) {
  console.log(error);
})
.then(function () {
    // always executed
  });
}else if(paramSearch !=null){
axios.get('http://localhost:8081/api/product/name/'+paramSearch)
.then(function (response) {

 response.data.map(function(index){

    var list = $(".listProductByType");
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
    '<small class="text-muted">**Vote**</small>'+
    '</div>'+
    '</div>'+
    '</div>';

    list.before(insertProduct);

  })
})
.catch(function (error) {
  console.log(error);
})
.then(function () {
    // always executed
  });
}
else if(paramType ==null) {

  axios.get('http://localhost:8081/api/product/allproduct')
.then(function (response) {
  
  response.data.map(function(index) {
    
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
    '<small class="text-muted">**Vote**</small>'+
    '</div>'+
    '</div>'+
    '</div>';

    
    var list2 = $(".listProductByType");
    list2.before(insertProduct);
  })
})
.catch(function (error) {
  console.log(error);
})
.then(function () {
    // always executed
  });
}


/*---------------------------------------------------------------------------------------------------*/

axios.get('http://localhost:8081/api/category/allcategory')
.then(function (response) {
  response.data.map(function(index){

    var categorys = '<a href="list-item.html?type='+index.addressCategory+'" class="list-group-item">'+index.nameCategory+'</a>';
    var addc = $(".addcategory");
    addc.before(categorys);

  })
})
.catch(function (error) {
  console.log(error);
})
.then(function () {
    // always executed
  });


/*---------------------------------------------------------------------------------------------------*/

$(".btn-Search").click(function(e) {

 e.stopPropagation();
  e.preventDefault();

$(location).attr('href','list-item.html?search='+$(".inputSearch").val())

 

});

