import Image from "next/image";
import Wreper from "../components/Wreper"
import sucsese from '../../../public/pimage/secsee.png'
const CheckoutSuccess = () => {
    return (
      <Wreper>
     <Image src={sucsese} alt="secsese"></Image>
      </Wreper>
    )
  };
  export default CheckoutSuccess;
