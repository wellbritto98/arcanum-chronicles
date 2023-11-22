import './Layout.css';

function Layout({ children }) { 
    return (
        <section className='main-section'>
            <main className='main-content'>
                {children}
            </main>
        </section>
    );
}

export default Layout;
