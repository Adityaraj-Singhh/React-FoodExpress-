// //Intergration testing
import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import { act } from "react" //When we are using any fetch operation, updating the state, we nee d to wrap inside the act.
import MOCK_DATA from "../mocks/DataFromFetch.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

//Dummy fetch function -> As JSDOM dont understant fetch, as it is a feature of browser.
global.fetch = jest.fn(()=>{

    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }    
    })  
});


it("Should search Res list for food text input", async ()=>{

    await act(async () => 
        render(
            <BrowserRouter>
                <Body/>
            </BrowserRouter>
    )
);

const searchBtn = screen.getByRole("button", {name: "Search"});

const searchInput = screen.getByTestId("searchInput");

fireEvent.change(searchInput, {target:{value:"food"}});

fireEvent.click(searchBtn);

//Screen should load 1 res cards

const cards= screen.getAllByTestId("resCard")

expect(cards.length).toBe(1);

// expect(searchBtn).toBeInTheDocument();
    
})

it("Should filter top rated restairant", async ()=>{
    await act(async()=>{
        render(
            <BrowserRouter>
                <Body/>
            </BrowserRouter>
        )
    });

    const cardsBeforeFilter = screen.getAllByTestId("resCard");

    expect(cardsBeforeFilter.length).toBe(8);

    const topRatedBtn = screen.getByRole("button",{name: "Top Rated Restaurants"});
    fireEvent.click(topRatedBtn);

    const cardsAfterFilter = screen.getAllByTestId("resCard");
    expect(cardsAfterFilter.length).toBe(4);
})