import React, { useState } from 'react';
import productList from '../productData';
import styles from './Admin.module.css';

function Admin() {
  const [editedProduct, setEditedProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = productList.slice(indexOfFirstProduct, indexOfLastProduct);

  const totalPages = Math.ceil(productList.length / productsPerPage);

  const handleEditProduct = (productId) => {
    const productToEdit = productList.find((product) => product.id === productId);
    setEditedProduct({ ...productToEdit });
  };

  const handleSaveChanges = () => {
    const index = productList.findIndex((product) => product.id === editedProduct.id);
    const updatedProduct = { ...productList[index], ...editedProduct };
    productList[index] = updatedProduct;
    console.log('Cambios guardados:', updatedProduct);
    setEditedProduct(null);
  };

  const handleInputChange = (e) => {
    setEditedProduct({
      ...editedProduct,
      [e.target.name]: e.target.value,
    });
  };

  const handleToggleEdit = (productId) => {
    if (editedProduct && editedProduct.id === productId) {
      handleSaveChanges();
    } else {
      handleEditProduct(productId);
    }
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <div className={styles['admin-container']}>
      <div className={styles['header-container']}>
        <h1 className={styles['product-header']}>Productos más vendidos (Admin)</h1>
        <div className={styles['pagination']}>
          <button onClick={handlePrevPage} disabled={currentPage === 1} className={styles['pagination-button']}>
            &#8249;
          </button>
          <button onClick={handleNextPage} disabled={currentPage === totalPages} className={styles['pagination-button']}>
            &#8250;
          </button>
        </div>
      </div>
      <div className={styles['admin-grid']}>
        {currentProducts.map((product) => (
          <div key={product.id} className={styles['admin-card']}>
            <img src={product.image} alt={product.name} className={styles['admin-image']} />
            <div className={styles['admin-details']}>
              {editedProduct && editedProduct.id === product.id ? (
                <>
                  <input
                    type="text"
                    name="name"
                    value={editedProduct.name}
                    onChange={handleInputChange}
                  />
                  <textarea
                    name="description"
                    value={editedProduct.description}
                    onChange={handleInputChange}
                  />
                  <input
                    type="number"
                    name="price"
                    value={editedProduct.price}
                    onChange={handleInputChange}
                  />
                </>
              ) : (
                <>
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
                </>
              )}
              <p>Vendedor: {product.seller}</p>
              <button
                className={styles['edit-button']}
                onClick={() => handleToggleEdit(product.id)}
              >
                {editedProduct && editedProduct.id === product.id ? 'Guardar Cambios' : 'Editar'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Admin;
