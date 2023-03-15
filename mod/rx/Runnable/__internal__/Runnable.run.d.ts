import { RunnableLike } from "../../../rx.js";
declare const Runnable_run: <T>(options?: {
    maxBufferSize?: number;
}) => (observable: RunnableLike<T>) => void;
export default Runnable_run;
