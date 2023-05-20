import { request } from '../utils/request';
import { getJwtToken } from './auth';

export async function createPost(image, description) {
  const formData = new FormData();
  formData.append('file.image', image);
  formData.append('data', JSON.stringify({ description }));

  await fetch('http://localhost:1337/api/posts', {
    method: 'POST',
    body: formData,
    headers: { Authorization: `Bearer ${getJwtToken()}` },
  });
}

export async function loadPosts() {
  const response = await request('http://localhost:1337/api/posts?populate=*');
  return response.data?.map((post) => ({
    id: post?.id,
    ...post?.attributes,
    image: post?.attributes?.image?.data?.[0]?.attributes?.url,
    user: {
      id: post?.attributes?.user?.data?.id,
      ...post?.attributes?.user?.data?.attributes,
    },
  }));
}

export async function likePost(id) {
  const response = await request(`http://localhost:1337/api/posts/${id}/like`, {
    method: 'PUT',
  });
  return response.data;
}

export async function favorPost(id) {
  const response = await request(
    `http://localhost:1337/api/posts/${id}/favor`,
    {
      method: 'PUT',
    }
  );
  return response.data;
}
