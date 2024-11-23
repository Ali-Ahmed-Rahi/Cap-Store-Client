import { BiFilterAlt } from "react-icons/bi";
import { GrPowerReset } from "react-icons/gr";
import SortByPrice from "./SortByPrice";

const FilterBar = ({setBrand,setCategory,handleReset,uniqueBrand,uniqueCategory,setSort}) => {
  return (
    <>
    <div className="bg-black h-full lg:min-h-screen p-4 rounded-t-md">
        <div className="flex items-center gap-1 justify-center">
          <BiFilterAlt size={24} />
          <h2 className="text-xl font-semibold">Filters</h2>
        </div>
        <div className="mt-8 flex flex-col gap-2 items-center">
          <div>
            <select className="p-[11px] lg:max-w-md w-40 border border-black rounded-lg" onChange={(e)=>setBrand(e.target.value)}>
              <option value="">Brands</option>
              {
                uniqueBrand.map((brand)=>
                <option key={brand} value={brand}>{brand}</option>
                )
              }
            </select>
          </div>
          <div>
            <select className="p-[11px] lg:max-w-md w-40 border border-black rounded-lg" onChange={(e)=>setCategory(e.target.value)}>
              <option value="">Category</option>
             {
              uniqueCategory.map((category)=>
              <option key={category} value={category}>{category}</option>
              )
             }
            </select>
          </div>
          <div>
            <SortByPrice></SortByPrice>
          </div>
          <button onClick={handleReset} className="btn w-40 mt-2 "><GrPowerReset />Reset </button>
        </div>
        
      </div>
      
    </>
  );
};

export default FilterBar;