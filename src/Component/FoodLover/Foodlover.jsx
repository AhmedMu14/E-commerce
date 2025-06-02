import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Carousel } from 'primereact/carousel'; 
import { Tag } from 'primereact/tag';
import productimage from '../../ProductService'; // ✅ update path as needed

function Foodlover() {
  
}

export default Foodlover;































// const [products, setProducts] = useState([]);

//   const responsiveOptions = [
//     { breakpoint: '1400px', numVisible: 2, numScroll: 1 },
//     { breakpoint: '1199px', numVisible: 3, numScroll: 1 },
//     { breakpoint: '767px', numVisible: 2, numScroll: 1 },
//     { breakpoint: '575px', numVisible: 1, numScroll: 1 },   
//   ];

//   useEffect(() => {
//     const data = productimage(); // ✅ Using your local mock data
//     setProducts(data);
//   }, []);

//   const getSeverity = (product) => {
//     switch (product.inventoryStatus) {
//       case 'INSTOCK': return 'success';
//       case 'LOWSTOCK': return 'warning';
//       case 'OUTOFSTOCK': return 'danger';
//       default: return null;
//     }
//   };

//   const productTemplate = (product) => (
//     // <div className="border-1   surface-border border-round m-2  text-center py-5 px-3">
//      <div className="border-1   rounded-lg m-2 text-center py-5 px-3"> 

//       <div className="mb-3 ">
//         <img
//           src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`}
//           alt={product.name}
//           className="w-6 shadow-2"
//         />
//       </div>
//       <div>
//         {/* <h4 className="mb-1">{product.name}</h4>
//         <h6 className="mt-0 mb-3">${product.price}</h6> */}
//         {/* <Tag value={product.inventoryStatus} severity={getSeverity(product)} /> */}
//         <div className="mt-5 flex flex-wrap gap-2 justify-content-center">
//           {/* <Button icon="pi pi-search" className="p-button p-button-rounded" />
//           <Button icon="pi pi-star-fill" className="p-button-success p-button-rounded" /> */}
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <div className="p-4">
//       <h2 className="text-2xl font-bold mb-2">Which food do you love to order?</h2>
//       <p className="mb-5 text-gray-600">
//         Explore and order your favorite dishes from various categories.
//       </p>
//       <div className="card">
//         <Carousel
//           value={products}
//           numScroll={1}
//           numVisible={3}
//           responsiveOptions={responsiveOptions}
//           itemTemplate={productTemplate}
//         />
//       </div>
//     </div>
//   );