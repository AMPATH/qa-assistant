import { render, fireEvent, screen, waitFor, cleanup, getByText } from '@testing-library/react';
import Login from '../src/authentication/Login/Login';
import {beforeEach, vi} from 'vitest';
import '@testing-library/jest-dom/extend-expect';
describe("Login",()=>{
  let userNameField: any;
  let passwordField: any;
  let loginButton: any;
  beforeEach(()=>{
    const { getByText, getByRole, getByPlaceholderText } = render(<Login />);
    userNameField = getByPlaceholderText(/Username/i);
    passwordField = getByPlaceholderText(/Password/i);
    loginButton = getByRole("button",{name:"Log In"});
    
  })
  afterEach(()=>{
    cleanup()
  })
  it("Should render the form inputs and submit button",()=>{
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
})

