import './App.css';
import Redes from './componentes/item-redes';
import Logo from './imagenes/logo-brask.jpg';
import Descripcion from './componentes/description';

function App() {
  return (
    <div className='App'>
      <div className='base-tamaño'>
        <div className='logo-pagina'>
          <img 
            src={Logo}
            className='imagen-logo'
            alt='Logo de Brask'
          />
        </div>
        <div className='descripcion'>
          <Descripcion />
        </div>
        <div></div>
        <div></div>
        <div className='item-redes'>
          <Redes
          imagen='insta'
          nombre='Instagram'
          texto='Sigueme para más contenido por medio de instagram' />
          <Redes 
          imagen='twitter'
          nombre='Twitter'
          texto='Sigueme para más contenido por medio de Twitter' />
          <Redes 
          imagen='tiktok'
          nombre='TikTok'
          texto='Sigueme para más contenido por medio de TikTok' />
          <Redes 
          imagen='facebook'
          nombre='Facebook'
          texto='Sigueme para más contenido por medio de Facebook' />
          <Redes 
          imagen='youtube'
          nombre='YouTube'
          texto='Sigueme para más contenido por medio de YouTube' />
          <Redes 
          imagen='twitch'
          nombre='Twitch'
          texto='Sigueme para más contenido por medio de Twitch' />
          <Redes 
          imagen='paypal'
          nombre='PayPal'
          texto='Tambien puedes apoyarme donandome a mi paypal:3' />
        </div>
        <div></div>

      </div>
    </div>
  );
}

export default App;
