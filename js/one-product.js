
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

let searchParams = new URLSearchParams(window.location.search);

let param = searchParams.get('code');

console.log(param);


axios.get('http://localhost:8081/api/product/'+param)
.then(function (response) {
		$(".productName").text(response.data.productName);
		$(".productPrice").text(response.data.price);
		$(".productDes").text(response.data.description);
		$(".productType").text(response.data.type);
		$(".productColor").text(response.data.color);
		
})
.catch(function (error) {
    // handle error
    console.log(error);
})
.then(function () {
    // always executed
});


$(".btn-addtocart").click(function(e) { //xu ly event khi click vao btnchange
        
        

        axios({
        	method: 'post',
        	url: 'http://localhost:8081/api/item',
        	data: {
        		productName : $('.productName').text(),
        		quantity : 1,
        		price : $('.productPrice').text(),
        		cart_id : 1
        	}
        })
        .then(function (response) {
        	console.log("delete success");
        });

    });