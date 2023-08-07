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
      <div className=''>
        <div className='relative group'>
          <div className='transition-all duration-300 transform group-hover:scale-110'>
            <Image
              width={1000}
              height={1000}
              src={urlFor(singleproductdata.image[0]).width(1000).height(1000).url()}
              alt={singleproductdata.name}
            />
          </div>

          <div className='px-8'>
            <p>Category: {singleproductdata.category}</p>
            <p>Price: {singleproductdata.price}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
