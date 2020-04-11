import { render, getByText, fireEvent } from "@testing-library/react";
import React from "react";
import Button from "components/Button";

describe("Button", () => {
    test("should display text", () => {
        const { container } = render(<Button text="Hello world!" />);
        getByText(container, "Hello world!"); 
    });
});

describe("Button", () => {
    test("should handle click events", () => {
        const onClickMock = jest.fn();
        const { container } = render(
            <Button text="Clicked the button?" onClick={onClickMock} />
        );
        const component = container.firstChild;
        fireEvent.click(component);
        expect(onClickMock).toBeCalled();
    });
});

test("should make text uppercase", () => {
    const { container } = render(<Button text="Hello Phil" />);
    const component = getByText(container, "Hello Phil");

    expect(component).toHaveStyleRule("text-transform", "uppercase");
});