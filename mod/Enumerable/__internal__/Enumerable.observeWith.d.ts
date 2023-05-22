import { EnumerableLike, ObserverLike } from "../../types.js";
declare const Enumerable_observeWith: <T>(observer: ObserverLike<T>, options?: {
    delay?: number;
    delayStart?: boolean;
}) => (enumerable: EnumerableLike<T>) => void;
export default Enumerable_observeWith;
