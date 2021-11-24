import React from 'react';
import PropTypes from 'prop-types';

//Styles
import { Wrapper, Content, Text } from './HeroImage.styles';

//Types
type Props = {
  image: string; // it's an URL
  title: string;
  text: string;
}

// Component with destructured props
const HeroImage: React.FC<Props> = ({ image, title, text}) => (
  <Wrapper image={image}>
    <Content>
        <Text>
            <h1>{title}</h1>
            <p>{text}</p>
        </Text>
    </Content>
  </Wrapper>
);

export default HeroImage;