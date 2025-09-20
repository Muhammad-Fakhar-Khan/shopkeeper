// Fetch categories
export async function getCategory() {
  try {
    const response = await fetch("https://fakestoreapi.com/products/categories", {
      cache: "no-store", // ensures fresh fetch
    });
    if (!response.ok) throw new Error("Failed to fetch categories");
    const data = await response.json();
    return data; // e.g., ["electronics", "jewelery", ...]
  } catch (error) {
    console.error("Error fetching categories:", error);
    return []; // return empty array instead of undefined
  }
}

// Fetch products
export async function getProducts(productId = null) {
  let API = "https://fakestoreapi.com/products";
  if (productId) API += `/${productId}`;

  try {
    const response = await fetch(API);
    if (!response.ok) throw new Error("Failed to fetch products");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return productId ? null : [];
  }
}
