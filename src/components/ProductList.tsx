import React, { useEffect, useState } from "react"

const ProductList = () => {
  const [products, setProducts] = useState<string[]>([])

  useEffect(() => {
    console.log("fetching products")
    setProducts(["Product 1", "Product 2"])
  })

  return <div>ProductList</div>
}

export default ProductList
