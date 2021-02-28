import { act, fireEvent, screen } from '@testing-library/react';
import { render } from '../../utils/test-utils';
import MessageForm from './MessageForm';
import * as reactRedux from 'react-redux'

describe('<MessageForm>', () => {

  const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch')
  beforeEach(() => {
    useDispatchMock.mockClear()
  });

  it('Should display', async () => {
    const dummyDispatch = jest.fn();
    useDispatchMock.mockReturnValue(dummyDispatch)

    act(() => {
      render(<MessageForm />);
    });
    expect(screen.getByText(/Envoyer/i)).toBeInTheDocument();
  });

  it('Should not call onSubmit on form validation if no message', () => {

    const dummyDispatch = jest.fn();
    useDispatchMock.mockReturnValue(dummyDispatch)

    act(() => {
      render(<MessageForm />);
    });
    fireEvent.click(screen.getByText(/Envoyer/i));
    expect(dummyDispatch).toHaveBeenCalledTimes(0);
  });

  it('Should call onSubmit on form validation and display success message', async () => {
    const dummyDispatch = jest.fn();
    useDispatchMock.mockReturnValue(dummyDispatch)

    act(() => {
      render(<MessageForm />);
    });
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'My message' } });
    fireEvent.click(screen.getByText(/Envoyer/i));
    expect(dummyDispatch).toHaveBeenCalledTimes(1);
    await screen.findByText(/Votre message a été envoyé/i);
    const resetButton = screen.getByText(/Envoyer un nouveau message/);
    expect(resetButton).toBeInTheDocument();
    act(() => {
      fireEvent.click(resetButton);
    });
    expect(screen.getByText(/Envoyer/i)).toBeInTheDocument();
  });


});