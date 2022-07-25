import { render, screen, fireEvent } from "@testing-library/react";
import CommentList from "../Components/CommentList";

describe("Comment list test", () => {
  test("initial condtions or no comments available", () => {
    render(<CommentList allCommnents={[]} />);
    const h2Element = screen.getByText("No commnets available", {
      exact: false,
    });
    expect(h2Element).toBeInTheDocument();
  });

  test("comments available", () => {
    const comments = [
      { id: 1, comment: "comment 1" },
      { id: 2, comment: "comment 2" },
    ];
    render(<CommentList allCommnents={comments} />);
    const h2Element = screen.queryByText("No commnets available", {
      exact: false,
    });
    expect(h2Element).not.toBeInTheDocument();
    const commentLi = screen.getAllByRole("listitem");
    expect(commentLi.length).toBe(comments.length);
  });
});
