// import React, { useState } from 'react';

// const Profile = () => {
//   const [tab, setTab] = useState('posts');

//   const user = {
//     username: 'gururaj_t',
//     profilePic: 'https://via.placeholder.com/150',
//     bio: 'Full Stack Dev | Travel | Code 💻✈️',
//     posts: 12,
//     followers: 230,
//     following: 180,
//     isCurrentUser: true,
//     images: [
//       'https://via.placeholder.com/300',
//       'https://via.placeholder.com/301',
//       'https://via.placeholder.com/302',
//       'https://via.placeholder.com/303',
//       'https://via.placeholder.com/304',
//       'https://via.placeholder.com/305',
//     ],
//   };

//   return (
//     <div className="container py-4 profile-page">
//       {/* Profile Header */}
//       <div className="d-flex align-items-center mb-4">
//         <img
//           src={user.profilePic}
//           className="rounded-circle profile-pic me-4"
//           alt="Profile"
//         />
//         <div>
//           <div className="d-flex align-items-center mb-2">
//             <h4 className="me-3">{user.username}</h4>
//             {user.isCurrentUser ? (
//               <button className="btn btn-outline-secondary btn-sm">Edit Profile</button>
//             ) : (
//               <button className="btn btn-primary btn-sm">Follow</button>
//             )}
//           </div>
//           <div className="d-flex gap-3 mb-2">
//             <span><strong>{user.posts}</strong> posts</span>
//             <span><strong>{user.followers}</strong> followers</span>
//             <span><strong>{user.following}</strong> following</span>
//           </div>
//           <p className="bio">{user.bio}</p>
//         </div>
//       </div>

//       {/* Tabs */}
//       <div className="border-top border-bottom py-2 d-flex justify-content-around text-secondary mb-3">
//         <button
//           onClick={() => setTab('posts')}
//           className={`btn btn-link ${tab === 'posts' ? 'fw-bold text-dark' : ''}`}
//         >
//           Posts
//         </button>
//         <button
//           onClick={() => setTab('reels')}
//           className={`btn btn-link ${tab === 'reels' ? 'fw-bold text-dark' : ''}`}
//         >
//           Reels
//         </button>
//         <button
//           onClick={() => setTab('tagged')}
//           className={`btn btn-link ${tab === 'tagged' ? 'fw-bold text-dark' : ''}`}
//         >
//           Tagged
//         </button>
//       </div>

//       {/* Posts Grid */}
//       <div className="row g-2">
//         {user.images.map((img, idx) => (
//           <div key={idx} className="col-4">
//             <img src={img} className="img-fluid post-img" alt={`Post ${idx}`} />
//           </div>
//         ))}
//       </div>
      

//     </div>
//   );
// };

// export default Profile;
import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Profile = () => {
  const [tab, setTab] = useState("posts");

  const user = {
    username: "gururaj_t",
    profilePic: "https://via.placeholder.com/150",
    bio: "Full Stack Dev | Travel | Code 💻✈️",
    posts: 12,
    followers: 230,
    following: 180,
    isCurrentUser: true,
    images: [
      "https://via.placeholder.com/300",
      "https://via.placeholder.com/301",
      "https://via.placeholder.com/302",
      "https://via.placeholder.com/303",
      "https://via.placeholder.com/304",
      "https://via.placeholder.com/305",
    ],
  };

  return (
    <div>
        <Navbar/>
    <div className="container d-flex justify-content-center">
      <div className="profile-page">
        {/* Profile Header */}
        <div className="d-flex align-items-center mb-4">
          <img
            src={user.profilePic}
            className="rounded-circle profile-pic me-4"
            alt="Profile"
          />
          <div>
            <div className="d-flex align-items-center mb-2">
              <h4 className="me-3">{user.username}</h4>
              {user.isCurrentUser ? (
                <button className="btn btn-outline-secondary btn-sm">
                  Edit Profile
                </button>
              ) : (
                <button className="btn btn-primary btn-sm">Follow</button>
              )}
            </div>
            <div className="d-flex gap-3 mb-2">
              <span>
                <strong>{user.posts}</strong> posts
              </span>
              <span>
                <strong>{user.followers}</strong> followers
              </span>
              <span>
                <strong>{user.following}</strong> following
              </span>
            </div>
            <p className="bio">{user.bio}</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-top border-bottom py-2 d-flex justify-content-around text-secondary mb-3">
          <button
            onClick={() => setTab("posts")}
            className={`btn btn-link ${tab === "posts" ? "fw-bold text-dark" : ""}`}
          >
            Posts
          </button>
          <button
            onClick={() => setTab("reels")}
            className={`btn btn-link ${tab === "reels" ? "fw-bold text-dark" : ""}`}
          >
            Reels
          </button>
          <button
            onClick={() => setTab("tagged")}
            className={`btn btn-link ${tab === "tagged" ? "fw-bold text-dark" : ""}`}
          >
            Tagged
          </button>
        </div>

        {/* Posts Grid */}
        <div className="row g-2">
          {user.images.map((img, idx) => (
            <div key={idx} className="col-4">
              <img src={img} className="img-fluid post-img" alt={`Post ${idx}`} />
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
    </div>
  );
};

export default Profile;
