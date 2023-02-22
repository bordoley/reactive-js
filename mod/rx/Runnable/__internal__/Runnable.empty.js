/// <reference types="./Runnable.empty.d.ts" />

import { pipe } from "../../../functions.js";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose.js";
import Runnable_create from "./Runnable.create.js";
const Runnable_empty = () => Runnable_create(sink => {
    pipe(sink, Disposable_dispose());
});
export default Runnable_empty;
