export default function CartHeader() {
    return (
        <div className="border-gray-600 w-270 m-15 mt-0 h-20 bg-gray-100 flex gap-20 py-5 text-2xl font-semibold">
            <h1 className="px-50 pl-65">Product</h1>
            <h1>Price</h1>
            <h1>Quantity</h1>
            <h1>Subtotal</h1>
        </div>
    )
}