import { createContext, useReducer } from 'react';
import GlobalStyle from './component/GlobalStyle';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { PublicRoute } from './routes';

let GlobalContext = createContext();
let initValue = {
    isShowHideSidebar: false,
};
function reducer(state, action) {
    switch (action) {
        case 'isShowHideSidebar': {
            let newState = { ...state };
            newState.isShowHideSidebar = !newState.isShowHideSidebar;
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
