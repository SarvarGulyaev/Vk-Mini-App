import {Match, View} from "@itznevikat/router";
import {SplitCol, SplitLayout } from "@vkontakte/vkui";
import Home from "./pages/home/Home";
import Education from "./pages/education/Education";
import Loading from "./pages/loading/Loading";
import RussianHistory from "./pages/russianHistory/RussianHistory";

export const vkAppRouter = () => {

    return (
        <Match initialURL="/loading" fallbackURL="/404">
            <SplitLayout
                style={{ justifyContent: 'center' }}
            >
                <SplitCol>
                    <View id="/">
                        <Loading id="/loading" />
                        <RussianHistory id="/russiaHistory" />
                        <Home id="/" />
                        <Education id="/education" />
                    </View>
                </SplitCol>
            </SplitLayout>
        </Match>
    )
}