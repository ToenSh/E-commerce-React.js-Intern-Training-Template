import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
  const { register } = useForm();
  return (
    <div className="text-dark-green max-w-7xl mx-auto flex flex-col items-center py-12">
      <h1 className="font-semibold text-[40px] mb-12">Login</h1>
      <form className="flex flex-col gap-6">
        <label>
          <input
            type="email"
            id="email"
            {...register('email')}
            className="w-[440px] py-3 border border-gray-600 pl-4 focus:border-2 focus:border-black focus:outline-none focus:ring-0"
            placeholder="Email"
          />
        </label>
        <label>
          <input
            type="password"
            id="password"
            {...register('password')}
            placeholder="Password"
            className="w-[440px] py-3 border border-gray-600 pl-4 focus:border-2 focus:border-black focus:outline-none focus:ring-0"
          />
        </label>
        <button className="bg-dark-green text-white font-medium w-28 self-center py-2 rounded hover:opacity-75">
          Sign in
        </button>
        <Link
          className="self-center underline opacity-75 hover:opacity-100 hover:font-medium text-[15px] tracking-wide"
          to={'/register'}
        >
          Create account
        </Link>
      </form>
    </div>
  );
};

export default Login;
