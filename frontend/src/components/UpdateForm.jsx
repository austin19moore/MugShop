import { useState, useEffect } from "react";
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { publicRequest } from "../request";
import { Button2 } from "../styles/Item.styles"

const UpdateForm = ({onClose}) => {
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    const [items, setItems] = useState({});
    const user = useSelector((state) => state.user.currentUser);
    const [formData, setFormData] = useState({
        title: '',
        desc: '',
        categories: '',
        price: '',
        quantity: '',
        img: ''
      });

    useEffect(() => {
        const getItem = async () =>{
            try{
                const res = await publicRequest.get(`products/find/${id}`)
                setItems(res.data);
            }catch{}
        }
        getItem();
      }, [id]);

      useEffect(() => {
        if (Object.keys(items).length > 0) {
          setFormData({
            title: items.title || '',
            desc: items.desc || '',
            categories: items.categories || '',
            price: items.price || '',
            quantity: items.quantity || '',
            img: items.img || ''
          });
        }
      }, [items]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(`http://localhost:5000/api/products/${id}`, formData, {
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
        <h2>Update Item</h2>
        <br/>
        <form onSubmit={handleSubmit}>
            <div>
                <label for="title">Title: </label>
                <br/>
                <input type="text" name="title" id="title" onChange={handleInputChange} value={formData.title}/>
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
                <Button2 type="submit">Submit</Button2>
            </div>
        </form>
    </div>
  );
};

export default UpdateForm;