import { DisposableLike } from "../../../util.js";
declare const Disposable$addIgnoringChildErrors: <T extends DisposableLike>(child: DisposableLike) => (parent: T) => T;
export { Disposable$addIgnoringChildErrors as default };
