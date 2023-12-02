import Layout from '../../Components/Layout';
import NavbarPadrao from '../../Components/NavbarPadrao';
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