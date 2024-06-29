import { Link } from 'react-router-dom';
import { Button } from '../../components/ui/button';
import { useAuth } from '../../hooks/useAuth';
import { cn } from '../../lib/utils';

const Page = () => {
  const { isAuthenticated } = useAuth();
  return (
    <div className='flex flex-col space-y-6 text-center px-8 py-16'>
      <p className='font-semibold text-2xl text-primary'>トップ画面</p>
      <p className='font-semibold'>
        ログイン状態
        <span
          className={cn(
            'font-semibold border p-2 rounded-xl ml-2 bg-muted-foreground/10',
            {
              'text-green-500': isAuthenticated,
              'text-blue-500': !isAuthenticated,
            }
          )}
        >
          {isAuthenticated ? 'ログイン済' : '未ログイン'}
        </span>
      </p>
      <div className='flex justify-center'>
        <Button asChild variant='link' className='w-fit'>
          {isAuthenticated ? (
            <Link to='/dashboard'>ダッシュボードへ</Link>
          ) : (
            <Link to='/sign-in'>ログイン画面へ</Link>
          )}
        </Button>
      </div>
    </div>
  );
};

export default Page;
