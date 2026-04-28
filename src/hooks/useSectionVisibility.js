import { useCallback } from "react";

function useSectionVisibility(setCvData, sectionKey) {
    const toggleSection = useCallback(() => {
        setCvData((prev) => ({
            ...prev,
            [sectionKey]: {
                ...prev[sectionKey],
                visible: !prev[sectionKey].visible,
            },
        }));
    }, [setCvData, sectionKey]);
    return { toggleSection };
}

export default useSectionVisibility;