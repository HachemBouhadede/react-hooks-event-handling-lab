// Code Keypad Component Here

function Keypad (){
    return (
        <input type ="password" placeholder="Enter Password" onChange={(e) => {console.log('Entering password...')}}/>      
    )
}

export default Keypad;