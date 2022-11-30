/* eslint-disable @next/next/no-img-element */

type ProductVariationsProps = {
  size?:[{
    variation_value: string
  }];
  finish?: [{
    variation_value: string
  }];
};

export default function ProductVariations({size, finish}: ProductVariationsProps) {
  return (
    <div className="variations">
      <div className="size">Size</div>
      <ul>
      {size?.map((item, index)=>
      (<li key={index}>
        {item.variation_value}
      </li>)
      )}
      </ul>
      <hr/>
      <div className="finish">Finish</div>
      <ul>
      {finish?.map((item, index)=>
      (<li key={index}>
        {item.variation_value}
      </li>)
      )}
      </ul>
    </div>
  );
}
