import React from "react";
import { Email, Item, A, Span, Box } from "react-html-email";
import { Container, Row, Column, Wrapper, Center } from "react-inky";
import chunk from "lodash/chunk";

const GetHtml = ({ images, name, content, template }) => {
  return (
    <Email title="Invite Email">
      <Item>
        <Span fontSize={25} lineHeight={50}>
          {" "}
          Hi, {name}
        </Span>
      </Item>
      <Item align="justify">
        {content.length < 0 ? content : template}
        <br />
      </Item>
      <Item>
        <Container columnCount={16}>
          {chunk(images, 4).map((chunk, chunkIndex) => (
            <Row key={chunkIndex}>
              {chunk.map((image, i) => (
                <Column key={i} large="4">
                  <p>{image.title})</p>
                  <Wrapper
                    style={{
                      height: "125px",
                      widht: "125px",
                      border: "1px gray dotted"
                    }}
                  >
                    <img
                      src={image.add}
                      alt={image.add}
                      style={{ maxHeight: "120px", maxWidth: "120px" }}
                    />
                  </Wrapper>
                </Column>
              ))}
            </Row>
          ))}
        </Container>
      </Item>
      <Item>
        <A
          style={{ align: "center" }}
          href="https://fanbase-d7da7.firebaseapp.com/#/"
        >
          Click me to my FANBASE!
        </A>
      </Item>
    </Email>
  );
};
export default GetHtml;
