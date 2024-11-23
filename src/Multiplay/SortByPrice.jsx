const SortByPrice = ({setSort}) => {
  return (
    <>
      <select
        onChange={(e) => setSort(e.target.value)}
        className="p-[11px] lg:max-w-md w-40 border text-white rounded-lg"
      >
        <option value="asc">Low To High</option>
        <option value="desc">High To Low</option>
      </select>
    </>
  );
};

export default SortByPrice;
