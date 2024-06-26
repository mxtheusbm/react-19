'use client'
import axios from "axios";
import Image from "next/image";
import { use } from "react";

interface Post {
  body: string;
  cover?: string;
  id: number;
  title: string;
}

const getPosts = async () => {
  const postsResponse = await axios.get('https://jsonplaceholder.typicode.com/posts')
  const photosResponse = await axios.get('https://jsonplaceholder.typicode.com/photos')

  const [posts, photos] = await Promise.all([postsResponse, photosResponse]);

  const postsJson = posts.data;
  const photosJson = photos.data;

  const postsAndPhotos: Post[] = postsJson.map((post: Post, index: number) => {
    return { ...post, cover: photosJson[index].url };
  });

  return postsAndPhotos;
}

export const Posts = () => {
  const posts = use(getPosts())

  return (
    <ul className="grid grid-cols-3 gap-8">
      {posts.map(post => (
        <li key={post.id} className="w-96 shadow-lg">
          <img src={post.cover} alt={post.title} />
          <div className="post-content p-6">
            <h2 className="text-2xl font-bold mb-3">{post.title}</h2>
            <p>{post.body}</p>
          </div>
        </li>
      ))}
    </ul>  
  )
}
