import { IoSearchSharp } from "react-icons/io5";


const SearchBar = ({handleSearch}) => {
  return (
    <>
    <div>
      <form onSubmit={handleSearch} className="flex items-center gap-1 ">
        <input
         type="text"
          name="search"
          id="" 
          placeholder="Search Products"
          className="lg:w-80 p-[11px] border border-green-600 rounded-l-lg text-white "
          />
          <button className="btn rounded-l-none rounded-r-md btn-outline  bg-green-600 text-white "><IoSearchSharp size={20} /></button>
      </form>
    </div>
      
    </>
  );
};

export default SearchBar;