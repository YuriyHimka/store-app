import React from "react";
import { IProduct } from "../models/models";

interface ProductProps {
    product: IProduct
}

const ProductCard = ({ product }: ProductProps) => {
    return (
        <a key={ product.id } href="/" className="group">
            <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <img
                    src={ product.imageUrl }
                    alt={ product.name }
                    className="max-h-48 w-full object-cover object-center group-hover:opacity-75"
                />
            </div>
            <h3 className="mt-4 text-sm text-gray-700">{ product.name }</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">{ product.count }</p>

            <button className="px-4 py-2 bg-blue-50 text-blue-400 rounded-lg my-4">Add to bag</button>
        </a>
    )
}

export default ProductCard