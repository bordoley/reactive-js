/// <reference types="./Broadcaster.lastAsync.d.ts" />

import { none, pipe, returns } from "../../../functions.js";
import * as DisposableContainer from "../../../utils/DisposableContainer.js";
import Broadcaster_addEventHandler from "./Broadcaster.addEventHandler.js";
const Broadcaster_lastAsync = 
/*@__PURE__*/ returns(async (Broadcaster) => {
    let result = none;
    const subscription = pipe(Broadcaster, Broadcaster_addEventHandler(v => {
        result = v;
    }));
    await DisposableContainer.toPromise(subscription);
    return result;
});
export default Broadcaster_lastAsync;
