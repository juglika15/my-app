import { ProductCard } from "./ProductCard"

export const ProductList = (props)=> {
  return (
    <div>
      {props.productList.map((product)=>(
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}