import { DisposableLike } from "../../../util.mjs";
declare const addIgnoringChildErrors: <T extends DisposableLike>(child: DisposableLike) => (parent: T) => T;
export { addIgnoringChildErrors as default };
