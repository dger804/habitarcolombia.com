import React, { useEffect } from "react"
import { useHistory } from "react-router-dom";
// import { footer } from "../../data/Data"
import "./footer.css"

const Footer = () => {
  const history = useHistory();
  useEffect(() => {
    const unlisten = history.listen(() => {
        window.scrollTo(0, 0);
    });
    return unlisten;
}, [history]);

  return (
    <>
      <section className='footerContact'>
        <div className='container'>
          <div className='send flex'>
            <div className='text'>
              <h1>Tienes preguntas ?</h1>
              <p>Permítenos comunicarnos contigo.</p>
            </div>
            <button className='btn5' onClick={(e)=>history.push("/Contact")}>Contactenos Hoy</button>
          </div>
        </div>
      </section>

      <footer>
        <div className='container'>
          <div className='box'>
            <div className='logo'>
              <img src='../images/logo.png' alt='' />
              <h2>Necesitas ayuda con algo ?</h2>
              <p>Celular:</p>
              <h2>301 2677526</h2>

              {/*<div className='input flex'>
                <input type='text' placeholder='Email Address' />
                <button>Subscribe</button>
              </div>*/}

              <a
                href="https://wa.me/573012677526"
                className="whatsapp_float"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-whatsapp whatsapp-icon"></i>
              </a>
            </div>
          </div>

          {/*footer.map((val) => (
            <div className='box'>
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items) => (
                  <li> {items.list} </li>
                ))}
              </ul>
            </div>
                ))*/}
        </div>
      </footer>
      <div className='legal'>
        <span>© 2023 Habitar Colombia. Designed By Dger804.</span>
      </div>
    </>
  )
}

export default Footer
