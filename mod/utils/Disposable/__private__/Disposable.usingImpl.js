/// <reference types="./Disposable.usingImpl.d.ts" />

import * as ReadonlyArray from "../../../collections/ReadonlyArray.js";
import { pipe } from "../../../functions.js";
import { DisposableLike_dispose } from "../../../utils.js";
const Disposable_usingImpl = (f, factories) => {
    const disposables = pipe(factories, ReadonlyArray.map(factory => factory()));
    try {
        return f(...disposables);
    }
    finally {
        for (const disposable of disposables) {
            disposable[DisposableLike_dispose]();
        }
    }
};
export default Disposable_usingImpl;
