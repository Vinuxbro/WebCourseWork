var dataAr = JSON.parse(sessionStorage.getItem("dataAr"));


function submit(){

    var email= "mailto:vinukawi10@gmail.com" 
                + "?" 
                + "&subject=" + encodeURIComponent("Topic"+dataAr[2]) 
                + "&body="+ encodeURIComponent("Name: "+dataAr[0]+"\n"+"Question from user :"+dataAr[3]);

    if (confirm("Do you want to send a email?")){

        window.location.href = email;
    }

    else{
        alert("Some Error Occurd!!! Please tryagain later!!");
    }
}

function edit(){
    try{
        if (dataAr[4]){
            window.history.go(-1);
        }
    }catch(e){

        window.location.href="Feedback.html";

    }
}


function data(){
        document.getElementById("urname").innerHTML = dataAr[0];
        document.getElementById("urmail").innerHTML = dataAr[1];
        document.getElementById("subjects").innerHTML = dataAr[2];
        document.getElementById("feedback").innerHTML = dataAr[3];
}

data();