import React, { useState } from 'react';

function Checklist() {

    const [checklist, setChecklist] = useState({
        isCitizen: false,
        isOver21: false,
    });


    const handleChange = (e) => {
        const { name, checked } = e.target;
        setChecklist((prev) => ({
            ...prev,
            [name]: checked,
        }));
        console.log({ ...checklist, [name]: checked });
    };

    return (
        <div className="container mt-4">
            <h2>Are you a Citizen : {checklist.isCitizen ? 'Yes' : 'No'}</h2>
            <h2>Are you over 21 : {checklist.isOver21 ? 'Yes' : 'No'}</h2>

            <form>
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="isCitizen"
                        name="isCitizen"
                        checked={checklist.isCitizen}
                        onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="isCitizen">
                        Are you a Citizen?
                    </label>
                </div>

                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        id="isOver21"
                        name="isOver21"
                        checked={checklist.isOver21}
                        onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="isOver21">
                        Are you over 21?
                    </label>
                </div>
            </form>
        </div>
    );
}

export default Checklist;
