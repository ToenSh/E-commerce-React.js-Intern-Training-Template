import { useForm } from 'react-hook-form';

const Register = () => {
  const { register } = useForm();
  return (
    <div className="text-dark-green max-w-7xl mx-auto flex flex-col items-center py-12">
      <h1 className="font-semibold text-[40px] mb-12">Create account</h1>
      <form className="flex flex-col gap-6 items-center">
        <label>
          <input
            type="text"
            id="first-name"
            {...register('firstName')}
            className="w-[440px] py-3 border border-gray-600 pl-4 focus:border-2 focus:border-black focus:outline-none focus:ring-0"
            placeholder="First Name"
          />
        </label>
        <label>
          <input
            type="text"
            id="last-name"
            {...register('lastName')}
            className="w-[440px] py-3 border border-gray-600 pl-4 focus:border-2 focus:border-black focus:outline-none focus:ring-0"
            placeholder="Last Name"
          />
        </label>
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
            className="w-[440px] py-3 border border-gray-600 pl-4 focus:border-2 focus:border-black focus:outline-none focus:ring-0"
            placeholder="Password"
          />
        </label>
        <button className="bg-dark-green text-white font-medium w-28 py-2 mt-4 rounded hover:opacity-75">
          Create
        </button>
      </form>
    </div>
  );
};

export default Register;
