import React from "react";

export default ({ children }) => {
    return <div style={
        {
            padding: '30px',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column'
        }
    }>
        {children}
    </div>
}