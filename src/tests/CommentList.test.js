import { render, screen, fireEvent } from "@testing-library/react";
import renderer from "react-test-renderer";
import CommentList from "../Components/CommentList";

describe("Comment list test", () => {
  const comments = [
    { id: 1, comment: "comment 1" },
    { id: 2, comment: "comment 2" },
  ];
  test("snapshot with no items", () => {
    const tree = renderer.create(<CommentList allCommnents={[]} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test("snapshot with items", () => {
    const tree = renderer
      .create(<CommentList allCommnents={comments} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test("initial condtions or no comments available", () => {
    render(<CommentList allCommnents={[]} />);
    const h2Element = screen.getByText("No commnets available", {
      exact: false,
    });
    expect(h2Element).toBeInTheDocument();
  });

  test("comments available", () => {
    render(<CommentList allCommnents={comments} />);
    const h2Element = screen.queryByText("No commnets available", {
      exact: false,
    });
    expect(h2Element).not.toBeInTheDocument();
    const commentLi = screen.getAllByRole("listitem");
    expect(commentLi.length).toBe(comments.length);
  });
});
