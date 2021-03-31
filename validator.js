function validateForm(){
    //check if the input is empty
      var x=document.querySelectorAll(".form-control");
      console.log(x.length);
      console.log(x[0].value);
      for(var i=0; i<x.length; i++)
      {
        // console.log(x[i]);
        // console.log(x[i].value)
        var v=x[i].value;
        //console.log(v);
        if (v==null || v=="")
            {
            alert("le champ ne peut pas être vide");
            return false;
            }
       }

    //check the email format
        var mail=document.querySelector(".form-mail").value;
        var reg = /^[0-9a-zA-Z_.-]+[@][0-9a-zA-Z_.-]+([.][a-zA-Z]+){1,2}$/;
       console.log(mail);
        if (!reg.test(mail)){  
            alert("l'adresse mail n'est pas valide");
            return false;
        }
  
    //check password length
        var psws=document.querySelectorAll(".psw");
        console.log(psws);

        for (var psw of psws){
        if(psw.value.length<6){
          alert("Le mot de passe doit avoir au moin 8 caractères");
          return false;
        }}
    //check 2 passwords match
        var psw1=document.querySelector(".psw1").value;
        var psw2=document.querySelector(".psw2").value;
        if(psw1!==psw2){
          alert("Les 2 mots de passe ne sont pas identique");
          return false;
        }

  
      }