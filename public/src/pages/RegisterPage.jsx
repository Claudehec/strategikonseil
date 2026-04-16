// src/pages/RegisterPage.jsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  Mail, 
  Lock, 
  User, 
  Building, 
  Phone,
  Eye, 
  EyeOff,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import './RegisterPage.css';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (formData.password !== formData.confirmPassword) {
      setError('Les mots de passe ne correspondent pas');
      return;
    }

    setLoading(true);
    
    // Simuler l'inscription
    setTimeout(() => {
      setLoading(false);
      navigate('/login');
    }, 1500);
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <div className="register-card">
          <div className="register-header">
            <Link to="/" className="register-logo">
              <span className="brand-text">Strategi</span>
              <span className="brand-highlight">Konseil</span>
            </Link>
            <h1>Créer un compte</h1>
            <p>Rejoignez l'Espace Collaboratif</p>
          </div>

          <form onSubmit={handleSubmit} className="register-form">
            {error && (
              <div className="error-alert">
                {error}
              </div>
            )}

            <div className="form-row">
              <div className="form-group">
                <label>
                  <User size={16} />
                  Nom complet
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Jean Dupont"
                  required
                />
              </div>

              <div className="form-group">
                <label>
                  <Mail size={16} />
                  Email professionnel
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="jean@entreprise.fr"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>
                  <Building size={16} />
                  Entreprise
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Nom de votre entreprise"
                  required
                />
              </div>

              <div className="form-group">
                <label>
                  <Phone size={16} />
                  Téléphone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+33 1 23 45 67 89"
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>
                  <Lock size={16} />
                  Mot de passe
                </label>
                <div className="password-input">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    required
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <div className="form-group">
                <label>
                  <Lock size={16} />
                  Confirmer
                </label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <div className="terms">
              <label className="checkbox-label">
                <input type="checkbox" required />
                <span>
                  J'accepte les{' '}
                  <Link to="/terms">conditions d'utilisation</Link>
                  {' '}et la{' '}
                  <Link to="/privacy">politique de confidentialité</Link>
                </span>
              </label>
            </div>

            <button 
              type="submit" 
              className="btn btn-primary btn-block"
              disabled={loading}
            >
              {loading ? (
                <div className="spinner-small"></div>
              ) : (
                <>
                  Créer mon compte
                  <ArrowRight size={18} />
                </>
              )}
            </button>

            <div className="register-footer">
              <p>
                Déjà un compte ?{' '}
                <Link to="/login" className="link-button">
                  Se connecter
                </Link>
              </p>
            </div>
          </form>
        </div>

        <div className="register-sidebar">
          <div className="sidebar-content">
            <h2>Pourquoi choisir StrategiKonseil ?</h2>
            <ul className="benefits-list">
              <li>
                <CheckCircle size={20} />
                <div>
                  <strong>Gain de temps</strong>
                  <p>Jusqu'à 5h/semaine économisées</p>
                </div>
              </li>
              <li>
                <CheckCircle size={20} />
                <div>
                  <strong>Sécurité garantie</strong>
                  <p>Données cryptées et sauvegardées</p>
                </div>
              </li>
              <li>
                <CheckCircle size={20} />
                <div>
                  <strong>Support dédié</strong>
                  <p>Une équipe d'experts à votre écoute</p>
                </div>
              </li>
              <li>
                <CheckCircle size={20} />
                <div>
                  <strong>Conformité fiscale</strong>
                  <p>100% conforme à la législation</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;