// src/routes/routeConfig.js
export const routes = {
  home: '/',
  login: '/login',
  register: '/register',
  forgotPassword: '/forgot-password',
  dashboard: '/dashboard',
  documents: '/documents',
  calendar: '/calendar',
  settings: '/settings',
};

export const publicRoutes = [
  routes.home,
  routes.login,
  routes.register,
  routes.forgotPassword,
];

export const protectedRoutes = [
  routes.dashboard,
  routes.documents,
  routes.calendar,
  routes.settings,
];

export const navigationLinks = [
  { path: routes.dashboard, label: 'Tableau de bord', icon: 'LayoutDashboard' },
  { path: routes.documents, label: 'Documents', icon: 'FileText' },
  { path: routes.calendar, label: 'Calendrier', icon: 'Calendar' },
  { path: routes.settings, label: 'Paramètres', icon: 'Settings' },
];