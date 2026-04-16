// pages/LoginPage.jsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  Shield, 
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import './LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await login(email, password);
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-card">
          <div className="login-header">
            <Link to="/" className="login-logo">
              <span className="brand-text">Strategi</span>
              <span className="brand-highlight">Konseil</span>
            </Link>
            <h1>{isLogin ? 'Connexion' : 'Créer un compte'}</h1>
            <p>Accédez à votre Espace Collaboratif</p>
          </div>

          <form onSubmit={handleSubmit} className="login-form">
            {error && (
              <div className="error-alert">
                <Shield size={18} />
                {error}
              </div>
            )}

            <div className="form-group">
              <label htmlFor="email">Email professionnel</label>
              <div className="input-with-icon">
                <Mail size={18} className="input-icon" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="exemple@entreprise.fr"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="password">Mot de passe</label>
              <div className="input-with-icon">
                <Lock size={18} className="input-icon" />
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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

            <div className="form-options">
              <label className="checkbox-label">
                <input type="checkbox" />
                <span>Se souvenir de moi</span>
              </label>
              <Link to="/forgot-password" className="forgot-password">
                Mot de passe oublié ?
              </Link>
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
                  {isLogin ? 'Se connecter' : 'Créer mon compte'}
                  <ArrowRight size={18} />
                </>
              )}
            </button>

            <div className="login-footer">
              <p>
                {isLogin ? "Pas encore de compte ?" : "Déjà un compte ?"}
                <button
                  type="button"
                  className="link-button"
                  onClick={() => setIsLogin(!isLogin)}
                >
                  {isLogin ? 'Contactez-nous' : 'Se connecter'}
                </button>
              </p>
            </div>
          </form>

          <div className="security-info">
            <div className="security-badge">
              <CheckCircle size={16} />
              <span>Connexion sécurisée SSL</span>
            </div>
            <div className="security-badge">
              <Shield size={16} />
              <span>Données cryptées</span>
            </div>
          </div>
        </div>

        <div className="login-sidebar">
          <div className="sidebar-content">
            <h2>Votre espace collaboratif sécurisé</h2>
            <ul className="features-list">
              <li>
                <CheckCircle size={20} />
                <span>Dépôt de documents simplifié</span>
              </li>
              <li>
                <CheckCircle size={20} />
                <span>Tableau de bord en temps réel</span>
              </li>
              <li>
                <CheckCircle size={20} />
                <span>Calendrier fiscal partagé</span>
              </li>
              <li>
                <CheckCircle size={20} />
                <span>Échanges sécurisés avec votre expert</span>
              </li>
            </ul>
            <div className="testimonial">
              <p>"StrategiKonseil a révolutionné notre gestion comptable. Un gain de temps considérable !"</p>
              <div className="testimonial-author">
                <strong>Marie Dubois</strong>
                <span>Dirigeante PME</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;