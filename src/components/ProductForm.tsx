import React from 'react'
import {AddProductContext, IProdoctContext} from '../contexts/AddProductContext'

const ProductForm = () => {
    const {product, setProduct, create, productRequest, setProductRequest, update } = React.useContext(AddProductContext) as IProdoctContext
    
  return (
    <div className="container d-flex justify-content-between">
      <form onSubmit={create} className='d-grid container mb-5'> 
        <h3 className="display-6 mb-4">Create Product</h3>
        <input value={productRequest.name} onChange={(e) => setProductRequest({...productRequest, name: e.target.value})} type="text" className="form-control py-2 mb-3" placeholder='Enter name...' />
        <input value={productRequest.tag} onChange={(e) => setProductRequest({...productRequest, tag: e.target.value})} type="text" className="form-control py-2 mb-3" placeholder='Enter tag...' />
        <input value={productRequest.description} onChange={(e) => setProductRequest({...productRequest, description: e.target.value})} type='text'  className="form-control py-2 mb-3" placeholder='Enter description...' />
        <input value={productRequest.category} onChange={(e) => setProductRequest({...productRequest, category: e.target.value})} type="text" className="form-control py-2 mb-3" placeholder='Enter category...' />
        <input value={productRequest.imageName} onChange={(e) => setProductRequest({...productRequest, imageName: e.target.value})} type="text" className="form-control py-2 mb-3" placeholder='Enter imageurl...' />
        <label>Price</label>
        <input value={productRequest.price} onChange={(e) => setProductRequest({...productRequest, price: Number(e.target.value)})} type="text" className="form-control py-2 mb-3" placeholder='Enter price...' />
        <button type='submit' className='btn btn-danger'>CREATE Product</button>
      </form>

      <form onSubmit={update} className='d-grid container mb-5'> 
        <h3 className="display-6 mb-4">Update Product</h3>
        <input value={product.articleNumber} onChange={(e) => setProduct({...product, articleNumber: e.target.value})} type="text" className="form-control py-2 mb-3" placeholder='Enter ID...' />
        <input value={product.name} onChange={(e) => setProduct({...product, name: e.target.value})} type="text" className="form-control py-2 mb-3" placeholder='Enter name...' />
        <input value={product.tag} onChange={(e) => setProduct({...product, tag: e.target.value})} type="text" className="form-control py-2 mb-3" placeholder='Enter tag...' />
        <input value={product.description} onChange={(e) => setProduct({...product, description: e.target.value})} type='text'  className="form-control py-2 mb-3" placeholder='Enter description...' />
        <input value={product.category} onChange={(e) => setProduct({...product, category: e.target.value})} type="text" className="form-control py-2 mb-3" placeholder='Enter category...' />
        <input value={product.imageName} onChange={(e) => setProduct({...product, imageName: e.target.value})} type="text" className="form-control py-2 mb-3" placeholder='Enter imageurl...' />
        <input value={product.price} onChange={(e) => setProduct({...product, price: Number(e.target.value)})} type="text" className="form-control py-2 mb-3" placeholder='Enter price...' />
        <button type='submit' className='btn btn-danger'>Update Product</button>
      </form>
    </div>
  
  )
}

export default ProductForm