import React from 'react';
import { renderToString } from 'react-dom/server';
import { readFileSync } from 'fs';
import path from 'path';
import { StaticRouter as Router, matchPath } from 'react-router-dom';

import routes from './IsoRoutes';
import App from '../../shared/App';

/**
 * Middleware for handling server-side rendering routes
 *
 * @export
 * @param {any} req http request object
 * @param {any} res http response object
 * @returns {void}
 */
export default function IsomorphicHandler(req, res) {
  const match = routes.reduce((acc, route) =>
    matchPath(req.url, route, { exact: true }) || acc, null);

  if (!match) {
    res.sendStatus(404);
  } else {
    const appString = renderToString(
      <Router context={{}} location={req.url}>
        <App />
      </Router>
    );
    const fileString = readFileSync(path.join(__dirname, '../../public/main.html'), { encoding: 'utf-8' })
      .replace('{reactOutput}', appString);

    res.status(200).send(fileString);
  }
}
