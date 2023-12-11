import { useNavigate } from "react-router-dom";

function ProductCard({ id, title, image, price, discount}) {
  const navigate = useNavigate()
  return (
    <section className="w-[250px]">
      <div className="bg-[#152A46] flex flex-row">
        <img src={image} className="w-full"/>
      </div>
      <div className="rounded-b-[20px] px-[24px] shadow-md">
        <p className="font-extrabold text-[#000000] text-xl mt-[9px]">
          {title}
        </p>
        <div className="mt-[12px] pb-[12px] flex flex-row justify-end">
          {discount ? (
            <span>
              <s className="text-base font-extrabold text-gray-400">
            $ {price.toLocaleString()}
            </s>
            <p className="font-extrabold text-[#0ACF83] text-xl">
              $ {(price * (100 - discount) / 100 ).toLocaleString()}
            </p>
            </span>
          ) : <p className="font-extrabold text-[#0ACF83] text-xl">
              $ {price.toLocaleString()}
            </p>}
        </div>
        <button className="bg-[#0ACF83] w-full h-[48px] rounded-[8px] text-white mb-4"
          onClick={() => navigate(`detail/${id}`)}
        >See Details</button>
      </div>
    </section>
  )
}

export default ProductCard