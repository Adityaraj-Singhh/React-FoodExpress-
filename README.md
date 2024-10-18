/**
 * Header
 *  - Logo
 *  - Nav items
 * 
 * Body
 *  - Search
 *  - RestaurantContainer
 *      -RestaurantCard
 * 
 * Footer
 *  -Copyright
 *  -Links
 *  -Address
 *  -Contact
 * 
 */


<------------------------------------------------------------------------------------------------------------------------------------------------->


  We notice, our data layer is getting changed but our UI layer is not getting updated.
    This is because React doesn't know that the data has changed. We need to tell React
    that the data has changed. We can do this by using the useState hook.

Note: Whenever a state variable updates, React re-renders the component.(Update the UI)
React makes the DOM operation super past, change in data layer, instantly changes UI layer.

setListOfRestaurants -> method used to update the list -> when this is called, react finds the diff and update sthe UI


React uses Reconciliation Algorithm(React Fibre[came in React 16]-> it is new way of finding the diff and updating the DOM)

Virtual DOM is representation of actual DOM
Diff Algo -> It finds out the difference of updated VDOM and previous VDOM, and then actually update the DOM in every render cycle.
This makes the application faster, as React don't directly manipute the DOM.
JSX (Component) --> Virtual DOM (JS Object) --> React diffing --> Updates in Real DOM


What makes React fast -> React does efficient DOM manipulation(Beacause it has Vitual DOM, which finds the diff and updates the UI).

<------------------------------------------------------------------------------------------------------------------------------------------------->

 Monolithic and microservices architectures are two different approaches to designing and deploying software applications. Here's a breakdown of their differences:

Monolithic Architecture:

Single codebase: In a monolithic architecture, all the functionalities of an application are built into a single codebase. The application runs as one large unit.

Tight coupling: All components (e.g., user interface, business logic, database access) are tightly integrated.

Unified deployment: The entire application is deployed and scaled as a whole, which means any updates require redeployment of the whole system.
Centralized data management: Monoliths typically have a single database that all modules interact with.

Microservices Architecture:

Decoupled services: In microservices, the application is divided into small, loosely coupled services, each focusing on a specific functionality (e.g., user management, billing, inventory).

Independent deployment: Each microservice can be developed, deployed, and scaled independently without affecting others.

Distributed data management: Each microservice typically has its own database or data store, ensuring that services are more autonomous.

Communication: Microservices often communicate with each other via APIs, typically over HTTP/REST, gRPC, or message queues.

<-------------------------------------------------------------------------------------------------------------------------------------->

Using hard-code data is not a good practice, so we will be directly calling the APIs from website.

There are two ways we can call API;

1. Load the page ---> Call API(500 ms) ---> Render.

2. Load the page ---> Render ---> Call API ---> Render(This will have better UX).{We follow this} --> done by the useEffect() Hook+j

<----------------------------------------->

Shimmer UI > Loading Spinner (Fake Cards)

<-------------------------------------------->

Everytime the component renders -> useEffect is called.(When dependency array is not present).

if dependency array is empty = [] =>  useEffect will get called only in the initial render and just once.  

if we put anything inside the dependency array, it will get called when there is an updation in that.

<------------------------------------------>

useState should not be declared outside component => As it is used to make local state variable for the component.

useState should not be declared inside, if-else, for-loop and functions. It should always be declared independently, above all the code.

<---------------------------------------------->

In React it is not recommended to use href,
rather we use super powerful Link component given by
react-router-dom. When we click on anchor tagged text, it reloads the whole page, but if we use link component, the page will not be reloaded.

That is why react is known as SPA(Single page Application) 

Traditionally we had to make different html for about, contact etc. but now as we know everything in react is a component, we make component for everything, and the application runs on a single page as the component gets refreshed and the  page is not reloaded.

<------------------------------------------------>

There are 2 types of routing:

1. Server side routing.(using anchor tag to call an html file by network call-> it fetches the file from server)
2. Clint side routing.(using Link component, as when we rout to another page, no network call happens as all the components are already loaded in first network call.)


<--------------------------------------------------->

</Outlet> act as a tunnel for all the children, this component gets replaced according to the path.(Header+Anything)

Never update state variables directly.


<--------------------------------------------->

Life Cycle of Parent-Child relationship in class based components.

Implementing Sequence - Constructor()->Render()->ComponentDidMount().

//OUTPUT

Parent constructor called
Parent render called
Child Constructor called
Child render called
Child Component did mount
Parent component did mount

In functional components we used to fetchAPI using useEffect() hook, as it first loads->renders and them API is fetched resulting in better user experience.

In class based components we fetch the API in ComponentDidMount method as for the same reason this method is called after the component is rendered once.


Life-cycle of class based coponents are in two phases:
1. Render Phase - Constructor call -> render() call
2. Commit Phase - React updates DOM ->componentDidMount gets called.



Whenever there is 2 child class component inside one parent class component:

the output wil be:

