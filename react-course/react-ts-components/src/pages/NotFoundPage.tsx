import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <Link to="/">Back home</Link>
    </div>
  );
}

export default NotFoundPage;
