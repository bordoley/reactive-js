import { DisposableLike } from "../../../util.js";
declare const Disposable_add: <T extends DisposableLike>(child: DisposableLike) => (parent: T) => T;
export { Disposable_add as default };
