
var nom = document.getElementById("labelName");
var errorNom = document.getElementById("errorName");

var prenom = document.getElementById("labelPrenom");
var errorprenom = document.getElementById("errorPrenom");

var mobile = document.getElementById("labelMobile");
var errormobile = document.getElementById("errorNb");

var company = document.getElementById("labelCompany");
var errorCompany = document.getElementById("errorCompany");

var website = document.getElementById("labelWebsite");
var errorWebsite = document.getElementById("errorWebsite");

var mail = document.getElementById("labelEmail");
var errorMail = document.getElementById("errorEmail");


var form = document.getElementById("form");

form.addEventListener("submit", (e) =>{
    let message = [];
    let message2 = [];
    let message5 = [];
    let message6 = [];
    let message7 = [];
    let message9 = [];

    if (nom.value === "" || !nom.value.match(/^([a-zA-Z]+)$/)){
        message.push("un vrai nom est requis!");
    }else{
        errorNom.innerHTML = "";
    }       

    if (prenom === "" || !prenom.value.match(/^([a-zA-Z]+)$/)){
        message2.push("un vrai prenom est requis!");
    }else{
        errorprenom.innerHTML = "";
    }       

   

    
    if (mobile.value === "" || !mobile.value.match(/^([0-9]+)$/)){
        message5.push("numero de mobile non valide!");
    }else{
        errormobile.innerHTML = "";
    }       


    
    if (company.value === "" || !company.value.match(/^([a-zA-Z]+)$/)){
        message6.push("nom de company non valide!");
    }else{
        errorCompany.innerHTML = "";
    }       


    
    if (website.value === "" || !website.value.match(/^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/)){
        message7.push("url non valide!");
    }else{
        errorWebsite.innerHTML = "";
    }       



    
    if (mail.value === "" || !mail.value.match(/^([A-Za-z0-9](([_\.\-]?[a-zA-Z0-9]+)*)@([A-Za-z0-9]+)(([_\.\-]?[a-zA-Z0-9]+)*)\.([A-Za-z]{2,})+)$/)){
        message9.push("mail invalide!");
    }else{
        errorMail.innerHTML = "";
    }       


    
    // if (mdp === "" || !pseudo.value.match(/^(([0-9a-zA-Z_])+)$/)){
    //     message10.push("mot de passe invalide!");
    // }else{
    //     errorMdp.innerHTML = "";
    // }       


    if (message.length > 0 || message2.length > 0 || message5.length > 0 || message6.length > 0 || message7.length > 0 || message9.length > 0 ){
        e.preventDefault();
        errorNom.innerText = message.join("");
        errorprenom.innerText = message2.join("");
        errormobile.innerText = message5.join("");
        errorCompany.innerText = message6.join("");
        errorWebsite.innerText = message7.join("");
        errorMail.innerText = message9.join("");
    }
})



