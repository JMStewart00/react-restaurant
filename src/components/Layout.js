import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '../logo.png';
import logoNoBackground from '../logo--no-bg.png';

function Layout({ children }) {
    return (
        <div>
            <Container>
                <Row className="justify-content-center h-25">
                    <img
                        src={logo}
                        alt="Logo"
                        style={{ width: '200px' }}
                    />
                </Row>
            </Container>
            {children}
            <div className="bg-dark mt-5">
                <Container className="p-3">
                    <p className="text-center text-white py-3">Wok this way for a taste that will stir up your senses!</p>
                    <Row className='align-items-center justify-content-center'>
                        <Col className="text-center text-white">
                            <img src={logoNoBackground} alt="" style={{ width: '300px' }}/>
                            <address>
                                <p>348 E Main Street</p>
                                <p>Lexington, KY 40507</p>
                            </address>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default Layout