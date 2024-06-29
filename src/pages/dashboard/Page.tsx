import { LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import { useAuth } from '../../hooks/useAuth';

const Page = () => {
  const auth = useAuth();
  return (
    <div className='px-8 py-16'>
      <div className='flex justify-center text-center'>
        <div className='flex-col flex max-w-[400px] w-full space-y-6 mx-auto'>
          <div className='text-3xl font-semibold'>
            ようこそ！ {auth.username} さん！
          </div>
          <div>
            <Button asChild variant='link' className='w-fit'>
              <Link to='/'>トップ画面へ</Link>
            </Button>
          </div>
          <div>
            <Button
              variant='destructive'
              className='w-fit'
              onClick={() => auth.signOut()}
            >
              <LogOut className='w-4 h-4 mr-2' />
              ログアウト
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
