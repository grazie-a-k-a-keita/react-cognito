import { zodResolver } from '@hookform/resolvers/zod';
import { LogIn } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { Button } from '../../components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '../../components/ui/form';
import { Input } from '../../components/ui/input';
import { toast } from '../../components/ui/use-toast';
import { useAuth } from '../../hooks/useAuth';

const FormSchema = z.object({
  username: z.string().min(1, {
    message: 'Username is required.',
  }),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters.' }),
});

function SignIn() {
  const auth = useAuth();
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const result = await auth.signIn(data.username, data.password);
    if (result.success) {
      navigate({ pathname: '/dashboard' });
    } else {
      toast({
        variant: 'destructive',
        title: 'Authentication failed',
        description:
          "We couldn't find an account with that username and password.",
      });
    }
  }

  return (
    <div className='px-8 py-16'>
      <div className='flex justify-center'>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='space-y-4 w-full max-w-[400px]'
          >
            <FormField
              control={form.control}
              name='username'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder='Username'
                      autoComplete='username'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder='Password'
                      type='password'
                      autoComplete='current-password'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type='submit' className='w-full'>
              <LogIn className='w-4 h-4 mr-2' />
              Sign In
            </Button>
          </form>
        </Form>
      </div>
      <div className='flex justify-center mt-8'>
        <Button asChild variant='link' className='w-fit'>
          <Link to='/'>トップ画面へ戻る</Link>
        </Button>
      </div>
    </div>
  );
}

export default SignIn;
