import { createSubject } from "../../observable.js";
const _identity = {
    stream(_, replayCount = 0) {
        return createSubject(replayCount);
    },
};
export const identity = () => _identity;
