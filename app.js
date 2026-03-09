const products = [
{
id:1,
name:"Apricot Seeds",
price:1200,
weight:"1000g",
img:"./Assets/apricode seed.jpg",
desc:"Apricot seeds provide antioxidants, support healthy skin, aid digestion and moisturize hair."
},

{
id:2,
name:"Dry Pear",
price:1000,
weight:"500g",
img:"./Assets/nashpatii.jpg",
desc:"Dry pears provide fiber, boost energy and support digestion."
},

{
id:3,
name:"Dry Apple",
price:1000,
weight:"500g",
img:"./Assets/dry-apple.jfif",
desc:"Dry apples provide fiber, vitamins and natural sweetness."
},

{
id:4,
name:"Almond Seeds",
price:1000,
weight:"1000g",
img:"./Assets/badam yaqpa.webp",
desc:"Almond seeds provide protein, healthy fats and improve brain function."
},

{
id:5,
name:"Almond",
price:3000,
weight:"1000g",
img:"./Assets/badam.webp",
desc:"Almonds support heart health and boost energy."
},

{
id:6,
name:"Cherry",
price:500,
weight:"100g",
img:"./Assets/cherry.jfif",
desc:"Cherries are rich in antioxidants and improve sleep."
},

{
id:7,
name:"Dry Apricot",
price:800,
weight:"1000g",
img:"./Assets/faringg.jpg",
desc:"Dry apricots are rich in vitamin A and fiber."
},

{
id:8,
name:"Mixed Dry Fruit",
price:1500,
weight:"1000g",
img:"./Assets/mixed dry fruite.png",
desc:"Mixed dry fruits boost immunity and provide energy."
},

{
id:9,
name:"Salajeet",
price:1000,
weight:"50g",
img:"./Assets/salageet.jpg",
desc:"Salajeet improves strength, stamina and energy."
},

{
id:10,
name:"Jujube",
price:600,
weight:"200g",
img:"./Assets/sarsing.jpg",
desc:"Jujube improves digestion and boosts immunity."
},

{
id:11,
name:"Mulberries",
price:1200,
weight:"1000g",
img:"./Assets/shehtoot.jpg",
desc:"Mulberries improve blood health and provide energy."
},

{
id:12,
name:"Nuts",
price:900,
weight:"1000g",
img:"./Assets/starga.jfif",
desc:"Nuts improve brain function and heart health."
},

{
id:13,
name:"Cooked Barley",
price:200,
weight:"250g",
img:"./Assets/yus(barley).jpg",
desc:"Barley controls blood sugar and improves digestion."
},

{
id:14,
name:"Saffron",
price:3500,
weight:"50g",
img:"./Assets/zafran.jpg",
desc:"Saffron improves mood, memory and immunity."
},

{
id:15,
name:"Dry Rose",
price:150,
weight:"50g",
img:"./Assets/dry rose.jfif",
desc:"Dry rose reduces stress and improves digestion."
},

{
id:16,
name:"Butter",
price:1500,
weight:"500g",
img:"./Assets/makhan.jfif",
desc:"Butter provides energy and strengthens bones."
},

{
id:17,
name:"Dry Rose Hips",
price:500,
weight:"100g",
img:"./Assets/makhoom.jpg",
desc:"Rose hips boost immunity and improve skin."
},

{
id:18,
name:"Apricot Oil",
price:1700,
weight:"500g",
img:"./Assets/chuli maar.jfif",
desc:"Apricot oil nourishes skin and hair."
}
];


const renderProducts = document.getElementById("products");

products.map((p)=>{
 renderProducts.innerHTML +=  `<div id="carts">
 <h1>${p.name}</h1>
 <p>ID : ${p.id}</p>
 <p>Weight : ${p.weight}</p>
 <img src="${p.img}" alt="" width = "200px", height = "200px">
 <p>${p.desc}</p>
 <button>Shop now </Button>
 </div`  
})




