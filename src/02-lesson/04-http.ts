// Типізація HTTP-запитів з  Axios

// https://dummyjson.com/docs/posts

import axios from 'axios';

interface Post {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: {
    likes: number;
    dislikes: number;
  };
  views: number;
  userId: number;
}

interface GetPostsResponse {
  posts: Post[];
  total: number;
  skip: number;
  limit: number;
}

const getAllPosts = async (): Promise<GetPostsResponse> => {
  const response = await axios.get<GetPostsResponse>(
    'https://dummyjson.com/docs/posts'
  );
  return response.data;
};

getAllPosts().then(data => console.log(data.posts[0].reactions.dislikes));
