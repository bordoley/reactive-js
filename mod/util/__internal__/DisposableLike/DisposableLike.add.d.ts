import { DisposableLike } from "../../../util.mjs";
declare const add: <T extends DisposableLike>(child: DisposableLike) => (parent: T) => T;
export { add };
