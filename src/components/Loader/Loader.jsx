import { Hearts } from "react-loader-spinner";
import React, { Component } from 'react';

class Loader extends Component {
    state = {  } 
    render() { 
        return (<>
        <Hearts
        width="200"
        height="200"
        color='#4a4452'
        wrapperStyle={{
            height: '100%',
            width: '100%',
            display: 'flex',
            justifyContent: 'center'

        }}
        />
        </>);
    }
}
 
export default Loader;