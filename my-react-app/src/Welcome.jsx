// function Welcome(){
//     const name = "Artika"
//     return(
//         <h1>Welcome {name} to React</h1>
//     )
// }


function Welcome(props){ //props to make it dynamic 
    return(
        <h1>Welcome {props.name}, {props.fullName} to React</h1>
    )
}

export default Welcome


// we can use {} at any point of our HTML to access javascript
// props -pass something else from outside into this thing then it will render with anything we pass to it
// welcome is component