import React, { useEffect, useState } from 'react';
import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    onSnapshot,
    
    query,
    setDoc,
} from 'firebase/firestore';
import { fireDb } from '../../Firebase/Firebase';
import Mycontext from './Mycontext';

function MyState(props) {
    // Initial product state
    const [products, setProducts] = useState({
        id :"",
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
        const q = query(collection(fireDb,'Shoe'));

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
    const addProduct = async () => {
        // Validate fields
        const { companyname, shoename, image, price, size,  rating } = products;

        if (!companyname || !shoename || !image || !price || !size  || !rating) {
            return alert("All fields are required");
        }

        try {
            const productRef = collection(fireDb, "Shoe");
            await addDoc(productRef, {
                ...products
            });
            getshoes();
            alert("Product added successfully!");
            setTimeout(() => {
                window.location.href = "/";
            }, 800);
            setProducts({
                companyname: "",
                shoename: "",
                image: "",
                price: "",
                size: "",
                // shoecolor: "",
                rating: ""
            });
        } catch (error) {
            console.error("Add Error:", error);
        }
    };

    // Fetch all products

   


    // Set selected product to form
    const editProducthandle = (item) => {
        setProducts(item);
        console.log(item)
    };

    // Save edited product
    const editProducts = async () => {
        try {
            await setDoc(doc(fireDb, 'Shoe', products.id), products);
            getshoes();
            alert("Product updated successfully!");
            setTimeout(() => {
                window.location.href = "/";
            }, 800);
            setProducts({
                companyname: "",
                shoename: "",
                image: "",
                price: "",
                size: "",

                rating: ""
            });
        } catch (error) {
            console.error("Edit Error:", error);
        }
    };

    // Delete product
    const deleteProduct = async (item) => {
        try {
            await deleteDoc(doc(fireDb, "Shoe", item.id));
            getshoes();
            alert("Product deleted successfully!");
        } catch (error) {
            console.error("Delete Error:", error);
        }
    };

    return (
        <Mycontext.Provider
            value={{
                products,
                setProducts,
                addProduct,
                getshoes,
                allProducts,
                setAllProducts,
                editProducthandle,
                editProducts,
                deleteProduct,
            }}
        >
            {props.children}
        </Mycontext.Provider>
    );
}

export default MyState;
