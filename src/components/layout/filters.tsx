export type Filter = "alphabet" | "price";

interface FiltersProps {
  filter: Filter;
  setFilter: (filter: Filter) => void;
}

const Filters: React.FC<FiltersProps> = ({ setFilter }: FiltersProps) => {
  return (
    <>
      <div className="flex ms-auto gap-2 justify-center mt-4">
        <button
          className="rounded-full border bg-gray-100 py-1 px-4"
          onClick={() => setFilter("alphabet")}
        >
          A-z
        </button>
        <button
          className="rounded-full border bg-gray-100 py-1 px-4"
          onClick={() => setFilter("price")}
        >
          Price
        </button>
      </div>
    </>
  );
};

export default Filters;
