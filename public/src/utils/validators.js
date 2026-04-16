// src/utils/validators.js
export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export const validatePhone = (phone) => {
  const re = /^(\+\d{1,3}[- ]?)?\d{10}$/;
  return re.test(phone.replace(/\s/g, ''));
};

export const validateSIRET = (siret) => {
  const re = /^\d{14}$/;
  return re.test(siret.replace(/\s/g, ''));
};

export const validatePassword = (password) => {
  // Au moins 8 caractères, 1 majuscule, 1 minuscule, 1 chiffre
  const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  return re.test(password);
};

export const validateFileType = (file, allowedTypes) => {
  const extension = '.' + file.name.split('.').pop().toLowerCase();
  return allowedTypes.includes(extension);
};

export const validateFileSize = (file, maxSize) => {
  return file.size <= maxSize;
};