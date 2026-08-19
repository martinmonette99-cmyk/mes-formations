/* 
    1. Le chaînage optionnel

    L'opérateur ? permet de lire une propriété ou de retourner undefined si la propriété ou la chaîne de propriétés n'est pas valide.
    Sans cet opérateur, JavaScript retourne normalement une erreur.
*/
const store = {
  dairyProducts: {
    cheeses: ["Camembert", "Roquefort", "Cantal"],
    yogurt: ["Vanilla", "Strawberry", "Peach"],
  },
  pasta: {
    freshPasta: {
      flourPasta: ["Spaghetti", "Ravioli","Fusilli"],
      flourAndPotato: ["Gnocchi"]
    },
  },
  getPrice: () => {
    return 20
  }
}

console.log(store.dairyProducts.cheeses[1]);
// Pour voir si une propriété existe. undefine plutot que erreur donc ne bloque pas.
// iceCream?
// chocolateCream?.[3] pour les tableaux

console.log(store.dairyProducts.iceCream?.chocolateCream?.[3]);








