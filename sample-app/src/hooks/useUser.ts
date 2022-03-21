import { useState, useCallback, useEffect } from 'react';

import { atom, atomFamily, useRecoilState } from 'recoil';

// 開発用、mock(https://mswjs.io/)を使った方が良い
const sleep = async (millisec: number): Promise<any> => {
  return await new Promise((resolve) => {
    setTimeout(resolve, millisec);
  });
};

const dbData = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Smith' },
  { id: 4, name: 'Michel' },
  { id: 5, name: 'Taro' },
];

const userState = atomFamily<{ id: number; name: string } | null, number>({
  key: 'userState',
  default: null,
});

export const useUser = (id: number | null) => {
  const [user, setUser] = useRecoilState(userState(id));
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const refetch = useCallback(
    async (id: number) => {
      setLoading(true);
      setError(null);
      try {
        if (id === null) {
          setUser(null);
        } else {
          const result = await sleep(1000).then(() => {
            return dbData[id - 1];
          });
          setUser(result);
        }
      } catch (error) {
        setUser(null);
        setError(new Error('failed to fetch user data'));
      } finally {
        setLoading(false);
      }
    },
    [id]
  );

  useEffect(() => {
    refetch(id);
  }, [id]);

  return [user, loading, error] as const;
};

const userParamsState = atom<number>({
  key: 'userParamsState',
  default: null,
});

export const useUserParams = () => {
  const [userParams, setUserParams] = useRecoilState(userParamsState);
  const userParamsOnChange = (id: number) => {
    setUserParams(id);
  };
  return [userParams, userParamsOnChange] as const;
};
