const url = new URL(window.location.href);
const id = url.searchParams.get("id");

const products = {
  1: {
    name: "CU Pure Bottle 1L",
    price: "₹199",
    img: "images/bottle1.png",
    desc: "Strong 1L plastic bottle with leakproof cap."
  },
  2: {
    name: "CU Pure Bottle 750ml",
    price: "₹149",
    img: "images/bottle2.png",
    desc: "Lightweight 750ml bottle with premium finish."
  }
};

if (id && products[id]) {
  const p = products[id];
  document.getElementById("product-details").innerHTML = `
    <img src="${p.img}">
    <h2>${p.name}</h2>
    <h3>${p.price}</h3>
    <p>${p.desc}</p>
  `;
}
