import { render, fireEvent, act, waitFor } from '@testing-library/react-native';
import { Button } from './Button';

describe('Button', () => {
  it('should render button', () => {
    const { getByText } = render(<Button>My Button</Button>);

    getByText(/my button/i);
  });

  it('should call action when click on button', async () => {
    const handleSubmit = jest.fn();

    const { getByRole } = render(
      <Button accessibilityRole="button" onPress={handleSubmit}>
        My Button
      </Button>,
    );

    const buttonElement = getByRole('button');

    expect(buttonElement.props.style.backgroundColor).toBe('#06b6d4');

    act(() => fireEvent.press(buttonElement));

    await waitFor(() => expect(handleSubmit).toHaveBeenCalledTimes(1));
  });
});
