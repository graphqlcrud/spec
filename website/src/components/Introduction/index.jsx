import React from 'react';
import { Container, Flex, Row} from '../UI';
import { Title, Paragraph, Image } from './styled.components';

export function Introduction() {
  return (
    <Flex background="#009CC6" minHeight="100vh">
      <Container>
        <Row>
          <Flex height="100%" width="50%" color="#fff">
            <div> 
              <Title>Patterns for your GraphQL Schema</Title>
              <Paragraph>
                GraphQL CRUD provides specification for common operations on top of the GraphQL specification.
                Giving developers out of the box patterns for accessing their data using GraphQL 
              </Paragraph>
            </div>
          </Flex>
          <Flex height="100%" width="50%">
            <Image src={'img/undraw_contrast.svg'} />
          </Flex>
        </Row>
      </Container>
    </Flex>
  );
}
