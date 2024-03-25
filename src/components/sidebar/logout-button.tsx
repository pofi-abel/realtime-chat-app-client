import { BiLogOut } from 'react-icons/bi';
import { useLogout } from '../../hooks/useLogout';

type Props = {};

const LogoutButton = (props: Props) => {

  const { logout, loading } = useLogout();

  return (
    <div className='mt-auto'>
      {!loading ? (
        <BiLogOut className='h-6 w-6 cursor-pointer' onClick={logout} />
      ) : (
        <div className='loading loading-spinner'></div>
      )}
    </div>
  );
};

export default LogoutButton;