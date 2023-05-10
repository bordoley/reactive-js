/// <reference types="./ReadonlyArray.scan.d.ts" />

const ReadonlyArray_scan = (scanner, initialValue) => (arr) => {
    let acc = initialValue();
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        const next = arr[i];
        acc = scanner(acc, next);
        result.push(acc);
    }
    return result;
};
export default ReadonlyArray_scan;
