import React, { useState, useMemo } from "react";
import Toast from "../Components/Toast"; // added import

export default function Shop() {
  const categories = [
    { id: "athletic", label: "Athletic Footwear", count: 8 },
    { id: "boots", label: "Boots for Every Occasion", count: 8 },
    { id: "luxury", label: "Luxury Leather Shoes", count: 8 },
    { id: "sandals", label: "Sandals & Slides", count: 8 },
    { id: "sneakers", label: "Sneakerhead’s Haven", count: 10 },
  ];

  // 1. EXPANDED DATA: Added attributes (brand, color, etc.) so filters work
  const productsData = [
    {
      id: 1,
      name: "Athletic Pro",
      price: 120,
      image:
        "../src/assets/image/imgi_49_product-1_831d6162-6f44-4896-ac4c-88eb8a35a6a9.jpg",
      category: "athletic",
      brand: "Nike",
      color: "Red",
      material: "Mesh",
      type: "Men",
      size: "8",
      inStock: true,
    },
    {
      id: 2,
      name: "Winter Boots",
      price: 180,
      image:
        "../src/assets/image/imgi_50_product-18_be1e3b54-5764-4f9d-b77d-f23718b8bd6f.jpg",
      category: "boots",
      brand: "Timberland",
      color: "Brown",
      material: "Leather",
      type: "Women",
      size: "7",
      inStock: true,
    },
    {
      id: 3,
      name: "Luxury Oxford",
      price: 200,
      image:
        "../src/assets/image/imgi_51_product-2_f21b4635-7aa2-414f-b44c-6ce8171394ed.jpg",
      category: "luxury",
      brand: "Gucci",
      color: "Black",
      material: "Leather",
      type: "Men",
      size: "10",
      inStock: true,
    },
    {
      id: 4,
      name: "Beach Sandals",
      price: 60,
      image: "../src/assets/image/imgi_52_product-22.jpg",
      category: "sandals",
      brand: "Adidas",
      color: "Blue",
      material: "Rubber",
      type: "Kids",
      size: "6",
      inStock: true,
    },
    {
      id: 5,
      name: "Street Sneakers",
      price: 90,
      image:
        "../src/assets/image/imgi_53_product-3_be4a38ab-621f-46d5-a126-3488687e10f6.jpg",
      category: "sneakers",
      brand: "Puma",
      color: "White",
      material: "Canvas",
      type: "Men",
      size: "9",
      inStock: true,
    },
    {
      id: 6,
      name: "Comfy Slides",
      price: 40,
      image:
        "../src/assets/image/imgi_54_product-26_a72ab182-4323-4754-aa41-d64401571e17.jpg",
      category: "sandals",
      brand: "Nike",
      color: "Black",
      material: "Synthetic",
      type: "Women",
      size: "8",
      inStock: true,
    },
    {
      id: 7,
      name: "Formal Derbys",
      price: 150,
      image:
        "../src/assets/image/imgi_55_product-4_a9f5532a-47cd-4f32-8958-57ee765f0a27.jpg",
      category: "luxury",
      brand: "Reebok",
      color: "Brown",
      material: "Suede",
      type: "Men",
      size: "11",
      inStock: true,
    },
    {
      id: 8,
      name: "Speed Runner",
      price: 110,
      image:
        "../src/assets/image/imgi_56_product-19_323f61e6-cfd6-4407-823a-273f154d188c.jpg",
      category: "athletic",
      brand: "Adidas",
      color: "Green",
      material: "Mesh",
      type: "Women",
      size: "7",
      inStock: true,
    },
    {
      id: 9,
      name: "Speed Runner",
      price: 110,
      image:
        "../src/assets/image/imgi_56_product-19_323f61e6-cfd6-4407-823a-273f154d188c.jpg",
      category: "athletic",
      brand: "Adidas",
      color: "Green",
      material: "Mesh",
      type: "Women",
      size: "7",
      inStock: true,
    },
  ];

  // UI State
  const [grid, setGrid] = useState(3);
  const [sort, setSort] = useState("Alphabetically, A-Z");

  // Accordion State (Collapsing sections)
  const [sections, setSections] = useState({
    collection: true,
    availability: true,
    price: true,
    brand: true,
    category: true,
    color: true,
    material: true,
    size: true,
    type: true,
    more: false,
  });

  const toggleSection = (key) =>
    setSections((prev) => ({ ...prev, [key]: !prev[key] }));

  // 2. FILTER STATE: Centralized state for all active filters
  const [price, setPrice] = useState({ min: 0, max: 300 });
  const [filters, setFilters] = useState({
    category: [],
    brand: [],
    color: [],
    material: [],
    type: [],
    size: [],
    availability: [], // 'inStock', 'outStock'
  });

  // Notification state
  const [notifications, setNotifications] = useState([]);

  const addNotification = (message, type = "success", ttl = 3000) => {
    const id = Date.now() + Math.random();
    setNotifications((prev) => [...prev, { id, message, type }]);
    // auto-remove after ttl
    setTimeout(() => {
      setNotifications((prev) => prev.filter((n) => n.id !== id));
    }, ttl);
  };

  const removeNotification = (id) =>
    setNotifications((prev) => prev.filter((n) => n.id !== id));

  // Helper to handle Checkbox changes (multi-select)
  const handleFilterChange = (section, value) => {
    setFilters((prev) => {
      const active = prev[section];
      if (active.includes(value)) {
        return { ...prev, [section]: active.filter((item) => item !== value) }; // Remove
      } else {
        return { ...prev, [section]: [...active, value] }; // Add
      }
    });
  };

  

  // NEW: Category tab click should behave like tabs (single-select).
  const handleCategoryTabClick = (catId) => {
    setFilters((prev) => {
      const active = prev.category;
      if (active.includes(catId)) {
        // clicking an active tab will deselect it (clear selection)
        return { ...prev, category: active.filter((item) => item !== catId) };
      } else {
        // select only this category (single-select tab behavior)
        return { ...prev, category: [catId] };
      }
    });
  };

  // 3. FILTERING LOGIC: Runs whenever filters or price changes
  const filteredProducts = useMemo(() => {
    return productsData.filter((product) => {
      // Price Check
      if (product.price < price.min || product.price > price.max) return false;

      // Checkbox Checks (Only filter if the user has selected at least one option in that category)
      if (
        filters.category.length > 0 &&
        !filters.category.includes(product.category)
      )
        return false;
      if (filters.brand.length > 0 && !filters.brand.includes(product.brand))
        return false;
      if (filters.color.length > 0 && !filters.color.includes(product.color))
        return false;
      if (
        filters.material.length > 0 &&
        !filters.material.includes(product.material)
      )
        return false;
      if (filters.type.length > 0 && !filters.type.includes(product.type))
        return false;
      if (filters.size.length > 0 && !filters.size.includes(product.size))
        return false;

      // Availability Check
      if (filters.availability.length > 0) {
        const showInStock = filters.availability.includes("In Stock");
        const showOutStock = filters.availability.includes("Out of Stock");
        if (showInStock && !showOutStock && !product.inStock) return false;
        if (!showInStock && showOutStock && product.inStock) return false;
      }

      return true;
    });
  }, [filters, price]);

  const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cartItems")) || [];

    const existing = cart.find((item) => item.id === product.id);

    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({ ...product, qty: 1 });
    }

    localStorage.setItem("cartItems", JSON.stringify(cart));

    // optional: open cart slider
    window.dispatchEvent(new Event("cartUpdated"));

    // show notification
    addNotification(`${product.name} added to cart`);
  };

  const addToWishlist = (product) => {
    const wishlist = JSON.parse(localStorage.getItem("wishlistItems")) || [];

    if (!wishlist.find((item) => item.id === product.id)) {
      wishlist.push(product);
      localStorage.setItem("wishlistItems", JSON.stringify(wishlist));
      window.dispatchEvent(new Event("wishlistUpdated"));
      addNotification(`${product.name} added to wishlist`);
    } else {
      addNotification(`${product.name} is already in wishlist`, "info");
    }
  };

  // 4. SORTING LOGIC: Runs on the filtered results
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sort === "Alphabetically, A-Z") return a.name.localeCompare(b.name);
    if (sort === "Alphabetically, Z-A") return b.name.localeCompare(a.name);
    if (sort === "Price, Low to High") return a.price - b.price;
    if (sort === "Price, High to Low") return b.price - a.price;
    return 0;
  });

  return (
    <>
      <div className="container-fluid border-b-2">
        <div className="container my-3">
          <span className="text-red-500 active:text-red-500">Home</span>
          <span> / Shop</span>
        </div>
      </div>

      <div className="container-fluid bgimg10">
        <div className="container p-0 bg-[#00000053]">
          <p className="text-4xl text-center py-[155px] text-white font-semibold">
            Products
          </p>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="w-full border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex overflow-x-auto no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryTabClick(cat.id)}
                className={`relative whitespace-nowrap px-6 py-4 text-sm font-medium transition
                  ${filters.category.includes(cat.id)
                    ? "text-black"
                    : "text-gray-500 hover:text-black"
                  }`}
              >
                {cat.label} <span className="text-gray-400">({cat.count})</span>
                {filters.category.includes(cat.id) && (
                  <span className="absolute left-0 bottom-0 h-[2px] w-full bg-black"></span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {/* Image Card */}
          {[
            { src: "../src/assets/image/imgi_58_col-5.png", label: "Athletic Footwear" },
            { src: "../src/assets/image/col-4.png", label: "Athletic Footwear" },
            { src: "../src/assets/image/col-6.png", label: "Athletic Footwear" },
            { src: "../src/assets/image/col-2.png", label: "Athletic Footwear" },
            { src: "../src/assets/image/col-3.png", label: "Athletic Footwear" },
          ].map((item, idx) => (
            <div key={idx} className="group relative flex items-center justify-center overflow-hidden rounded-lg">
              {/* IMAGE */}
              <img
                src={item.src}
                alt={item.label}
                className="w-full h-40 sm:h-48 md:h-52 object-contain transition-transform duration-300 group-hover:scale-105"
              />
              {/* HOVER MESSAGE */}
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white font-semibold text-center">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>


      <div className="min-h-screen bg-white py-10">
        <div className="max-w-7xl mx-auto px-4">
          {/* HEADER (Grid & Sort) */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-8 pb-4 border-b">
            <div className="flex gap-2">
              {[2, 3, 4].map((col) => (
                <button
                  key={col}
                  onClick={() => setGrid(col)}
                  className={`border px-3 py-2 ${grid === col ? "border-black bg-black text-white" : "border-gray-300"}`}
                >
                  ||
                </button>
              ))}
            </div>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="border px-3 py-2 rounded"
              >
                <option>Alphabetically, A-Z</option>
                <option>Alphabetically, Z-A</option>
                <option>Price, Low to High</option>
                <option>Price, High to Low</option>
              </select>
              <span className="font-medium">
                {sortedProducts.length} Products
              </span>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* ================= FILTER SIDEBAR ================= */}
            <aside className="w-full lg:w-72 space-y-6">
              {/* Category */}
              <div className="border-b pb-4">
                <button
                  onClick={() => toggleSection("collection")}
                  className="w-full flex justify-between font-semibold text-lg"
                >
                  Category <span>{sections.collection ? "−" : "+"}</span>
                </button>
                {sections.collection && (
                  <div className="mt-4 space-y-2">
                    {["athletic", "boots", "luxury", "sandals", "sneakers"].map(
                      (cat) => (
                        <label
                          key={cat}
                          className="flex gap-2 items-center cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            checked={filters.category.includes(cat)}
                            onChange={() => handleFilterChange("category", cat)}
                          />
                          <span className="capitalize">{cat}</span>
                        </label>
                      )
                    )}
                  </div>
                )}
              </div>

              {/* Availability */}
              <div className="border-b pb-4">
                <button
                  onClick={() => toggleSection("availability")}
                  className="w-full flex justify-between font-semibold text-lg"
                >
                  Availability <span>{sections.availability ? "−" : "+"}</span>
                </button>
                {sections.availability && (
                  <div className="mt-4 space-y-2">
                    {["In Stock", "Out of Stock"].map((status) => (
                      <label
                        key={status}
                        className="flex gap-2 items-center cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={filters.availability.includes(status)}
                          onChange={() =>
                            handleFilterChange("availability", status)
                          }
                        />
                        {status}
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* Price */}
              <div className="border-b pb-4">
                <button
                  onClick={() => toggleSection("price")}
                  className="w-full flex justify-between font-semibold text-lg"
                >
                  Price Range <span>{sections.price ? "−" : "+"}</span>
                </button>
                {sections.price && (
                  <div className="mt-4 space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <span>₹{price.min}</span>
                      <span>₹{price.max}</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="300"
                      step="10"
                      value={price.max}
                      onChange={(e) =>
                        setPrice({ ...price, max: Number(e.target.value) })
                      }
                      className="w-full accent-black"
                    />
                  </div>
                )}
              </div>

              {/* Brand */}
              <div className="border-b pb-4">
                <button
                  onClick={() => toggleSection("brand")}
                  className="w-full flex justify-between font-semibold text-lg"
                >
                  Brand <span>{sections.brand ? "−" : "+"}</span>
                </button>
                {sections.brand && (
                  <div className="mt-4 space-y-2">
                    {[
                      "Nike",
                      "Adidas",
                      "Puma",
                      "Reebok",
                      "Gucci",
                      "Timberland",
                    ].map((b) => (
                      <label
                        key={b}
                        className="flex gap-2 items-center cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={filters.brand.includes(b)}
                          onChange={() => handleFilterChange("brand", b)}
                        />
                        {b}
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* Color */}
              <div className="border-b pb-4">
                <button
                  onClick={() => toggleSection("color")}
                  className="w-full flex justify-between font-semibold text-lg"
                >
                  Color <span>{sections.color ? "−" : "+"}</span>
                </button>
                {sections.color && (
                  <div className="flex gap-2 mt-4 flex-wrap">
                    {["Black", "White", "Red", "Blue", "Green", "Brown"].map(
                      (c) => (
                        <div
                          key={c}
                          onClick={() => handleFilterChange("color", c)}
                          className={`w-6 h-6 rounded-full border cursor-pointer ${filters.color.includes(c) ? "ring-2 ring-offset-2 ring-black" : ""}`}
                          style={{ backgroundColor: c.toLowerCase() }}
                          title={c}
                        />
                      )
                    )}
                  </div>
                )}
              </div>

              {/* Material */}
              <div className="border-b pb-4">
                <button
                  onClick={() => toggleSection("material")}
                  className="w-full flex justify-between font-semibold text-lg"
                >
                  Material <span>{sections.material ? "−" : "+"}</span>
                </button>
                {sections.material && (
                  <div className="mt-4 space-y-2">
                    {[
                      "Leather",
                      "Mesh",
                      "Rubber",
                      "Canvas",
                      "Suede",
                      "Synthetic",
                    ].map((m) => (
                      <label
                        key={m}
                        className="flex gap-2 items-center cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={filters.material.includes(m)}
                          onChange={() => handleFilterChange("material", m)}
                        />
                        {m}
                      </label>
                    ))}
                  </div>
                )}
              </div>

              {/* Size */}
              <div className="border-b pb-4">
                <button
                  onClick={() => toggleSection("size")}
                  className="w-full flex justify-between font-semibold text-lg"
                >
                  Size <span>{sections.size ? "−" : "+"}</span>
                </button>
                {sections.size && (
                  <div className="grid grid-cols-4 gap-2 mt-4">
                    {["6", "7", "8", "9", "10", "11"].map((s) => (
                      <button
                        key={s}
                        onClick={() => handleFilterChange("size", s)}
                        className={`border py-1 text-sm ${filters.size.includes(s) ? "bg-black text-white" : "hover:border-black"}`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </aside>

            {/* ================= PRODUCT GRID ================= */}
            <main className="flex-1">
              {sortedProducts.length === 0 ? (
                <div className="text-center py-20 text-gray-500">
                  No products found matching these filters.
                </div>
              ) : (
                <div className={`grid gap-6 ${grid === 2 ? "grid-cols-2" : grid === 3 ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"}`}>
                  {sortedProducts.map((p) => (
                    <div key={p.id} className="border rounded-lg group"
                    >
                      <div className="h-64 bg-gray-100 flex items-center justify-center relative overflow-hidden rounded-t-lg">
                        <img src={p.image} alt={p.name} className="h-full object-contain group-hover:scale-110 transition duration-300 mix-blend-multiply" />
                        {!p.inStock && (
                          <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                            Sold Out
                          </span>
                        )}
                      </div>
                      <div className="p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="text-xs text-gray-500">{p.brand}</p>
                            <h3 className="font-semibold">{p.name}</h3>
                          </div>
                          <p className="font-bold">₹{p.price}</p>
                        </div>
                        <div className="mt-3 flex gap-2">
                          {/* WISHLIST */}
                          <button onClick={() => addToWishlist(p)} className="w-10 flex items-center justify-center border rounded hover:bg-red-50">
                            ❤️
                          </button>

                          {/* ADD TO CART */}
                          <button disabled={!p.inStock} onClick={() => addToCart(p)} className={`flex-1 text-white py-2 rounded ${p.inStock ? "bg-black hover:bg-gray-800"
                            : "bg-gray-400 cursor-not-allowed"}`}>
                            {p.inStock ? "Add to Cart" : "Out of Stock"}
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </main>
          </div>
        </div>
      </div>

      {/* Toast notifications */}
      <Toast notifications={notifications} onClose={removeNotification} />
    </>
  );
}