import { GetStaticProps } from "next";

type ProductsProps = {
  products: any[];
};
// client
const Products = ({ products }: ProductsProps) => {
  if (!products) return null;
  return <div>1</div>
};

// server
export const getStaticProps: GetStaticProps<ProductsProps> = async (
  context
) => {
  console.log("getStaticProps");
  const response = await fetch(
    `https://6110f09bc38a0900171f0ed0.mockapi.io/products`
  );
  const data = await response.json();

  return {
    props: {
      products: data,
    },
  };
};
export default Products;
