import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const AddBankAccount = ({
  addBankAcc,
}: {
  addBankAcc: (name: string) => Promise<void>;
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="bg-dark-green text-white mt-4 text-sm px-6 py-3 rounded-md font-bold self-end cursor-pointer">
        Add Account
      </DropdownMenuTrigger>
      <DropdownMenuContent className="px-2">
        <DropdownMenuLabel>Choose currency</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="cursor-pointer hover:bg-gray-100"
          onClick={(e) => addBankAcc(e.currentTarget.innerHTML)}
        >
          Euro
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer hover:bg-gray-100"
          onClick={(e) => addBankAcc(e.currentTarget.innerHTML)}
        >
          Dollar
        </DropdownMenuItem>
        <DropdownMenuItem
          className="cursor-pointer hover:bg-gray-100"
          onClick={(e) => addBankAcc(e.currentTarget.innerHTML)}
        >
          Pound
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AddBankAccount;
