import Layout from '../../components/Layout';
import NavbarPadrao from '../../components/NavbarPadrao';
import './ProximaPagina.css'


function ProximaPagina() {
    return (
        <>

            <Layout>
                <NavbarPadrao />
                <div className="ProximaPagina">
                    <h1>Próxima Página</h1>
                </div>
            </Layout>
        </>
    );
}

export default ProximaPagina;