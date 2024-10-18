

import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../Header";
import appStore from "../../utils/appStore";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("should render header component with a login button", ()=>{

    render(                     //Here, it will give error If we dont provide Provider, as header component contains useSelector which is a part of redux, and testing lib is in jsDOM which can only understand js and jsx.
    <BrowserRouter>

        <Provider store={appStore}>
            <Header/>
        </Provider>

    </BrowserRouter> //Here BrowserRouter is imp, because header comp has link, which is not JS or JSX it comes from react-router-dom, so we need to give path too. 
    );

    //querrying
    // const loginButton = screen.getByText("Login");
    const loginButton = screen.getByRole("button",{name: "Login"});

    //assertion
    expect(loginButton).toBeInTheDocument();
})

it("should render header component with a cart item 0", ()=>{

    render(                     //Here, it will give error If we dont provide Provider, as header component contains useSelector which is a part of redux, and testing lib is in jsDOM which can only understand js and jsx.
    <BrowserRouter>

        <Provider store={appStore}>
            <Header/>
        </Provider>

    </BrowserRouter> //Here BrowserRouter is imp, because header comp has link, which is not JS or JSX it comes from react-router-dom, so we need to give path too. 
    );

    //querrying
    // const cartItems = screen.getByText("Cart - (0 items)");
       const cartItems = screen.getByText(/Cart/); //We can also pass regix, If we want to find only cart


    //assertion
    expect(cartItems).toBeInTheDocument();
})

it("should change login button to logout onClick", ()=>{

    render(                     
    <BrowserRouter>

        <Provider store={appStore}>
            <Header/>
        </Provider>

    </BrowserRouter> 
    );
    //querrying
    const loginButton = screen.getByRole("button",{name: "Login"});

    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole("button",{name: "Logout"});

    //assertion
    expect(logoutButton).toBeInTheDocument();
})