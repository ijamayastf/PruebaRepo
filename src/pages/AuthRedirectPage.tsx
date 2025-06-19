import { useEffect, useRef } from 'react';



export const AuthRedirectPage = () => {

    const hasFetched = useRef(false);

    useEffect(() => {
        const Autenticate = async () => {
            if (!hasFetched.current) {
                hasFetched.current = true;
                let urltoOpen2 = ``// `http://localhost:5173/web/authenticating` //`https://integra.stefanini.com:2110/web/authenticating`
                
                if(import.meta.env.VITE_NODE_ENV=='desarrollo'){
                    urltoOpen2 = `${import.meta.env.VITE_PORT_WEBAPP_DEV}/authenticating`
                }
                if(import.meta.env.VITE_NODE_ENV=='pruebas'){
                    urltoOpen2 = `${import.meta.env.VITE_PORT_WEBAPP_PRB}/authenticating`
                }
                if(import.meta.env.VITE_NODE_ENV=='produccion'){
                    urltoOpen2 = `${import.meta.env.VITE_PORT_WEBAPP_PRD}/authenticating`
                }

                window.location.href = `${import.meta.env.VITE_PORT_API_PRD}/auth/login?returnUrl=${encodeURIComponent(urltoOpen2)}&appToUse=1`;

            }
        }
        Autenticate();

    }, []);


    useEffect(() => {

        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get('token'); // Extraemos el token de la URL

        if (token) {
            // Enviar el token de vuelta a la ventana principal
            if (window.opener) {
                window.opener.postMessage({ token }, window.location.origin); // Enviamos el token
            }

            // Cerrar la ventana secundaria
            window.close();
        }
    }, []);


    return <div>Redirigiendo...</div>;
};

