/// <reference types="./Observable.pick.d.ts" />

import Observable_map from "./Observable.map.js";
const Observable_pick = (...keys) => Observable_map((value) => {
    let result = value;
    for (const key of keys) {
        result = result[key];
    }
    return result;
});
export default Observable_pick;
