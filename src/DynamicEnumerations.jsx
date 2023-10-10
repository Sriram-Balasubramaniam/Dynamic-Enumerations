import { createElement, useState, useEffect } from "react";

import { EnumerationSelector } from "./components/EnumerationSelector";
import { EnumerationCreator } from "./components/EnumerationCreator";
import "./ui/EnumerationSelector.css";

export function DynamicEnumerations({ optionString, outputValue, selectorMode, labelCaption }) {
    const [optionsList, setOptionsList] = useState([]);
    const [preExistMessage, setPreExistMessage] = useState("");

    useEffect(() => {
        if (optionString.value) {
            let optns = optionString.value.split(",");
            setOptionsList([...optns]);
        }
    }, [optionString]);

    function confirmCreationHandler(optionValue) {
        if (optionValue) {
            if (!optionsList.includes(optionValue)) {
                setOptionsList(list => {
                    return [...list, optionValue];
                });
                let newValue = optionsList.join(",");
                console.log(newValue);
                console.log(newValue + "," + optionValue);
                optionString.setValue(newValue ? newValue + "," + optionValue : optionValue);
                setPreExistMessage(`${optionValue} added successfully`);
            } else {
                setPreExistMessage(`${optionValue} already exists`);
            }
        } else {
            setPreExistMessage(`OptionValue is empty`);
        }
    }

    function removeOption(target) {
        let newSetOfOptions = optionsList.filter(option => {
            return option !== target;
        });
        let newValue = newSetOfOptions.join(",");
        optionString.setValue(newValue);
        setOptionsList([...newSetOfOptions]);
    }

    function outputValueSetter(option) {
        outputValue.setValue(option);
    }
    function sortButtonHandler() {
        let sortedOptions = [...optionsList];
        sortedOptions.sort();
        let newValue = sortedOptions.join(",");
        optionString.setValue(newValue);
        setOptionsList([...sortedOptions]);
        setPreExistMessage(`Sorted successfully`);
    }

    function moveUpHandler(x) {
        let copy = [...optionsList];
        let temp = copy[x - 1];
        copy[x - 1] = copy[x];
        copy[x] = temp;
        let newValue = copy.join(",");
        optionString.setValue(newValue);
        setOptionsList([...copy]);
    }
    function moveDownHandler(x) {
        let copy = [...optionsList];
        let temp = copy[x + 1];
        copy[x + 1] = copy[x];
        copy[x] = temp;
        let newValue = copy.join(",");
        optionString.setValue(newValue);
        setOptionsList([...copy]);
    }

    let output = selectorMode ? (
        <EnumerationSelector
            optionsList={optionsList}
            outputValueSetter={outputValueSetter}
            labelCaption={labelCaption}
        />
    ) : (
        <EnumerationCreator
            optionsList={optionsList}
            addOption={confirmCreationHandler}
            alreadyExist={preExistMessage}
            setPreExistMessage={setPreExistMessage}
            removeOption={removeOption}
            sortButtonHandler={sortButtonHandler}
            moveUpHandler={moveUpHandler}
            moveDownHandler={moveDownHandler}
        />
    );

    return <div>{output}</div>;
}
