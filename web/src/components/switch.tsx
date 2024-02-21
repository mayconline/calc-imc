import clsx from 'clsx';

interface ICustomIconProps {
  activeIcon: React.ReactNode;
  inactiveIcon: React.ReactNode;
}

interface SwitchProps {
  checked: boolean;
  setChecked: () => void;
  customIcon?: ICustomIconProps;
}

export function Switch({ checked, setChecked, customIcon }: SwitchProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked="false"
      data-state={checked ? 'checked' : 'unchecked'}
      className='data-[state="checked"]:bg-green-600 data-[state="unchecked"]:bg-gray-600 rounded-full w-11 h-6 inline-flex items-center'
      onClick={setChecked}
    >
      <span
        data-state={checked ? 'checked' : 'unchecked'}
        className={clsx(
          "block w-5 h-5 text-gray-100 rounded-full transition-transform data-[state='checked']:translate-x-5 data-[state='unchecked']:translate-x-1",
          {
            'bg-transparent': customIcon,
            'bg-green-200': checked && !customIcon,
            'bg-gray-400': !checked && !customIcon,
          }
        )}
      >
        {customIcon && checked && customIcon.activeIcon}
        {customIcon && !checked && customIcon.inactiveIcon}
      </span>
    </button>
  );
}
