import { Outlet } from 'react-router-dom';

import BlogActions from '../components/BlogActions';

function BlogLayout() {
  return (
    <>
      <BlogActions />
      <main>
      <Outlet />
      </main>
    </>
  );
}

export default BlogLayout;
