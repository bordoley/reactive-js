/// <reference types="./Runnable.defer.d.ts" />

import { ReactiveContainerLike_sinkInto } from "../../../rx.js";
import Runnable_create from "./Runnable.create.js";
const Runnable_defer = f => Runnable_create(sink => {
    f()[ReactiveContainerLike_sinkInto](sink);
});
export default Runnable_defer;
