import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

const GET_CATS = gql`
  query {
    cats {
      id
      name
      age
      face
    }
  }
`;

function Main() {
  return (
    <div>
      <Query query={GET_CATS}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading . . .</p>;
          if (error) return <p>Error !</p>;
          return (
            <p>
              {data.cats.map(({ id, name, age, face }) => (
                <>
                  <p key={id}>
                    이름: {name} 나이: {age} 특징: {face}
                  </p>
                </>
              ))}
            </p>
          );
        }}
      </Query>
    </div>
  );
}

export default Main;
