import React, { useEffect, useState } from 'react';
import {
    // addDoc,
    collection,
    // deleteDoc,
    // doc,
    onSnapshot,

    query,
    QuerySnapshot,
    // setDoc,
} from 'firebase/firestore';
import { fireDb } from '../../Firebase/Firebase';
import Mycontext from './Mycontext';

function MyState(props) {
    // Initial product state
    const [products, setProducts] = useState({
        companyname: "",
        shoename: "",
        image: "",
        price: "",
        size: "",
        rating: ""
    });

    // All products from DB
    const [allProducts, setAllProducts] = useState([]);

    const getshoes = () => {
        const q = query(collection(fireDb,'Shoes'));

        const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
            const shoesarray = QuerySnapshot.docs.map(doc => ({
                ...doc.data(), id: doc.id
            }));
            setAllProducts(shoesarray);
        });
        return unsubscribe;
    };

    useEffect(() => {
        const unsubscribe = getshoes();
        return () => unsubscribe();
    },[]);

    useEffect(() => {
        console.log(allProducts);
    },[allProducts]);
    // const addProduct = async () => {
    //     // Validate fields
    //     const { companyname, shoename, image, price, size, shoecolor, rating } = products;

    //     if (!companyname || !shoename || !image || !price || !size || !shoecolor || !rating) {
    //         return alert("All fields are required");
    //     }

    //     try {
    //         const productRef = collection(fireDb, "Shoes");
    //         await addDoc(productRef, {
    //             ...products
    //         });
    //         getProducts();
    //         alert("Product added successfully!");
    //         setTimeout(() => {
    //             window.location.href = "/";
    //         }, 800);
    //         setProducts({
    //             companyname: "",
    //             shoename: "",
    //             image: "",
    //             price: "",
    //             size: "",
    //             // shoecolor: "",
    //             rating: ""
    //         });
    //     } catch (error) {
    //         console.error("Add Error:", error);
    //     }
    // };

    // Fetch all products

   


    // Set selected product to form
    // const editProducthandle = (item) => {
    //     setProducts(item);
    // };

    // // Save edited product
    // const editProducts = async () => {
    //     try {
    //         await setDoc(doc(fireDb, 'Shoes', products.id), products);
    //         getProducts();
    //         alert("Product updated successfully!");
    //         setTimeout(() => {
    //             window.location.href = "/";
    //         }, 800);
    //         setProducts({
    //             companyname: "",
    //             shoename: "",
    //             image: "",
    //             price: "",
    //             size: "",

    //             rating: ""
    //         });
    //     } catch (error) {
    //         console.error("Edit Error:", error);
    //     }
    // };

    // Delete product
    // const deleteProduct = async (item) => {
    //     try {
    //         await deleteDoc(doc(fireDb, "Shoes", item.id));
    //         getProducts();
    //         alert("Product deleted successfully!");
    //     } catch (error) {
    //         console.error("Delete Error:", error);
    //     }
    // };

    return (
        <Mycontext.Provider
            value={{
                products,
                setProducts,
                // addProduct,
                getshoes,
                allProducts,
                setAllProducts,
                // editProducthandle,
                // editProducts,
                // deleteProduct,
            }}
        >
            {props.children}
        </Mycontext.Provider>
    );
}

export default MyState;
