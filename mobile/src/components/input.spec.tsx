import { render, fireEvent, act } from '@testing-library/react-native';
import { Input } from './Input';

describe('Input', () => {
  it('should render input', async () => {
    const handleChangeText = jest.fn();

    const { getByPlaceholderText } = render(
      <Input
        label="Peso em kg"
        placeholder="Informe seu peso em kg"
        onChangeText={handleChangeText}
      />,
    );

    const inputElement = getByPlaceholderText(/Informe seu peso em kg/i);

    act(() => fireEvent.changeText(inputElement, 'example typing text'));

    expect(handleChangeText).toHaveBeenCalled();
    expect(handleChangeText).toBeCalledWith('example typing text');
  });
});
