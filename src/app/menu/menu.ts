import { CoreMenu } from '@core/types'

export const menu: CoreMenu[] = [
  {
    id: 'dashboards',
    title: 'Dashboards',
    translate: 'Dashboards',
    type: 'item',
    icon: 'home',
    url: 'dashboards'
  },
  {
    id: 'rapport',
    type: 'section',
    title: 'Rapports',
    translate: 'Rapports',
    icon: 'rapports',
    children: [
      {
        id: 'Rapports',
        title: 'Rapports',
        translate: 'Rapports',
        type: 'item',
        icon: 'bar-chart',
        url: 'rapports'
      }


    ]
  },
  
  {
    id: 'Document',
    type: 'section',
    title: 'Documents',
    translate: 'Documents',
    icon: '',
    children: [
      {
        id: 'vente',
        title: 'Vente',
        translate: 'Vente',
        type: 'collapsible',
        icon: 'shopping-cart',
        children: [
          {
            id: 'devis',
            title: 'Devis',
            translate: 'Devis',
            type: 'item',
            icon: 'circle',
            url: 'vente/devis'
          },
          {
            id: 'commande-client',
            title: 'Commande Client',
            translate: 'Commande Client',
            type: 'item',
            icon: 'circle',
            url: 'vente/commande-client'
          },
          {
            id: 'bon-livraison',
            title: 'Bon de Livraison',
            translate: 'Bon de Livraison',
            type: 'item',
            icon: 'circle',
            url: 'vente/bon-livraison'
          },
          {
            id: 'facture',
            title: 'Facture',
            translate: 'Facture',
            type: 'item',
            icon: 'circle',
            url: 'vente/facture'
          },
          {
            id: 'bon-sortie',
            title: 'Bon de Sortie',
            translate: 'Bon de Sortie',
            type: 'item',
            icon: 'circle',
            url: 'vente/bon-sortie'
          }
        ]
      },
      {
        id: 'achat',
        title: 'Achat',
        translate: 'Achat',
        type: 'collapsible',
        icon: 'shopping-bag',
        children: [
          {
            id: 'commande-fournisseur',
            title: 'Commande Fournisseur',
            translate: 'Commande Fournisseur',
            type: 'item',
            icon: 'circle',
            url: 'achat/commande-fournisseur'
          },
          {
            id: 'bon-reception',
            title: 'Bon de Réception',
            translate: 'Bon de Réception',
            type: 'item',
            icon: 'circle',
            url: 'achat/bon-reception'
          },
          {
            id: 'facture-fournisseur',
            title: 'Facture Fournisseur',
            translate: 'Facture Fournisseur',
            type: 'item',
            icon: 'circle',
            url: 'achat/facture-fournisseur'
          }
        ]
      },


    ]
  },
  
  {
    id: 'Fiche',
    type: 'section',
    title: 'Fiche',
    translate: 'Fiche',
    icon: 'rapports',
    children: [
      {
        id: 'clients',
        title: 'Clients',
        translate: 'Clients',
        type: 'item',
        icon: 'user',
        url: 'tiers/clients'
      },
      {
        id: 'fournisseurs',
        title: 'Fournisseurs',
        translate: 'Fournisseurs',
        type: 'item',
        icon: 'truck',
        url: 'tiers/fournisseurs'
      },
      {
        id: 'produits-services',
        title: 'Produits & Services',
        translate: 'Produits & Services',
        type: 'item',
        icon: 'box',
        url: 'produits-services'
      }
    ]
  }
  
 ,
  {
    id: 'Stock',
    type: 'section',
    title: 'Stock',
    translate: 'Stock',
    icon: 'rapports',
    children: [
      {
        id: 'comptabilite',
        title: 'Comptabilité',
        translate: 'Comptabilité',
        type: 'collapsible',
        icon: 'dollar-sign',
        children: [
          {
            id: 'tresorerie',
            title: 'Gestion de la Trésorerie',
            translate: 'Gestion de la Trésorerie',
            type: 'item',
            icon: 'circle',
            url: 'comptabilite/tresorerie'
          },
          {
            id: 'banque',
            title: 'Compte Bancaire',
            translate: 'Compte Bancaire',
            type: 'item',
            icon: 'circle',
            url: 'comptabilite/banque'
          },
          {
            id: 'cheque-traite',
            title: 'Chèque et Traite',
            translate: 'Chèque et Traite',
            type: 'item',
            icon: 'circle',
            url: 'comptabilite/cheque-traite'
          }
        ]
      },
      {
        id: 'stock',
        title: 'Stock',
        translate: 'Stock',
        type: 'collapsible',
        icon: 'layers',
        children: [
          {
            id: 'gestion-stock',
            title: 'Gestion de Stock',
            translate: 'Gestion de Stock',
            type: 'item',
            icon: 'circle',
            url: 'stock/gestion'
          },
          {
            id: 'inventaire',
            title: 'Inventaire',
            translate: 'Inventaire',
            type: 'item',
            icon: 'circle',
            url: 'stock/inventaire'
          },
          {
            id: 'bon-transfert',
            title: 'Bon de Transfert',
            translate: 'Bon de Transfert',
            type: 'item',
            icon: 'circle',
            url: 'stock/bon-transfert'
          }
        ]
      }


    ]
  },
  
 
]
