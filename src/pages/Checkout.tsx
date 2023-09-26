import ProductCard from '../components/ProductCard';
import PRODUCT from '../productInfo';
import ContactForm from '../components/Form';

type Props = {};

const Checkout = (props: Props) => {
  return (
    <div className='flex container mt-8'>
      <ProductCard {...PRODUCT} />
      <ContactForm /> 
    </div>
  );
};

export default Checkout;
