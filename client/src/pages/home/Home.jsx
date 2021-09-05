import "./style.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Posts from "../../components/posts/Posts";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);

  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
}

// if anyone is stuck on the first five minutes when the axios call isn't retrieving data to the home page try this, close the database connection and running react app change the API folders scripts in the package.json to  "scripts": {
//   "start": "node index.js"
// } and boot the database connection and app back up and assuming your proxy is correct   "proxy": "http://localhost:5000/api/"
// it should work and you should see the posts if you have manually added at least one, you can then add nodemon back after this fix and it will continue working idk why this works it just does. link for solution https://github.com/plouc/mozaik/issues/118 by user frankwallis
