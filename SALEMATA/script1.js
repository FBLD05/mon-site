function order(produit) {
  const numero = "221XXXXXXXXX"; // ton numéro
  const message = "Bonjour, je veux commander : " + produit;

  const url = "https://wa.me/" + numero + "?text=" + encodeURIComponent(message);

  window.open(url, "_blank");
}