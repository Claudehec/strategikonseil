// pages/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Upload, 
  Calendar, 
  TrendingUp, 
  Clock,
  ChevronRight,
  CheckCircle,
  BarChart3,
  Users,
  FileText
} from 'lucide-react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage fade-in">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="badge badge-success">Nouveau</span>
              <span>Espace Collaboratif disponible</span>
            </div>
            <h1 className="hero-title">
              Votre comptabilité
              <span className="text-gradient"> simplifiée et sécurisée</span>
            </h1>
            <p className="hero-subtitle">
              StrategiKonseil révolutionne la collaboration avec votre expert-comptable. 
              Fini les emails, place à une plateforme intuitive et professionnelle.
            </p>
            <div className="hero-cta">
              <Link to="/login" className="btn btn-primary btn-large">
                Accéder à l'Espace Collaboratif
                <ChevronRight size={20} />
              </Link>
              <button className="btn btn-outline btn-large">
                Découvrir nos services
              </button>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">98%</div>
                <div className="stat-label">Satisfaction client</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">500+</div>
                <div className="stat-label">PME accompagnées</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Accès sécurisé</div>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="dashboard-preview">
              <div className="preview-header">
                <div className="preview-dots">
                  <span></span><span></span><span></span>
                </div>
              </div>
              <div className="preview-content">
                <div className="chart-bars">
                  <div className="bar" style={{height: '60px'}}></div>
                  <div className="bar" style={{height: '90px'}}></div>
                  <div className="bar" style={{height: '75px'}}></div>
                  <div className="bar" style={{height: '110px'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="section-header">
            <h2>Une plateforme conçue pour votre sérénité</h2>
            <p>Centralisez tous vos échanges comptables dans un espace unique et sécurisé</p>
          </div>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon blue">
                <Upload size={28} />
              </div>
              <h3>Dépôt simplifié</h3>
              <p>Glissez-déposez vos documents, ils sont automatiquement classés par mois et par type</p>
              <Link to="/documents" className="feature-link">
                En savoir plus <ChevronRight size={16} />
              </Link>
            </div>

            <div className="feature-card">
              <div className="feature-icon green">
                <BarChart3 size={28} />
              </div>
              <h3>Suivi en temps réel</h3>
              <p>Visualisez votre CA, TVA et charges sociales sur un tableau de bord intuitif</p>
              <Link to="/dashboard" className="feature-link">
                En savoir plus <ChevronRight size={16} />
              </Link>
            </div>

            <div className="feature-card">
              <div className="feature-icon blue">
                <Calendar size={28} />
              </div>
              <h3>Calendrier fiscal</h3>
              <p>Ne manquez plus aucune échéance avec notre calendrier partagé et ses alertes</p>
              <Link to="/calendar" className="feature-link">
                En savoir plus <ChevronRight size={16} />
              </Link>
            </div>

            <div className="feature-card">
              <div className="feature-icon green">
                <Clock size={28} />
              </div>
              <h3>Automatisation</h3>
              <p>Rappels automatiques et notifications pour les documents manquants</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon blue">
                <Shield size={28} />
              </div>
              <h3>Sécurité maximale</h3>
              <p>Données cryptées et accès sécurisé conforme aux normes RGPD</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon green">
                <Users size={28} />
              </div>
              <h3>Collaboration fluide</h3>
              <p>Échangez directement avec votre expert-comptable via la plateforme</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="how-it-works">
        <div className="container">
          <div className="section-header">
            <h2>Comment ça marche ?</h2>
            <p>Trois étapes simples pour révolutionner votre gestion comptable</p>
          </div>
          
          <div className="steps">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-icon">
                <FileText size={32} />
              </div>
              <h3>Connectez-vous</h3>
              <p>Accédez à votre espace sécurisé avec vos identifiants personnels</p>
            </div>
            
            <div className="step-connector"></div>
            
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-icon">
                <Upload size={32} />
              </div>
              <h3>Déposez vos documents</h3>
              <p>Glissez-déposez vos factures, reçus et documents fiscaux</p>
            </div>
            
            <div className="step-connector"></div>
            
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-icon">
                <CheckCircle size={32} />
              </div>
              <h3>Suivez en temps réel</h3>
              <p>Visualisez vos indicateurs et échangez avec votre comptable</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-card">
            <h2>Prêt à simplifier votre comptabilité ?</h2>
            <p>Rejoignez les centaines d'entrepreneurs qui nous font confiance</p>
            <Link to="/login" className="btn btn-primary btn-large">
              Accéder à mon espace
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;