import { useLoaderData } from 'remix';

export const loader = async ({ params }: { params: { id: string } }) => {
  const post = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );

  if (post.status === 404) {
    throw new Response('', { status: 404, statusText: 'Post was not found' });
  } else if (post.status >= 500) {
    throw new Response('', { status: 500, statusText: 'sth went wrong' });
  }

  return post;
};

export default function Post() {
  const post = useLoaderData();

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}
