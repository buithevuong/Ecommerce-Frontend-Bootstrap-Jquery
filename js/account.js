
/*------------------------------------------------------------------------------------------------*/

$(".sign-in").click(function(e) {
        
        
 event.preventDefault();
        axios({
        	method: 'post',
        	url: 'http://localhost:8081/authenticate',
        	data: {
        		username : $("#inputEmail").val(),
                password : $("#inputPassword").val()
        	}
        })
        .then(function (response) {
        	console.log(response.data);
            if(response.data != null ){
               console.log(response.data.jwt);
               let token = response.data.jwt;
               let headerToken = 'Bearer '+token;
               console.log(headerToken);
               setCookie("Token",token,3);
               setCookie("jwtToken",headerToken,3);
               setCookie("user", response.data.uname, 3);
            $(location).attr('href',"index.html");
            }
        });

    });


$(".sign-up").click(function(e){

    $(location).attr('href',"registration.html");

})

$(".registration").click(function(e) {
        
 event.preventDefault();
        axios({
            method: 'post',
            url: 'http://localhost:8081/registration',
            data: {
                username : $("#regisUsername").val(),
                email : $("#regisEmail").val(),
                password : $("#regisConfirmPassword").val()
            }
        })
        .then(function (response) {
            console.log(response.data);
            if(response.data != null ){
              console.log(response.data);
            }
        });

    });




$(".logout").click(function(e) {
e.stopPropagation();
    e.preventDefault();
  
axios({
            method: 'post',
            url: 'http://localhost:8081/logoutToken',
            data: {
                
                token : getCookie("Token")
            }
        })
        .then(function (response) {

            if(response.data == "" ){
             setCookie("jwtToken","",0);
             setCookie("Token","",0);
             setCookie("user","",0);
            $(location).attr('href',"index.html");

            }
        });

});









/*---------------------------------------------------------------------------------------------------*/

$(document).ready(function() {
  if(getCookie("user") != ""){
    
    $(".myAccount").text(getCookie("user"));
    $(".accountName").text(getCookie("user"));
  }
  else {
    
        $(".myAccount").text("Login");
        $(".myAccount").attr("href", "login.html");
        $(".logout-li").hide();
        $(".cart-li").hide();

  }
});