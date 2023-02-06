import gql from 'graphql-tag';

export const REGISTER_USER = gql`
  mutation createUser($mobile: String!, $password: String) {
    createUser(input: { mobile: $mobile, password: $password }) {
      mobile
      token
    }
  }
`;

export const LOGIN_USER = gql`
  mutation loginUser($mobile: String!, $password: String) {
    loginUser(input: { mobile: $mobile, password: $password }) {
      mobile
      token
      email
    }
  }
`;
