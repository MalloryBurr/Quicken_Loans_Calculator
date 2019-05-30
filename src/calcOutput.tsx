import * as React from 'react';

interface ICalcOutputProps {
    calc: string;
}

const CalcOutput = (props: ICalcOutputProps) => {
    return <p>{props.calc}</p>;
}

export default CalcOutput;