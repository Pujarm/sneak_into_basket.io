// import data from "./product.json" assert{type:'json'};
// const data=require("./product.json")
// console.log(data)

//     fetch('https://server.com/product.json')
//     .then((response) => response.json())
//     .then((json) => console.log(json))
//     .catch(err=>console.error(err))
// })
const product={
    id: 1,
    name: "Green Lantern",
    desc: " Not just candlelight—these lanterns add color, pattern and an exotic global vibe to your patio or porch.Suitable for hanging or use as a freestanding lamp.Uses tea-light, votive or small pillar candles.For best effect use with matching LED candle or fairy string lights, NOT included.Great for weddings, parties, patio, events for indoors/outdoors and more",
    price: 200,
    img: "./assets/img/p1.jpg"
}
console.log(product)
console.log(product.name)
window.addEventListener('DOMContentLoaded', () =>{
        document.getElementById("pname").innerText=product.name;
        //document.getElementById("price").innerText="Price: "+product.price;
        document.getElementById("desc").innerText=product.desc;
})
function submit(){
    window.location.href="cart.html"
}