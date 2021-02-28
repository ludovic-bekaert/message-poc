import { render, screen, fireEvent } from '@testing-library/react';
import Label from './Label';

describe('<Label>', () => {
  it('Should display label', () => {
    render(<Label>My label</Label>);
    expect(screen.getByText(/My label/i)).toBeInTheDocument();
  });
});