import { Link } from 'react-router-dom';
import './PostList.css';

type Post = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
};

const posts: Post[] = [
  {
    id: 1,
    title: 'Post 1',
    description: 'Description for post 1',
    imageUrl: 'https://picsum.photos/id/1/300/200',
  },
  {
    id: 2,
    title: 'Post 2',
    description: 'Description for post 2',
    imageUrl: 'https://picsum.photos/id/2/300/200',
  },
  {
    id: 3,
    title: 'Post 3',
    description: 'Description for post 3',
    imageUrl: 'https://picsum.photos/id/3/300/200',
  },
  {
    id: 4,
    title: 'Post 4',
    description: 'Description for post 4',
    imageUrl: 'https://picsum.photos/id/4/300/200',
  },
  {
    id: 5,
    title: 'Post 5',
    description: 'Description for post 5',
    imageUrl: 'https://picsum.photos/id/5/300/200',
  },
  {
    id: 6,
    title: 'Post 6',
    description: 'Description for post 6',
    imageUrl: 'https://picsum.photos/id/6/300/200',
  },
  {
    id: 7,
    title: 'Post 7',
    description: 'Description for post 7',
    imageUrl: 'https://picsum.photos/id/7/300/200',
  },
  {
    id: 8,
    title: 'Post 8',
    description: 'Description for post 8',
    imageUrl: 'https://picsum.photos/id/8/300/200',
  },
];

function PostList() {
  return (
    <div className="post-list-container">
      <h1>Post List</h1>
      <div className="post-list">
        {posts.map((post) => (
          <Link to={`/posts/${post.id}`} key={post.id} className="post-link">
            <div className="post">
              <img src={post.imageUrl} alt="Post" />
              <h2>{post.title}</h2>
              <p>{post.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default PostList;
