import CardPadrao from '../../components/CardPadrao';
import Layout from '../../components/Layout';
import MenuLateral from '../../components/MenuLateral';
import MenuLateralItems from '../../components/MenuLateralItems';
import NavbarPadrao from '../../components/NavbarPadrao';
import './CharacterPage.css'


function CharacterPage() {

    return (
        <>

            <Layout>
                <NavbarPadrao />
                <div className='character-page'>
                    <div className='left-column'>
                        <CardPadrao
                            title='Ademilson Jorge'
                            content={
                                <>
                                    <p>Character Description</p>
                                    <p>Character Description</p>
                                    <p>Character Description</p>
                                    <p>Character Description</p>
                                    <p>Character Description</p>
                                </>
                            }
                        />
                        <CardPadrao
                            title='Character Name'
                            content={
                                <>
                                    <p>Character Description</p>
                                    <p>Character Description</p>
                                    <p>Character Description</p>
                                    <p>Character Description</p>
                                    <p>Character Description</p>
                                </>
                            }
                        />
                    </div>
                    <div className='right-column'>
                        <MenuLateral>
                            <MenuLateralItems id={"personagem"} title={"Personagem"
                            }>
                                <li> <a href="#">Item 1</a> </li>
                                <li> <a href="#">Item 2</a> </li>
                                <li> <a href="#">Item 3</a> </li>
                            </MenuLateralItems>
                            <MenuLateralItems id={"magia-e-foco"} title={"Magia e Foco"
                            }>
                                <li> <a href="#">Item 1</a> </li>
                                <li> <a href="#">Item 2</a> </li>
                                <li> <a href="#">Item 3</a> </li>
                            </MenuLateralItems>
                            <MenuLateralItems id={"posses"} title={"Posses"
                            }>
                                <li> <a href="#">Item 1</a> </li>
                                <li> <a href="#">Item 2</a> </li>
                                <li> <a href="#">Item 3</a> </li>
                            </MenuLateralItems>
                            <MenuLateralItems id={"negociacoes"} title={"Negociações "
                            }>
                                <li> <a href="#">Item 1</a> </li>
                                <li> <a href="#">Item 2</a> </li>
                                <li> <a href="#">Item 3</a> </li>
                            </MenuLateralItems>
                            <MenuLateralItems id={"etc"} title={"Etc "
                            }>
                                <li> <a href="#">Item 1</a> </li>
                                <li> <a href="#">Item 2</a> </li>
                                <li> <a href="#">Item 3</a> </li>
                            </MenuLateralItems>
                        </MenuLateral>


                    </div>
                </div>
            </Layout>
        </>
    );
}

export default CharacterPage;