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
              <Title>Standard for exposing data</Title>
              <Paragraph>
                GraphQL CRUD provides specification for common operations on top of the GraphQL.
                Giving developers out of the box patterns for accessing their data.
                Based on the data of public GraphQL APIs and patterns from major GraphQL providers 
                GraphQL CRUD gives you ultimate guide for your common data access problems without 
                bringing complexity or limitations to your workflow
              </Paragraph>
            </div>
          </Flex>
          <Flex height="100%" width="50%">
            <Image src={'img/undraw_portfolio_update.svg'} />
          </Flex>
        </Row>
      </Container>
    </Flex>
  );
}
