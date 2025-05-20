// =========================
// 📦 Données de départ
// =========================
const restaurant = {
  nom: "Chez Oli",
  ouvert: true,
  commandes: [
    {
      table: 1,
      client: "Olivier",
      plats: [
        { nom: "Burger", prix: 12.5 },
        { nom: "Frites", prix: 4 }
      ]
    },
    {
      table: 2,
      client: "Aurélio",
      plats: [
        { nom: "Salade César", prix: 9 },
        { nom: "Eau plate", prix: 2 }
      ]
    },
    {
      table: 1,
      client: "Olivier",
      plats: [
        { nom: "Café", prix: 2.5 }
      ]
    },
    {
      table: 3,
      client: "Charlotte",
      plats: [
        { nom: "Pâtes aux champignons", prix: 11 },
        { nom: "Verre de vin rouge", prix: 5 }
      ]
    },
    {
      table: 4,
      client: "Lorian",
      plats: [
        { nom: "Nuggets", prix: 6 },
        { nom: "Compote", prix: 3 },
        { nom: "Jus de pomme", prix: 2 }
      ]
    },
    {
      table: 5,
      client: "Hugo",
      plats: [
        { nom: "Purée carottes", prix: 4 },
        { nom: "Petit pot dessert", prix: 2.5 }
      ]
    },
    {
      table: 6,
      client: "Thomas",
      plats: [
        { nom: "Pizza Margherita", prix: 10 },
        { nom: "Bières artisanale", prix: 4.5 }
      ]
    },
    {
      table: 3,
      client: "Charlotte",
      plats: [
        { nom: "Tiramisu", prix: 5.5 }
      ]
    },
    {
      table: 7,
      client: "Aurélie",
      plats: [
        { nom: "Steak frites", prix: 14 },
        { nom: "Coca zéro", prix: 3 }
      ]
    }
  ]
};

// =========================
// 🧠 Traitement + Affichage
// =========================
const container = document.querySelector(".recap");

const commandesParTable = {};

// Grouper les commandes par table
restaurant.commandes.forEach((commande) => {
  const numTable = commande.table;

  if (!commandesParTable[numTable]) {
    commandesParTable[numTable] = {
      commandes: [],
      total: 0
    };
  }

  // Ajouter la commande
  commandesParTable[numTable].commandes.push(commande);

  // Calculer le total de cette commande
  const totalCommande = commande.plats.reduce((acc, plat) => acc + plat.prix, 0);
  commandesParTable[numTable].total += totalCommande;
});

// Affichage dynamique
for (let num in commandesParTable) {
  const tableInfo = commandesParTable[num];

  const details = document.createElement("details");
  const summary = document.createElement("summary");
  summary.textContent = `🪑 Table ${num} — Total: ${tableInfo.total.toFixed(2)}€`;

  details.appendChild(summary);

  tableInfo.commandes.forEach((commande, index) => {
    const divCommande = document.createElement("div");
    divCommande.innerHTML = `<ul>` +
      commande.plats.map(p => `<li>${p.nom} - ${p.prix.toFixed(2)}€</li>`).join("") +
      `</ul>`;
    details.appendChild(divCommande);
  });

  container.appendChild(details);
}