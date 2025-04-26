import axios from "axios";

const api = axios.create({
    baseURL:"http://localhost:5000",
    withCredentials:true,
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.response.use(
    response => response,
    async error => {
      const originalRequest = error.config;
  
      // If access token expired (401) and we haven't retried yet
      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        try {
          // Try to refresh the token
          await api.get("/v1/auth/access-token"); // This should set a new access token cookie
          return api(originalRequest); // Retry the original request
        } catch (refreshError) {
          // Redirect to login if refresh also fails
          // window.location.href = "/login";
          return Promise.reject(refreshError);
        }
      }
  
      return Promise.reject(error);
    }
  );

export default api;