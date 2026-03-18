let panier = [];

function addToCart(nom, prix) {
  panier.push({ nom, prix });
  alert(nom + " ajouté au panier");
}