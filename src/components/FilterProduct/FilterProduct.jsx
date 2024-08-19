import { useStore } from "../../context/context";

function FilterProduct({}) {

  const { filterCategory, getCategory, dark} = useStore();

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:flex gap-2 sm:space-x-4 items-center justify-center">
      {filterCategory.map((category, index) => (
        <button
          key={index}
          className={dark ? "font-semibold text-sm sm:text-lg outline-none cursor-pointer sm:px-10 sm:py-2 px-2 py-[0.3rem] shadow-md text-black rounded-lg bg-white text-center " : "font-semibold text-sm sm:text-lg outline-none cursor-pointer sm:px-10 sm:py-2 px-2 py-[0.3rem] shadow-md text-white rounded-lg bg-black text-center"}
          onClick={() => getCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  )
}

export default FilterProduct