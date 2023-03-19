import {Link} from 'react-router-dom';

function NotFoundScreen(): JSX.Element {
  return (
    <section className="container">
      <img src="img/cry-cat.png" alt="Cat cry because page not found" width="200" />
      <h1>404. Page not found</h1>
      <Link to="/">Вернуться на главную</Link>
    </section>
  );
}

export default NotFoundScreen;
