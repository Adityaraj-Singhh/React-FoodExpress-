
import {render, screen} from "@testing-library/react"
import RestaurantCard from "../RestaurantCard"
import MOCK_DATA from "../mocks/resCardmock.json";
import "@testing-library/jest-dom";


it ("Should render RestaurantCard component with props data", ()=>{

render(<RestaurantCard resList = {MOCK_DATA}/>);

    const name = screen.getByText("The Master Chef");

    expect(name).toBeInTheDocument();
})