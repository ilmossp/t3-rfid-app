import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import api from '~/lib/api';


type Inputs = {
  Email: string,
  Password: string,
};

export default function Login() {
  const router = useRouter();
  
  const { register, handleSubmit} = useForm<Inputs>();
  const onSubmit = (data: Inputs) => {
    api.post('/login',data).then((res) => {
      console.log(res.data);
      router.push('/dashboard/table');
    } ).catch((err) => {
      console.log(err);
    } );
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="email" placeholder="Email" {...register("Email", {required: true})} />
      <input type="password" placeholder="Password" {...register("Password", {required: true})} />
      <input type="submit" />
    </form>
  );
}