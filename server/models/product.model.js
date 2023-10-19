//const { Int32 } = require('mongodb');//
//const mongoose = require('mongoose');
import { Double, Int32 } from 'mongodb';
import mongoose from 'mongoose'

const ProductSchema = new mongoose.Schema({
name: String,
description: String,
price: Number,
quantity: Number,
category: String
}, { collection: 'product' });

//module.exports = mongoose.model('Product',ProductSchema )

export default mongoose.model('product', ProductSchema);
