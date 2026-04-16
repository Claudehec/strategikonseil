// pages/Settings.jsx
import React, { useState } from 'react';
import { 
  User, 
  Bell, 
  Shield, 
  Globe, 
  CreditCard,
  Save,
  Mail,
  Building,
  Phone
} from 'lucide-react';
import './Settings.css';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [formData, setFormData] = useState({
    name: 'Sophie Martin',
    email: 'sophie.martin@techinnov.fr',
    company: 'Tech Innov SARL',
    phone: '+33 1 23 45 67 89',
    siret: '123 456 789 00012'
  });

  const [notifications, setNotifications] = useState({
    documents: true,
    deadlines: true,
    messages: true,
    newsletter: false
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleNotificationChange = (e) => {
    setNotifications({
      ...notifications,
      [e.target.name]: e.target.checked
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save settings
    alert('Paramètres sauvegardés avec succès !');
  };

  return (
    <div className="settings-page fade-in">
      <div className="container">
        <div className="page-header">
          <h1>Paramètres</h1>
          <p>Gérez vos préférences et informations personnelles</p>
        </div>

        <div className="settings-layout">
          <div className="settings-sidebar card">
            <nav className="settings-nav">
              <button 
                className={`settings-nav-item ${activeTab === 'profile' ? 'active' : ''}`}
                onClick={() => setActiveTab('profile')}
              >
                <User size={18} />
                Profil
              </button>
              <button 
                className={`settings-nav-item ${activeTab === 'notifications' ? 'active' : ''}`}
                onClick={() => setActiveTab('notifications')}
              >
                <Bell size={18} />
                Notifications
              </button>
              <button 
                className={`settings-nav-item ${activeTab === 'security' ? 'active' : ''}`}
                onClick={() => setActiveTab('security')}
              >
                <Shield size={18} />
                Sécurité
              </button>
              <button 
                className={`settings-nav-item ${activeTab === 'billing' ? 'active' : ''}`}
                onClick={() => setActiveTab('billing')}
              >
                <CreditCard size={18} />
                Facturation
              </button>
            </nav>
          </div>

          <div className="settings-content card">
            {activeTab === 'profile' && (
              <form onSubmit={handleSubmit} className="settings-form">
                <h2>Informations du profil</h2>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">
                      <User size={16} />
                      Nom complet
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      className="input-field"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">
                      <Mail size={16} />
                      Email professionnel
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="input-field"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="company">
                      <Building size={16} />
                      Entreprise
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      className="input-field"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="siret">
                      <Globe size={16} />
                      SIRET
                    </label>
                    <input
                      id="siret"
                      name="siret"
                      type="text"
                      value={formData.siret}
                      onChange={handleChange}
                      className="input-field"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="phone">
                    <Phone size={16} />
                    Téléphone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="input-field"
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  <Save size={18} />
                  Sauvegarder les modifications
                </button>
              </form>
            )}

            {activeTab === 'notifications' && (
              <div className="settings-section">
                <h2>Préférences de notifications</h2>
                
                <div className="notification-options">
                  <label className="checkbox-card">
                    <input
                      type="checkbox"
                      name="documents"
                      checked={notifications.documents}
                      onChange={handleNotificationChange}
                    />
                    <div className="checkbox-content">
                      <strong>Documents déposés</strong>
                      <p>Recevoir une notification quand un document est traité</p>
                    </div>
                  </label>

                  <label className="checkbox-card">
                    <input
                      type="checkbox"
                      name="deadlines"
                      checked={notifications.deadlines}
                      onChange={handleNotificationChange}
                    />
                    <div className="checkbox-content">
                      <strong>Échéances fiscales</strong>
                      <p>Rappels avant les dates limites importantes</p>
                    </div>
                  </label>

                  <label className="checkbox-card">
                    <input
                      type="checkbox"
                      name="messages"
                      checked={notifications.messages}
                      onChange={handleNotificationChange}
                    />
                    <div className="checkbox-content">
                      <strong>Messages du comptable</strong>
                      <p>Notifications pour les nouveaux messages</p>
                    </div>
                  </label>

                  <label className="checkbox-card">
                    <input
                      type="checkbox"
                      name="newsletter"
                      checked={notifications.newsletter}
                      onChange={handleNotificationChange}
                    />
                    <div className="checkbox-content">
                      <strong>Newsletter</strong>
                      <p>Actualités et conseils fiscaux</p>
                    </div>
                  </label>
                </div>

                <button onClick={handleSubmit} className="btn btn-primary">
                  <Save size={18} />
                  Sauvegarder les préférences
                </button>
              </div>
            )}

            {activeTab === 'security' && (
              <div className="settings-section">
                <h2>Sécurité du compte</h2>
                
                <div className="security-options">
                  <button className="btn btn-outline btn-block">
                    Changer le mot de passe
                  </button>
                  
                  <button className="btn btn-outline btn-block">
                    Activer l'authentification à deux facteurs
                  </button>
                  
                  <div className="security-info-box">
                    <Shield size={24} className="text-green" />
                    <div>
                      <h4>Votre compte est sécurisé</h4>
                      <p>Dernière connexion : Aujourd'hui à 09:30</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'billing' && (
              <div className="settings-section">
                <h2>Facturation et abonnement</h2>
                
                <div className="billing-info">
                  <div className="current-plan">
                    <h3>Plan Professionnel</h3>
                    <p className="plan-price">49€ / mois</p>
                    <ul className="plan-features">
                      <li>Accès illimité aux documents</li>
                      <li>Support prioritaire</li>
                      <li>Rapports avancés</li>
                    </ul>
                  </div>
                  
                  <div className="billing-history">
                    <h4>Historique de facturation</h4>
                    <div className="invoice-item">
                      <span>Mars 2024</span>
                      <span>49,00 €</span>
                      <button className="btn-text">Télécharger</button>
                    </div>
                    <div className="invoice-item">
                      <span>Février 2024</span>
                      <span>49,00 €</span>
                      <button className="btn-text">Télécharger</button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;