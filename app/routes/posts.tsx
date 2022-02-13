import { Outlet, useCatch } from 'remix';

export default function Posts() {
  return (
    <div>
      <h1>Main posts compo</h1>
      <Outlet />
    </div>
  );
}

export function CatchBoundary() {
  const cought = useCatch();

  return (
    <div>
      an error accured <br />
      code: <b>{cought.status}</b>
      <br />
      server message: <b>{cought.statusText}</b>
    </div>
  );
}
