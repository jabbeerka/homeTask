import React from 'react';
import Counter from './Counter';
import { connect } from 'react-redux';
import {inc, dec, res} from '../bll/actions';




const CounterContainer = (props) => {
    return (
        <Counter
            plus={props.inc}
            minus={props.dec}
            reload={props.res}
            counter={props.counter}
        />
    )
}
const MapStateToProps = (state) => {
    return {
        counter: state
    }
}

export default connect(MapStateToProps, { inc, dec, res })(CounterContainer);