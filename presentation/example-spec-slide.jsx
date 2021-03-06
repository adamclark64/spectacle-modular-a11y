import React from "react";
import {
  Image,
  List,
  ListItem,
  Slide
} from "spectacle";
import styled from "styled-components";

import modalImg from "../assets/Modal.png";
import avocado from "../assets/avocado.svg";
import ColumnWrapper from "./styled-wrappers/column-wrapper";
import Subheader from "./styled-wrappers/subheader";
import CodeWrapper from "./styled-wrappers/code-wrapper";

// slide transition={["zoom"]}

const StyledSlide = styled(Slide)`
  text-align: left;
`;
const StyleWrapper = styled("div")`
  display: flex;
  justify-content: space-between;

  li {
    font-size: 1.2em;
    margin-bottom: 20px;

    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;

// create an image of I <3 modals -- several modals hovering over a page

class ExampleSpecSlide extends React.Component {
  render() {
    return (
      <StyledSlide bgColor="secondary" textColor="primary">
        <Subheader>Building an Example: The Spec</Subheader>
        <StyleWrapper>
          <List>
            <ListItem>
              8 modals
            </ListItem>
            <ListItem>
              all different types of content (forms, wizards, messages)
            </ListItem>
            <ListItem>
              <strong>They all have to be accessible.</strong>
            </ListItem>
          </List>
          <Image src={modalImg} alt="Example Layout" height="500px" />
        </StyleWrapper>
      </StyledSlide>
    );
  }
}

export default ExampleSpecSlide;
