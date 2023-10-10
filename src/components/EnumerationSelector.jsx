import { createElement, useState } from "react";

import "../ui/EnumerationSelector.css";

export function EnumerationSelector({ optionsList, outputValueSetter, labelCaption }) {
    function handleSelectChange(event) {
        const newValue = event.target.value;
        outputValueSetter(newValue);
    }
    return (
        <div className="form-group no-columns">
            <label className="control-label">{labelCaption}</label>
            <select className="form-control" onChange={handleSelectChange}>
                {optionsList.map((opt, index) => {
                    return <option value={opt}>{opt}</option>;
                })}
            </select>
        </div>
    );
}
