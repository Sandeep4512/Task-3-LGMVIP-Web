




// function validate(e){
//     let name=e.name;
//     let value=e.value;
//     if(name=="UserName"){
//        StudentInfo.UserName=value;
//     }
//     if(name=="email"){
//        StudentInfo.email=value;
//     }
//     if(name=="website"){
//       StudentInfo.website=value;
//     }
//      if(name=="image"){
//       StudentInfo.image=value;
//     }
//     if(name=="gender"){
//      StudentInfo.gender=value;
//     }
//     if(name=="html"){
//      StudentInfo.html=value;
//    }
//    if(name=="css"){
//     StudentInfo.css=value;
//   }
//   if(name=="javascript"){
//     StudentInfo.javascript=value;
//   }
//  }
//  let StudentInfo=[{
//     UserName:'',
//     email :'',
//     website:'',
//     image:'',
//     gender:'',
//     html:'',
//     css: '',
//     javascript:''
// }]

//    function handlesubmit(){
//   localStorage.setItem("StudentInfo",JSON.stringify(StudentInfo));
//   console.log(StudentInfo);
 
  
//      return false
//     }





















































function preventDefault(){
    let name=document.getElementById("name").value;
    let website=document.getElementById("website").value;
    let imageURL=document.getElementById("imageURL").value;
    let gender=document.getElementById("gender").value;
    // let female=document.getElementById("female").value;
    let javascript =document.getElementById("javascript").value;
    let css=document.getElementById("css").value;
    let html=document.getElementById("html").value;
    let email=document.getElementById("email").value;

     const userInfo=[{
        name:name,
         website:website,
         imageURL:imageURL,
         gender:gender,
         javascript:javascript,
         css:css,
         html:html,
         email:email
     }];
     localStorage.setItem("Userinfo", JSON.stringify(userInfo));
     console.log(userInfo);
    console.log(localStorage.getItem("UserInfo"))
    
    document.getElementById("root").innerHTML= ` <tr>
<td>
    <p>${name}</p>
    <p>${website}</p>
    <a href="#">${email}</a>
    <p>${gender}</p>
    <p>${html},${css},${javascript}</p>
</td>
<td></td>
<td></td>
<td>

    <image class="image"
        src="${imageURL}" />
</td>
</tr> `

}