
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Inicio from "./pages/Inicio/Index";
import Favoritos from "./pages/Favoritos/Favoritos.jsx"
import Player from "./pages/Player/Player.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import PaginaBase from "./pages/PaginaBase/PaginaBase.jsx";

function AppRoutes(){
    return (
            <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<PaginaBase />}>
                            <Route index element={<Inicio />}></Route>
                            <Route path="favoritos" element={<Favoritos />}></Route>
                            <Route path=":id" element={<Player />}></Route>
                            <Route path="*" element={<NotFound />}></Route>
                        </Route> 
                    </Routes>
            </BrowserRouter>
    );

}

export default AppRoutes;

//BrowserRouter: "gerenciador de rotas" para sua aplicação. Ele observa a URL no navegador e decide qual componente React deve ser mostrado na tela.

//O componente BrowserRouter é responsável por informar a nossa aplicação que teremos um roteamento de componentes a seguir, o Routes é o próprio roteador e o Route é a rota em específico.