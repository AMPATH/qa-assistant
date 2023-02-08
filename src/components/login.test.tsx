import { render, screen } from "@testing-library/react";

import { describe, it } from 'vitest';
 
import Login from "./login";



describe("App", () => {
  it("renders login page", () => {
    render(<Login />);

    screen.debug();

    // check if App components renders headline
  });
});
