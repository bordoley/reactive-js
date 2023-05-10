/// <reference types="./ReadonlyArray.zip.d.ts" />

const ReadonlyArray_zip = ((...arrays) => {
    const minCount = Math.min(...arrays.map(v => v.length));
    const result = [];
    for (let i = 0; i < minCount; i++) {
        const inner = [];
        for (let j = 0; j < arrays.length; j++) {
            inner.push(arrays[j][i]);
        }
        result.push(inner);
    }
    return result;
});
export default ReadonlyArray_zip;
