import React from 'react';
import PropTypes from 'prop-types';

//Styles
import { Wrapper } from './Button.styles';

//Types
type Props = {   //any name can be used instead of Props
    text: string;
    callback: () => void; // click callback
}

const Button: React.FC<Props> = ({ text, callback}) => (  /*  destructuring props */

    <Wrapper type="button" onClick={callback}>
        {text}
    </Wrapper>
);

export default Button;