
import { FC } from 'react';



import { oneProductType } from '../utils/Type';
import Image from 'next/image';
import Link from 'next/link';

import imageUrlBuilder from '@sanity/image-url'
import { client } from '../../../sanity/lib/client';



const builder: any = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source)
}
const Allcard: FC<{ alleproductdata: oneProductType }> = ({ alleproductdata }) => {


  return (
    <Link href={`/Cataloge/${alleproductdata.slug.current}`}>
      <div className=''>
      <div className='mb-1'>
      <Image src={urlFor(alleproductdata.image[0]).url()}width={300} height={150} alt={''} />
             
        </div>

        <div>
        <h1 className='  font-bold'> <span className=' font-normal text-gray-400'>category:</span> {alleproductdata.category} 
        </h1>
    <h1 className='text-lg pt-1   leading-none text-gray-600 '>{alleproductdata.tags}</h1>
    <h1 className='font-bold pt-1 leading-6 text-lg tracking-tight text-gray-800'> price: ${alleproductdata.price}</h1>
  
       
        </div>
      </div>
    </Link>
  );
}

export default Allcard;