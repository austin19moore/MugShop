import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../styles/ItemList.styles";

const AddForm = ({onClose}) => {
  const [formData, setFormData] = useState({ title: '', desc: '', categories: '', price: '', quantity: '', img: '' });
  const user = useSelector((state) => state.user.currentUser);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/products/', formData, {
                headers: {
                        token: `Bearer ${user.accessToken}`
                }
        });
      console.log('Data sent successfully:', response.data);
      window.location.reload();
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
        <h2>Add Item</h2>
        <br/>
        <form onSubmit={handleSubmit}>
            <div>
                <label for="title">Title: </label>
                <br/>
                <input type="text" name="title" id="title" onChange={handleInputChange}/>
            </div>
            <div>
                <label for="desc">Description: </label>
                <br/>
                <input type="text" name="desc" id="desc" onChange={handleInputChange} value={formData.desc}/>
            </div>
            <div>
                <label for="categories">Categories: </label>
                <br/>
                <input type="text" name="categories" id="categories" onChange={handleInputChange} value={formData.categories}/>
            </div>
            <div>
                <label for="price">Price: </label>
                <br/>
                <input type="number" name="price" id="price" min="0" step="0.01" onChange={handleInputChange} value={formData.price}/>
            </div>
            <div>
                <label for="quantity">Quantity: </label>
                <br/>
                <input type="number" name="quantity" id="quantity" min="0" step="1" onChange={handleInputChange} value={formData.quantity}/>
            </div>
            <div>
                <label for="img">Image: </label>
                <br/>
                <input type="text" name="img" id="img" onChange={handleInputChange} value={formData.img}/>
            </div>
            <div>
                <Button type="submit">Submit</Button>
            </div>
        </form>
    </div>
  );
};

export default AddForm;