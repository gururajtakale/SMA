import React, { useState } from "react";
import { FaHeart, FaComment, FaShare } from "react-icons/fa";

const Post = ({ user, image }) => {
  // State for counts
  const [likes, setLikes] = useState(12);
  const [comments, setComments] = useState(5);
  const [shares, setShares] = useState(2);

  return (
    <div className="card mb-3">
      <div className="d-flex align-items-center p-2">
        <img src={`https://i.pravatar.cc/40?u=${user}`} className="rounded-circle me-2" alt="profile" />
        <strong>{user}</strong>
      </div>
      {/* Image with fallback (if broken, load default image) */}
      <img
        src={image || "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQZuS2YKdj6P1LeIyOUdh_Rnl1xgTYGobOeTQVRNPw2jWZ12J1K"}
        className="card-img-top"
        alt="post"
        style={{ width: "400px", height: "auto" }}
        onError={(e) => (e.target.src = "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQZuS2YKdj6P1LeIyOUdh_Rnl1xgTYGobOeTQVRNPw2jWZ12J1K")}
      />
      <div className="p-2 d-flex align-items-center">
        <div className="me-3 d-flex align-items-center">
          <FaHeart className="me-1 text-danger" /> <span>{likes}</span>
        </div>
        <div className="me-3 d-flex align-items-center">
          <FaComment className="me-1" /> <span>{comments}</span>
        </div>
        <div className="d-flex align-items-center">
          <FaShare className="me-1" /> <span>{shares}</span>
        </div>
      </div>
      <p className="m-0 px-2">
        <strong>{user}</strong> Love this view! 🌅
      </p>
    </div>
  );
};

export default Post;