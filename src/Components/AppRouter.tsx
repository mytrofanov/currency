import React, {Component, useContext} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {publicRoutes} from "../routes";
import Conversion from "../Pages/Conversion";
import ConversionContainer from '../Pages/ConversionContainer';
import {RouteComponentProps} from '@reach/router';
import HistoricalContainer from '../Pages/HistoricalContainer';


const AppRouter: React.FC<any> = () => {

    return (
        <Routes>
            {/*{publicRoutes.map(({path, Component}) =>*/}
            {/*    <Route path={path} element={<Component/>} key={path}/>*/}
            {/*)}*/}
            <Route path={'*'} element={<ConversionContainer/>}/>
        </Routes>
    );
};

export default AppRouter;