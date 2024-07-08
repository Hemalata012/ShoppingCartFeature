
var arr = [
    {  name: "Orange" , qty : 1 , status : 'fresh' , offer : false , added : false , price : 100 , image : "https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} ,
    {  name: "Mango" , qty : 0 , status : 'fresh' , offer : false , added : false, price : 10 , image : "https://images.unsplash.com/photo-1544531480-9eadeb3c8f41?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"} ,
    {  name: "Grapes" , qty : 1 , status : 'fresh' , offer : false , added : false , price : 200 , image : "https://images.unsplash.com/photo-1625499940894-8796928bf9c4?q=80&w=1910&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} ,
    {  name: "Apple" , qty : 0 , status : 'fresh' , offer : false , added : false , price : 300 , image : "https://images.unsplash.com/photo-1579613832125-5d34a13ffe2a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} 

]



document.querySelector("#show").addEventListener("click" ,function(){
    document.querySelector("#prods").style.top = 0 ;
   
})
document.querySelector("#close").addEventListener( "click" ,function(){
document.querySelector("#prods").style.top = "-500px" ;
})
function showpods(){
 var clutter = "" ;
 arr.forEach(function(elem , index){
    clutter+= `  <div class="prod rounded-md flex flex-col p-3 items-center gap-5  w-fit bg-zinc-900  my-10 ">
    <img  class="h-20 w-20 " src="${elem.image}" alt="">
    <h1>$${elem.price}</h1>
    <button  data-value ="${index}" class=" add bg-blue-700 px-3 py-1"> add</button>
   </div>`
 })
 document.querySelector("#podsraper").innerHTML = clutter

}

function addToCart(){
 document.querySelector("#podsraper")
    .addEventListener("click" , function(dets){
        if(dets.target.classList.contains('add')){ 
         
            arr[dets.target.dataset.value].added = true ;
         showcart()
        }
    })
}
addToCart() 
 


function showcart(){
     added = arr.filter(function(elem){
        return elem.added  === true ;
       
    }) 
var clutter = ""  ;
var price = 0 ;
added.forEach(function(elem){
    price += elem.price ;
    clutter+= ` 
     <div id="product" class="flex justify-between  p-3">
    <img class="h-24 w-24 " src="${elem.image}" alt="">
    <div id="pdets" class="">
        <h1 class="text-xl">${elem.name}</h1>
        <h4 class=" my-2 text-xs">${elem.status}</h4>
        <h6 class="text-xs ">lorem impsom</h6>
    </div>
    <div id="quantity" class="flex gap-2">
        <h3>Quantity</h3>
       <div> <h2 class="border px-2  ">${elem.qty}</h2></div>
    </div>
    <div id="offer" class="flex gap-2">
        <h3>Offer</h3>
        <div> <h3 class="border px-2 ">${elem.offer}</h3> </div>
       
    </div>
    <h3 id="price">$${elem.price}</h3>
   
    <div id="icon" class="h-10 rounded-full bg-gray-500 w-10 px-3 py-2 my-[-12px] " >
        <i class="ri-close-line" class="text-white"></i>
    </div>
</div>`

})
document.querySelector("#p").innerHTML = clutter
document.querySelector(" #total span").textContent = price

 }
 
 showpods()
showcart()
