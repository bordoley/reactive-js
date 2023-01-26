import { DisposableLike } from "../../../util.js";
declare const Disposable$add: <T extends DisposableLike>(child: DisposableLike) => (parent: T) => T;
export { Disposable$add as default };
