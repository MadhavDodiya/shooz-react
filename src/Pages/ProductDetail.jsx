import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import products from "../data/products.js";

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((p) => String(p.id) === String(id));

  const addToCart = (productData) => {
    const cart = JSON.parse(localStorage.getItem("cartItems")) || [];
    const existing = cart.find((item) => item.id === productData.id);

    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({ ...productData, qty: 1 });
    }

    localStorage.setItem("cartItems", JSON.stringify(cart));
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const addToWishlist = (productData) => {
    const wishlist = JSON.parse(localStorage.getItem("wishlistItems")) || [];
    if (!wishlist.find((item) => item.id === productData.id)) {
      wishlist.push(productData);
      localStorage.setItem("wishlistItems", JSON.stringify(wishlist));
      window.dispatchEvent(new Event("wishlistUpdated"));
    }
  };

  if (!product) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-16">
        <p className="text-xl font-semibold mb-4">Product not found</p>
        <button
          className="px-6 py-2 bg-black text-white text-sm font-medium"
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <button
        className="mb-6 text-sm text-gray-600 hover:text-black"
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div className="border p-4">
          <img
            src={product.image.startsWith('/') ? product.image : `/${product.image}`}
            alt={product.name}
            className="w-full h-auto object-contain"
            onError={(e) => {
              console.error('Image failed to load:', product.image);
              // Try alternative path format - remove leading slash if present, then add it
              const currentSrc = e.target.src;
              const basePath = product.image.replace(/^\/+/, ''); // Remove any leading slashes
              const altPath = `/${basePath}`;
              // Only try alternative if it's different from current src
              if (currentSrc !== altPath && !currentSrc.includes(altPath)) {
                e.target.src = altPath;
              } else {
                // If still fails, try without leading slash
                const fallbackPath = basePath;
                if (currentSrc !== fallbackPath) {
                  e.target.src = fallbackPath;
                }
              }
            }}
          />
        </div>

        <div>
          <p className="text-sm text-gray-500 mb-2">
            {product.brand} • {product.category}
          </p>
          <h1 className="text-2xl sm:text-3xl font-semibold mb-3">
            {product.name}
          </h1>
          <p className="text-xl font-semibold mb-4">₹{product.price}.00</p>

          {product.description && (
            <p className="text-sm text-gray-600 mb-6">{product.description}</p>
          )}

          <div className="grid grid-cols-2 gap-4 text-sm mb-6">
            <div>
              <p className="text-gray-400">Type</p>
              <p className="font-medium">{product.type}</p>
            </div>
            <div>
              <p className="text-gray-400">Size</p>
              <p className="font-medium">{product.size}</p>
            </div>
            <div>
              <p className="text-gray-400">Color</p>
              <p className="font-medium">{product.color}</p>
            </div>
            <div>
              <p className="text-gray-400">Material</p>
              <p className="font-medium">{product.material}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 items-center">
            <button
              className="bg-pink-500 hover:bg-black transition px-8 py-2 text-white text-sm font-medium"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
            <button
              className="flex items-center gap-2 text-sm text-red-500"
              onClick={() => addToWishlist(product)}
            >
              {/* Filled heart icon with fixed color */}
              <i className="bi bi-heart-fill text-lg"></i>
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;


