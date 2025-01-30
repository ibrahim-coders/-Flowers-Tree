import { ShoppingCartIcon, UserIcon } from 'lucide-react';
import Link from 'next/link';

const Menu = () => {
  return (
    <div className="flex justify-end">
      <nav className="flex gap-3 w-full">
        <Link href="/signin" className="header-button">
          <UserIcon className="h-8 w-8" />
          <span className="font-bold">Sign in</span>
        </Link>
      </nav>
      <Link href="/cart" className="header-button">
        <ShoppingCartIcon className="h-8 w-8" />
        <span className="font-bold">Cart</span>
      </Link>
    </div>
  );
};

export default Menu;
