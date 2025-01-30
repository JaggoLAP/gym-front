const authService = {
    login: async (email, password) => {
      if (!email || !password) {
        throw new Error('Email and password are required');
      }
  
      try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/auth/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });
  
        if (!response.ok) {
          throw new Error('Login failed');
        }
  
        const data = await response.json();
        console.log('authService - data: ', data);
  
      if (response.status === 200) {

        localStorage.setItem('user', JSON.stringify({
          email: email,
        }));
        console.log('Inicio de sesión exitoso');
        return { email }; 
      } else {
        throw new Error('No se pudo iniciar sesión');
      }
      } catch (error) {
        console.error('Login error:', error);
        throw error;
      }
    },
  
    logout: () => {
      localStorage.removeItem('user');
    },
  
    getCurrentUser: () => {
      return JSON.parse(localStorage.getItem('user'));
    },
  };
  
  export default authService;