import {COMPARISON_ROUTE, CONVERSION_ROUTE, GRAPH_ROUTE, HISTORICAL_ROUTE,} from "./utils/consts";
import ConversionContainer from "./Pages/ConversionContainer"
import HistoricalContainer from "./Pages/HistoricalContainer";
import CompareContainer from "./Pages/CompareContainer";
import GraphContainer from "./Pages/GraphContainer";

export const publicRoutes = [
    {path: CONVERSION_ROUTE,
        Component: ConversionContainer
    },
    {path: HISTORICAL_ROUTE,
        Component: HistoricalContainer
    },
    {path: COMPARISON_ROUTE,
        Component: CompareContainer
    },
    {path: GRAPH_ROUTE,
        Component: GraphContainer
    }
]