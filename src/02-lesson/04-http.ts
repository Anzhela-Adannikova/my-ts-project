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
    'https://dummyjson.com/posts'
  );
  return response.data;
};

getAllPosts().then(data => console.log(data.posts[0].reactions.dislikes));

const getPostById = async (postId: number): Promise<Post> => {
  const response = await axios.get<Post>(
    'https://dummyjson.com/posts/${postId}'
  );
  return response.data;
};

interface NewPostData {
  title: string;
  body: string;
  tags: string[];
}

const createPost = async (newPost: NewPostData): Promise<Post> => {
  const response = await axios.post<Post>(
    'https://dummyjson.com/posts/add',
    newPost
  );
  return response.data;
};
