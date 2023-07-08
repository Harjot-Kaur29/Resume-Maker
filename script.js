function addnewWE(){

    let newTextarea = document.createElement("textarea");
    newTextarea.classList.add("form-control");
    newTextarea.classList.add("workexperience");
    newTextarea.classList.add("mt-3");
    newTextarea.setAttribute("rows" , 3);
    newTextarea.setAttribute("placeholder","Enter your work experience");

    let webuttonOb = document.getElementById("webutton");
   let wexperienceOb = document.getElementById("wexperience");


    wexperienceOb.insertBefore(newTextarea,webuttonOb);
}
function addnewAQ(){
    let newTextarea = document.createElement("textarea");
    newTextarea.classList.add("form-control");
    newTextarea.classList.add("academicqualification");
    newTextarea.classList.add("mt-3");
    newTextarea.setAttribute("rows" , 3);
    newTextarea.setAttribute("placeholder","Enter your academic qualification");

    let aqbuttonOb = document.getElementById("aqbutton");
   let aqualificationOb = document.getElementById("aqualification");


   aqualificationOb.insertBefore(newTextarea,aqbuttonOb);
}
//generating cv
function generateCV(){
    let name =document.getElementById("name").value;

    let templateName = document.getElementById("templateName");

    templateName.innerHTML = name;
    
    document.getElementById('templateName2').innerHTML=name;

    document.getElementById('templateContact').innerHTML= document.getElementById('contact').value;

    document.getElementById('templateAddress').innerHTML= document.getElementById('address').value;

    document.getElementById('templateLinkedin').innerHTML= document.getElementById('linkedinurl').value;

    document.getElementById('templateGithub').innerHTML= document.getElementById('githuburl').value;

    document.getElementById('templateObjective').innerHTML= document.getElementById('objective').value;


    let we = document.getElementsByClassName("workexperience");

    let str = "";

    for (let e of we){
        str = str + `<li> ${e.value} </li>`
        document.getElementById("templateWE").innerHTML=str;


    }
    let aq = document.getElementsByClassName("academicqualification");
    let str1="";
    for (let e of aq){
    str1 = str1 + `<li> ${e.value} </li>`
    document.getElementById("templateAQ").innerHTML = str1;
    }


let file = document.getElementById("image").files[0];
console.log(file);
let reader = new FileReader();
reader.readAsDataURL(file);
console.log(reader.result);

reader.onloadend = function() {
document.getElementById("templateImage").src = reader.result;
}

document.getElementById("cv-form").style.display="none";
document.getElementById("cv-template").style.display="block";
}
function printCV() {
    window.print();
}