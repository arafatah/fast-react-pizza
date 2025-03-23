import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <div className="border-b border-stone-300 bg-yellow-500 px-4 py-3 uppercase sm:px-6">
      <Link to="/" className="tracking-widest">
        Fast React pizza co.
      </Link>

      <SearchOrder />

      <Username />
    </div>
  );
}

export default Header;
