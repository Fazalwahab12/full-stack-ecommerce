

export const dynamic = 'force-static'

import { client } from '../../../../sanity/lib/client';


export const dynamicParams = true // true | false,
// Import necessary types and components
import { oneProductType } from '@/app/utils/Type';
import Productdetails from '../../components/Shererd/Productdetails';
import Wreper from '@/app/components/Wreper';


async function fetchDataBySlug(slug: string) {
    let res = await client.fetch(
      `*[_type == "product" && slug.current == "${slug}"]{
        name,
        "image": image[0],
        category,
        tags,
        "slug": slug.current,
        price,
        productCare
      }`
    );

    
    return res[0]; // Return the first item from the response array
  }
  


export async function generateStaticParams() {
    let data = await client.fetch(`*[_type=="product"]{
      title,
      name,
      price,
      "slug": slug.current, // Add the slug property here
      image,
      productDetails,
      productCare,
      Category->{
        name
      }
    }`
    );
 
  
    return data.map((item: oneProductType) => ({ slug: item.slug }));
  }
  

// Catalog component that renders the fetched data
const Catalog = async ({ params }: { params: { sluq: string } }) => {
    let data: oneProductType = await fetchDataBySlug(params.sluq);
    return (
        <Wreper>
            <div>
                <Productdetails item={data} />
            </div>
        </Wreper>
    );
}

export default Catalog;
