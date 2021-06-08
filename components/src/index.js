import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
import faker from "faker";
const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Vishesh"
          timeAgo="9:00 PM"
          img={faker.image.avatar()}
          comment="Aweasome web developer"
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Alex"
          timeAgo="8:23 AM"
          img={faker.image.avatar()}
          comment="Vishesh is great coder"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Alex"
          timeAgo="8:23 AM"
          img={faker.image.avatar()}
          comment="Vishesh is great coder"
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
