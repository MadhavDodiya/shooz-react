import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import products from "../data/products";
const TABS = ["Description", "Material", "Reviews"];


function ProductDetail() {
  const [activeTab, setActiveTab] = useState("Description");

  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find(p => String(p.id) === id);

  const [activeImg, setActiveImg] = useState(product?.images?.[0] || product.image);
  const [size, setSize] = useState("S");
  const [qty, setQty] = useState(1);
  const [open, setOpen] = useState(null);

  if (!product) {
    return <div className="p-10">Product not found</div>;
  }

  /* ---------------- CART ---------------- */
  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cartItems")) || [];
    const exist = cart.find(
      i => i.id === product.id && i.size === size
    );

    if (exist) {
      exist.qty += qty;
    } else {
      cart.push({ ...product, size, qty });
    }

    localStorage.setItem("cartItems", JSON.stringify(cart));
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const buyNow = () => {
    addToCart();
    navigate("/cart"); // jo cart page hoy to
  };

  const addWishlist = () => {
    const wishlist = JSON.parse(localStorage.getItem("wishlistItems")) || [];
    if (!wishlist.find(i => i.id === product.id)) {
      wishlist.push(product);
      localStorage.setItem("wishlistItems", JSON.stringify(wishlist));
      window.dispatchEvent(new Event("wishlistUpdated"));
    }
  };

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Breadcrumb */}
        <p className="text-sm text-gray-500 mb-6">
          Home / {product.name}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* LEFT IMAGE */}
          <div>
            <div className="bg-gray-50 p-6 rounded">
              <img
                src={activeImg}
                alt={product.name}
                className="w-full object-contain"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3 mt-4">
              {(product.images || [product.image]).map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(img)}
                  className={`border p-1 ${activeImg === img ? "border-black" : "border-gray-300"
                    }`}
                >
                  <img src={img} className="w-16 h-16 object-contain" />
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT DETAILS */}
          <div>
            <h1 className="text-3xl font-semibold mb-2">
              {product.name}
            </h1>
            <p className="text-xl font-semibold mb-4">
              ₹{product.price}.00
            </p>

            {/* SIZE */}
            <div className="mb-6">
              <p className="text-sm mb-2">
                Size: <b>{size}</b>
              </p>
              <div className="flex gap-3">
                {["S", "M", "L"].map(s => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={`w-10 h-10 border ${size === s ? "border-black" : "border-gray-300"
                      }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* QTY + BUTTONS */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="flex border">
                <button
                  onClick={() => qty > 1 && setQty(qty - 1)}
                  className="w-10 h-10"
                >
                  −
                </button>
                <span className="w-10 h-10 flex items-center justify-center">
                  {qty}
                </span>
                <button
                  onClick={() => setQty(qty + 1)}
                  className="w-10 h-10"
                >
                  +
                </button>
              </div>

              <button
                onClick={addToCart}
                className="bg-[#b14452] text-white px-8 py-3 text-sm"
              >
                ADD TO CART
              </button>

              <button
                onClick={buyNow}
                className="bg-black text-white px-8 py-3 text-sm"
              >
                BUY IT NOW
              </button>
            </div>

            {/* WISHLIST */}
            <div className="flex gap-6 text-sm mb-8">
              <button onClick={addWishlist}>♡ Add To Wishlist</button>
              <button>⇄ Compare</button>
            </div>

            {/* INFO */}
            <div className="text-sm text-gray-600 space-y-2 mb-6">
              <p>Vendor: <b>{product.brand}</b></p>
              <p>Type: Sneakers</p>
              <p>Availability: Available</p>
            </div>

            {/* ACCORDION */}
            {[
              { title: "Shipping information", content: "Free shipping over ₹1000." },
              { title: "Care Guide", content: "Hand wash only." }
            ].map((item, i) => (
              <div key={i} className="border-t py-4">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex justify-between"
                >
                  {item.title}
                  <span>{open === i ? "−" : "+"}</span>
                </button>
                {open === i && (
                  <p className="text-sm text-gray-600 mt-2">
                    {item.content}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="container my-5">
          <div className="row">
            {/* LEFT SIDE */}
            <div className="col-lg-8">
              {/* Tabs */}
              <ul className="nav border-bottom mb-4">
                {["description", "material", "reviews"].map(tab => (
                  <li className="nav-item me-4" key={tab}>
                    <button
                      className={`nav-link px-0 pb-2 ${activeTab === tab ? "fw-semibold border-bottom border-dark" : "text-muted"
                        }`}
                      onClick={() => setActiveTab(tab)}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  </li>
                ))}
              </ul>

              {/* Content */}
              {activeTab === "description" && (
                <p className="text-muted lh-lg">
                  Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris.
                  Praesent adipiscing. Phasellus ullamcorper ipsum rutrum nunc.
                  Nunc nonummy metus. Vestibulum volutpat pretium libero. Cras id dui.
                  Aenean ut eros et nisl sagittis vestibulum. Nullam nulla eros,
                  ultricies sit amet, nonummy id, imperdiet feugiat, pede.
                  <br /><br />
                  Sed lectus. Donec mollis hendrerit risus. Phasellus nec sem in justo
                  pellentesque facilisis. Etiam imperdiet imperdiet orci.
                  Nunc nec neque. Phasellus leo dolor, tempus non, auctor et,
                  hendrerit quis, nisi. Curabitur ligula sapien, tincidunt non,
                  euismod vitae, posuere imperdiet, leo. Maecenas malesuada.
                </p>
              )}

              {activeTab === "material" && (
                <p className="text-muted lh-lg">
                  Upper: Breathable mesh<br />
                  Sole: Rubber outsole<br />
                  Lining: Soft fabric<br />
                  Closure: Lace-up
                </p>
              )}

              {activeTab === "reviews" && (
                <p className="text-muted">No reviews yet.</p>
              )}
            </div>

            {/* RIGHT SIDE */}
            <div className="col-lg-4">
              <h5 className="fw-semibold mb-4">Related products</h5>

              {/* PRODUCT 1 */}
              <div className="mb-5">
                <div className="bg-light p-4 text-center mb-2">
                  <img
                    src=""
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <p className="mb-1 fw-medium">Breathable Mesh Slip-Ons</p>
                <p className="mb-1">$25.00</p>
                <a href="#" className="text-muted text-decoration-none">
                  + Add to Cart
                </a>
              </div>

              {/* PRODUCT 2 */}
              <div className="mb-5">
                <div className="bg-light p-4 text-center mb-2">
                  <img
                    src=""
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <p className="mb-1 fw-medium">Chunky Platform Sandals</p>
                <p className="mb-1">
                  $25.00{" "}
                  <span className="text-muted text-decoration-line-through">
                    $32.00
                  </span>
                </p>
                <a href="#" className="text-muted text-decoration-none">
                  + Add to Cart
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
