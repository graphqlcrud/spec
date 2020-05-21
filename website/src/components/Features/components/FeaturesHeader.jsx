import React from 'react';
import { Flex } from '../../UI/Flex';
import { Content, Title, HR } from './styled.components';

export function FeaturesHeader() {
  return (
    <Flex minHeight="30vh" height="auto" width="80%">
      <div>
        <Content>
          <Title>Features</Title>
          <p>
          GraphQL is a flexible query language supporting many different data access patterns.
          In practice, simple CRUD operations turn out to be a very common pattern. Standardising this very common pattern enables the community to build tooling specific to the common CRUD style API.
          </p>
        </Content>
        <HR />
      </div>
    </Flex>
  );
}
