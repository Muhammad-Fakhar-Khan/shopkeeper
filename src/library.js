// Fetch categories
export async function getCategory() {
  try {
    const response = await fetch("https://fakestoreapi.com/products/categories", {
      cache: "no-store",
    });
    if (!response.ok) throw new Error("Failed to fetch categories");
    return await response.json();
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}

// Fetch all products
export async function getAllProducts() {
  try {
    const response = await fetch("https://fakestoreapi.com/products", {
      cache: "no-store",
    });
    if (!response.ok) throw new Error("Failed to fetch products");
    return await response.json();
  } catch (error) {
    console.error("Error fetching all products:", error);
    return [];
  }
}

// Fetch single product by ID
export async function getProducts(productId = null) {
  let API = "https://fakestoreapi.com/products";
  if (productId) API += `/${productId}`;

  try {
    const response = await fetch(API, { cache: "no-store" });
    if (!response.ok) throw new Error(`Failed to fetch products: ${response.status}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error); // 👈 will log in your terminal
    return productId ? null : [];
  }
}