import  { useState } from 'react';

const App = () => {
    // State to hold the values of the two input fields and the result
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);
    const [result, setResult] = useState(0);

    // Function to handle changes in the first input field
    const handleValue1Change = (e) => {
        const newValue1 = parseFloat(e.target.value) || 0; // Convert to float or default to 0
        setValue1(newValue1);
        setResult(newValue1 * value2); // Calculate result
    };

    // Function to handle changes in the second input field
    const handleValue2Change = (e) => {
        const newValue2 = parseFloat(e.target.value) || 0; // Convert to float or default to 0
        setValue2(newValue2);
        setResult(value1 * newValue2); // Calculate result
    };

    return (
        <div>
            <h2>Multiply Two Fields</h2>
            <div>
                <label>
                    Value 1:
                    <input
                        type="number"
                        value={value1}
                        onChange={handleValue1Change}
                    />
                </label>
            </div>
            <div>
                <label>
                    Value 2:
                    <input
                        type="number"
                        value={value2}
                        onChange={handleValue2Change}
                    />
                </label>
            </div>
            <div>
                <label>
                    Result:
                    <input
                        type="number"
                        value={result}
                        readOnly // Make the result field read-only
                    />
                </label>
            </div>
        </div>
    );
};

export default App;