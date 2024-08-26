
import Banner from "../../components/Banner/Banner.jsx";
import Title from "../../components/Title/Title.jsx";
import Card from "../../components/Card/Card.jsx";
import styles from './Inicio.module.css'
import { useEffect, useState } from "react";

function Inicio(){
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/SaraMateus2021/cinetag-api/videos')
        .then(responce => responce.json())
        .then(data => {
            setVideos(data)
        })
    }, [])

    return (
        <>
            <Banner imagem="home"></Banner>
            <Title>
                <h1>Um lugar para guardar os seu vídeos e filmes!</h1>
            </Title>
            <section className={styles.container}>
                {videos.map((video) =>{
                   return <Card {...video} key={video.id} />
                })}
            </section>  
        </>
    );

}

export default Inicio;