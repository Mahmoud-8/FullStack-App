import ProductCard from '../components/ProductCard';
import PRODUCT from '../productInfo';
import ContactForm from '../components/Form';



const Checkout = () => {
  return (
    <>
      <div className='flex container mt-8'>
        <ProductCard {...PRODUCT} />
      </div>
      <ContactForm />
    </>
  );
};

export default Checkout;
