// src/api.js
import axios from 'axios';
import { toast } from 'react-toastify';

const accessToken='eyJ4NXQiOiJNV1V4WW1Oa1pXSXdZVFEyTkRjeU1UVXdZelUxTlRReVlUbGpZekF5WmpNNU5EZ3haVFZrWkRGbE5tVmhORGt6WXpneVlqQXlNMk5pWlRBellqUTBZdyIsImtpZCI6Ik1XVXhZbU5rWldJd1lUUTJORGN5TVRVd1l6VTFOVFF5WVRsall6QXlaak01TkRneFpUVmtaREZsTm1WaE5Ea3pZemd5WWpBeU0yTmlaVEF6WWpRMFl3X1JTMjU2IiwidHlwIjoiYXQrand0IiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiJmMjc4ZTRkZi1lYjhhLTQ0NmUtYTUwMC0zMDU0ZDE3NTc2NTciLCJhdXQiOiJBUFBMSUNBVElPTiIsImF1ZCI6Ik1reGJ1aWJ4bmVCZG9TRGZYSE9fYm9JMFhGd2EiLCJuYmYiOjE3NTcwMTg0NjAsImF6cCI6Ik1reGJ1aWJ4bmVCZG9TRGZYSE9fYm9JMFhGd2EiLCJzY29wZSI6ImRlZmF1bHQiLCJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo5NDQzL29hdXRoMi90b2tlbiIsImV4cCI6MTc1NzAyMjA2MCwiaWF0IjoxNzU3MDE4NDYwLCJqdGkiOiJiMTg5MjYyZS1hZTMwLTQ2NzQtYWEyNy05MTA2NWVhY2ViNDYiLCJjbGllbnRfaWQiOiJNa3hidWlieG5lQmRvU0RmWEhPX2JvSTBYRndhIn0.cZgJUrb_-EhCJ7aMsC7uApLrhvM-RNUAiFlCjPwPySP29TMAkB4nYjxiF1ICKkXGApcm_znDSEOzO5kMn8XzwiEjqTiKvIeCqXUGlEsag0g_I4v3C_ilhmenrWYy8CRM4fGHjlNv-Dusj3mdkvi5KCjXNatEkwxqr6aY302NpEdiAECTzJGr1MejqbWNACWDyyUnGN5RR3CnKSvuwOrEIN4jQArJqpBwU4af6nbgn7J9IP0DjuenUUTrusEuynEQW0qb5Wx1u6ZNuLt0Tbk2CzxcZuvMb2dM7lfPtN1ynkutW5OJuhoigsvtuQCkRgTML4mRqaZAo0_OnJ-eFP4fZA'

const api = axios.create({
  baseURL: 'https://localhost:8243/smapi/v1/', // adjust your base URL
  headers: {
    Authorization: `Bearer ${accessToken}`, // 🔑 add token here
    'Content-Type': 'application/json',
  },
});

// Request interceptor → add token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor → handle errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const status = error.response.status;
      switch (status) {
        case 401:
          toast.error('Unauthorized! Please login again.');
          break;
        case 403:
          toast.error('Forbidden! You do not have permission.');
          break;
        case 404:
          toast.warning('Data not found.');
          break;
          case 429:
          toast.warning('You have exceeded your quota. For more API calls you need to buy Premium');
          break;
        case 500:
          toast.error('Server error! Please try again later.');
          break;
        default:
          toast.error(error.response.data?.message || `Unexpected error (${status})`);
      }
    } else if (error.request) {
      toast.error('No response from server. Check your network.');
    } else {
      toast.error(`Error: ${error.message}`);
    }
    return Promise.reject(error);
  }
);

export default api;
