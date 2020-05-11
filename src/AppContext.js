import React from 'react';

const AppContext = React.createContext({
    target: null,
    nodes: [],
    toggleCollapse: () => {},
});

export default AppContext;