import { useState } from "react";
import booksData from "../../../../Utils/books";
import Footer from "../../../shared/Footer";
import Header from "../../../shared/Header";
import ProductList from "../../../shared/ProductList";

export default function Books() {
  const [books, setBooks] = useState(booksData || []);

  const tambahBuku = () => {
    const bukuBaru = {
      id: books.length + 1,
      title: `Buku Baru ${books.length + 1}`,
      author: "Penulis Baru",
      year: 2024,
      description: "Buku yang baru ditambahkan",
      image: `https://picsum.photos/300/200?random=${books.length + 1}`
    };

    setBooks((prevBooks) => [...prevBooks, bukuBaru]);
  };

  return (
    <>
      <Header />

      <div className="container mt-4">
        <button onClick={tambahBuku} className="btn btn-primary mb-3">
          Tambah Buku
        </button>
      </div>

      <ProductList data={books} />

      <Footer />
    </>
  );
}