/// <reference types="./Deferable.catchError.d.ts" />

import { DeferableLike_eval, SinkLike_complete, } from "../../../computations.js";
import { error, isSome, newInstance, none, } from "../../../functions.js";
class CatchErrorDeferable {
    s;
    onError;
    constructor(s, onError) {
        this.s = s;
        this.onError = onError;
    }
    [DeferableLike_eval](sink) {
        try {
            this.s[DeferableLike_eval](sink);
        }
        catch (e) {
            const err = error(e);
            let action = none;
            try {
                action = this.onError(err);
            }
            catch (e) {
                throw error([error(e), err]);
            }
            if (isSome(action)) {
                action[DeferableLike_eval](sink);
            }
            sink[SinkLike_complete]();
        }
    }
}
const Deferable_catchError = (onError) => (deferable) => newInstance((CatchErrorDeferable), deferable, onError);
export default Deferable_catchError;
