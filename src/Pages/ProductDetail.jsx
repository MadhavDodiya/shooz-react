import React, { useState } from "react";
import { Link } from "react-router-dom";
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

  const [openIndex, setOpenIndex] = useState(2); // default open third FAQ like screenshot

  const faqs = [
    {
      question: "Is the shipping free?",
      answer: "Yes, we offer free shipping on all orders over $100.",
    },
    {
      question: "When will I receive my item?",
      answer:
        "Delivery usually takes 3–7 business days depending on your location.",
    },
    {
      question: "Can I change or return my item?",
      answer:
        "If you want to change a product into another model or strap color, please contact us so we can reserve the new item in stock. You are always entitled to an exchange or refund within 30 days after receiving your package, as long as the item has not been used.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Breadcrumb */}
        <p className="text-sm text-gray-500 mb-6">
          <Link to="/" className="hover:text-black transition">
            Home
          </Link>{" "}/ {product.name}
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
                <button onClick={() => setQty(qty + 1)} className="w-10 h-10">
                  +
                </button>
              </div>

              <button onClick={addToCart} className="bg-[#b14452] text-white px-8 py-3 text-sm">
                ADD TO CART
              </button>

              <button onClick={buyNow} className="bg-black text-white px-8 py-3 text-sm">
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

              {activeTab === "reviews" && (
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
            </div>

            {/* RIGHT SIDE */}
            <div className="col-lg-4">
              <h5 className="fw-semibold mb-4">Related products</h5>
              <div className="row">
                <div className="col-lg-6">
                  {/* PRODUCT 1 */}
                  <div className="mb-5">
                    <div className="bg-light p-4 text-center mb-2">
                      <img src="../assets/image/imgi_96_product-1_831d6162-6f44-4896-ac4c-88eb8a35a6a9.png" alt="" className="img-fluid" />
                    </div>
                    <p className="mb-1 fw-medium">Breathable Mesh Slip-Ons</p>
                    <p className="mb-1">₹25.00</p>
                    <a href="#" className="text-gray-500 text-decoration-none border-b-2 hover:border-pink-500 hover:text-pink-500">
                      + Add to Cart
                    </a>
                  </div>
                </div>

                <div className="col-lg-6">
                  {/* PRODUCT 1 */}
                  <div className="mb-5">
                    <div className="bg-light p-4 text-center mb-2">
                      <img src="../assets/image/imgi_96_product-8_c70f2fa3-a720-4f73-a2b0-0e0e01967d19.jpg" alt="" className="img-fluid" />
                    </div>
                    <p className="mb-1 fw-medium">Breathable Mesh Slip-Ons</p>
                    <p className="mb-1">₹25.00</p>
                    <a href="#" className="text-gray-500 text-decoration-none border-b-2 hover:border-pink-500 hover:text-pink-500">
                      + Add to Cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid relative h-[500px] w-full my-20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('../src/assets/image/filler2.png')] bg-cover bg-center"></div>
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
        {/* Content */}
        <div className="relative z-10 flex items-center justify-center text-center text-white h-full px-4">
          <div className="container">
            <p className="text-[18px]">Effortless Fashion, Every Day</p>
            <p className="text-4xl py-4 font-semibold">Chic Styles for the Modern Woman</p>
            <p className="text-[20px] leading-relaxed">
              Embrace effortless elegance with our curated collection of chic styles designed for the modern woman. <br />
              From desk to dinner, our fashion pieces effortlessly transition with you. Unlock exclusive offers and redefine <br />
              your daily style with ease.
            </p>
          </div>
        </div>
      </div>

      {/* <div class="container-fluid py-5">
        <div class="container">
          <div class="row align-items-center gy-5">
            <div class="col-12 col-md-6 position-relative">
              <img src="../src/assets/image/imgi_51_filler3.jpeg" class="img-fluid rounded w-100" />
              <img src="../src/assets/image/filler2.png" class="position-absolute floating-img shadow rounded" />
            </div>
            <div class="col-12 col-md-6 pt-4 pt-md-0">
              <p class="text-uppercase small text-muted letter-space">
                Classic Meets Contemporary
              </p>
              <h2 class="fw-bold display-6">
                Timeless Styles With A Modern Edge
              </h2>
              <p class="text-muted mt-3">
                Experience the best of both worlds with our collection that seamlessly blends timeless
                classics with modern twists. Elevate your wardrobe with pieces that stand the test of
                time while embracing the latest fashion innovations. Shop now for exclusive discounts.
              </p>
              <button class="btn px-4 py-2 mt-3 text-white fw-semibold" style="background:#8b0000;">
                DISCOVER NOW
              </button>
            </div>
          </div>
        </div>
      </div> */}

      <div className="w-full bg-[#f7f7f7] py-5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center px-5">
          {/* ITEM 1 */}
          <div>
            <svg xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12 mx-auto mb-3 text-gray-700"
              fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.126 1.152.49V8.25h6.75c.414 0 .75.336.75.75v6a.75.75 0 01-.75.75H12.356v4.715c0 .616-.712.929-1.152.49L2.25 12z" />
            </svg>
            <h3 className="font-semibold text-lg">Free Shipping</h3>
            <p className="text-gray-500 text-sm mt-1">From all orders over $100</p>
          </div>
          {/* ITEM 2 */}
          <div>
            <svg xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12 mx-auto mb-3 text-gray-700"
              fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25a3 3 0 10-6 0V9m-.75 6h7.5a2.25 2.25 0 002.25-2.25v-3A2.25 2.25 0 0016.5 7.5h-9A2.25 2.25 0 005.25 9.75v3A2.25 2.25 0 007.5 13.5z" />
            </svg>
            <h3 className="font-semibold text-lg">Quality Support</h3>
            <p className="text-gray-500 text-sm mt-1">24/7 online feedback</p>
          </div>
          {/* ITEM 3 */}
          <div>
            <svg xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12 mx-auto mb-3 text-gray-700"
              fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 9.75h15m-15 4.5h15M7.5 4.5h9A2.25 2.25 0 0118.75 6.75v10.5A2.25 2.25 0 0116.5 19.5h-9a2.25 2.25 0 01-2.25-2.25V6.75A2.25 2.25 0 017.5 4.5z" />
            </svg>
            <h3 className="font-semibold text-lg">Return & Refund</h3>
            <p className="text-gray-500 text-sm mt-1">Return money within 30 days</p>
          </div>
          {/* ITEM 4 */}
          <div>
            <svg xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12 mx-auto mb-3 text-gray-700"
              fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            <h3 className="font-semibold text-lg">Gift Voucher</h3>
            <p className="text-gray-500 text-sm mt-1">20% off when you shop online</p>
          </div>
        </div>
      </div>

      <div className="w-full py-16">
        {/* TITLE */}
        <h1 className="text-4xl font-bold text-center">FAQs</h1>
        <p className="text-center text-gray-600 mt-2">
          Have a question? We are here to help.
        </p>

        <div className="max-w-5xl mx-auto mt-14 px-5">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300 py-5">
              {/* QUESTION */}
              <button
                className="w-full flex justify-between items-center text-left"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-semibold">{faq.question}</span>

                {/* PLUS / MINUS ICON */}
                <span className="text-2xl font-light">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {/* ANSWER WITH SMOOTH ANIMATION */}
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? "max-h-40 mt-3" : "max-h-0"
                  }`}
              >
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div class="w-full bg-black py-10 px-6 md:px-12">
        <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div class="text-white">
            <h2 class="text-3xl font-bold">Sale Event</h2>
            <p class="text-gray-300 mt-2 max-w-xl">
              We've refreshed our sale with discounts of up to 50% on select styles.
            </p>
          </div>
          <div class="flex justify-center md:justify-end w-full md:w-auto">
            <span class="bg-yellow-100 text-black px-6 py-3 rounded-md text-sm font-medium">
              End Deal
            </span>
          </div>
          <div class="flex justify-center md:justify-end w-full md:w-auto">
            <button class="border border-white text-white px-8 py-3 tracking-wide font-semibold hover:bg-white transition">
              SHOP COLLECTION
            </button>
          </div>
        </div>
      </div>

      <section class="max-w-7xl mx-auto px-6 lg:px-0 py-16">
        <h2 class="text-center text-3xl font-semibold mb-10">
          You may also like
        </h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          <div>
            <div class="bg-[#faf7f3] p-4 relative">
              <span class="absolute top-4 left-4 bg-[#86d7c7] text-white px-3 py-1 text-xs rounded-md">
                -21%
              </span>
              <img src="../assets/image/imgi_51_product-2_f21b4635-7aa2-414f-b44c-6ce8171394ed.jpg" alt="" class="w-full h-auto object-contain" />
            </div>
            <div class="mt-3">
              <p class="text-[15px] font-semibold">$25.00 <span class="line-through text-gray-500 text-sm">$32.00</span></p>
              <p class="font-medium text-lg">Chunky Platform Sandals</p>
              <p class="text-sm text-gray-500">BoldWalks</p>
            </div>
          </div>

          <div>
            <div class="bg-[#faf7f3] p-4">
              <img src="../assets/image/imgi_52_product-22.jpg" alt="" class="w-full h-auto object-contain" />
            </div>
            <div class="mt-3">
              <p class="text-[15px] font-semibold">$15.00</p>
              <p class="font-medium text-lg">Elegant Block Heel Pumps</p>
              <p class="text-sm text-gray-500">LuxeFeet</p>
            </div>
          </div>

          <div>
            <div class="bg-[#faf7f3] p-4">
              <img src="../assets/image/imgi_53_product-3_be4a38ab-621f-46d5-a126-3488687e10f6.jpg" alt="" class="w-full h-auto object-contain" />
            </div>
            <div class="mt-3">
              <p class="text-[15px] font-semibold">$25.00</p>
              <p class="font-medium text-lg">High-Top Canvas Sneakers</p>
              <p class="text-sm text-gray-500">TrendyFeet</p>
            </div>
          </div>

          <div>
            <div class="bg-[#faf7f3] p-4">
              <img src="../assets/image/imgi_54_product-26_a72ab182-4323-4754-aa41-d64401571e17.jpg" alt="" class="w-full h-auto object-contain" />
            </div>
            <div class="mt-3">
              <p class="text-[15px] font-semibold">$25.00</p>
              <p class="font-medium text-lg">Breathable Mesh Slip-Ons</p>
              <p class="text-sm text-gray-500">AirWalk</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductDetail;
