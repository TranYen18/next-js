import { GetServerSidePropsContext, GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import React, {useEffect} from 'react'

type ProductProps = {
  product:any
}

const ProductDetail = ({product}: ProductProps) => {
  if(!product) return null;

    // const router = useRouter();
    // console.log('router', router.query);
  return (
    <div>{product.name}</div>
  )
}
export const getStaticPaths: GetStaticPaths = async() =>{
  const data = await (await fetch(`https://6110f09bc38a0900171f0ed0.mockapi.io/products`)).json();
  const paths =data.map(product => (
    {params : {id:product.id } }
  ))
  return {
    paths,
    fallback:false
  }
}
//server
export const getStaticProps:GetStaticProps<ProductProps> = async (context: GetServerSidePropsContext) =>{
  const product = await(await fetch(`https://6110f09bc38a0900171f0ed0.mockapi.io/products/${context.params?.id}`)).json();
  return{
    props:{product},
    revalidate:60
  }
}

export default ProductDetail