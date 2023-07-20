import Image from 'next/image';
import Wreper from './Wreper';


import image1 from '../../../public/pimage/event1.webp'

import image4 from '../../../public/future/event2 (1).webp' 
import image5 from '../../../public/future/event3 (1).webp'

function Main() {
  return (
    <Wreper>
     

<div className="py-16 px-10 space-y-5">

{/* Heading */}
<div className="text-center space-y-3">
  <p className="text-blue-800 text-sm">PROMOTIONS</p>
  <h3 className="text-3xl text-gray-800 font-bold">Our Promotions Events</h3>
</div>

{/* Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 text-gray-800 mx-auto">

  {/* first grid */}
  <div className=" bg-gray-400 w-full flex flex-col items-center justify-between sm:flex-row col-span-1 md:col-span-2 bg-cat1 px-12" >
    <div className="max-w-[13rem] py-8">
      <h4 className="text-3xl font-extrabold">GET UP TO 60%</h4>
      <p className="text-xl">For the summer season</p>
    </div>
    <div className="w-64">
      <Image width={1000} height={1000} alt="summer season" src={image1} />
    </div>
  </div>

  {/* second grid */}
  <div className="bg-[#efe1c7]  w-full row-span-1 md:row-span-2 flex flex-col items-center h-full bg-cat3" >

    {/* text */}
    <div className="p-4">
      <p>Flex Sweatshirt</p>
      <p className="text-lg">
        <del>$100.00</del>
        &nbsp;&nbsp;&nbsp;
        <b>
          <ins>$75.00</ins>
        </b>
      </p>
    </div>

    {/* image */}
    <div className="w-64">
      <Image width={1000} height={1000} alt="sweaters" src={image4} />
    </div>
  </div>


  {/* third grid */}
  <div className=" bg-[#efe1c7] w-full row-span-1 md:row-span-2 flex flex-col items-center h-full bg-cat4">
    {/* text */}
    <div className="p-4">
      <p>Flex Sweatshirt</p>
      <p className="text-lg">
        <del>$225.00</del>
        &nbsp;&nbsp;&nbsp;
        <b>
          <ins>$190.00</ins>
        </b>
      </p>
    </div>

    {/* image */}
    <div className="w-64">
      <Image width={1000} height={1000} alt="sweaters" src={image5} />
    </div>
  </div>


  {/* fourth grid */}
  <div className="py-9 bg-black  w-full col-auto md:col-span-2 bg-cat2 flex flex-col justify-center items-center space-y-3">
    <h3 className="font-extrabold text-4xl text-white">GET 30% Off</h3>
    <p className='text-white'>USE PROMO CODE</p>
    <button
      aria-label="Redirect user to Dine Week End Sale"
      className="py-1 px-8  text-lg font-medium bg-[#b7adad] rounded-lg tracking-widest"
    >
      DINEWEEKENDSALE
    </button>
  </div>


</div>
</div>
     
    </Wreper>
  )
}

export default Main