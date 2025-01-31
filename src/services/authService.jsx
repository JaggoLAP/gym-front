const authService = {

    getSocioIdByEmail: async (email) => {
        try {
          console.log('1- email: ', email);
          //console.log('2- direccion_web: ', (`$import.meta.env.VITE_API_BASE_URL}/socios/email/${email}`));
          //const socio = await Socio.findOne({ email });
          const response1 = await fetch(`${import.meta.env.VITE_API_BASE_URL}/socios/email/${email}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            console.log('3- response: ', response1);
            if (!response1.ok) {
                throw new Error('Failed to fetch socio data');
            }
            //console.log('4- response ok ?: ',response1.json());
            const socioData = await response1.json();
            console.log('5- socioData: ', socioData);
            if (socioData && socioData.id) {
              console.log('6- socioData 1: ', socioData.id);
              return socioData.id;
              
            } else {
              throw new Error('No se encontraron datos del socio');
            }
            //return socioData.id;
        } catch (error) {
            console.error('Error al obtener el ID del socio: ', error);
            throw error;
        }
    },


    login: async (email, password) => {
      if (!email || !password) {
        throw new Error('Email y password son necesarios');
      }
  
      try {
        const passwordStr = String(password);
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password: passwordStr }),
        });
  
        if (!response.ok) {
          throw new Error('Login failed');
        }
  
        //const data = await response.json();
        
        
      if (response.status === 200) {
        try {
          const socioId = await authService.getSocioIdByEmail(email);
          console.log('7- socioId: ', socioId);
          localStorage.setItem('user', JSON.stringify({
            email: email,
            socioId: socioId
          }));

          const userData = JSON.parse(localStorage.getItem('user'));
          console.log('8- localStorage email: ', userData.email);
          console.log('9- localStorage socioId: ', userData.socioId);

          console.log('Inicio de sesión exitoso');
          return { email }; 
        
        } catch (error) {
          console.error('Error al obtener ID del socio:', error);
          throw error;
        }

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