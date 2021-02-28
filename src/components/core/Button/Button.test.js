import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Button from '../Button';

describe('<Button>', () => {
  it('Should render without crash', () => {
    render(<Button>Label</Button>);
    expect(screen.getByText(/Label/i)).toBeInTheDocument();
  });

  it('Should render <button> element', () => {
    render(<Button />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('Should execute passed onClick function', () => {
    const onClickMock = jest.fn();
    render(<Button onClick={onClickMock} />);
    fireEvent.click(screen.getByRole('button'));
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it('Should prevent onClick function call when disabled', () => {
    const onClickMock = jest.fn();
    render(<Button onClick={onClickMock} disabled />);
    fireEvent.click(screen.getByRole('button'));
    expect(onClickMock).toHaveBeenCalledTimes(0);
  });
});