import Image from "next/image";
import SendCloud from "@aquilacms/sendcloud";
import { useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";

//index

export default function HomePage({ products }) {
  const router = useRouter();
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.title}</h3>
          <button
            className="snipcart-add-item"
            data-item-id={product.id}
            data-item-url={router.asPath}
            data-item-name={product.title}
            data-item-price={product.price}
          >
            Buy
          </button>
        </div>
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const res = await fetch(`${process.env.STRAPI_API_URL}/products`);
    const data = await res.json();
    return {
      props: { products: data },
    };
  } catch (err) {
    console.log(err.message);
    return {
      props: {
        products: [],
      },
    };
  }
}
