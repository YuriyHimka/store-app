import React, { useEffect } from "react";
import ProductSearch from "../components/ProductSearch";
import ProductFilter from "../components/ProductFilter";
import ProductCard from "../components/ProductCard";
import { fetchProducts } from "../store/actions/productActions";
import { useAppDispatch, useAppSelector } from "../hook/redux";

const ProductsList = () => {

    const dispatch = useAppDispatch()
    const { error, products, loading } = useAppSelector(state => state.product)

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    return (
        <div className="container mx-auto pt-5 max-w-[960px]">
            <ProductSearch />
            <ProductFilter />

            <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {
                    products.map(product => <ProductCard key={ product.id } product={ product } />)
                }
            </div>
        </div>
    )
}

export default ProductsList