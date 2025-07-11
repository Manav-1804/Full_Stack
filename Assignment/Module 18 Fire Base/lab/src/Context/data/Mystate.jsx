import React, { useState, useEffect } from 'react';
import Mycontext from './Mycontext';
import { collection, onSnapshot, doc, deleteDoc, setDoc, query, orderBy } from 'firebase/firestore';
import { fireDb } from '../../Firebase/Firebase';

function MyState(props) {
  const [allProducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState({
    companyname: '',
    shoename: '',
    image: '',
    price: '',
    size: '',
    rating: ''
  });
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

  const [editProductData, setEditProductData] = useState(null);

  

  const editProducts = async (updatedData) => {
    try {
      await setDoc(doc(fireDb, 'Shoe', updatedData.id), updatedData);
      alert('Product updated successfully');
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProduct = async (product) => {
    try {
      await deleteDoc(doc(fireDb, 'Shoe', product.id));
      alert('Product deleted successfully');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
  const q = collection(fireDb, 'Shoe'); // No orderBy
  const unsubscribe = onSnapshot(q, (snapshot) => {
    const productList = snapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id
    }));
    console.log('Fetched products:', productList); // Debug log
    setAllProducts(productList);
  });

  return () => unsubscribe();
}, []);

  return (
    <Mycontext.Provider
      value={{
        products,
        getshoes,
        setProducts,
        // addProduct,
        allProducts,
        deleteProduct,
        editProducts,
        editProductData,
        setEditProductData
      }}>
      {props.children}
    </Mycontext.Provider>
  );
}

export default MyState;
