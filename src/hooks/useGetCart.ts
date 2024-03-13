import { useAppSelector } from "@/app/hooks"
import { RootState } from "../app/store"

const useGetCart = () => {
  const Cart = useAppSelector((state: RootState) => state.cart)
  return Cart
}
export default useGetCart
