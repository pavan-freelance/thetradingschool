import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import Contact from './components/contact';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="App">
      <header className="sticky-top">
        {/* <Navbar bg="primary" variant="dark">
          <Container className="justify-content-center">
            <Navbar.Brand className="brand-logo" href="#home">The Trading School</Navbar.Brand>
          </Container>
        </Navbar> */}
        <section style={{ backgroundColor: '#0E6EFD', fontSize: '14pt', color: 'white' }}>
          <h1 style={{ color: 'peachpuff', padding: '8pt' }}>The Trading School</h1>
          <div className="row container" style={{ margin: 'auto', padding: '6pt 0' }}>
            <div className="col-sm">
              <i role="button" className="bi bi-facebook header-icons" onClick={() => openInNewTab('https://www.facebook.com/profile.php?id=100087359916465')}></i>
              <i role="button" className="bi bi-whatsapp header-icons" onClick={() => openInNewTab('https://wa.me/+918147238526')}></i>
              <i role="button" className="bi bi-instagram header-icons"></i>
              <i role="button" className="bi bi-youtube header-icons"></i>
            </div>
            <div className="col-sm-8">
              <span role="button" onClick={() => openInNewTab('mailto:ABthetradingschool@gmail.com')} style={{ padding: '0 12px', borderRight: '1px solid white' }}><i className="bi bi-envelope"></i>&nbsp; ABthetradingschool@gmail.com</span>
              <span role="button" onClick={() => openInNewTab('tel:+918147238526')} style={{ paddingLeft: '16px' }}><i className="bi bi-telephone"></i>&nbsp; (+91) 8147238526</span>

              {/* <i className="bi bi-envelope"></i>&nbsp; ABthetradingschool@gmail.com | <i className="bi bi-telephone"></i>&nbsp; (+91) 8147238526 */}
            </div>
          </div>
        </section>
      </header>

      <section className="section-1 section-container">
        <h2 className="header-title">Become an Expert in Technical Analysis.</h2>
        <h2 className="header-title">Trade the stock market with high accuracy.</h2>

        <div className="cards-flex">
          <div className="card" style={{ width: '16rem', backgroundColor: 'transparent', border: '0' }}>
            <img className="card-img-top card-image" src={require('./images/card-1.jpeg')} alt="Card cap" />
            <div className="card-body">
              <p className="card-text">Technical Analysis <br />Trading Program</p>
            </div>
          </div>

          <div className="card" style={{ width: '16rem', backgroundColor: 'transparent', border: '0' }}>
            <img className="card-img-top card-image" src={require('./images/card-2.jpeg')} alt="Card cap" />
            <div className="card-body">
              <p className="card-text">Advanced Options <br />Trading Programs</p>
            </div>
          </div>

          <div className="card" style={{ width: '16rem', backgroundColor: 'transparent', border: '0' }}>
            <img className="card-img-top card-image" src={require('./images/card-3.png')} alt="Card cap" />
            <div className="card-body">
              <p className="card-text">Data Analysis <br /> Program</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container section-container">
        <h1 style={{ fontWeight: '200', fontSize: 'xx-large', marginBottom: '3rem' }}>Who Can Take Up Our Stock Market Courses</h1>

        <div className="row" style={{ rowGap: '1rem' }}>
          <div className="col-sm">
            <div className="card section2-cards">
              <img className="section2-img" src={require('./images/beginner.png')} alt="beginner" />
              <h5>Beginners in the Stock Market</h5>
              <p style={{ fontSize: '10pt' }}>You are new to the stock market and you have never traded before but are interested in learning.</p>
            </div>
          </div>

          <div className="col-sm">
            <div className="card section2-cards">
              <img className="section2-img" src={require('./images/invest.png')} alt="invest" />
              <h5>Investors Looking at Getting Results</h5>
              <p style={{ fontSize: '10pt' }}>You have tried your hands on trading and investing but you have not gotten the expected results.</p>
            </div>
          </div>

          <div className="col-sm">
            <div className="card section2-cards">
              <img className="section2-img" src={require('./images/new-job.png')} alt="new-job" />
              <h5>Job Seekers</h5>
              <p style={{ fontSize: '10pt' }}>You are looking to start a career in the stock market or planning to become a stock trader.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-3 section-container">
        <div className="container">
          <h2 style={{ fontSize: 'xxx-large', marginBottom: '2rem' }}>What you will learn</h2>
          <div className="points-list">
            <p><i className="bi bi-arrow-right-circle-fill"></i>&nbsp; Investment Planning</p>
            <p><i className="bi bi-arrow-right-circle-fill"></i>&nbsp; Fundamental Analysis</p>
            <p><i className="bi bi-arrow-right-circle-fill"></i>&nbsp; Technical Analysis</p>
            <p><i className="bi bi-arrow-right-circle-fill"></i>&nbsp; Live Market Analysis</p>
            <p><i className="bi bi-arrow-right-circle-fill"></i>&nbsp; Trading Setup Plan</p>
            <p><i className="bi bi-arrow-right-circle-fill"></i>&nbsp; Practicals in F&O Trading</p>
            <p><i className="bi bi-arrow-right-circle-fill"></i>&nbsp; Portfolio & Finance Management</p>
          </div>
        </div>
      </section>

      <section className="section-contact section-container">
        <h2 className="mb-5">Contact Us</h2>
        <div className="container">
          <Contact />
        </div>
      </section>

      <footer className="page-footer bg-dark text-light">
        <div style={{padding: '12pt 0 2pt 0px'}}>
          <i role="button" onClick={() => openInNewTab('https://www.facebook.com/profile.php?id=100087359916465')} className="bi bi-facebook footer-icons"></i>
          <i role="button" onClick={() => openInNewTab('https://wa.me/+918147238526')} className="bi bi-whatsapp footer-icons"></i>
          <i className="bi bi-instagram footer-icons"></i>
          <i className="bi bi-youtube footer-icons"></i>
        </div>
        <div style={{paddingBottom: '14pt'}}>
            <span role="button" onClick={() => openInNewTab('tel:+918147238526')} style={{borderRight: '1px solid white', paddingRight: '6pt'}}><i className="bi bi-telephone"></i>&nbsp; (+91) 8147238526</span>
            <span role="button" onClick={() => openInNewTab('mailto:ABthetradingschool@gmail.com')} style={{paddingLeft: '6pt'}}><i className="bi bi-envelope"></i>&nbsp; ABthetradingschool@gmail.com</span>
        </div>
        <hr style={{margin: '0'}} />
        <div style={{padding: '2pt 0'}}>
          Copyright &copy; 2022 All rights reserved | Designed by <a href="https://www.pavan-reddy.in/" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>Pavan</a>
        </div>
      </footer>
      <ToastContainer />
    </div>
  );
}

export default App;
