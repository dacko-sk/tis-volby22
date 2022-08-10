import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { imgPath } from '../../api/helpers';

function Footer() {
  return (
    <footer className="mt-auto">
      <div className="footer-top py-5">
        <Container>
          <Row>
            <Col md={6} lg={4}>
              <h2>Kontakt</h2>
              <img className="logo my-3" src={ imgPath('tis-logo-blue.png') } alt="Transparency International Slovensko" />
              <p>
                Transparency International Slovensko
                <br />
                Bajkalská 25
                <br />
                827 18 Bratislava
              </p>
              <p>
                <a href="tel:+421905613779">+421 905 613 779</a>
                <br />
                <a href="mailto:tis@transparency.sk">tis@transparency.sk</a>
                <br />
                <a href="https://www.transparency.sk">www.transparency.sk</a>
              </p>
            </Col>
            <Col md={6} lg={4}>
              <h2>Sledujte nás</h2>
            </Col>
            {/* <Col md={12} lg={4}>
              <h2>Facebook</h2>
            </Col> */}
          </Row>
        </Container>
      </div>
      <div className="footer-bottom py-3">
        <Container>
          <Row>
            <Col>© 2022 Transparency International Slovensko</Col>
            <Col xs="auto"><a href="https://www.linkedin.com/in/hrtanek">Webové riešenie</a></Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
