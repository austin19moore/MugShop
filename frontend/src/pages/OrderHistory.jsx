import Navbar from "../components/Navbar";
import SubHeader from "../components/SubHeader";
import Footer from "../components/Footer";
import Orders from "../components/Orders";
import {Container, FilterContainer, Filter, FilterText, Select, Option, EmptyContainer, AdminBar, AdminButton} from "../styles/ItemList.styles";
import { useState } from "react";
import { useSelector } from "react-redux";

const OrderHistory = ({user}) => {

    const [filters] = useState({});
    const [sort, setSort] = useState("Last 30 Days");
    user = useSelector((state) => state.user.currentUser);

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
                        <Option value="Oldest">Oldest Descending</Option>
                        <Option value="Newest">Newest Descending</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Orders filters ={filters} sort={sort}/>
            <EmptyContainer/>
            <Footer/>
        </Container>
    )
}

export default OrderHistory;