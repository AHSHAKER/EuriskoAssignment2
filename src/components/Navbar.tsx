import moon from "../assets/moon.png";
const Navbar: React.FC = () => {
  return (
    //i set #3251D0 as primary in the tailwind.config.js file
    <nav className="bg-primary text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">User Management</h1>
      <div className="space-x-4">
        <button className="bg-white text-primary px-3 py-2 rounded">
          Create User
        </button>
        <button className="bg-red-500 text-white px-3 py-2 rounded">
          Logout
        </button>
        <button className="bg-transparent px-3 py-2">
          <img src={moon} alt="Change theme" className="w-4 h-4" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
