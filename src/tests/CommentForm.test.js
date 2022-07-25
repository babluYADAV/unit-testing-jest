import { render, screen, fireEvent } from "@testing-library/react";
import CommentForm from "../Components/CommentForm";

describe("Commentform test", () => {
  test("initail Conditions", () => {
    render(<CommentForm />);

    const commentInput = screen.getByRole("textbox");
    expect(commentInput).toBeInTheDocument();
    const checkbox = screen.getByLabelText("i agree to terms and conditions", {
      exact: false,
    });
    expect(checkbox).toBeInTheDocument();
    const commentButton = screen.getByRole("button", {
      name: "Comment",
      exact: false,
    });
    expect(commentButton).toBeDisabled();
  });

  test("Enable submit button on type and checkbox click ", () => {
    render(<CommentForm />);
    const checkbox = screen.getByLabelText("i agree to terms and conditions", {
      exact: false,
    });
    const commentButton = screen.getByRole("button", {
      name: "Comment",
      exact: false,
    });
    const commentInput = screen.getByPlaceholderText(
      "write your comment here",
      {
        exact: false,
      }
    );
    fireEvent.change(commentInput, { target: { value: "something" } });

    fireEvent.click(checkbox);
    expect(commentButton).toBeEnabled();
    fireEvent.click(commentButton);

    fireEvent.click(checkbox);
    expect(commentButton).toBeDisabled();
  });
});
