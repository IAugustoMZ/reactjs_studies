import { useState } from "react";

function Conditional() {

    const [costCenterName, setCostCenterName] = useState('');
    const [costCenterId, setCostCenterId] = useState('');

    function registerCostCenter(event) {
        event.preventDefault(); // Prevent the default form submission behavior
        console.log("Registering new cost center...");
        setCostCenterId(costCenterName.toLowerCase().replace(/\s+/g, '-'));
        console.log("Cost Center ID:", costCenterId);

    }

    return (
        <div>
            <h2>Register the Project Cost Center:</h2>
            <form>
                <input type="text" placeholder="Type here the cost center name" onChange={(e) => setCostCenterName(e.target.value)}/>
            </form>
            <button type="submit" onClick={registerCostCenter}>Register Cost Center</button>
            {costCenterId && (
                <div>
                    <h3>Cost Center ID: {costCenterId}</h3>
                    <button onClick={() => setCostCenterId('')}>Clear Cost Center ID</button>
                </div>
            )}
        </div>
    )
}

export default Conditional