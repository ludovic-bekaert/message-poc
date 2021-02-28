import { render, screen, fireEvent } from '@testing-library/react';
import TextField from './TextField';

describe('<TextField>', () => {
  it('Should display label', () => {
    render(<TextField label="My label" />);
    expect(screen.getByText(/My label/i)).toBeInTheDocument();
  });
  it('Should give focus to the input', () => {
    render(<TextField autoFocus />);
    expect(document.activeElement.type).toEqual('textarea');
  });
  it('Should call the onChange function', () => {
    const onChangeMock = jest.fn();
    const { getByRole } = render(<TextField onChange={onChangeMock} />);
    const input = getByRole('textbox');
    fireEvent.change(input, { target: { value: 'Hello' } });
    expect(onChangeMock).toHaveBeenCalledTimes(1);
  });

});