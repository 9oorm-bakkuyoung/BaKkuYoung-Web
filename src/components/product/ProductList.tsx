import React from "react";

interface Product {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
}

interface ProductListProps {
    products: Product[];
}

export default function ProductList({ products }: ProductListProps) {
    return (
        <div className="grid grid-cols-2 gap-4 p-4">
            {products.length > 0 ? (
                products.map((product) => (
                    <div key={product.id} className="border rounded-lg p-4 bg-white shadow">
                        <img src={product.imageUrl} alt={product.name} className="w-full h-32 object-cover rounded" />
                        <h3 className="text-lg font-bold mt-2">{product.name}</h3>
                        <p className="text-gray-700">{product.price.toLocaleString()}원</p>
                    </div>
                ))
            ) : (
                <p className="col-span-2 text-center text-gray-500">제품이 없습니다.</p>
            )}
        </div>
    );
}
