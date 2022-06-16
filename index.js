 const details={
     name:'Steve',
     email:'steve@steve.com'
 }
 function submitData() {
      //const info = {name, email}
       return fetch("http://localhost:3000/users",{
          method:"POST",
          headers:{
              "Content-Type": "application/json",
              "Accept": "application/json",
          },
          body: JSON.stringify(details)
      })
      .then(response=>response.json()
         
        )
        .then(object=> {
         return object})
        
        //.then(data=> {
           // document.body.innerHTML = data.id
        //})
        .catch( error => {document.body.innerHTML = error.message});
  } 
