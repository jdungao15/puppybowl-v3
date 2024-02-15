import { Link } from "react-router-dom";
const ButtonLink = ({ to, children }) => {
  return (
    <Link to={to}>
      <button className="bg-amber-300 hover:bg-amber-400 text-white font-bold py-1 px-2 my-4 rounded">
        {children}
      </button>
    </Link>
  );
};

export default ButtonLink;
