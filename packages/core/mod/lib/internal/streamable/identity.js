import { createSubject } from "../../observable.js";
const _identity = {
    stream(_, options) {
        return createSubject(options);
    },
};
export const identity = () => _identity;
