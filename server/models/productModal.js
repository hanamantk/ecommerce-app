import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  fileName: {
    type: String, required: true,  
  },
  inStock:{type:Boolean},
  price: { type: String, required: true }
});

const productModal = mongoose.model('Products', productSchema);

export default productModal;