/// <reference types="./ReadonlyArray.fromFactory.d.ts" />

const ReadonlyArray_fromFactory = (f) => {
    const v = f();
    return [v];
};
export default ReadonlyArray_fromFactory;
