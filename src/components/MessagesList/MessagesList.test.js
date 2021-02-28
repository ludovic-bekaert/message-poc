import { act, screen, waitFor } from '@testing-library/react';
import { render } from '../../utils/test-utils';
import MessagesList from './MessagesList';
import * as reactRedux from 'react-redux'

describe('<MessagesList>', () => {

  const useSelectorMock = jest.spyOn(reactRedux, 'useSelector')
  const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch')
  beforeEach(() => {
    useSelectorMock.mockClear()
    useDispatchMock.mockClear()
  });
  const item = { id: 'test', content: 'My message', isPrivate: false };

  it('Should display', async () => {
    let state = { list: null };
    // ARRANGE
    useSelectorMock.mockReturnValue(state);

    const dummyDispatch = jest.fn(({ type }) => {
      if (type === 'messages/GET_MESSAGES') {
        state.list = [item];
      }
      return Promise.resolve();
    });
    useDispatchMock.mockReturnValue(dummyDispatch)
    /* SANITY CHECK */
    expect(dummyDispatch).not.toHaveBeenCalled();

    act(() => {
      render(<MessagesList />);
    });
    expect(screen.getByText(/Chargement/i)).toBeInTheDocument();

    await screen.findByRole('list');
    expect(screen.getByText(/Liste des messages/i)).toBeInTheDocument();
    expect(dummyDispatch).toHaveBeenCalledTimes(1);
  });

  it('Should not call dispatch if already loaded', async () => {
    let state = { list: [item] };
    // ARRANGE
    useSelectorMock.mockReturnValue(state);

    const dummyDispatch = jest.fn();
    useDispatchMock.mockReturnValue(dummyDispatch)
    /* SANITY CHECK */
    expect(dummyDispatch).not.toHaveBeenCalled();

    act(() => {
      render(<MessagesList />);
    });
    await screen.findByRole('list');
    expect(screen.getByText(/Liste des messages/i)).toBeInTheDocument();
    expect(dummyDispatch).toHaveBeenCalledTimes(0);
  });

});