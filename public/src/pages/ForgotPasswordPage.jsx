// src/pages/ForgotPasswordPage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowLeft, CheckCircle } from 'lucide-react';
import './ForgotPasswordPage.css';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simuler l'envoi d'email
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <div className="forgot-password-page">
      <div className="forgot-password-container">
        <Link to="/login" className="back-link">
          <ArrowLeft size={18} />
          Retour à la connexion
        </Link>

        <div className="forgot-password-card">
          {!isSubmitted ? (
            <>
              <div className="card-header">
                <h1>Mot de passe oublié ?</h1>
                <p>
                  Entrez votre adresse email et nous vous enverrons un lien
                  pour réinitialiser votre mot de passe.
                </p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>
                    <Mail size={16} />
                    Email professionnel
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="exemple@entreprise.fr"
                    required
                  />
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary btn-block"
                  disabled={loading}
                >
                  {loading ? (
                    <div className="spinner-small"></div>
                  ) : (
                    'Envoyer le lien'
                  )}
                </button>
              </form>
            </>
          ) : (
            <div className="success-message">
              <div className="success-icon">
                <CheckCircle size={48} />
              </div>
              <h2>Email envoyé !</h2>
              <p>
                Si un compte existe avec l'adresse <strong>{email}</strong>,
                vous recevrez un email avec les instructions pour réinitialiser
                votre mot de passe.
              </p>
              <p className="help-text">
                Vous n'avez pas reçu l'email ? Vérifiez vos spams ou{' '}
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="link-button"
                >
                  réessayez
                </button>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;