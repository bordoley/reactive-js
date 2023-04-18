/// <reference types="./Container.pick.d.ts" />

const Container_pick = (map) => (...keys) => map((value) => {
    let result = value;
    for (const key of keys) {
        result = result[key];
    }
    return result;
});
export default Container_pick;
