import Navbar from "../components/Navbar";
import SubHeader from "../components/SubHeader";
import Footer from "../components/Footer";
import Products from "../components/Products";
import {Container, FilterContainer, Filter, FilterText, Select, Option, EmptyContainer, AdminBar, AdminButton, ProductContainer, ItemContainer} from "../styles/ItemList.styles";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import AddForm from "../components/AddForm";
import { useSelector } from "react-redux";

// Will be handling the item filters and their containers

const ItemList = ({user, setUser}) => {
    const location = useLocation();
    const cat = location.pathname.split("/")[2];
    const [filters, setFilter] = useState({});
    const [sort, setSort] = useState("Price Ascending");
    const [isAdminBarVisible, setAdminBarVisibility] = useState(false);
    user = useSelector((state) => state.user.currentUser);

    const handleFilter = (e) => {
        const value = e.target.value;
        setFilter({
            ...filters,
            [e.target.name]: value,
        });
    };

    const toggleAdminBar = () => {
        setAdminBarVisibility(!isAdminBarVisible);
    };

    return(
        <Container>
            <Navbar user={user}/>
            <SubHeader/>
            <FilterContainer>
                <Filter>
                    
                </Filter>
                <Filter>
                    <FilterText>Product Sort:</FilterText>
                    <Select name="sort" onChange = {(e) => setSort(e.target.value)}>
                        <Option value="ascending">Price Ascending</Option>
                        <Option value="descending">Price Descending</Option>
                        <Option value="aTOz">A - Z Sorting</Option>
                        <Option value="zTOa">Z - A Sorting</Option>
                        <Option value="quantity">Quantity Remaining</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            {user != null && user.isAdmin &&
                <div>
                    <AdminButton type="button" onClick={toggleAdminBar}>Admin Options</AdminButton>
                </div>}
            {isAdminBarVisible && 
            <AdminBar onClose={toggleAdminBar}>
                <AddForm></AddForm>
            </AdminBar>}
            <ItemContainer>
                <ProductContainer>
                    <Products cat = {cat} filters={filters} sort={sort}/>
                </ProductContainer>
            </ItemContainer>
            <EmptyContainer/>
            <Footer/>
        </Container>
    )
}

export default ItemList