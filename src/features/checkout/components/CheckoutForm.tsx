import { useForm } from 'react-hook-form';
import backIcon from '../assets/angle-left-solid.svg';
import { Link } from 'react-router-dom';

const CheckoutForm = () => {
  const { register } = useForm();
  return (
    <form className="basis-3/5 text-dark-green">
      <div className="grid grid-cols-2 gap-4">
        <label>
          <input
            type="text"
            id="firstName"
            {...register('firstName')}
            placeholder="First Name"
            className="border border-gray-300 pl-3 py-3 rounded w-full"
          />
        </label>
        <label>
          <input
            type="text"
            id="lastName"
            {...register('lastName')}
            placeholder="Last Name"
            className="border border-gray-300 pl-3 py-3 rounded w-full"
          />
        </label>
        <label className="col-start-1 col-span-2">
          <input
            type="text"
            id="address"
            {...register('address')}
            placeholder="Address"
            className="border border-gray-300 pl-3 py-3 rounded w-full"
          />
        </label>
        <label>
          <input type="text" id="city" {...register('city')} placeholder="City" className="border border-gray-300 pl-3 py-3 rounded w-full" />
        </label>
        <label>
          <input
            type="number"
            id="postalCode"
            {...register('postalCode')}
            placeholder="Postal Code"
            className="border border-gray-300 pl-3 py-3 rounded w-full"
          />
        </label>
        <label>
          <input type="tel" id="phone" {...register('phone')} placeholder="Phone" className="border border-gray-300 pl-3 py-3 rounded w-full" />
        </label>
      </div>
      <div className="mt-8 flex justify-between">
        <Link to={'/cart'} className="flex items-center gap-2 opacity-80 hover:opacity-100 hover:underline">
          <img src={backIcon} alt="go back" className="w-2" />
          Return to cart
        </Link>
        <button className="bg-dark-green text-white rounded-md px-5 py-3 font-semibold hover:opacity-85">Confirm Order</button>
      </div>
    </form>
  );
};
export default CheckoutForm;
