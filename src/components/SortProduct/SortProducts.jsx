import { useStore } from "../../context/context";

function SortProducts() {
const {sortBy, setSortBy, dark} = useStore();

  return (
    <select className={dark ? "flex gap-4 p-3 outline-none space-y-10 bg-white text-black w-[100%] sm:w-[250px]" : "flex gap-4 p-3 outline-none space-y-10 bg-black text-white w-[100%] sm:w-[250px]"} onChange={(e) => setSortBy(e.target.value)} value={sortBy}>
        <option value="fetch">Sort by Fetch</option>
        <option value="price asc">Sort by Price Ascending</option>
        <option value="price des">Sort by Price Descending</option>
        <option value="id">Sort by ID</option>
    </select>
  )
}

export default SortProducts