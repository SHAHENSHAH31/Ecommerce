


window.addEventListener('load',async function(){
    
    var res = await fetch('/products');
    var data = await res.json();

      var Mobile = [];
      var Ipad = [];
      var Earphones = [];
      var Laptop = [];
      var LED = [];
      
    
  

      for (let i = 0; i < data.length; i++) {
        if (data[i].sportType == 'Mobile'){
            Mobile.push(data[i]);
        }else if (data[i].sportType == 'Ipad') {
            Ipad.push(data[i]);
        }else if (data[i].sportType == 'Earphones'){
          Earphones.push(data[i]);
        }else if (data[i].sportType == 'Laptop') {
            Laptop.push(data[i]);
        }else{
            LED.push(data[i]);
        }
      }


    

   var Cricketdiv = document.getElementById('cricket')
 
    for (let i = 0; i<Mobile.length; i++) {
        var card = document.createElement('div');

        
        card.setAttribute('class','cards');

     




        
       
       


      
        

        let name = Mobile[i].name;
        let image_name = Mobile[i].image;
        let price = Mobile[i].price;
        let type = Mobile[i].sportType;
       

        let product_img = document.createElement('img');
        product_img.setAttribute('src',`../images/products_images/${type}/${image_name}`);
        let product_name = document.createElement('p')
        let price_para = document.createElement('p');

        let a1 = document.createElement('a');
        a1.setAttribute('href',`/users/products/view/${Mobile[i]._id}`);


        product_name.innerHTML = name;
        price_para.innerHTML = 'INR.' + price;


        var Cartbtn = document.createElement('button');
        Cartbtn.innerHTML = "Add to Cart";
        Cartbtn.setAttribute('class','Cartbtn');

        

        var Buybtn = document.createElement('button');
        Buybtn.innerHTML = "Buy";
        Buybtn.setAttribute('class','Buybtn');

        Cartbtn.setAttribute('id',`${Mobile[i]._id}`);
        
       

      

            Cartbtn.addEventListener('click',async function(e){

                var id = e.target.getAttribute('id');
           
    
                var res = await fetch('/users/products/AddtoCart',{
                    method : 'post',
                    headers : {
                        'Content-Type' : 'application/json'
                    },
                    body : JSON.stringify({id : id})
                })

                var data = await res.json();

                if (data.success == true) {
                    location.reload();
                }

             
                
                
                
    
            })

            Buybtn.setAttribute('id',`${Mobile[i]._id}`);

         

            Buybtn.addEventListener('click',async function(e){

               var id = e.target.getAttribute('id');
               

               
               
               var res = await fetch(`/users/products/create/OrderId`,{
                method : 'POST',
                timeout : 0,
                headers : {
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify({
                    id : id,
                    qty : 1
                })
                
               })


               var data = await res.json();


               if (data.success === true){
                 window.location.href = '/';
               }else{
                window.location.href = `/users/products/Info?orderId=${data.orderId}&productId=${data.productId}&price=${data.price}&qty=${data.qty}`;

               }

        





   

// 

              



            })


          

        

     


        
        a1.appendChild(product_img);
        a1.appendChild(product_name);
        // card.appendChild(product_img);
        // card.appendChild(product_name);
        card.appendChild(a1);
        card.appendChild(price_para);

        price_para.appendChild(Cartbtn);
        price_para.appendChild(Buybtn);



        


        



        Cricketdiv.appendChild(card);
    }

    var FootBalldiv = document.getElementById('FootBall');


    for (let i = 0; i<Ipad.length; i++) {
        var card = document.createElement('div');

        
        card.setAttribute('class','cards');
        

        let name = Ipad[i].name;
        let image_name = Ipad[i].image;
        let price = Ipad[i].price;
        let type = Ipad[i].sportType;
       

        let product_img = document.createElement('img');
        product_img.setAttribute('src',`../images/products_images/${type}/${image_name}`);
        let product_name = document.createElement('p')
        let price_para = document.createElement('p');


        let a1 = document.createElement('a');
        a1.setAttribute('href',`/users/products/view/${Ipad[i]._id}`);


        product_name.innerHTML = name;
        price_para.innerHTML = 'INR.' + price;

        
        a1.appendChild(product_img);
        a1.appendChild(product_name);
        card.appendChild(a1);
        // card.appendChild(product_img);
        // card.appendChild(product_name);
        card.appendChild(price_para);

        var Cartbtn = document.createElement('button');
        Cartbtn.innerHTML = "Add to Cart";
        Cartbtn.setAttribute('class','Cartbtn');


        Cartbtn.setAttribute('id',`${Ipad[i]._id}`);
        
       

      

        Cartbtn.addEventListener('click',async function(e){

            var id = e.target.getAttribute('id');
       

            var res = await fetch('/users/products/AddtoCart',{
                method : 'post',
                headers : {
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify({id : id})
            })

            var data = await res.json();

            if (data.success == true) {
                location.reload();
            }

         
            
            
            

        })

        var Buybtn = document.createElement('button');
        Buybtn.innerHTML = "Buy";
        Buybtn.setAttribute('class','Buybtn');

        Buybtn.setAttribute('id',`${Ipad[i]._id}`);



        Buybtn.addEventListener('click',async function(e){

            var id = e.target.getAttribute('id');
            

            
            
            var res = await fetch(`/users/products/create/OrderId`,{
             method : 'POST',
             timeout : 0,
             headers : {
                 'Content-Type' : 'application/json'
             },
             body : JSON.stringify({
                 id : id,qty : 1
             })
             
            })


            var data = await res.json();


             window.location.href = `/users/products/Info?orderId=${data.orderId}&productId=${data.productId}&price=${data.price}&qty=${data.qty}`;


        

        })



        price_para.appendChild(Cartbtn);
        price_para.appendChild(Buybtn);

        


        



        FootBalldiv.appendChild(card);
    }

    var volleyBallDiv = document.getElementById('VolleyBall');



    for (let i = 0; i<Earphones.length; i++) {
        var card = document.createElement('div');

        
        card.setAttribute('class','cards');
        

        let name = Earphones[i].name;
        let image_name = Earphones[i].image;
        let price = Earphones[i].price;
        let type = Earphones[i].sportType;
       

        let product_img = document.createElement('img');
        product_img.setAttribute('src',`../images/products_images/${type}/${image_name}`);
        let product_name = document.createElement('p')
        let price_para = document.createElement('p');

        let a1 = document.createElement('a');
        a1.setAttribute('href',`/users/products/view/${Earphones[i]._id}`);


        product_name.innerHTML = name;
        price_para.innerHTML = 'INR.' + price;

        a1.appendChild(product_img);
        a1.appendChild(product_name)

        card.appendChild(a1);


        

        

        // card.appendChild(product_img);
        // card.appendChild(product_name);
        card.appendChild(price_para);


        var Cartbtn = document.createElement('button');
        Cartbtn.innerHTML = "Add to Cart";
        Cartbtn.setAttribute('class','Cartbtn');


        Cartbtn.setAttribute('id',`${Earphones[i]._id}`);
        
       

      

        Cartbtn.addEventListener('click',async function(e){

            var id = e.target.getAttribute('id');
       

            var res = await fetch('/users/products/AddtoCart',{
                method : 'post',
                headers : {
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify({id : id})
            })

            var data = await res.json();

            if (data.success == true) {
                location.reload();
            }

         
            
            
            

        })

        

        var Buybtn = document.createElement('button');
        Buybtn.innerHTML = "Buy";
        Buybtn.setAttribute('class','Buybtn');

        Buybtn.setAttribute('id',`${Earphones[i]._id}`);



        Buybtn.addEventListener('click',async function(e){

            var id = e.target.getAttribute('id');
            

            
            
            var res = await fetch(`/users/products/create/OrderId`,{
             method : 'POST',
             timeout : 0,
             headers : {
                 'Content-Type' : 'application/json'
             },
             body : JSON.stringify({
                 id : id,qty : 1
             })
             
            })


            var data = await res.json();


             window.location.href = `/users/products/Info?orderId=${data.orderId}&productId=${data.productId}&price=${data.price}&qty=${data.qty}`;



        })


        price_para.appendChild(Cartbtn);
        price_para.appendChild(Buybtn);

        


        



        volleyBallDiv.appendChild(card);
    }

    var HockeyDiv = document.getElementById('Hockey');

    for (let i = 0; i <Laptop.length; i++) {
        var card = document.createElement('div');

        
        card.setAttribute('class','cards');
        

        let name = Laptop[i].name;
        let image_name = Laptop[i].image;
        let price = Laptop[i].price;
        let type = Laptop[i].sportType;
       

        let product_img = document.createElement('img');
        product_img.setAttribute('src',`../images/products_images/${type}/${image_name}`);
        let product_name = document.createElement('p')
        let price_para = document.createElement('p');


        product_name.innerHTML = name;
        price_para.innerHTML = 'INR.' + price;

        let a1 = document.createElement('a');
        a1.setAttribute('href',`/users/products/view/${Laptop[i]._id}`);

        
        a1.appendChild(product_img);
        a1.appendChild(product_name);
        card.appendChild(a1);
        // card.appendChild(product_img);
        // card.appendChild(product_name);
        card.appendChild(price_para);

        var Cartbtn = document.createElement('button');
        Cartbtn.innerHTML = "Add to Cart";
        Cartbtn.setAttribute('class','Cartbtn');

        Cartbtn.setAttribute('id',`${Laptop[i]._id}`);
        
       

      

        Cartbtn.addEventListener('click',async function(e){

            var id = e.target.getAttribute('id');
       

            var res = await fetch('/users/products/AddtoCart',{
                method : 'post',
                headers : {
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify({id : id})
            })

            var data = await res.json();

            if (data.success == true) {
                location.reload();
            }

         
            
            
            

        })

        var Buybtn = document.createElement('button');
        Buybtn.innerHTML = "Buy";
        Buybtn.setAttribute('class','Buybtn');

        Buybtn.setAttribute('id',`${Laptop[i]._id}`);




        Buybtn.addEventListener('click',async function(e){

            var id = e.target.getAttribute('id');
            

            
            
            var res = await fetch(`/users/products/create/OrderId`,{
             method : 'POST',
             timeout : 0,
             headers : {
                 'Content-Type' : 'application/json'
             },
             body : JSON.stringify({
                 id : id, qty : 1
             })
             
            })


            var data = await res.json();


             window.location.href = `/users/products/Info?orderId=${data.orderId}&productId=${data.productId}&price=${data.price}&qty=${data.qty}`;


        

        })

        price_para.appendChild(Cartbtn);
        price_para.appendChild(Buybtn);

        


        



        HockeyDiv.appendChild(card);
    }


    var BaseballDiv = document.getElementById('BaseBall');


    for (let i = 0; i <LED.length; i++) {
        var card = document.createElement('div');

        
        card.setAttribute('class','cards');
        

        let name = LED[i].name;
        let image_name = LED[i].image;
        let price = LED[i].price;
        let type = LED[i].sportType;
       

        let product_img = document.createElement('img');
        product_img.setAttribute('src',`../images/products_images/${type}/${image_name}`);
        let product_name = document.createElement('p')
        let price_para = document.createElement('p');


        product_name.innerHTML = name;
        price_para.innerHTML = 'INR.' + price;

        let a1 = document.createElement('a');
        a1.setAttribute('href',`/users/products/view/${LED[i]._id}`);

        
        a1.appendChild(product_img);
        a1.appendChild(product_name);
        card.appendChild(a1);

        

        // card.appendChild(product_img);
        // card.appendChild(product_name);
        card.appendChild(price_para);

        var Cartbtn = document.createElement('button');
        Cartbtn.innerHTML = "Add to Cart";
        Cartbtn.setAttribute('class','Cartbtn');


        Cartbtn.setAttribute('id',`${LED[i]._id}`);
        
       

      

        Cartbtn.addEventListener('click',async function(e){

            var id = e.target.getAttribute('id');
       

            var res = await fetch('/users/products/AddtoCart',{
                method : 'post',
                headers : {
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify({id : id})
            })

            var data = await res.json();

            if (data.success == true) {
                location.reload();
            }

         
            
            
            

        })

        var Buybtn = document.createElement('button');
        Buybtn.innerHTML = "Buy";
        Buybtn.setAttribute('class','Buybtn');

        Buybtn.setAttribute('id',`${LED[i]._id}`);


        Buybtn.addEventListener('click',async function(e){

            var id = e.target.getAttribute('id');
            

            
            
            var res = await fetch(`/users/products/create/OrderId`,{
             method : 'POST',
             timeout : 0,
             headers : {
                 'Content-Type' : 'application/json'
             },
             body : JSON.stringify({
                 id : id,
                 qty : 1
             })
             
            })


            var data = await res.json();


             window.location.href = `/users/products/Info?orderId=${data.orderId}&productId=${data.productId}&price=${data.price}&qty=${data.qty}`;


        

        })

        price_para.appendChild(Cartbtn);
        price_para.appendChild(Buybtn);

        


        



        BaseballDiv.appendChild(card);
    }

    
       



        
       

      



           

    
            









    


})



var search_box = document.getElementById('search-box');


search_box.addEventListener('keyup',function(e){


    var value = e.target.value.toUpperCase();
   
    var Cricketdiv = document.getElementById('cricket');
    var FootBalldiv = document.getElementById('FootBall');
    var volleyBallDiv = document.getElementById('VolleyBall');
    var HockeyDiv = document.getElementById('Hockey');
    
    var BaseballDiv = document.getElementById('BaseBall');
    var RugByDiv = document.getElementById('Rugby');

    var a = 'MOBILE';
    var b = 'IPAD';
    var c = 'EARPHONES';
    var d = 'LAPTOP';
    var e = 'LED';
   

   if(value === a){

        Cricketdiv.classList.remove('filter');
        FootBalldiv.classList.add('filter');
        volleyBallDiv.classList.add('filter');
        HockeyDiv.classList.add('filter');
        BaseballDiv.classList.add('filter');
        RugByDiv.classList.add('filter');

    }else if(value === b){

        FootBalldiv.classList.remove('filter');
        Cricketdiv.classList.add('filter');
        volleyBallDiv.classList.add('filter');
        HockeyDiv.classList.add('filter');
        BaseballDiv.classList.add('filter');
        RugByDiv.classList.add('filter');

    }else if (value === c){

        volleyBallDiv.classList.remove('filter');

        Cricketdiv.classList.add('filter');

        FootBalldiv.classList.add('filter');
        HockeyDiv.classList.add('filter');
        BaseballDiv.classList.add('filter');
        RugByDiv.classList.add('filter');

    }else if (value === d){

        HockeyDiv.classList.remove('filter');
        
        Cricketdiv.classList.add('filter');
        volleyBallDiv.classList.add('filter');
        
        FootBalldiv.classList.add('filter');
       
        BaseballDiv.classList.add('filter');
        RugByDiv.classList.add('filter');
    }else if (value === e){

        RugByDiv.classList.remove('filter');
        
        Cricketdiv.classList.add('filter');
        volleyBallDiv.classList.add('filter');
        
        FootBalldiv.classList.add('filter');
        HockeyDiv.classList.add('filter');
        
        BaseballDiv.classList.add('filter');
       
       
      
    } else if (value === '') {



        Cricketdiv.classList.remove('filter');
        volleyBallDiv.classList.remove('filter');
        
        FootBalldiv.classList.remove('filter');
        HockeyDiv.classList.remove('filter');
        
        BaseballDiv.classList.remove('filter');
            
        RugByDiv.classList.remove('filter');

    }
})