import styled from "styled-components";
import Product from "./Product";
import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

export const Container = styled.div`
  flex: 1;
  padding: 15px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  min-width: 250px;

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    min-width: 100%;
    margin: 20px 0;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); /* Adjust the minimum and maximum width as needed */
  grid-gap: 10px; /* Reduce the gap between grid items */
  justify-items: center;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
`;

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filterSelect, setFilters] = useState([]);
  const searchFilter = useSelector(state => state.searchFilter.content)

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/products");
        setProducts(res.data);
        console.log(res);
      } catch (err) {}
    };
    getProducts();
  }, []);

  useEffect(() => {
    setFilters(
      products.filter((item) =>
        Object.entries(filters).every(([key, value]) => item[key] === value)
      )
    );
  }, [products, filters]);

  useEffect(() => {
    if (sort === "ascending") {
      setFilters((prev) => [...prev].sort((a, b) => a.price - b.price));
    } else if (sort === "descending") {
      setFilters((prev) => [...prev].sort((a, b) => b.price - a.price));
    } else if (sort === "quantity") {
      setFilters((prev) => [...prev].sort((a, b) => b.quantity - a.quantity));
    } else if (sort === "aTOz") {
      setFilters((prev) => [...prev].sort((a, b) => a.title.localeCompare(b.title)));
    } else if (sort === "zTOa") {
      setFilters((prev) => [...prev].sort((a, b) => b.title.localeCompare(a.title)));
    }
  }, [sort]);

  return (
    <GridContainer>
        {filters
            ? filterSelect.filter(filterSelect => filterSelect.title.toLowerCase()
            .includes(searchFilter.toLowerCase()))
            .map((item) => <Product item={item} key={item._id} />)
            : products.filter(filterSelect => filterSelect.title.toLowerCase()
            .includes(searchFilter.toLowerCase()))
                .map((item) => <Product item={item} key={item._id} />)}
    </GridContainer>
  );
};

export default Products;