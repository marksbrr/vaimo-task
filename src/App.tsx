import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.scss';
import ItemTypes from './data/types';
import Arrow from './assets/icons8-forward.png';
import Drone from './assets/Drone.jpg';
import Logo from './assets/Logo.png';
import ProductDescription from './components/product-description/product-description';
import PriceRange from './components/price-range/price-range';
import DiscountTimer from './components/discount-timer/discount-timer';
import Products from './components/products/products';
import TradeAssurance from './components/trade-assurance/trade-assurance';
import Shipping from './components/shipping time/shipping';

const App = () => {
  const [item, setItem] = useState<ItemTypes>();

  useEffect(() => {
    axios.get('https://fe-assignment.vaimo.net/').then((res) => {
      setItem(res.data);
      // todo-add failure handling
      // todo-redo all classes according to bem
    });
  }, []);

  const product = item?.product;

  const options = item?.product.options;

  const shipping = item?.product.shipping;

  const reviews = item?.product.reviews;

  return (
    <div className="main-container">
      <div className="main-wrapper">
        <div className="image-wrapper">
          <img src={Drone} alt="drone" className="drone-image" />
        </div>
        <div className="product-container">
          <ProductDescription
            productName={product?.name || 'not available'}
            isReadyForShipping={shipping?.props.ready_to_ship}
            isInStock={shipping?.props.in_stock}
            isFastDispatchAvailable={shipping?.props.fast_dispatch}
            reviewRating={reviews?.rating}
            reviewCount={(reviews?.count)}
            totalBuyerCount={reviews?.total_buyers}
          />
          <PriceRange
            batteryPrice={options?.battery_accessories.price.value}
            currencySymbol={options?.battery_accessories.price.currency.symbol}
            dronePrice={options?.['4k'].price.value}
            oldBatteryPrice={options?.battery_accessories.old_price.value}
            oldDronePrice={options?.['4k'].old_price.value}
          />
          <div className="logo-wrapper">
            <img src={Logo} alt="MarchExpo" className="marchexpo-logo" />
            <span className="txt-orange sm-view mr-8">
              <span className="mr-8">&#8226;</span>
              Free shipping(up to $40)
            </span>

            <span className="txt-orange lg-view mr-8">
              <span className="mr-8">&#8226;</span>
              Free shipping(up to $40)
              &nbsp;
              <span className="mr-8">&#8226;</span>
              On-time delivery guaranteed
            </span>

            <img src={Arrow} alt="Arrow" className="arrow-logo" />
          </div>
          <DiscountTimer
            discountAmount={product?.discount.amount}
            discountEndsAt={product?.discount.end_date}
          />
          <Products
            title1080P={options?.['1080p'].label}
            price1080P={options?.['1080p'].price.value}
            title4K={options?.['4k'].label}
            price4K={options?.['4k'].price.value}
            titleBattery={options?.battery_accessories.label}
            priceBattery={options?.battery_accessories.price.value}
            currencySymbol={options?.battery_accessories.price.currency.symbol}
          />
          <TradeAssurance />
        </div>
        <div>
          <Shipping
            amountOfDays={shipping?.lead_time.value}
            shippingCountry={shipping?.method.country}
            shippingMethod={shipping?.method.title}
            shippingTime={shipping?.method.shipping_time.value}
            currencySymbol={options?.battery_accessories.price.currency.symbol}
            leadTimeInfo={shipping?.lead_time.info}
            shippingInfo={shipping?.method.shipping_time.info}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
