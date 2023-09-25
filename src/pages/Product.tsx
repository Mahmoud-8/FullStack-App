import React from 'react'

type Images = {
    src: string,
    alt: string,
}

type Props = {
    title: string;
    description: string,
    images: Images[],
    price?: number,
}

const Product = (props: Props) => {
  return (
    <div>
        <img src={props.images[0].src} alt={props.images[0].alt}  />
        <div>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <div>
            <button>Buy now</button>
        </div>
        </div></div>
  )
}
export default Product