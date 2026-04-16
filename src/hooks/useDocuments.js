// src/hooks/useDocuments.js
import { useState, useCallback } from 'react';

export const useDocuments = () => {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const uploadDocument = useCallback(async (file, metadata) => {
    setLoading(true);
    try {
      // Simulation d'upload
      const newDoc = {
        id: Date.now(),
        name: file.name,
        size: file.size,
        type: metadata.type,
        month: metadata.month,
        status: 'envoyé',
        uploadDate: new Date().toISOString(),
      };
      
      setDocuments(prev => [newDoc, ...prev]);
      return newDoc;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const deleteDocument = useCallback(async (id) => {
    setLoading(true);
    try {
      setDocuments(prev => prev.filter(doc => doc.id !== id));
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const updateDocumentStatus = useCallback((id, status) => {
    setDocuments(prev => 
      prev.map(doc => doc.id === id ? { ...doc, status } : doc)
    );
  }, []);

  return {
    documents,
    loading,
    error,
    uploadDocument,
    deleteDocument,
    updateDocumentStatus,
  };
};