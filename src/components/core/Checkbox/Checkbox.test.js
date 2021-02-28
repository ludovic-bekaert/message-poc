import { render, screen, fireEvent } from '@testing-library/react';
import Checkbox from './Checkbox';

describe('<Checkbox>', () => {
  it('Should display label', () => {
    render(<Checkbox label="My label" />);
    expect(screen.getByText(/My label/i)).toBeInTheDocument();
  });
  it('Should call the onChange function', () => {
    const onChangeMock = jest.fn();
    const { getByRole } = render(<Checkbox onChange={onChangeMock} />);
    const input = getByRole('checkbox');
    expect(input.checked).toEqual(false);
    fireEvent.click(input);
    expect(input.checked).toEqual(true);
    expect(onChangeMock).toHaveBeenCalledTimes(1);
  });

});