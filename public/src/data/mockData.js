// src/data/mockData.js
export const mockUser = {
  id: 1,
  name: 'Sophie Martin',
  email: 'sophie.martin@techinnov.fr',
  company: 'Tech Innov SARL',
  siret: '12345678900012',
  phone: '+33 1 23 45 67 89',
  avatar: null,
  role: 'admin',
};

export const mockKPIs = {
  chiffreAffaires: 45600,
  chiffreAffairesEvolution: 12.5,
  tva: 9120,
  charges: 18450,
  resultat: 27150,
  documentsEnAttente: 12,
};

export const mockMonthlyData = [
  { month: 'Jan', CA: 38000, charges: 15000, resultat: 23000 },
  { month: 'Fév', CA: 42000, charges: 16800, resultat: 25200 },
  { month: 'Mar', CA: 45600, charges: 18450, resultat: 27150 },
  { month: 'Avr', CA: 48000, charges: 19200, resultat: 28800 },
  { month: 'Mai', CA: 52000, charges: 20800, resultat: 31200 },
  { month: 'Juin', CA: 55000, charges: 22000, resultat: 33000 },
];

export const mockDocuments = [
  {
    id: 1,
    name: 'Facture_Fournisseur_Mars.pdf',
    type: 'facture',
    month: 'Mars 2024',
    status: 'traité',
    size: '245 KB',
    date: '2024-03-15',
  },
  {
    id: 2,
    name: 'Releve_Bancaire_Fevrier.pdf',
    type: 'bancaire',
    month: 'Février 2024',
    status: 'en_attente',
    size: '512 KB',
    date: '2024-02-28',
  },
  {
    id: 3,
    name: 'Declaration_TVA_T1.pdf',
    type: 'fiscal',
    month: 'Mars 2024',
    status: 'envoyé',
    size: '128 KB',
    date: '2024-03-10',
  },
];

export const mockEvents = [
  {
    id: 1,
    title: 'Déclaration TVA',
    date: '2024-04-15',
    type: 'fiscal',
    priority: 'high',
    description: 'Déclaration de TVA du 1er trimestre',
  },
  {
    id: 2,
    title: 'Paiement URSSAF',
    date: '2024-04-20',
    type: 'social',
    priority: 'medium',
    description: 'Charges sociales mensuelles',
  },
  {
    id: 3,
    title: 'Bilan annuel',
    date: '2024-05-30',
    type: 'bilan',
    priority: 'high',
    description: 'Clôture de l\'exercice 2023',
  },
];