import React from "react";
import img from '@/src/assets/shopping-cart/cartimg2.png'
import cart from '@/src/assets/shopping-cart/cart.png'


import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearCart } from "../Slices/CartSlice";
export const ShoppingCart = () => {
  const {cartProducts} = useSelector(state=> state.cart)
  console.log(cartProducts)
  const dispatch = useDispatch()

  return (
    <>
      <div className="w-full bg-[#f6f5ff] h-[286px] flex justify-center">
        <div className="w-[84%]  flex items-center justify-start">
          <div className="text-left ml-3  my-auto">
            <h1 className="text-3xl font-semibold py-2">Shopping Cart</h1>
            <span>
              Home . Pages .{" "}
              <span className="text-[#fb2e86]">shopping cart</span>
            </span>
          </div>
        </div>
      </div>
      {/* Cart Details */}
      {/* <div className="w-[84%] bg-green-300 mx-auto my-9 flex">
        <div className="w-full  justify-between flex">
          <div className="w-[65%] flex flex-col justify-between gap-2  p-1">
            <div className=" w-full flex flex-col space-y-6  justify-between">
              <div className="w-full   flex items-center justify-between">
              <h2>Product</h2>
              <h2>Price</h2>
              <h2>Quantity</h2>
              <h2>Total</h2>
              </div>
            <div className="w-full py-3 flex justify-between items-center ">
                
                <div className="w-[30%]  flex justify-start space-x-4">
                    <div className="w-[83px] rounded-md relative bg-slate-200">
                  <img src={img} alt="img" />
                  <span className="absolute -top-1 -right-[5px] w-4 pb-1 pl-[1px] h-4 flex justify-center items-center  text-white bg-black rounded-full">x</span>
                    </div>
                   <div className="flex flex-col justify-start items-start">
                    <h2 className="text-[14px] text-left">Ut diam consequat</h2>
                     <span className="text-[12px] text-gray-400">Color: Brown</span>
                     <span className="text-[12px] text-gray-400">Size:XL</span>
                   </div>
                </div>
                <div className="w-[20%] text-left ">$34.00</div>
                <div className="w-[20%] ">
                <div className="w-[51px] h-[15px] text-[12px] text-gray-400 flex justify-between mx-auto bg-[#F0EFF2]"><span className="w-[12px] h-[15px]  bg-[#EFE7EF] text-[#BEBFC2]">-</span>1<span className="w-[12px] h-[15px] bg-[#EFE7EF] text-[#BEBFC2]">+</span></div>

                </div>
                <div className="w-[20%] text-right ">£219.00</div> 
            </div>
            </div>
            <div className="w-full h-[1.5px] bg-gray-400"></div>
            <div className=" w-full flex flex-col justify-between">
            <div className="w-full py-3 flex justify-between items-center ">
                
                <div className="w-[30%]   flex justify-start space-x-4">
                    <div className="w-[83px] rounded-md relative bg-slate-200">
                  <img src={img} alt="img" />
                  <span className="absolute -top-1 -right-[5px] w-4 pb-1 pl-[1px] h-4 flex justify-center items-center  text-white bg-black rounded-full">x</span>
                    </div>
                   <div className="flex flex-col justify-start items-start">
                    <h2 className="text-[14px] text-left">Ut diam consequat</h2>
                     <span className="text-[12px] text-gray-400">Color: Brown</span>
                     <span className="text-[12px] text-gray-400">Size:XL</span>
                   </div>
                </div>
                <div className="w-[20%] text-left ">$34.00</div>
                <div className="w-[20%] ">
                <div className="w-[51px] h-[15px] text-[12px] text-gray-400 flex justify-between mx-auto bg-[#F0EFF2]"><span className="w-[12px] h-[15px]  bg-[#EFE7EF] text-[#BEBFC2]">-</span>1<span className="w-[12px] h-[15px] bg-[#EFE7EF] text-[#BEBFC2]">+</span></div>

                </div>
                <div className="w-[20%] text-right ">£219.00</div> 
            </div>
            </div>   
          
          </div>
            <div className="w-[30%] flex flex-col space-y-6  ">
                <h1 className="font-medium">Cart Tools</h1>
                <div className="w-[97%] flex gap-4 flex-col mx-auto bg-[#F4F4FC] py-10 p-2 rounded-md">
                   
                   <div className="flex space-y-2 flex-col ">
                   <div className="flex justify-between px-3">
                        <span>Subtotals:</span>
                        <span>$219.00</span>
                    </div>
                    <div className="w-[93%] my-1 mx-auto bg-slate-500 h-[1.5px]"></div>
                    <div className="flex justify-between items-center px-3">
                    <span>Totals:</span>
                    <span>$349.00</span>
                    </div>
                    <div className="w-[93%] my-1 mx-auto bg-slate-500 h-[1.2px]"></div>

                   </div>
                    
                    <div className="w-full flex gap-2 mt-3 justify-start  items-center">
                        <span className="w-3 h-3 rounded-full mt-[2px] ml-2 bg-green-400"></span>
                        <p className="text-sm text-gray-400">Shipping & taxes calculated at checkout</p>
                    </div>
                    <div className="w-[100%] flex justify-center items-center  ">
                        <button className="bg-[#19D16F] w-full mt-4 mx-3 py-1 px-4 text-white">Proceed To Checkout</button>
                    </div>
                    
                </div>
                <h1>Continue Shopping</h1>
                <div className="w-[97%] flex gap-4 flex-col mx-auto bg-[#F4F4FC] py-10 p-2 rounded-md">
                    
                   <div className="flex space-y-2 flex-col ">
                   <div className="flex justify-between px-3">
                        <span>Subtotals:</span>
                        <span>$219.00</span>
                    </div>
                    <div className="w-[93%] my-1 mx-auto bg-slate-500 h-[1.5px]"></div>
                    <div className="flex justify-between items-center px-3">
                    <span>Totals:</span>
                    <span>$349.00</span>
                    </div>
                    <div className="w-[93%] my-1 mx-auto bg-slate-500 h-[1.2px]"></div>

                   </div>
                   
                    <div className="w-full flex gap-2 mt-3 justify-start  items-center">
                        <span className="w-3 h-3 rounded-full mt-[2px] ml-2 bg-green-400"></span>
                        <p className="text-sm text-gray-400">Shipping & taxes calculated at checkout</p>
                    </div>
                    <div className="w-[100%] flex justify-center items-center  ">
                        <button className="bg-[#19D16F] w-full mt-4 mx-3 py-1 px-4 text-white">Proceed To Checkout</button>
                    </div>
                    
                </div>
            </div>
          
        </div>
      </div> */}


      {/* <div className="w-[80%] bg-green-300 h-[300px] mx-auto">
        <div className="w-full flex justify-between bg-red-400">
          <h2>Product</h2>
          <h2>Price</h2>
          <h2>Quantity</h2>
          <h2>Total</h2>
          <div className="w-[20%] bg-purple-300">
          <h2>Cart Totals</h2>
          </div>
        </div>
        <div className="w-[80%] mt-4 flex justify-start space-x-[50px] bg-white/90">
        
          <div className="w-[20%] flex gap-1 bg-yellow-300">
            <div className="w-[83px] rounded-md relative bg-slate-200">
              <img src={img} alt="" />
              <span className="absolute -top-1 -right-[5px] w-4 pb-1 pl-[1px] h-4 flex justify-center items-center  text-white bg-black rounded-full">x</span>
            </div>
            <div className="flex flex-col items-start">
              <h3>Ultimate cloth</h3>
              <span className="text-gray-400">Color:<span className="font-medium ml-1">Brown</span></span>
              <span className="text-gray-400">Size:<span className="font-medium ml-1">XL</span></span>
            </div>
          </div>
       
          <div>
            <h1>$34.00</h1>
          </div>
      
          <div>
             <h1>rded</h1>
          </div>
         
          <div>
            <h1>dfdfj</h1>
          </div>
        </div>
      </div> */}

<div class="w-[90%]  mx-auto py-10">  
    <div class="w-[98%] mx-auto  grid grid-cols-1  md:grid-cols-3 gap-0">  
        {/* <!-- Product List -->   */}
        <div class="w-[100%]  col-span-2">  
            {/* <h2 class="text-2xl font-bold mb-4">Shopping Cart</h2>   */}
            <div class=" rounded-lg mb-4 py-4">  
                <div class="w-[100%] grid text-[20px] font-josefin grid-cols-4  gap-3 text-left pb-2 mb-4">  
                    <div class="font-bold">Product</div>  
                    <div class="font-bold">Price</div>  
                    <div class="font-bold">Quantity</div>  
                    <div class="font-bold">Total</div>  
                </div>  

                {/* <!-- Product Item -->   */}
                {
                  cartProducts?.length === 0 ? (<div className="flex h-[76vh] flex-col justify-center items-center">
                    <img src={cart} className="w-[80px]" alt="" />
                    Your cart is empty
                    </div>) :
                  cartProducts?.map((product)=>(
<div class="grid  grid-cols-4  items-center gap-4  py-2">  
                    <div class="w-[100%]  flex  gap-1   ">  
                        <img src={product?.category?.image} alt="Product Image" class=" h-16 object-cover" />  
                        <div className=" flex gap-1 flex-col items-start">  
                            <p class="font-semibold text-sm text-[14px] text-left leading-4 font-josefin">{product?.title.length >= 6 ? product?.title.slice(0,20) : product?.title}</p>  
                            <p class="text-sm text-[#A1A8C1] text-[12px] leading-4 font-josefin">Color: <span className="text-[#A1A8C1] text-[14px] font-josefin">Brown</span></p>  
                            <p class="text-sm text-[#A1A8C1] text-[12px] leading-3 font-josefin">Size: <span className="text-[#A1A8C1] text-[14px] font-josefin">XL</span></p>  
                        </div>  
                    </div>  
                    <div className="w-[12%] text-[#15245E] text-[14px] font-josefin">${product?.price}.00</div>  
                    <div className="w-[12%]">  
                        <input type="number" class="w-16 border rounded p-1" />  
                    </div>  
                    <div className="w-[12%] font-josefin text-[14px] text-[#15245E]">$219.00</div>  
                </div>
                  ))
                }
                  
                {/* <div class="grid  grid-cols-4  items-center gap-4  py-2">  
                    <div class="w-[100%]  flex  gap-1 relative ">  
                        <img src={img} alt="Product Image" class=" h-16 mt-1  object-contain" />  
                        <span className="absolute z-10 top-0 left-[3.1rem] text-[12px] h-[14px] w-[14px] pb-[3px] rounded-full flex text-white bg-black justify-center items-center">x</span>
                        <div className=" flex gap-1 ml-[3px] mt-[4px] flex-col  items-start">  
                            <p class="font-semibold text-sm text-[14px] text-left leading-4  font-josefin">Ut diam consequat</p>  
                            <p class="text-sm text-[#A1A8C1] text-[12px] leading-3 font-josefin">Color: <span className="text-[#A1A8C1] text-[14px] font-josefin">Brown</span></p>  
                            <p class="text-sm text-[#A1A8C1] text-[12px] leading-3 font-josefin">Size: <span className="text-[#A1A8C1] text-[14px] font-josefin">XL</span></p>  

                        </div>  
                    </div>  
                    <div className="w-[12%] text-[#15245E] text-[14px] font-josefin">$32.00</div>  
                    <div className="w-[12%]">  
                        <input type="number" class="w-16 border rounded p-1" />  
                    </div>  
                    <div className="w-[12%] font-josefin text-[14px] text-[#15245E]">$219.00</div>  
                </div>   */}
                {/* <div class="grid  grid-cols-4 items-center gap-4  py-2">  
                    <div class="w-[100%]  flex  gap-1   ">  
                        <img src={img} alt="Product Image" class=" h-16 object-cover" />  
                        <div className=" flex gap-1 flex-col items-start">  
                            <p class="font-semibold text-sm text-[14px] font-josefin">Ut diam consequat</p>  
                            <p class="text-sm text-[#A1A8C1] text-[12px] font-josefin">Color: <span className="text-[#A1A8C1] text-[14px] font-josefin">Brown</span></p>  
                            <p class="text-sm text-[#A1A8C1] text-[12px] font-josefin">Size: <span className="text-[#A1A8C1] text-[14px] font-josefin">XL</span></p>  

                        </div>  
                    </div>  
                    <div className="w-[12%] text-[#15245E] text-[14px] font-josefin">$32.00</div>  
                    <div className="w-[12%]">  
                        <input type="number" class="w-16 border rounded p-1" />  
                    </div>  
                    <div className="w-[12%] font-josefin text-[14px] text-[#15245E]">$219.00</div>  
                </div>   */}
                {/* <!-- Repeat Product Item as needed -->  
                <!-- Add more product items here -->   */}
                <div className="w-[89%]  flex justify-between">
                <button class="mt-4 bg-[#FB2E86] font-josefin text-white py-1 px-3 rounded hover:bg-pink-600">Update Cart</button>  
                <button onClick={()=>{
                  dispatch(clearCart())
                }} class="mt-4 ml-2 bg-[#FB2E86] font-josefin text-white py-0 px-3 rounded hover:bg-gray-400">Clear Cart</button>  
                </div>
            </div>  
        </div>  

      <div>
      <div class="w-[90%] p-3">  
            <h2 class="text-xl font-bold font-josefin mt-1 mb-4">Cart Totals</h2>  
            <div className="w-[97%] flex gap-4 flex-col mx-auto bg-[#F4F4FC] py-10 p-2 rounded-md">
                   
                   <div className="flex space-y-2 flex-col ">
                   <div className="flex justify-between text-[#1D3178] font-poppins px-3">
                        <span className="font-medium text-[18px]">Subtotals:</span>
                        <span>$219.00</span>
                    </div>
                    <div className="w-[93%] my-1 mx-auto bg-[#E8E6f1] h-[2px]"></div>
                    <div className="flex justify-between font-poppins text-[#1D3178] items-center px-3">
                    <span className="font-medium text-[18px]">Totals:</span>
                    <span>$349.00</span>
                    </div>
                    <div className="w-[93%] my-1 mx-auto bg-[#E8E6f1] h-[2px]"></div>

                   </div>
                    
                    <div className="w-full flex gap-2 mt-3 justify-start  items-center">
                        <span className="w-3 h-3 rounded-full mt-[2px] ml-2 bg-green-400"></span>
                        <p className="text-[12px] text-[#8A91AB]">Shipping & taxes calculated at checkout</p>
                    </div>
                    <div className="w-[100%] flex justify-center items-center  ">
                        <button className="bg-[#19D16F] w-full mt-4 mx-0 py-1 px-4 font-poppins text-white">Proceed To Checkout</button>
                    </div>
                </div>
        </div>  
        <div class="w-[90%]  mt-2 p-3 ">  
            <h2 class="text-xl font-bold font-josefin mb-4">Calculate Shopping</h2>  
            <div className="w-[97%] flex gap-4  flex-col mx-auto bg-[#F4F4FC] py-7 p-2 rounded-md">
                   
                   <div className="w-[97%] mx-auto  flex border-b-2 border-gray-300 py-1 space-y-2 flex-col ">
                    <input type="text" placeholder="Bangladesh" className="px-2 placeholder:text-[#C5CBE3] outline-none bg-transparent" name="" id="" />
                   </div>
                   <div className="w-[97%] mx-auto  flex border-b-2 border-gray-300 py-1 space-y-2 flex-col ">
                    <input type="text" placeholder="Mirpur Dhaka - 1200" className="px-2 outline-none placeholder:text-[#C5CBE3] bg-transparent" name="" id="" />
                   </div>
                   
                   <div className="w-[97%] mx-auto flex border-b-2 border-gray-300 py-1 space-y-2 flex-col ">
                    <input type="text" placeholder="Postal Code" className="px-2 outline-none placeholder:text-[#C5CBE3] bg-transparent" name="" id="" />
                   </div>
                    
                    
                    <div className="text-left m-0">
                        <button className="bg-[#FB2E86] rounded-[2px]  mt-4 mx-0 py-1 px-4 text-white font-josefin text-[16px]">Calculate Shiping</button>
                    </div>
                </div>
        </div> 
      </div>
       
         
    </div>  
</div>
    </>
  );
};
