import image1 from '../../assets/winterboots/black/WinterBlack.webp';
import image2 from '../../assets/winterboots/black/WinterBlackSide.webp';
import image3 from '../../assets/winterboots/black/WinterBlacktop.webp';
import image4 from '../../assets/winterboots/black/BlackSquareLifestyleProductPage.webp';
import plantIcon from '../../assets/icons/accordion/plant-icon.svg';
import truckIcon from '../../assets/icons/accordion/truck.svg';
import returnIcon from '../../assets/icons/accordion/return.svg';
import checkIcon from '../../assets/icons/accordion/checkmark.svg';
import tagIcon from '../../assets/icons/accordion/tag-icon.svg';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const Product = () => {
  return (
    <section
      className="max-w-7xl mx-auto pt-12 pb-20
    grid grid-cols-[2fr_1fr] gap-x-6 text-dark-green"
    >
      <div className="grid grid-cols-2 gap-x-2 gap-y-2">
        <img src={image1} alt="product-image" className="w-full " />
        <img src={image2} alt="product-image" className="w-full" />
        <img src={image3} alt="product-image" className="w-full" />
        <img src={image4} alt="product-image" className="w-full" />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="font-semibold text-[40px] leading-tight">
          The Modern Winter Boot in Black
        </h1>
        <div className="text-lg">294.00 USD</div>
        <span className="text-xs tracking-wide">
          Shipping calculated at checkout.
        </span>
        <div className="flex flex-col gap-3 my-6">
          <button className="bg-transparent py-2 border border-black rounded text-[15px] border-opacity-50 hover:border-opacity-100">
            Add to Cart
          </button>
          <button className="bg-purple text-white font-bold text-sm py-3 rounded hover:opacity-75">
            Buy Now
          </button>
        </div>
        <p className=" tracking-wider leading-7 opacity-80">
          The Modern Winter Boot is your cold-weather essential. Each pair is
          made with a durable Vibram sole and is waterproof for all-day wear.
          Wear them on your commute - keep them on long after you get there.
        </p>
        <Accordion type="single" collapsible className="text-dark-green mt-4">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <img src={plantIcon} alt="icon" />
              <span className="mr-auto ml-4 font-semibold">
                Sustainable features
              </span>
            </AccordionTrigger>
            <AccordionContent className="opacity-75 pl-4 tracking-wider text-base font-normal flex flex-col gap-4">
              <p>
                The nylon upper is made from repurposed marine plastic collected
                by fishermen globally.{' '}
              </p>
              <p>Anti-tear laces are made with 100% recycled PET bottles</p>
              <p>
                PET bottles. Water-based vegan glue binds the upper and soles
                together.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              <img src={checkIcon} alt="icon" />
              <span className="mr-auto ml-4 font-semibold">Core features</span>
            </AccordionTrigger>
            <AccordionContent className="opacity-75 pl-4 tracking-wider text-base font-normal flex flex-col gap-4">
              <p>Handmade in Portugal</p>{' '}
              <p>Upper: waterproof nylon made from recycled ocean plastic.</p>{' '}
              <p>Foot Lining: Recycled nylon wool for warmth. </p>
              <p>
                Vibram Sole: Durable, made to endure ice and snow, comfortable,
                made for longevity.
              </p>
              <p>Waterproof: yes</p>
              <p>Easy-to-clean: Spot clean with warm water.</p>
              <p>Lightweight: 2.2 lbs / 1 kg per pair </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              <img src={truckIcon} alt="icon" />
              <span className="mr-auto ml-4 font-semibold">
                Free shipping globally
              </span>
            </AccordionTrigger>
            <AccordionContent className="opacity-75 pl-4 tracking-wider text-base font-normal flex flex-col gap-4">
              Free shipping for orders over $100 worldwide including duties and
              customs. Check out our Shipping Policy for more details.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              <img src={returnIcon} alt="icon" />
              <span className="mr-auto ml-4 font-semibold">Easy returns</span>
            </AccordionTrigger>
            <AccordionContent className="opacity-75 pl-4 tracking-wider text-base font-normal flex flex-col gap-4">
              Easy returns in North America as many times as you need to find
              the right size. Just contact our team for support!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              <img src={tagIcon} alt="icon" />
              <span className="mr-auto ml-4 font-semibold">Pay in 4</span>
            </AccordionTrigger>
            <AccordionContent className="opacity-75 pl-4 tracking-wider text-base font-normal flex flex-col gap-4">
              Buy now, pay later! Pay in 4 easy instalments.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default Product;
