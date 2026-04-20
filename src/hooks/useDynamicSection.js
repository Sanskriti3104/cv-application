import { useCallback } from "react";

function useDynamicSection(cvdata, setCvData, sectionName, emptyObject) {
    const handleChange = useCallback((index, field, value) => {
        const updatedSection = [...cvdata[sectionName]];
        updatedSection[index][field] = value;

        setCvData({
            ...cvdata,
            [sectionName]: updatedSection,
        });
    }, [cvdata, setCvData, sectionName]);

    const handleAdd = useCallback(() => {
        setCvData({
            ...cvdata,
            [sectionName]: [
                ...cvdata[sectionName],
                emptyObject,
            ],
        });
    }, [cvdata, setCvData, sectionName, emptyObject]);

    const handleDelete = useCallback((index) => {
        if (cvdata[sectionName].length === 1) return;

        const updatedSection = cvdata[sectionName].filter(
            (_, i) => i !== index
        );
        setCvData({
            ...cvdata,
            [sectionName]: updatedSection,
        });
    }, [cvdata, setCvData, sectionName]);

    return { handleChange, handleAdd, handleDelete };
}

export default useDynamicSection;