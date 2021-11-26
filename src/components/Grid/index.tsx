import React from "react";
import PropTypes from 'prop-types';

// Styles
import { Wrapper, Content } from './Grid.styles';

//Types
type Props = {  //any name can be used instead of Props
    header: string;
}

const Grid: React.FC<Props> = ({ header, children}) => (
    <Wrapper>
        <h1>{header}</h1>
        <Content>{children}</Content>
    </Wrapper>
);

export default Grid;
