import styles from './Player.module.css'

import Banner from "../../components/Banner/Banner.jsx";
import Title from "../../components/Title/Title.jsx";
import NotFound from '../NotFound/NotFound.jsx';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


function Player (){
    const parametros = useParams(); //Pega o parametro da url e coloca-o numa variável (/:id)
    /*const video = videos.find((video) => {
        return video.id === Number(parametros.id);
    })*/
    
        const [video, setVideo] = useState([]);
        useEffect(() => {
            fetch(`https://my-json-server.typicode.com/SaraMateus2021/cinetag-api/videos?id=${parametros.id}`)
            .then(responce => responce.json())
            .then(data => {
                setVideo(...data)
            })
        }, [])
    

    if(!video){
        return <NotFound />
    }

    return(
       <>
        <Banner imagem="player"></Banner>
        <Title>
            <h1>Player</h1>
        </Title>
        <section className={styles.container}>
            <iframe 
            width="100%" 
            height="100%" 
            src={video.link}
            title={video.titulo} 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
            </iframe>
        </section>
        
       </>
    );
}

export default Player;