import React, { useState } from 'react';
import productList from '../productData';
import styles from './Visitor.module.css'; 

function Visitor() {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = productList.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(productList.length / productsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <div className={styles['visitor-container']}>
      <div className={styles['header-container']}>
        <h1 className={styles['product-header']}>Productos más vendidos</h1>
        <div className={styles['header-pagination-container']}>
          <div className={styles['pagination']}>
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className={styles['pagination-button']}
            >
              &#8249;
            </button>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={styles['pagination-button']}
            >
              &#8250;
            </button>
          </div>
        </div>
      </div>
      <div className={styles['product-grid']}>
        {currentProducts.map((product) => (
          <div key={product.id} className={styles['product-card']}>
            <img src={product.image} alt={product.name} className={styles['product-image']} />
            <div className={styles['product-details']}>
              <h2>{product.name}</h2>
              <p className={styles['description']}>{product.description}</p>
              <div className={styles['price-container']}>
                <span className={styles['currency']} style={{ color: '#1bac91', fontSize: '1em', fontWeight: 'bold' }}>
                  $
                </span>
                <span className={styles['amount']} style={{ fontSize: '1em', fontWeight: 'bold' }}>
                  {product.price}
                </span>
              </div>
              <p>Vendedor: {product.seller}</p>
              <button
                className={styles['add-to-cart-button']}
                onClick={() => alert(`Producto añadido al carrito: ${product.name}`)}
              >
                Añadir
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Visitor;

