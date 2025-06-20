import {useState} from "react";

export default function useForm(initialState) {
    const [values, setValues] = useState(initialState);
    const setValue = (field, value)  => {
        setValues((prev) => ({...prev,[field]: value
        }));

    };
    const reset = () => {
        setValues(initialValues);
    };
    return {values, setValue, reset};

    }
