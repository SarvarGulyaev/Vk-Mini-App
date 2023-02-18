import {useEffect} from "react";
import bridge from "@vkontakte/vk-bridge";
import Home from "./pages/home/Home";
import {vkAppRouter} from "./router";

function App() {

    const router = vkAppRouter()

    return (
        <>
            {router}
        </>
    )
}

export default App
