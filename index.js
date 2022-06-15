// const details={
//    method:'POST',
//    headers:{
//     'Content-Type':'application/json',
//     'Accept':'application/json'
//    },
//    body: JSON.stringify({
//        name:'Frank',
//        email:'frankomosh197@gmail.com'
//    })

// }
// fetch('http://localhost:3000/users')
function submitData(name , email) {
     //const info = {name, email}
      return fetch("http://localhost:3000/users",{
         method:"POST",
         headers:{
             "Content-Type": "application/json",
             "Accept": "application/json",
         },
         body: JSON.stringify({
                   name:'Steve',
                    email:'steve@steve.com'
                })
     })
     .then(response=>response.json()
         
       )
       .then(data=> {
           document.body.innerHTML = data.id
       })
       .catch( error => {document.body.innerHTML = error.message});
 } 