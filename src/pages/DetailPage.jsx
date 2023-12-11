import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getProductDetail } from "../store/product/action";
import { useEffect } from "react";

const DetailPage = () => {
  const {id} = useParams();
  const {entity} = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const fetchProduct = (productId) => {
    dispatch(getProductDetail(productId))
  }
  useEffect(() => {
    fetchProduct(id)
  }, [])
  return(
    <main className="flex flex-wrap justify-center items-center p-[20px] gap-4">
      <div className="flex flex-row">
        <div className="basis-1/4"><img src={entity.image} className="h-['40px']" /></div>
        <div className="basis-3/4 p-5">
          <h1 className="font-bold text-2xl">{entity.title}</h1>
          <p>{entity.description}</p>
          <div className="mt-8 inline-grid grid-cols-3 gap-4">
            <s className="font-extrabold text-gray-400 text-xl">$ {entity.price.toLocaleString()}</s>
            <p className="font-extrabold text-[#0ACF83] text-2xl">$ {(entity.price * 0.9 ).toLocaleString()}
            </p>
          </div>
          <button className="bg-[#0ACF83] w-[100px] h-[48px] rounded-[8px] text-white mb-4"
        >Add to cart</button>
        </div>  
      </div>
    </main>  
  );
}

export default DetailPage;