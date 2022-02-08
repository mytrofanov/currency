import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {useNavigate, useParams} from "react-router";
import {CONVERSION_ROUTE, HISTORICAL_ROUTE, COMPARISON_ROUTE, GRAPH_ROUTE} from '../utils/consts'
import {useEffect} from "react";

type navMenuPropsType = {
    page:number | 0,
    setPage: React.Dispatch<React.SetStateAction<number>>
}


export default function NavMenu ({page,setPage}:navMenuPropsType) {

    const navigate = useNavigate();
    const navi = (number:number) => {
      number === 0 && navigate(CONVERSION_ROUTE)
      number === 1 && navigate(HISTORICAL_ROUTE)
      number === 2 && navigate(COMPARISON_ROUTE)
      number === 3 && navigate(GRAPH_ROUTE)
    }

    useEffect(()=>{
        navi(page)
    },[page])

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setPage(newValue);
    };

    return (
        <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <Tabs value={page} onChange={handleChange} centered>
                <Tab label="Conversion" />
                <Tab label="Historical rates" />
                <Tab label="Compare rates" />
                <Tab label="Visualization" />
            </Tabs>
        </Box>
    );
}
