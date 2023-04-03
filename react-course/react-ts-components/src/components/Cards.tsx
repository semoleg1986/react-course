import './Cards.css';

type Post = {
  id: number;
  title: string;
  price: number;
  description: string;
  imageUrl: string;
};

const posts: Post[] = [
  {
    id: 1,
    title: 'Product 1',
    price: 10.99,
    description: 'Description for product 1',
    imageUrl: 'https://picsum.photos/id/1/300/200',
  },
  {
    id: 2,
    title: 'Product 2',
    price: 15.99,
    description: 'Description for product 2',
    imageUrl: 'https://picsum.photos/id/2/300/200',
  },
  {
    id: 3,
    title: 'Product 3',
    price: 20.99,
    description: 'Description for product 3',
    imageUrl: 'https://picsum.photos/id/3/300/200',
  },
  {
    id: 4,
    title: 'Product 4',
    price: 25.99,
    description: 'Description for product 4',
    imageUrl: 'https://picsum.photos/id/4/300/200',
  },
  {
    id: 5,
    title: 'Product 5',
    price: 30.99,
    description: 'Description for product 5',
    imageUrl: 'https://picsum.photos/id/5/300/200',
  },
  {
    id: 6,
    title: 'Product 6',
    price: 35.99,
    description: 'Description for product 6',
    imageUrl: 'https://picsum.photos/id/6/300/200',
  },
  {
    id: 7,
    title: 'Product 7',
    price: 40.99,
    description: 'Description for product 7',
    imageUrl: 'https://picsum.photos/id/7/300/200',
  },
  {
    id: 8,
    title: 'Product 8',
    price: 45.99,
    description: 'Description for product 8',
    imageUrl: 'https://picsum.photos/id/8/300/200',
  },
];

function Cards() {
  return (
    <div className="post-container">
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <img src={post.imageUrl} alt={post.title} />
          <h2>{post.title}</h2>
          <p>{post.description}</p>
          <div className="post-price">{post.price}</div>
        </div>
      ))}
    </div>
  );
}

export default Cards;