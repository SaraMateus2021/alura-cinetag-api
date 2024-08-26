
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Container from "../../components/Container/Container.jsx"
import FavoritosProvider from  "../../context/Favoritos.jsx"
import { Outlet } from "react-router-dom";

function PaginaBase(){
    return (
            <main>
                <Header />
                <FavoritosProvider>
                    <Container>
                        <Outlet />
                    </Container>
                </FavoritosProvider>
                <Footer />
            </main>
    );

}

export default PaginaBase;
