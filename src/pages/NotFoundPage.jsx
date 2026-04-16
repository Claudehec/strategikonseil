// src/pages/NotFoundPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, FileSearch } from 'lucide-react';
import './NotFoundPage.css';

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <div className="not-found-container">
        <div className="not-found-content">
          <div className="error-code">404</div>
          <div className="error-icon">
            <FileSearch size={64} />
          </div>
          <h1>Page introuvable</h1>
          <p>
            Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
          </p>
          <div className="action-buttons">
            <button onClick={() => window.history.back()} className="btn btn-outline">
              <ArrowLeft size={18} />
              Retour
            </button>
            <Link to="/" className="btn btn-primary">
              <Home size={18} />
              Accueil
            </Link>
          </div>
          <div className="help-links">
            <p>Vous pouvez également :</p>
            <ul>
              <li><Link to="/dashboard">Accéder au tableau de bord</Link></li>
              <li><Link to="/documents">Voir vos documents</Link></li>
              <li><Link to="/contact">Contacter le support</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;