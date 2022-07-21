// import { getValue } from "@testing-library/user-event/dist/utils";

function getFixedCounter(k) {
    var value = 0;
    var getValue = k;
    function increment(){
        // let value = 0;
        value = value + k;
        
    }
    
    function decrement(){
        // let value = 0;
        value = value - k;
        
    }
    function getVlaue(){
        
    }
    console.log(getValue = decrement())
    console.log(getValue = increment())
    console.log(getValue = increment())
    console.log(getValue = increment())


}

getFixedCounter(2);

