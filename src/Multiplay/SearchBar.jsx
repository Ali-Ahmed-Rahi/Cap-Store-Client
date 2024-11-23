import { IoSearchSharp } from "react-icons/io5";


const SearchBar = ({handleSearch}) => {
  return (
    <>
    <div>
      <form onSubmit={handleSearch} className="flex items-center gap-1">
        <input
         type="text"
          name="search"
          id="" 
          placeholder="Search Products"
          className="w-80 p-[11px] border border-black rounded-l-lg"
          />
          <button className="btn rounded-l-none rounded-r-md btn-outline bg-slate-200"><IoSearchSharp size={20} /></button>
      </form>
    </div>
      
    </>
  );
};

export default SearchBar;