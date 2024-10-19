
import React from "react";
class UserClass extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            // count:0,
            // count2:1
            userInfo:{
                name:"Dummy name",
                location:"Dummy Location",
                avatar_url:"Dummy photo"
            }
        }
    //    console.log(this.props.name+"Child Constructor called");
    }

   async componentDidMount(){
       // console.log(this.props.name+"Child Component mounted");
       const data = await fetch("https://api.github.com/users/Adityaraj-Singhh");
       const json = await data.json();
       console.log(json);
        
       this.setState({
            userInfo:json
        });
    }

    componentDidUpdate(){
        // console.log("Componenet did update");
    }

    componentWillUnmount(){
        // console.log("Component will unmount"); //this is called when we go to different sections.
    }

    render(){

        // console.log(this.props.name+"Child render called");
        // const {count} = this.state;

        const {name,location,avatar_url}=this.state.userInfo;
        return (
            <div className="user-card">
        
                {/* <button onClick={()=>{
                    this.setState({
                        count: this.state.count+1,
                        count2: this.state.count2+1
                    })
                }}>Click me</button> */}
                {/* <h1>Count: {count}</h1>
                <h1>Count2: {this.state.count2}</h1> */}
                <img className="avatar" src={avatar_url}/>
                <h2>Name: {name}</h2>
                <h2>Location: {location}</h2>
                <h2>Contact: 9903605588</h2>
            </div>
        );
    }
}

export default UserClass;
//Class based component is a class which has render method, which returns some piece of JSX.
//React.Component is a class, given to us by react.
//UserClass is inheriting properties of that class