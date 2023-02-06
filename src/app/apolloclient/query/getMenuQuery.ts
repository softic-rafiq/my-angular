import gql from 'graphql-tag';

export const GET_MENUS = gql`
  query {
    getAllMenus {
      id
      menu_name
      menu_name_bn
    }
  }
`;
// export const GET_USERS = gql`
//   query {
//     getAllUsers {
//       id
//       username
//       mobile
//       email
//     }
//   }
// `;
