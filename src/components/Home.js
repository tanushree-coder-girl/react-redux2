import React from 'react'

const Home = (props) => {
    //console.log(props);
    return (
        <div>
            <h1>React Redux Old Concept with mapDispatchToProps or mapStateToProps</h1>
            <h2>{props.data}</h2>
            <button onClick={()=>props.countHandler(1)}> Increament num </button>
            <button onClick={()=>props.countMinusHandler(1)}> Decreament num </button>
        </div>
    )
}

export default Home
