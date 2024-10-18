
import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import ResMenu from "../ResMenu";
import Header from "../Header";
import MOCK_DATA from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA),
    });
});

it("Should load Restaurant Menu Component", async () => {
    await act(async () => render(
        <BrowserRouter>
            <Provider store={appStore}>
                <ResMenu/>
                <Header/>  
            </Provider>
        </BrowserRouter>
        
));

    const accordianHeader = screen.getByText("Burger (13)");
    fireEvent.click(accordianHeader);

    expect(screen.getAllByTestId("foodItems").length).toBe(13);

    const addBtns = screen.getAllByRole("button",{name : "Add"});
    // console.log(addBtns.length); 13

    fireEvent.click(addBtns[0]); //first button
    expect(screen.getByText("Cart - (1 items)")).toBeInTheDocument();

    fireEvent.click(addBtns[1]);
    expect(screen.getByText("Cart - (2 items)")).toBeInTheDocument();

    expect(screen.getAllByTestId("foodItems").length).toBe(13);


    
});

