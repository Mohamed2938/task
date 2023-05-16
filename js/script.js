const product =[{
    id:0,
    Images:'images/product-1.png',
    title: 'Nike Air Men’s Hoodie - Imported Hoodie Red',
    price: 130,
  },
  {
    id:1,
    Images:'images/product-2.png',
    title: 'Armani Frok Ladies - Imported Fork Blue',
    price: 210,
  },
  {
    id:2,
    Images:'images/product-3.png',
    title: 'Nike Air Men’s Hoodie - Imported Hoodie Red',
    price: 90,
  },
  
  {
    id:3,
    Images:'images/product-4.png',
    title: 'Nike Air Men’s Hoodie - Imported Hoodie Red',
    price: 100,
  },
  
  {
    id:4,
    Images:'images/product-5.png',
    title: 'Nike Air Men’s Hoodie - Imported Hoodie Red',
    price: 100,
  },
  
  {
    id:5,
    Images:'images/product-6.png',
    title: 'Nike Air Men’s Hoodie - Imported Hoodie Red',
    price: 50,
  }
  ];
  
  const categories=[...new Set(product.map((item) => 
    {return item}))]
    let i=0;
    document.getElementById('root').innerHTML=categories.map((item) =>
    {
  var {Images, title,price}=item;
  return(
    `<div class=box>
    <div class = 'img-box'>
    <img class=' images'  src=${Images} </img>
    </div>
    <div class ='button'>
    <p>${title}</p>
    <h2> $ ${price}.00</h2>`+
    "<button onclick = 'addtocart("+(i++)+")'> Add to cart </button>"+
    `</div>
    </div>`
  )
    }).join('')
  
    var cart=[];
  function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
  }
  function delElement(a){
    cart.splice(a,1);
    displaycart();
  }
    function displaycart(a){
      let j=0 ,total=0;
      document.getElementById("count").innerHTML = cart.length;
      if(cart.length==0){
        document.getElementById('cartItem').innerHTML ="Your cart is empty";
        document.getElementById("totlal").innerHTML = "$ "+0+".00";
      }
      else{
        document.getElementById("cartItem").innerHTML =cart.map(( items) =>{
          var {Images , title ,price}=items;
          total = total+price;
          document.getElementById("total").innerHTML = "$ "+total+".00";
          return(
            `<div class ='cart-item'>
            <div class ='row-img'>
            <img class ='rowimg' src=${Images}>
            </div>
            <p style='font-size:12px,'> ${title}</p>
            <h2 style = 'font-size:15px'>$ ${price}.00</h2>`+
            "<i class='fa-solid fas fa-trash' onclick='delElement("+(j++)+")'></i></div>"
          );
        }).join('');
      }
    }