const Card = (props) => {
  const { data, onClick, key } = props;
  return (
    <div key={key} className="bg-white border border-gray-200">
      <img
        src={data.image}
        alt="image-product"
        className="h-48 w-full object-cover"
      />
      <div className="p-2">
        <h2 className="text-lg line-clamp-1 mb-2">{data.title}</h2>
        <p className="mb-3 text-sm text-gray-400 line-clamp-3">
          {data.description}
        </p>
        <p className="mb-3 text-gray-900">$ {data.price}</p>
        <button
          className="px-3 py-2 text-sm font-medium bg-blue-700 text-white"
          onClick={onClick}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
