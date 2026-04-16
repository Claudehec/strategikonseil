// pages/DocumentUpload.jsx
import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { 
  Upload, 
  FileText, 
  CheckCircle, 
  Clock, 
  AlertCircle,
  Folder,
  Calendar,
  Search,
  Filter,
  Download,
  Trash2
} from 'lucide-react';
import './DocumentUpload.css';

const DocumentUpload = () => {
  const [files, setFiles] = useState([
    { id: 1, name: 'Facture_001.pdf', month: 'Mars 2024', type: 'facture', status: 'traité', size: '245 KB', date: '2024-03-15' },
    { id: 2, name: 'Recu_Fournisseur.pdf', month: 'Mars 2024', type: 'recu', status: 'envoyé', size: '128 KB', date: '2024-03-14' },
    { id: 3, name: 'Declaration_TVA_T1.pdf', month: 'Mars 2024', type: 'fiscal', status: 'en_attente', size: '512 KB', date: '2024-03-10' },
    { id: 4, name: 'Facture_002.pdf', month: 'Février 2024', type: 'facture', status: 'traité', size: '189 KB', date: '2024-02-28' },
  ]);

  const [selectedMonth, setSelectedMonth] = useState('Mars 2024');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('tous');

  const onDrop = useCallback((acceptedFiles) => {
    const newFiles = acceptedFiles.map((file, index) => ({
      id: files.length + index + 1,
      name: file.name,
      month: selectedMonth,
      type: getFileType(file.name),
      status: 'envoyé',
      size: `${(file.size / 1024).toFixed(0)} KB`,
      date: new Date().toISOString().split('T')[0]
    }));
    setFiles([...newFiles, ...files]);
  }, [files, selectedMonth]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const getFileType = (filename) => {
    if (filename.toLowerCase().includes('facture')) return 'facture';
    if (filename.toLowerCase().includes('recu')) return 'recu';
    return 'fiscal';
  };

  const getStatusBadge = (status) => {
    const badges = {
      'traité': { class: 'success', icon: CheckCircle, text: 'Traité' },
      'envoyé': { class: 'info', icon: Clock, text: 'Envoyé' },
      'en_attente': { class: 'warning', icon: AlertCircle, text: 'En attente' }
    };
    const badge = badges[status];
    const Icon = badge.icon;
    return (
      <span className={`status-badge status-${badge.class}`}>
        <Icon size={14} />
        {badge.text}
      </span>
    );
  };

  const filteredFiles = files.filter(file => {
    const matchesMonth = file.month === selectedMonth;
    const matchesSearch = file.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'tous' || file.type === filterType;
    return matchesMonth && matchesSearch && matchesType;
  });

  const months = ['Mars 2024', 'Février 2024', 'Janvier 2024', 'Décembre 2023'];

  return (
    <div className="document-upload fade-in">
      <div className="container">
        <div className="page-header">
          <h1>Dépôt de documents</h1>
          <p>Glissez-déposez vos fichiers pour les partager avec votre expert-comptable</p>
        </div>

        {/* Upload Zone */}
        <div className="upload-section">
          <div 
            {...getRootProps()} 
            className={`dropzone ${isDragActive ? 'active' : ''}`}
          >
            <input {...getInputProps()} />
            <div className="dropzone-content">
              <div className="upload-icon">
                <Upload size={48} />
              </div>
              <h3>Glissez-déposez vos fichiers ici</h3>
              <p>ou cliquez pour sélectionner</p>
              <span className="upload-hint">
                PDF, Excel, Word, Images (max 10MB)
              </span>
            </div>
          </div>
        </div>

        {/* Organization Section */}
        <div className="organization-section">
          <div className="month-selector">
            <h3>
              <Calendar size={20} />
              Organisation par mois
            </h3>
            <div className="month-buttons">
              {months.map(month => (
                <button
                  key={month}
                  className={`month-btn ${selectedMonth === month ? 'active' : ''}`}
                  onClick={() => setSelectedMonth(month)}
                >
                  <Folder size={16} />
                  {month}
                </button>
              ))}
            </div>
          </div>

          {/* Filters */}
          <div className="filters-bar">
            <div className="search-box">
              <Search size={18} />
              <input
                type="text"
                placeholder="Rechercher un document..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="filter-buttons">
              <button 
                className={`filter-btn ${filterType === 'tous' ? 'active' : ''}`}
                onClick={() => setFilterType('tous')}
              >
                Tous
              </button>
              <button 
                className={`filter-btn ${filterType === 'facture' ? 'active' : ''}`}
                onClick={() => setFilterType('facture')}
              >
                Factures
              </button>
              <button 
                className={`filter-btn ${filterType === 'recu' ? 'active' : ''}`}
                onClick={() => setFilterType('recu')}
              >
                Reçus
              </button>
              <button 
                className={`filter-btn ${filterType === 'fiscal' ? 'active' : ''}`}
                onClick={() => setFilterType('fiscal')}
              >
                Fiscaux
              </button>
            </div>
          </div>

          {/* Files List */}
          <div className="files-section card">
            <div className="files-header">
              <div className="files-stats">
                <span>{filteredFiles.length} documents</span>
                <span className="stat-separator">•</span>
                <span>Mars 2024</span>
              </div>
              <button className="btn-outline-sm">
                <Download size={16} />
                Exporter la liste
              </button>
            </div>

            <div className="files-list">
              {filteredFiles.length === 0 ? (
                <div className="empty-state">
                  <FileText size={48} />
                  <p>Aucun document trouvé</p>
                  <span>Commencez par déposer vos fichiers</span>
                </div>
              ) : (
                filteredFiles.map(file => (
                  <div key={file.id} className="file-item">
                    <div className="file-info">
                      <div className="file-icon">
                        <FileText size={20} />
                      </div>
                      <div className="file-details">
                        <h4>{file.name}</h4>
                        <div className="file-meta">
                          <span>{file.size}</span>
                          <span>•</span>
                          <span>{file.date}</span>
                          <span>•</span>
                          <span className="file-type-badge">{file.type}</span>
                        </div>
                      </div>
                    </div>
                    <div className="file-actions">
                      {getStatusBadge(file.status)}
                      <button className="action-btn" title="Télécharger">
                        <Download size={16} />
                      </button>
                      <button className="action-btn delete" title="Supprimer">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Auto-organization Info */}
        <div className="auto-org-info">
          <div className="info-card">
            <CheckCircle size={24} className="text-green" />
            <div>
              <h4>Organisation automatique</h4>
              <p>Vos documents sont automatiquement classés par mois et par type pour une gestion simplifiée</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentUpload;