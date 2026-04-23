import Footer from "../shared/Footer";
import Header from "../shared/Header";
import Hero from "../shared/Hero";
import ProductList from "../shared/ProductList";
import books from "../../Utils/books";

export default function Home (){
    return (
        <>
        <Header/>
        <Hero />
        <ProductList data={books} />
        <Footer/>
        </>
    )
}