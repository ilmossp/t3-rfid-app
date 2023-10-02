
import {useForm} from 'react-hook-form';




type Inputs = {
    Email: string,
    Password: string
}

export default function Login(){

const { register, handleSubmit, formState: { errors } } = useForm();
const onSubmit<Inputs> = data => console.log(data);
return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="email" placeholder="Email" {...register("Email", {required: true})} />
      <input type="password" placeholder="Password" {...register("Password", {required: true})} />
      <input type="submit" />
    </form>
  );
};