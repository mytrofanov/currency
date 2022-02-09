import React, {useEffect} from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./AppRouter";
// @ts-ignore
import s from './app.module.css'
import NavMenu from './Components/NavMenu';
import {connect, Provider} from 'react-redux';
import store, {AppStateType} from './Redux/reduxStore';
import {requestSupportedSymbols} from "./Redux/currency-reducer";
import {getSymbols} from "./Redux/usersSelectors";
import {compose} from "redux";
import {SymbolsType} from "./Types/Types";


interface mapStateToPropsType {
    symbols: Array<SymbolsType>
}
interface mapDispatchToPropsType {
    getSymbols: () => Promise<void>
}

type AppPropsType = mapStateToPropsType & mapDispatchToPropsType

function App(props:AppPropsType) {
    const [page, setPage] = React.useState(0);
    useEffect(()=>{
        if (props.symbols.length < 1) {
            props.getSymbols()
        }
    },[])

    return (
        <BrowserRouter>

                <div className={s.app}>
                    <div className={s.navbar}>
                        <NavMenu page={page} setPage={setPage}/>
                    </div>
                    <AppRouter/>
                </div>

        </BrowserRouter>
    );
}

const mapStateToProps = (state:AppStateType) => ({
    symbols: getSymbols(state)
}) as mapStateToPropsType



let AppContainer = compose(connect(mapStateToProps,{getSymbols:requestSupportedSymbols}))(App)

let CurrencyApp = ()=>{
return(
    <Provider store={store}>
        <AppContainer/>
    </Provider>
)
}
export default CurrencyApp;