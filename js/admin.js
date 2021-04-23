
/* -------------------------------Read product-------------------------------------------------*/

axios.get('http://localhost:8081/api/product/allproduct')
.then(function (response) {

	response.data.map(function(index){

		var product = '<tr>'+
		'<td>'+index.productid+'</td>'+
		'<td>'+index.productName+'</td>'+
		'<td>'+'Image'+'</td>'+
		'<td>'+index.type+'</td>'+
		'<td><p class="product-des" style="width: 150px">'+index.description+'</p></td>'+
		'<td>'+index.color+'</td>'+
		'<td>'+index.price+'</td>'+
		'<td><button class="editProduct" data-toggle="modal" data-target="#myModalEdit"><i class="fas fa-edit"></i></button></td>'+
		'<td><button class="deleteProduct"><i class="fas fa-trash-alt"></i></button></td>';
		var addc = $(".add-product-admin");
		$(addc).append(product);
		

	})
})
.catch(function (error) {
    // handle error
    console.log(error);
})
.then(function () {
    // always executed
});
/* -------------------------------Add-------------------------------------------------*/


$(".btn-addProduct").click(function(e) { //xu ly event khi click vao btnchange
        e.preventDefault(); //khong cho gui form
        

        axios({
        	method: 'post',
        	url: 'http://localhost:8081/api/product',
        	data: {
        		productName : $('#addNameProduct').val(),
        		type : $('#addTypeProduct').val(),
        		description : $('#addDesProduct').val(),
        		color : $('#addColorProduct').val(),
        		price : $('#addPriceProduct').val() 
        	}
        })
        .then(function (response) {
        	console.log("delete success");
        });

    });
/* -------------------------------EDIT------------------------------------------------*/

$('body').on('click', '.editProduct', function() {
	
	$('.editId').val($(this).parents('tr').find('td:eq(0)').text());
	$('.editName').val($(this).parents('tr').find('td:eq(1)').text());
	$('.editType').val($(this).parents('tr').find('td:eq(3)').text());
	$('.editDes').val($(this).parents('tr').find('td:eq(4)').text());
	$('.editColor').val($(this).parents('tr').find('td:eq(5)').text());
	$('.editPrice').val($(this).parents('tr').find('td:eq(6)').text());

	
});

$(".btn-editProduct").click(function(){
	console.log("editting...");
	axios({
		method: 'put',
		url: 'http://localhost:8081/api/product',
		data: {
			productid : $('.editId').val(),
			productName : $('.editName').val(),
			type : $('.editType').val(),
			description : $('.editDes').val(),
			color : $('.editColor').val(),
			price : $('.editPrice').val()
		}
	})
	.then(function (response) {
    // handle success
    console.log(response);
})
	.catch(function (error) {
    // handle error
    console.log(error);
})
	.then(function () {
    // always executed
});
	
});

/* -------------------------------DELETE/* ----------------------------------------------*/
$('body').on('click', '.deleteProduct', function() {
	
	axios({
		method: 'delete',
		url: 'http://localhost:8081/api/product',
		data: {
			id : $(this).parents('tr').find('td:eq(0)').text()
		}
	})
	.then(function (response) {
    // handle success
    console.log(response);
})
	.catch(function (error) {
    // handle error
    console.log(error);
})
	.then(function () {
    // always executed
});

	$(this).parents('tr').remove();



});


/* -------------------------------Sort------------------------------------------------*/
$('.btn-sort').change(function(event) {
	var check = 0;
	if($(this).val() == 3){
		check = 3;
	}else if($(this).val() == 2){
		check =2;
	}else {
		check =1;
	}
	console.log(check);
});


/* -------------------------------Search------------------------------------------------*/

$(".btn-search").click(function(e){
	e.preventDefault();
	axios.get("http://localhost:8081/api/product/name/"+$(".input-search").val())
	.then(function (response) {

		response.data.map(function(index){

			var product = '<tr>'+
			'<td>'+index.productName+'</td>'+
			'<td>'+'Image'+'</td>'+
			'<td>'+index.type+'</td>'+
			'<td><p class="product-des" style="width: 150px">'+index.description+'</p></td>'+
			'<td>'+index.color+'</td>'+
			'<td>'+index.price+'</td>'+
			'<td><button class="editProduct" data-toggle="modal" data-target="#myModalEdit"><i class="fas fa-edit"></i></button></td>'+
			'<td><button class="deleteProduct"><i class="fas fa-trash-alt"></i></button></td>';
			var addc = $(".add-product-admin");
			$(addc).append(product);


		})
	})
	.catch(function (error) {
    // handle error
    console.log(error);
})
	.then(function () {
    // always executed
});


});


