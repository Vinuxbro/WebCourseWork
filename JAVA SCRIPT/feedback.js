var nam;
var mail;
var subject;
var comment;

function emailChecker(){
    var done=true;

    if (mail.indexOf("@")== -1) {
        alert("Enter Vaild E-mail Address")
        done=false;
    }

    return done;
}

function FormValidation(form){
    nam= form.urname.value;
    mail= form.mail.value;
    subject=form.subject.value;
    comment=form.comment.value;

    var done=true;

    if(nam=="" && mail=="" && subject=="" && comment==""){
        alert("You have to fill all filds in form!!!!!")
        done=false;
    }
    else if(nam== ""){
        alert("You have to fill Name field!!!!!!")
    }

    else if(mail== ""){
        alert("You have to fill E-mail field!!!!!!")
        done=false;
    }

    else if(subject== ""){
        alert("You have to fill Subject field!!!!!!")
        done=false;
    }

    else if(comment== ""){
        alert("You have to fill Your Question field!!!!!!")
        done=false;
    }

    else{
        done=emailChecker(mail);

    }

    if(done){
        var dataAr=[nam,mail,subject,comment,true]
        sessionStorage.setItem("data", JSON.stringify(dataAr))

        window.location.href= "QueryView.html"
    }

}