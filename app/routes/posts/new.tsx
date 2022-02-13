import { Form, redirect } from 'remix';

export default function NewPost() {
  return (
    <div>
      <h1>New Post</h1>
      <Form method="post">
        <div className="form-group">
          <label>Title:</label>
          <br />
          <input type="text" name="title" />
        </div>
        <div className="form-group">
          <label>Body:</label>
          <br />
          <input type="text" name="body" />
        </div>
        <input type="submit" />
      </Form>
    </div>
  );
}

export const action = async ({ request }: any) => {
  const formData = await request.formData();
  const title = formData.get('title');
  const body = formData.get('body');

  return redirect(`/posts?title=${title}&body=${body}`);
};
