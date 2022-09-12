import GlobalStyle from './component/GlobalStyle';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { PublicRoute } from './routes';
function App() {
    return (
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
    );
}

export default App;
