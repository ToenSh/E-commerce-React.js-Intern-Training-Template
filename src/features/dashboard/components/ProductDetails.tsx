import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import plantIcon from '../assets/plant-icon.svg';
import truckIcon from '../assets/truck.svg';
import returnIcon from '../assets/return.svg';
import checkIcon from '../assets/checkmark.svg';
import tagIcon from '../assets/tag-icon.svg';

const ProductDetails = () => {
  return (
    <Accordion type="single" collapsible className="text-dark-green mt-4">
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <img src={plantIcon} alt="icon" />
          <span className="mr-auto ml-4 font-semibold">Sustainable features</span>
        </AccordionTrigger>
        <AccordionContent className="opacity-75 pl-4 tracking-wider text-base font-normal flex flex-col gap-4">
          <p>The nylon upper is made from repurposed marine plastic collected by fishermen globally. </p>
          <p>Anti-tear laces are made with 100% recycled PET bottles</p>
          <p>PET bottles. Water-based vegan glue binds the upper and soles together.</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>
          <img src={checkIcon} alt="icon" />
          <span className="mr-auto ml-4 font-semibold">Core features</span>
        </AccordionTrigger>
        <AccordionContent className="opacity-75 pl-4 tracking-wider text-base font-normal flex flex-col gap-4">
          <p>Handmade in Portugal</p> <p>Upper: waterproof nylon made from recycled ocean plastic.</p>{' '}
          <p>Foot Lining: Recycled nylon wool for warmth. </p>
          <p>Vibram Sole: Durable, made to endure ice and snow, comfortable, made for longevity.</p>
          <p>Waterproof: yes</p>
          <p>Easy-to-clean: Spot clean with warm water.</p>
          <p>Lightweight: 2.2 lbs / 1 kg per pair </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>
          <img src={truckIcon} alt="icon" />
          <span className="mr-auto ml-4 font-semibold">Free shipping globally</span>
        </AccordionTrigger>
        <AccordionContent className="opacity-75 pl-4 tracking-wider text-base font-normal flex flex-col gap-4">
          Free shipping for orders over $100 worldwide including duties and customs. Check out our Shipping Policy for more details.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>
          <img src={returnIcon} alt="icon" />
          <span className="mr-auto ml-4 font-semibold">Easy returns</span>
        </AccordionTrigger>
        <AccordionContent className="opacity-75 pl-4 tracking-wider text-base font-normal flex flex-col gap-4">
          Easy returns in North America as many times as you need to find the right size. Just contact our team for support!
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
  );
};

export default ProductDetails;
