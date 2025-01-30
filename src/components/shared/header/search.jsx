import { SearchIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';

const categories = ['Flowers', 'Trees', 'Plants', 'Garden', 'Nature'];

const Search = () => {
  return (
    <form
      action="/search"
      method="GET"
      className="flex items-stretch h-10 space-x-2"
    >
      {/* Select dropdown styled with Tailwind CSS */}
      <div className="relative">
        <select
          name="category"
          className="block w-auto h-full px-3 py-2 border border-gray-300 bg-gray-100 text-black rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="all">All Categories</option>
          {categories.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Search Input */}
      <Input
        className="flex-1 rounded-none border border-gray-300 bg-gray-100 text-black text-base h-full px-3"
        placeholder="Search"
        name="q"
        type="search"
      />

      {/* Search Button */}
      <button
        type="submit"
        className="bg-blue-500 text-white rounded-r-md h-full px-3 py-2 flex items-center justify-center"
      >
        <SearchIcon className="w-6 h-6" />
      </button>
    </form>
  );
};

export default Search;
