import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Greeting from "./Greeting";
describe("Greeting component", () => {
    test("renders Hello World as as text", () => {
        render(<Greeting />);
        const helloWorldElement = screen.getByText("Hello World!");
        expect(helloWorldElement).toBeInTheDocument();
    });
    test("renders good to see you if the button was not clicked",() =>  {
        render(<Greeting />);
        const outputElement = screen.getByText("It`s good to see you!");
        expect(outputElement).toBeInTheDocument();
    });
    test("renders Changed! if the button was clicked", () => {
        render(<Greeting />);
        const buttonElement = screen.getByRole("button");
        userEvent.click(buttonElement);
        const outputElement = screen.getByText("Changed!");
        expect(outputElement).toBeInTheDocument();
    });
    test("renders no good to see you if the button was clicked", () => {
        render(<Greeting />);
        const buttonElement = screen.getByRole("button");
        userEvent.click(buttonElement);
        const outputElement = screen.queryByText("It`s good to see you!");
        expect(outputElement).toBeNull();
    });
});