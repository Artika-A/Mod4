// Assignment: Feedback Form
// Create a FeedbackForm.jsx:
// 1. Use useState for:
//    Name
//    Rating (1–5)
//    Comment
// 2. Show a summary 
// 3. On submit, alert a thank-you message



import { useState } from "react";

function Assignment() {
    const [name, setName] = useState("")
    const [rating, setRating] = useState(0)
    const [comment, setComment] = useState("") 

    const btnClick = () => {
        alert("Thank you " + name + "!") 
    }


    return(
        <div>
            <form>
                <input type="text" onChange={(e) => setName(e.target.value)} placeholder="Name"/>
                <br />
                <input type="number" max={5} min={1} onChange={(e) => setRating(e.target.value)} placeholder="Rating"/>
                <br />
                <input type="text" onChange={(e) => setComment(e.target.value)} placeholder="Comment"/>
                <br />
                <input type="submit" onClick={btnClick} /> 
            </form>
            <br />
            <h2>Output</h2>              
            <h3>Name: {name}</h3>
            <h3>Rating: {rating}</h3>
            <h3>Comment: {comment}</h3> 
        </div>
    )
}


    export default Assignment