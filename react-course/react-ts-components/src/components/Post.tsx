type Props = {
  title: string;
  description: string;
  imageUrl: string;
};

function Post({ title, description, imageUrl }: Props) {
  return (
    <div className="post">
      <img src={imageUrl} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default Post;
