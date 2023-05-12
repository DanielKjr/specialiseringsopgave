import {useState} from "react";


export function useRecipe(initialValue){
    const [recipe, setRecipe] = useState(initialValue.Recipe);


    function handleChange(e){
        setRecipe(e.target.value);
    }

    const recipeProp = {
        recipe : recipe,
        onChange : handleChange
    };

    return recipeProp;

}

