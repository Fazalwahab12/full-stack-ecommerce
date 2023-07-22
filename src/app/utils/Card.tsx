import { FC } from 'react';
import { oneProductType } from '../utils/Type';
import Image from 'next/image';
import Link from 'next/link';
import imageUrlBuilder from '@sanity/image-url';
import { client } from '../../../sanity/lib/client';

const builder: any = imageUrlBuilder(client);

function urlFor(source: any) {
  return builder.image(source);
}

const Card: FC<{ singleproductdata: oneProductType }> = ({ singleproductdata }) => {
  return (
    <Link href={`/Cataloge/${singleproductdata.slug.current}`}>
      <div className=' sm:mx-7 md:mx-0'>
        <div className='relative group'>
          <div className='transition-all duration-300 transform group-hover:scale-125'>
          <Image src={urlFor(singleproductdata.image[0]).url()}width={400} height={400} alt={''} />
          </div>

          <div className='px-12 gap-2 pt-2'>
            <p>Category: {singleproductdata.category}</p>
            <p>Price: {singleproductdata.price}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