Parent constructor called
Parent render called

  FirstChild Constructor called
  FirstChild render called

  SecondChild Constructor called
  SecondChild render called

  <DOM Updated in single BATCH>
  FirstChild Component mounted
  SecondChild Component mounted

Parent component did mount

Note: As the ComponentDidMount comes in commit phase, i.e after Updating the DOM phase.
DOM updation is expensive and time-taking, that's why constructer and render functions are binded/batched up together to execute first.
then it goes into the commit phase. ---> That is also one of the reasons why React is fast.

<------------------>

More about life cycle of React

--Mounting--

  constructor(dummy)
  Render(dummy)
      <HTML dummy>
  Component did mount
     <API call>
  <this.setState> -> State variable is updated.

--Updating--
  render(API data)
    <HTML new API data>
  Component did update

  <----------------------------------->

  In functional components we provide dependency array, but in class based components we need to put lots and lots of if-else statements for doing the same task.

  Where do we use ComponentWillUnmout()?
  To clear the code(In short)

  Note: If we log anything inside setInterval(()=>{},1000) declared inside componentDidMount(), it gets called after every second, even after we switch the section from about to contact(example), this is one of the cons of SPA, as page is not getting reloaded. This will make the application slow, so we need to call clearInterval() this inside ComponentWillUnmount.

  So as soon as it gets unmounts, setInterval f will stop executing.

  //While creating a mess --> We need to clear the mess also.

  Imp: in functional component we use return inside useEffect() Hook.

  return () => {
    console.log("UseEffect Return"); //this will be called after we unmount/go to differnt section.
  }

<------------------------------>

Chunking / Code Splitting / Dynamic Bundling -> IS important for large scale applications. As in console we see only one bundled file getting executed, so the app may slow down.

lazy loading/On demand loading/dynamic import {Here in this project grocery}

Now by using lazy we are getting two different files for grocery and index. But when clicking on grocery we are getting error.
That is because react is very fast, and when Grocery takes some miliseconds to load the code of grocery component, react tries to find it beforehand, and after not getting it throws an error.
So we need to use Suspense for this.


<--------------------->

Different CSS frameworks
1. Style Component
2. CSS in JS
3. SCSS and SASS(Not for big applications)
3. Material UI
4. Bootstrap
5. Tailwind CSS
6. chakra UI
7. Ant design

<---------------------->

<-postcssrc is used to understand taiwind>

Tailwind is very light weight, for example if we are using class w-4 100 times in our code, it will be imported only once.

<------>

Higher Order functions are functions which takes a component and returns a component(Enchances the component).[Example- Promoted card in swiggy]

<--------->

Study about - Lifting the state up in react.

<-------->

    console.log(dummy);//this dummy is coming from ResMenu->.. ResMenu -> ResCategory -> ItemList | -> This concept is known as props drilling.

    This is not a good way, as we may also need to access to the 10th level, so passing and receiving props will become very complex.

    To avoid props drilling -> We use React Context.

    Whatever we put in context, we are able to access all around the project

    <-------->

    Redux is only mandatory for large scale applications, where lot's of read and write operation are going on. 

    React and Redux are differnet libraries.

    Redux offers easy debugging.

    Redux toolkit is better than using normal redux as,
    1. configration in redux is complex.
    2. Redux toolkit is faster than normal redux.
    3. I have to add too many packages to get redux to do anything useful
    4. redux requires too much boiler plate code.

    # Redux Toolkit
      - Install @reduxjs/toolkit and react-redux
      - Build our store
      - Connect our store to app
      - create slice(cart slice)
      - dispatch(action)
      - selector(it is a hook)
    
    The whole redux, which has slices. Slices have there own reducer func, and the whole redux have reducer of its own.(It basically combines all the reducers of its slices)

    Earlier we used to use Middlewares and thungs, In RTK -> We have RTK Query

    
    <---------------------->

   # Types of testing (Developer)

   - Unit Testing -> Testing react component in isolation - Testing a small unit of our application.(Example - Tetsing only header component)

   - Integration Testing - testing of the integration of the components.

   - End to End Testing - Testing of the whole application. (Example - Testing of the whole App)
    Testing users flow throughout the application.


  # React testing library

  - Built on top of DOM Testing library by adding APIs for working with react components.

  - RTL uses jest(Standard way of writing test cases -- JS testing framework)

  # Setting up testing in our App.

  - Install React Testing Library
  - Installed jest
  - Installed Babel Dependencies(Dependencies required for jest when working with babel)
  - Configure babel(Babel.config.js)
  - Configure parcel Config file to disable default babel transpilation.
  - Configure jest config file - Jest congigration.
  - Jest -> npx jest --init
  - install jsdom library
  - install npm i -D @babel/preset-react - to make JSX work in test cases.
  - Include @babel/preset-react inside my babel config.
  - install @testing-library/jest-dom 

  # Different types of testing files 

  - __test__   // _ _ = Two underscores are known as dunders.
  - Header.test.js
  - Header.spec.js

 //testMatch: **/__tests__/**/*.[jt]s?(x), **/?(*.)+(spec|test).





  
 