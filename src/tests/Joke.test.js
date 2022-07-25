import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import renderer from "react-test-renderer";
import { rest } from "msw";
import { setupServer } from "msw/node";
import Joke from "../Components/Joke";

describe("App test", () => {
  const server = setupServer(
    rest.get("https://jsonplaceholder.typicode.com/todos", (req, res, ctx) => {
      return res(
        cts.status(200),
        ctx.json([
          {
            userId: 1,
            id: 1,
            title: "delectus aut autem",
            completed: false,
          },
          {
            userId: 2,
            id: 2,
            title: "larem ipsum",
            completed: true,
          },
        ])
      );
    })
  );
  beforeAll(() => {
    server.listen();
  });

  afterAll(() => {
    server.close();
  });

  afterEach(() => {
    server.resetHandlers();
  });
  test("should app render", async () => {
    render(<Joke />);

    await waitForElementToBeRemoved(() => screen.getByTestId("loading"));
    const data = screen.getAllByTestId("list-item").map((li) => li.textContent);
    expect(data).toMatchInlineSnapshot();
  });
});
