import React from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./Components/AppRouter";
// @ts-ignore
import s from './app.module.css'
import NavMenu from './Components/NavMenu';
import { Provider } from 'react-redux';
import store from './Redux/reduxStore';

function App() {
    const [page, setPage] = React.useState(0);

    return (
        <BrowserRouter>
            <Provider store={store}>
                <div className={s.app}>
                    <div className={s.navbar}>
                        <NavMenu page={page} setPage={setPage}/>
                    </div>
                    <AppRouter/>
                </div>
            </Provider>
        </BrowserRouter>
    );
}

export default App;
