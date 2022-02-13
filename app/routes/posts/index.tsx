import { useLoaderData, Link, Links } from 'remix';
import { Post } from '~/types';

export const loader = async ({ request }: any): Promise<Post[]> => {
  const posts = await fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then((json) => json)
    .catch((err) => {
      throw new Response('', {
        status: 500,
        statusText: 'sth went wrong here',
      });
    });

  const url = new URL(request.url);
  const title = url.searchParams.get('title');
  const body = url.searchParams.get('body');
  const id = posts[posts.length - 1].id + 1;

  if (title && body) {
    posts.unshift({
      id,
      title,
      body,
      temp: true,
    });
  }

  return posts;
};

export default function Index() {
  const posts = useLoaderData();

  return (
    <>
      <Links />
      <h1>Posts</h1>

      <div className="new-post-link">
        <Link to="/posts/new">new post</Link>
      </div>

      <div className="posts">
        {posts.map((post: Post, index: number) => {
          const link = !post.temp
            ? `/posts/${post.id}`
            : `/posts/temp?title=${post.title}&body=${post.body}`;

          return (
            <Link to={link} key={index}>
              <div className="post-item">
                <h2>{post.title}</h2>
                <p>{post.body}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
