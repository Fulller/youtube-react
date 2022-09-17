import { createContext, useReducer } from 'react';
import GlobalStyle from './component/GlobalStyle';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { PublicRoute } from './routes';

import listVideo from './assets/listVideo';
let GlobalContext = createContext();
let initValue = {
    isShowHideSidebar: false,
    videoSearch: [...listVideo],
    currentVideo: {},
};
function reducer(state, [action, data]) {
    let newState;
    switch (action) {
        case 'isShowHideSidebar': {
            newState = { ...state };
            newState.isShowHideSidebar = !newState.isShowHideSidebar;
            return { ...newState };
        }
        case 'setSearch': {
            newState = { ...state };
            newState.videoSearch = data;
            return { ...newState };
        }
        case 'setVideo': {
            newState = { ...state };
            newState.currentVideo = data;
            return { ...newState };
        }
        default:
            console.log('Sai action');
    }
}
function App() {
    let [globalState, dispatch] = useReducer(reducer, initValue);
    return (
        <GlobalContext.Provider value={[globalState, dispatch]}>
            <GlobalStyle>
                <Routes>
                    {PublicRoute.map((route, index) => {
                        let Layout = route.layout;
                        let Page = route.element;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page></Page>
                                    </Layout>
                                }
                            ></Route>
                        );
                    })}
                </Routes>
            </GlobalStyle>
        </GlobalContext.Provider>
    );
}
export { GlobalContext };
export default App;
