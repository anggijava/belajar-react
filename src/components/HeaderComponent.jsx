import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const HeaderComponent = () => {
    const navigate = useNavigate()
    const {shoppingCart} = useSelector((state) => state.product);
    return(
        <header className="bg-[#152A46] p-[10px] text-[#ffff]">
            <div className="flex flex-row">
                <div className="md:basis-3/4 sm:basis-1/2"><img src="/img/jos-icon.png" className="h-10" /></div>
                <div className="md:basis-1/4 sm:basis-1/2 pt-2">
                    <div className="flex flex-row">
                        <div className="basis-1/3 m-1">
                            <button onClick={() => navigate('/')} className="bg-[#0ACF83] w-full h-[24px] rounded-[8px] text-white">Store</button>
                        </div>
                        <div className="basis-1/3 m-1">
                            <button onClick={() => navigate('library')} className="bg-[#0ACF83] w-full h-[24px] rounded-[8px] text-white">Library</button>
                        </div>                        
                        <div className="basis-1/3 m-1">
                            <button onClick={() => navigate('cart')} className="bg-[#0ACF83] w-full h-[24px] rounded-[8px] text-white">Cart: {shoppingCart.length}</button>
                        </div>
                    </div>
                </div>  
            </div>
      </header>
    );
}

export default HeaderComponent;