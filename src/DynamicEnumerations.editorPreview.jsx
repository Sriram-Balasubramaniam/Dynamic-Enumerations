import { createElement } from "react";
import { EnumerationSelector } from "./components/EnumerationSelector";

export function preview({ sampleText }) {
    return <EnumerationSelector sampleText={sampleText} />;
}

export function getPreviewCss() {
    return require("./ui/EnumerationSelector.css");
}
