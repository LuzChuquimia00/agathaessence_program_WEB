import React from 'react';

function BackgroundLogo() {
  const backgroundStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundImage: `url('/background.png')`,  // Asegúrate de que la ruta sea correcta
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    zIndex: -1,
  };

  return <div style={backgroundStyle}></div>;
}

export default BackgroundLogo;
