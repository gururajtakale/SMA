import React from "react";
import Navbar from "../components/Navbar";
import Stories from "../components/Stories";
import Post from "../components/Post";
import Footer from "../components/Footer";

const Home = () => {
  const posts = [
    { user: "Emily", image: "https://source.unsplash.com/random/400x300?nature" },
    { user: "John", image: "https://source.unsplash.com/random/400x300?city" },
  ];

  return (
    <div>
      <Navbar />

      {/* Centered Feed Container */}
      <div className="d-flex justify-content-center mt-4">
        <div style={{ width: "410px" }}>
          <Stories />
          {posts.map((post, index) => (
            <Post key={index} {...post} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;