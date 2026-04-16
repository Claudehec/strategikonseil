// src/utils/constants.js
export const DOCUMENT_TYPES = {
  FACTURE: 'facture',
  RECU: 'recu',
  FISCAL: 'fiscal',
  BANCAIRE: 'bancaire',
  CONTRAT: 'contrat',
};

export const DOCUMENT_STATUS = {
  EN_ATTENTE: 'en_attente',
  ENVOYE: 'envoye',
  TRAITE: 'traite',
  REJETE: 'rejete',
};

export const MONTHS = [
  'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
  'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
];

export const FISCAL_DEADLINES = {
  TVA: 'Déclaration TVA',
  IS: 'Impôt sur les sociétés',
  CFE: 'Cotisation Foncière des Entreprises',
  CVAE: 'Cotisation sur la Valeur Ajoutée',
  URSSAF: 'Charges sociales',
  BILAN: 'Bilan annuel',
};

export const API_ENDPOINTS = {
  AUTH: '/auth',
  DOCUMENTS: '/documents',
  DASHBOARD: '/dashboard',
  CALENDAR: '/calendar',
  USERS: '/users',
};

export const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
export const ALLOWED_FILE_TYPES = ['.pdf', '.doc', '.docx', '.xls', '.xlsx', '.jpg', '.png'];