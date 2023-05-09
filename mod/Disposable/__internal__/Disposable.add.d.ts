import { DisposableLike } from "../../types.js";
declare const Disposable_add: <T extends DisposableLike>(child: DisposableLike, options?: {
    readonly ignoreChildErrors?: boolean;
}) => (parent: T) => T;
export default Disposable_add;
