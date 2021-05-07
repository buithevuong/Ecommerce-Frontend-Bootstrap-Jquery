function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

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
        
        console.log($("#regisUsername").val(),$("#regisEmail").val(),$("#regisConfirmPassword").val());
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