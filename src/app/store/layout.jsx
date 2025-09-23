import React from "react";
import Container from "../components/Container"; // adjust if path is different

export default function StoreLayout({ children }) {
  return (
    <Container>
      <div className="py-6">
        {children}
      </div>
    </Container>
  );
}
