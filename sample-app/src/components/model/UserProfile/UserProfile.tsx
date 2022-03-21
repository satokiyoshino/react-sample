import { useUser, useUserParams } from '@/hooks/useUser';

export const UserProfile = () => {
  const [userParams] = useUserParams();
  const [user, loading, error] = useUser(userParams);

  if (loading) {
    return <>loading...</>;
  }

  if (error) {
    return <>error...</>;
  }

  return (
    <>
      {user === null
        ? 'userを選択してください'
        : `id: ${user.id}, name: ${user.name}`}
    </>
  );
};
