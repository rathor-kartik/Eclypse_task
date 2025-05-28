import { Link } from "react-router-dom";


export default function CartPage() {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <div className="flex justify-between items-start px-10 py-6 border-b">
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="Logo" className="w-6 h-6" />
          <h1 className="font-semibold">Shipping Address</h1>
        </div>
        <div className="space-x-6 font-light">
          <Link to="/">About Us</Link>
          <Link to="/">Waitlist</Link>
          <Link to="/cart" className="font-semibold underline">Cart</Link>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between px-10 py-10 gap-8">
        {/* Left: Address Form */}
        <div className="flex-1 border rounded-md p-6">
          <h2 className="font-semibold mb-4">🛑 Add New Address</h2>
          <form className="space-y-4">
            <div className="flex space-x-4">
              <input className="border p-2 w-full" placeholder="First Name" />
              <input className="border p-2 w-full" placeholder="Last Name" />
            </div>
            <input className="border p-2 w-full" placeholder="Street Address" />
            <div className="flex space-x-4">
              <input className="border p-2 w-full" placeholder="Apt Number" />
              <input className="border p-2 w-full" placeholder="State" />
              <input className="border p-2 w-full" placeholder="Zip" />
            </div>
            <div className="flex justify-between pt-4">
              <button className="border border-gray-400 px-6 py-2">cancel</button>
              <button className="bg-black text-white px-6 py-2">Save This Address</button>
            </div>
          </form>
        </div>

        {/* Right: Order Summary */}
        <div className="w-full lg:w-1/3 border rounded-md p-6 bg-gray-100">
          <p className="text-sm mb-4">
            By placing your order, you agree to our company{" "}
            <span className="underline">Privacy policy</span> and{" "}
            <span className="underline">Conditions of use</span>.
          </p>
          <hr />
          <div className="text-sm py-4 space-y-1">
            <div className="flex justify-between">
              <span>Items - Silhouette No. 1 – Vermilion</span>
              <span>7,999</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping and handling:</span>
              <span>200</span>
            </div>
            <div className="flex justify-between">
              <span>Before tax:</span>
              <span>6,599</span>
            </div>
            <div className="flex justify-between">
              <span>Tax Collected:</span>
              <span>1,400</span>
            </div>
          </div>
          <hr />
          <div className="flex justify-between font-bold text-lg py-4">
            <span>Order Total:</span>
            <span>8,199</span>
          </div>
          <button className="bg-black text-white w-full py-2">Place Order</button>
        </div>
      </div>
    </div>
  );
}
