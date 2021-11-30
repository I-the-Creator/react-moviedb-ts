import React from 'react';


//Routing
import { Link } from 'react-router-dom';

//Styles
import { Wrapper, Content } from './BreadCrump.styles';

//types
type Props = {
    movieTitle: string;
}

// create component and destructure prop
const BreadCrump: React.FC<Props>= ({ movieTitle }) => (
    <Wrapper>
        <Content>
            <Link to='/'>
                <span>Back to Home Page</span>
            </Link>
            <span>|</span>
            <span>{movieTitle}</span>
        </Content>
    </Wrapper>
);

export default BreadCrump;