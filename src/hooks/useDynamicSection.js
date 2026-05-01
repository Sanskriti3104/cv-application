import { useCallback } from "react";

function useDynamicSection(data, setdata, emptyObject) {
  // const handleChange = useCallback((index, field, value) => {
  //   const updated = [...data];
  //   updated[index][field] = value;

  //   setdata(updated);
  // }, [data, setdata]);

  const handleChange = useCallback((index, field, value) => {
    const updated = data.map((item, i) =>
      i === index ? { ...item, [field]: value } : item
    );
    setdata(updated);
  }, [data, setdata]);

  const handleAdd = useCallback(() => {
    setdata([...data, { ...emptyObject }]);
  }, [data, setdata, emptyObject]);

  const handleDelete = useCallback((index) => {
    if (data.length === 1) return;

    const updated = data.filter(
      (_, i) => i !== index
    );
    setdata(updated);
  }, [data, setdata]);

  return { handleChange, handleAdd, handleDelete };
}

export default useDynamicSection;