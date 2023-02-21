import { render, fireEvent, screen, waitFor } from '@testing-library/react';
import Login from '../src/authentication/Login/Login';
import '@testing-library/jest-dom/extend-expect';

const {getByPlaceholderText} = render(<Login/>)
const userNameField = getByPlaceholderText(/username/i)
const passwordField = getByPlaceholderText(/password/i)

describe("Login",()=>{
  it("Should render the form inputs and submit button",()=>{
    const loginButton = screen.getByRole("button",{name:"Log In"})
    expect(userNameField).toBeInTheDocument()
    expect(passwordField).toBeInTheDocument()
    expect(loginButton).toBeInTheDocument()
});
  it("Should change form values when a user types a new entry",()=>{
    fireEvent.change(userNameField,{target:{value:"MaryJane"}})
    fireEvent.change(passwordField,{target:{value:"MJ123"}})
    expect((userNameField as HTMLInputElement).value).toBe("MaryJane");
    expect((passwordField as HTMLInputElement).value).toBe("MJ123");
});
  it("should display an error message when all fields are not entered", async () => {
    const { getByText,getByRole } = render(<Login />);
    const loginButton = getByRole("button",{name:"Log In"})
    fireEvent.change(userNameField, { target: { value: "" } });
    fireEvent.change(passwordField, { target: { value: "" } });
    fireEvent.click(loginButton);
    const errorMessage = await waitFor(() => getByText(/Fill in the form!/i));
    expect(errorMessage).toBeInTheDocument();
});
});
