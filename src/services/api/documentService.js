// src/services/api/documentService.js
import axiosInstance from './axiosConfig';

export const documentService = {
  getAll: async (filters = {}) => {
    const response = await axiosInstance.get('/documents', { params: filters });
    return response.data;
  },

  getById: async (id) => {
    const response = await axiosInstance.get(`/documents/${id}`);
    return response.data;
  },

  upload: async (file, metadata) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('metadata', JSON.stringify(metadata));
    
    const response = await axiosInstance.post('/documents/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },

  delete: async (id) => {
    const response = await axiosInstance.delete(`/documents/${id}`);
    return response.data;
  },

  updateStatus: async (id, status) => {
    const response = await axiosInstance.patch(`/documents/${id}/status`, { status });
    return response.data;
  },

  download: async (id) => {
    const response = await axiosInstance.get(`/documents/${id}/download`, {
      responseType: 'blob',
    });
    return response.data;
  },
};