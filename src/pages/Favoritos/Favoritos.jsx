import styles from './Favoritos.module.css'


import Banner from "../../components/Banner/Banner.jsx";
import Title from "../../components/Title/Title.jsx";
import { useFavoritoContext } from '../../context/Favoritos.jsx';
import Card from '../../components/Card/Card.jsx';


function Favoritos (){
    const {favorito} = useFavoritoContext();

    return(
       <>
        <Banner imagem="favoritos"></Banner>
        <Title>
            <h1>Meus Favoritos</h1>
        </Title>
        <section className={styles.container}>
            {favorito.map((fav => {
                return <Card {...fav} key={fav.id} />
            }))}
        </section>  
       </>
    );
}

export default Favoritos;