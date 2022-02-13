import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from 'remix';
import type { MetaFunction } from 'remix';

import style from './root.css';

export const meta: MetaFunction = () => {
  return {
    title: 'Remix Test App',
  };
};

export const links = () => {
  return [{ rel: 'stylesheet', href: style }];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  );
}

export const CatchBoundary = () => {
  const cought = useCatch();

  return (
    <html>
      <head>
        <title>Root Remix Error...</title>
        <Meta />
        <Links />
      </head>
      <body>
        <main className="root-error">
          <h1>{cought.status}</h1>
          <p>{cought.statusText}</p>
        </main>
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  );
};
