import { useLoaderData } from 'remix';

export const loader = ({ request }: any) => {
  const url = new URL(request.url);

  const title = url.searchParams.get('title');
  const body = url.searchParams.get('body');

  return {
    title,
    body,
  };
};

export default function Temp() {
  const loaded = useLoaderData();

  return (
    <div>
      <h2>Temp Post: {loaded.title}</h2>
      <p>{loaded.body}</p>
    </div>
  );
}
