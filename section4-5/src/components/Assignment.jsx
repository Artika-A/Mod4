// Assignment: Quote Loader
// Create a QuoteLoader.jsx that:
// 1. Uses useEffect to fetch a quote from:
//    https://api.quotable.io/random
// 2. Displays the quote and author
// 3. Has a button to fetch a new quote
// 4. Bonus: Add loading state while fetching


import { useState, useEffect } from "react";

const Assignment = () => {
    const[quote, setQuote] = useState(null);
    const[loading, setLoading] = useState(true);

    const fetchQuote = async () => {
        setLoading(true);
        try {
            const response = await fetch ("https://zenquotes.io/api/random");
            const data = await response.json();
            setQuote(data.data.content);
        } catch (error) {
            console.error("Error fetching quote:", error);
        }
        setLoading(false);
        };

        useEffect(() => {
            fetchQuote();
        }, []);

        if (loading) {
            return <div>Loading....</div>
        }

        return (
            <div>
                {quote && (
                    <div>
                        <p>"{quote.content}"</p>
                        <p>- {quote.author}</p>
                    </div>
                )}
                <button onClick={fetchQuote}>Get New Quote</button>
            </div>
        );
    };



export default Assignment