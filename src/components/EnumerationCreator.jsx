import { createElement, useState } from "react";

import "../ui/EnumerationSelector.css";

export function EnumerationCreator({
    optionsList,
    addOption,
    setPreExistMessage,
    alreadyExist,
    removeOption,
    sortButtonHandler,
    moveDownHandler,
    moveUpHandler
}) {
    const [optionValue, setOption] = useState("");

    function optionsInputHandler(e) {
        setOption(opt => {
            return e.target.value;
        });
        setPreExistMessage("");
    }

    function keyDownHandler(e) {
        if (e.keyCode === 13) {
            addOption(optionValue);
            setOption("");
        }
    }

    function addButtonHandler(e) {
        addOption(optionValue);
        setOption("");
    }

    function deleteHandler(option) {
        removeOption(option);
    }

    return (
        <div>
            <div className="form-group no-columns">
                <label className="control-label">Enter option</label>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <input
                        type="text"
                        onChange={optionsInputHandler}
                        onKeyDown={keyDownHandler}
                        value={optionValue}
                        className="form-control"
                    />
                    <button
                        style={{
                            backgroundColor: "green",
                            color: "white",
                            marginLeft: "10px",
                            fontSize: "20px",
                            borderRadius: "8px"
                        }}
                        onClick={addButtonHandler}
                    >
                        +
                    </button>
                    <button
                        style={{
                            backgroundColor: "green",
                            color: "white",
                            marginLeft: "10px",
                            fontSize: "16px",
                            borderRadius: "8px"
                        }}
                        onClick={sortButtonHandler}
                    >
                        Sort
                    </button>
                </div>
            </div>
            {<p style={{ color: alreadyExist.includes("successfully") ? "green" : "red" }}>{alreadyExist}</p>}
            {optionsList.length > 0 ? (
                <div>
                    <p style={{ fontWeight: "600", fontSize: "14px" }}>Options List</p>
                    <ol style={{ padding: "24px", borderRadius: "8px" }}>
                        {optionsList.map((option, index) => {
                            return (
                                <li key={index}>
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "space-between",
                                            borderBottom: "0.2px solid rgba(0,0,0,0.1)",
                                            padding: "10px"
                                        }}
                                    >
                                        <p style={{ marginBottom: "2px" }}>{option}</p>
                                        <div style={{ display: "flex", gap: "8px" }}>
                                            {index !== 0 && (
                                                <p
                                                    onClick={() => moveUpHandler(index)}
                                                    style={{
                                                        color: "green",
                                                        marginBottom: "2px",
                                                        cursor: "pointer",
                                                        fontSize: "20px"
                                                    }}
                                                >
                                                    <span aria-hidden="true">&uarr;</span>
                                                </p>
                                            )}
                                            {index !== optionsList.length - 1 && (
                                                <p
                                                    onClick={() => moveDownHandler(index)}
                                                    style={{
                                                        color: "red",
                                                        marginBottom: "2px",
                                                        cursor: "pointer",
                                                        fontSize: "20px"
                                                    }}
                                                >
                                                    <span aria-hidden="true">&darr;</span>
                                                </p>
                                            )}
                                            <p
                                                onClick={() => deleteHandler(option)}
                                                style={{
                                                    color: "red",
                                                    marginBottom: "2px",
                                                    cursor: "pointer",
                                                    fontSize: "20px"
                                                }}
                                            >
                                                <span aria-hidden="true">&times;</span>
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            );
                        })}
                    </ol>
                </div>
            ) : (
                <p>Option list is currently empty</p>
            )}
        </div>
    );
}
