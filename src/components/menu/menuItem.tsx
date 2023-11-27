export interface ItemProps {
  name: string;
  description: string;
  price: number;
  image: string;
}

const MenuItem: React.FC<ItemProps> = ({
  name,
  description,
  price,
  image,
}: ItemProps) => {
  return (
    <>
      <div className="bg-gray-200 rounded-lg text-center hover:bg-white hover:shadow-md hover:shadow-black/25 transition-all">
        <div className="text-center">
          <img src={image} className="max-h-auto max-h-24 block mx-auto"></img>
        </div>
        <h4 className="font-semibold text-xl my-3">{name}</h4>
        <p className="text-gray-500 text sm">{description}</p>
        <button className="bg-primary text-white rounded-full px-8 py-2 my-4">
          {`Add to cart ${price}$`}
        </button>
      </div>
    </>
  );
};

export default MenuItem;
