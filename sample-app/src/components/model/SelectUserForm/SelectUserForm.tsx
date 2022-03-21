import { useUserParams } from '@/hooks/useUser';

import { Button } from '@/components/ui/Button';

export const SelectUserForm = () => {
  const [userParams, userParamsOnChange] = useUserParams();

  const onClick = (id: number): void => {
    userParamsOnChange(id);
  };

  return (
    <ul>
      <li>
        <Button text='1' onClick={() => onClick(1)} />
        <Button text='2' onClick={() => onClick(2)} />
        <Button text='3' onClick={() => onClick(3)} />
        <Button text='4' onClick={() => onClick(4)} />
      </li>
    </ul>
  );
};
