import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

//describe is used to group test cases -> Nested describe is also possible.
describe("Conatct Us page Test Cases",()=>{

    //Some more helper features by jest - if we are using describe

    beforeAll(()=>{
        console.log("Before All");
    })
    beforeEach(()=>{
        console.log("Before Each");
    }) //Helpful if we have to perform any cleanup task

    afterAll(()=>{
        console.log("After All");
    })
    afterEach(()=>{
        console.log("After each");
    })

    test("Should load contactUs component", () => {

        render(<Contact/>);
    
        //Querying
        const heading = screen.getByRole("heading");
    
        //Assertion
        expect(heading).toBeInTheDocument();  
    });
    
    test("Should load button inside contact component", () => {
    
        render(<Contact/>);
    
        const button = screen.getByRole("button");
    
        //Assertion
        expect(button).toBeInTheDocument();  
    });
    //it is just an alias of test -> It's the same thing
    it("Should load input inside contactUs component", () => {
    
        render(<Contact/>);
    
        const inputName = screen.getByPlaceholderText("Name");
    
        //Assertion
        expect(inputName).toBeInTheDocument();  
    });
    //If there are multiple items matching the query, it will throw an error. so we will have to add "A ll" in between.
    
    test("Should load 2 input boxes in contactUs component", () => {
    
        render(<Contact/>);
    
        const inputBoxes = screen.getAllByRole("textbox");
    
        //Assertion
        expect(inputBoxes.length).toBe(2);  
    });
     
})


