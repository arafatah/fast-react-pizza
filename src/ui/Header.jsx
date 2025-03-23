import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
  <div className="bg-yellow-500 uppercase" >
      <Link to="/" className="tracking-widest">Fast React pizza co.</Link>

      <SearchOrder />

      <p>Arafat Hung </p>
    </div>
  );
}

export default Header;
