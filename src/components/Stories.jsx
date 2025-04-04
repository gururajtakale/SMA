import React from "react";

const Stories = () => {
  const users = ["John", "Emily", "David", "Sophia", "Michael"];
  
  return (
    <div className="d-flex p-3 border-bottom story-bar">
      {users.map((user, index) => (
        <div key={index} className="text-center mx-2">
          <div className="rounded-circle border border-danger p-1" style={{ width: 60, height: 60 }}>
            <img src={`https://i.pravatar.cc/100?u=${user}`} className="w-100 h-100 rounded-circle" alt="story" />
          </div>
          <small>{user}</small>
        </div>
      ))}
    </div>
  );
};

export default Stories