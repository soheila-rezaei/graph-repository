import {gql} from "@apollo/client";
const GET_BLOGS_INFO=gql`
query{
  posts {
    author {
      ... on Author {
        name
        avatar {
          url
        }
      }
    }
    title
    slug
    id
    coverphoto {
      url
    }
  }
}

`;

const GET_AUTHORS_INFO=gql`
query{
  authors {
    id
    name
    slug
    avatar {
      url
    }
  }
}
`;

const GET_AUTHOR_INFO=gql`
query getAuthorInfo($slug:String!){
  author(where: {slug: $slug}) {
    avatar {
      url
    }
    field
    name
    description {
      html
    }
    posts {
      coverphoto {
        url
      }
      id
      slug
      title
    }
  }
}
`;
const GET_POST_INFO =gql`
query getPost($slug:String!){
  post(where: {slug: $slug}) {
    author {
      ... on Author {
        avatar {
          url
        }
        id
        name
        field
      }
    }
    content {
      html
    }
    title
    coverphoto {
      url
    }
  }
}
`;
const GET_POST_COMMENTS=gql`
query getPostComments ($slug:String!) {
  comments (where: {post: {Post: {slug: $slug}}}) {
    id
    name
    text
  }
}


`;
export {GET_BLOGS_INFO,GET_AUTHORS_INFO,GET_AUTHOR_INFO,GET_POST_INFO,GET_POST_COMMENTS} ;