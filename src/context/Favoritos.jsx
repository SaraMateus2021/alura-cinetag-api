import { createContext, useContext, useState } from "react"

export const FavoritosContext  = createContext();
FavoritosContext.displayName = "Favoritos";

export default function FavoritosProvider({children}){
    const [favorito, setFavorito] = useState([]);

    return (
        <FavoritosContext.Provider value={{favorito, setFavorito}}> 
            {children}
        </FavoritosContext.Provider>
    )
}

export function useFavoritoContext(){
    const {favorito, setFavorito} = useContext(FavoritosContext);

    function adicionarFavorito(novoFavorito){
        const favoritoRepetido = favorito.some((item) => item.id === novoFavorito.id);

        let novaLista = [...favorito];

        if(!favoritoRepetido){
            novaLista.push(novoFavorito);
            return setFavorito(novaLista);
        }

       // novaLista.splice(novaLista.indexOf(novoFavorito), 1); //para ser alterado pela linha abaixo
        novaLista = favorito.filter((fav) => fav.id !== novoFavorito.id);
        return setFavorito(novaLista);
    }

    return{favorito, adicionarFavorito}
}

//FavoritosContext.displayName = "Favoritos";: Esse display name é apenas para facilitar a depuração no React DevTools, mostrando o nome "Favoritos" quando o contexto é visualizado.

