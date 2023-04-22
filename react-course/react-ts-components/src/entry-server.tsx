import ReactDOMServer, { PipeableStream, RenderToPipeableStreamOptions } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { Provider } from 'react-redux';

import App from './App';
import store from './store/store';

export function render(url: string, options?: RenderToPipeableStreamOptions): PipeableStream {
  const stream = ReactDOMServer.renderToPipeableStream(
    <Provider store={store}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </Provider>,
    options
  );
  return stream;
}
