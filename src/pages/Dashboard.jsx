// pages/Dashboard.jsx
import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, 
  DollarSign, 
  FileText, 
  AlertCircle,
  Calendar,
  ChevronRight,
  Download,
  Bell
} from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './Dashboard.css';

const Dashboard = () => {
  const [data, setData] = useState({
    chiffreAffaires: 45600,
    tva: 9120,
    charges: 18450,
    documents: 12,
    evolution: '+12.5%'
  });

  const monthlyData = [
    { month: 'Jan', CA: 38000, charges: 15000 },
    { month: 'Fév', CA: 42000, charges: 16800 },
    { month: 'Mar', CA: 45600, charges: 18450 },
    { month: 'Avr', CA: 48000, charges: 19200 },
    { month: 'Mai', CA: 52000, charges: 20800 },
    { month: 'Juin', CA: 55000, charges: 22000 },
  ];

  const recentDocuments = [
    { id: 1, name: 'Facture_Fournisseur_Mars.pdf', date: '2024-03-15', status: 'traité' },
    { id: 2, name: 'Releve_Bancaire_Fevrier.pdf', date: '2024-03-10', status: 'en_attente' },
    { id: 3, name: 'Declaration_TVA_T1.pdf', date: '2024-03-05', status: 'envoyé' },
  ];

  const upcomingDeadlines = [
    { id: 1, title: 'Déclaration TVA', date: '2024-04-15', urgent: true },
    { id: 2, title: 'Paiement charges sociales', date: '2024-04-20', urgent: false },
    { id: 3, title: 'Bilan annuel', date: '2024-05-30', urgent: false },
  ];

  return (
    <div className="dashboard fade-in">
      <div className="container">
        {/* Header */}
        <div className="dashboard-header">
          <div>
            <h1>Bonjour, Sophie Martin</h1>
            <p>Voici votre tableau de bord en temps réel</p>
          </div>
          <div className="header-actions">
            <button className="btn-notification">
              <Bell size={20} />
              <span className="notification-badge">3</span>
            </button>
            <button className="btn btn-outline">
              <Download size={18} />
              Exporter
            </button>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="kpi-grid">
          <div className="kpi-card">
            <div className="kpi-icon blue">
              <TrendingUp size={24} />
            </div>
            <div className="kpi-content">
              <p className="kpi-label">Chiffre d'affaires</p>
              <h3 className="kpi-value">{data.chiffreAffaires.toLocaleString()} €</h3>
              <span className="kpi-evolution positive">{data.evolution}</span>
            </div>
          </div>

          <div className="kpi-card">
            <div className="kpi-icon green">
              <DollarSign size={24} />
            </div>
            <div className="kpi-content">
              <p className="kpi-label">TVA à payer</p>
              <h3 className="kpi-value">{data.tva.toLocaleString()} €</h3>
              <span className="kpi-deadline">Échéance: 15 Avril</span>
            </div>
          </div>

          <div className="kpi-card">
            <div className="kpi-icon orange">
              <FileText size={24} />
            </div>
            <div className="kpi-content">
              <p className="kpi-label">Charges sociales</p>
              <h3 className="kpi-value">{data.charges.toLocaleString()} €</h3>
              <span className="kpi-deadline">Prochaine: 20 Avril</span>
            </div>
          </div>

          <div className="kpi-card">
            <div className="kpi-icon purple">
              <AlertCircle size={24} />
            </div>
            <div className="kpi-content">
              <p className="kpi-label">Documents en attente</p>
              <h3 className="kpi-value">{data.documents}</h3>
              <span className="kpi-warning">Action requise</span>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="charts-section">
          <div className="chart-card card">
            <div className="chart-header">
              <h3>Évolution du chiffre d'affaires</h3>
              <button className="btn-text">Détails <ChevronRight size={16} /></button>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip 
                  contentStyle={{ 
                    background: 'white', 
                    border: 'none', 
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="CA" 
                  stroke="#1e3a8a" 
                  strokeWidth={3}
                  dot={{ fill: '#1e3a8a', strokeWidth: 2 }}
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="chart-card card">
            <div className="chart-header">
              <h3>Charges vs Chiffre d'affaires</h3>
              <button className="btn-text">Détails <ChevronRight size={16} /></button>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip 
                  contentStyle={{ 
                    background: 'white', 
                    border: 'none', 
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                  }}
                />
                <Bar dataKey="CA" fill="#1e3a8a" radius={[8, 8, 0, 0]} />
                <Bar dataKey="charges" fill="#10b981" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bottom-section">
          {/* Recent Documents */}
          <div className="card recent-documents">
            <div className="card-header">
              <h3>Documents récents</h3>
              <button className="btn-text">Voir tout</button>
            </div>
            <div className="documents-list">
              {recentDocuments.map(doc => (
                <div key={doc.id} className="document-item">
                  <div className="document-info">
                    <FileText size={20} className="doc-icon" />
                    <div>
                      <p className="doc-name">{doc.name}</p>
                      <span className="doc-date">{doc.date}</span>
                    </div>
                  </div>
                  <span className={`badge badge-${doc.status === 'traité' ? 'success' : doc.status === 'envoyé' ? 'info' : 'warning'}`}>
                    {doc.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Deadlines */}
          <div className="card upcoming-deadlines">
            <div className="card-header">
              <h3>Échéances à venir</h3>
              <button className="btn-text">Voir calendrier</button>
            </div>
            <div className="deadlines-list">
              {upcomingDeadlines.map(deadline => (
                <div key={deadline.id} className={`deadline-item ${deadline.urgent ? 'urgent' : ''}`}>
                  <div className="deadline-info">
                    <Calendar size={18} />
                    <div>
                      <p className="deadline-title">{deadline.title}</p>
                      <span className="deadline-date">{deadline.date}</span>
                    </div>
                  </div>
                  {deadline.urgent && (
                    <span className="badge badge-warning">Urgent</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;