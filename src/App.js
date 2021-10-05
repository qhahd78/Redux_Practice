import React from 'react';
import { ApolloProvider } from 'react-apollo';
import client from './apollo/client';
import Main from './components/Main';
import CounterContainers from './pages/CounterContainers';

function App() {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <ApolloProvider client={client}>
      <Main />
      <CounterContainers />
    </ApolloProvider>
  );
}

export default App;
