/// <reference types="./Container.endWith.d.ts" />

const Container_endWith = (concatWith, fromReadonlyArray) => (...values) => concatWith(fromReadonlyArray()(values));
export default Container_endWith;
