import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./src/components/Header";
import { Body } from "./src/components/Body";
import { Footer } from "./src/components/Footer";
import './src/css/main.css';
import FilterableProductTable from "./src/components/ThinkingInReact/FilterableProductTable";

const PRODUCTS = [
    {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
    {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
    {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
    {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
    {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
    {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
  ];

const AppLayout = () =>{
    return(
        <div className="main-container">
            {/* <Header/>
            <Body/>
            <Footer/> */}
            <FilterableProductTable products = {PRODUCTS}/>
        </div>
    )
};

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout/>);