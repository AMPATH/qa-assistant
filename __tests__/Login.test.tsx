import { render, fireEvent } from '@testing-library/react';
import {test, vi, expect} from 'vitest';
import Login from '../src/authentication/Login/Login';

test('SubmitLoginForm is not called when inputs are empty', () => {
  const { getByRole, getByPlaceholderText } = render(<Login />);

  const usernameInput = getByPlaceholderText('Enter username');
  const passwordInput = getByPlaceholderText('Enter password');

  //mock the submit function
  const submitLoginForm = vi.fn();

  fireEvent.change(usernameInput, { target: { value: '' } });
  fireEvent.change(passwordInput, { target: { value: '' } });
  const loginButton = getByRole('button', { name: 'Log In' });
  fireEvent.click(loginButton);

  expect(submitLoginForm).not.toHaveBeenCalled();
});
