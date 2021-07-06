import api from '../api'

export const getContact = () => api.get(`/contact`)
export const postContact = (payload) => api.post(`/contact`, payload)
export const deleteContact = (id) => api.delete(`/contact/${id}`)
export const getDetailContact = (id) => api.get(`/contact/${id}`)
export const putContact = (id, payload) => api.put(`/contact/${id}`, payload)