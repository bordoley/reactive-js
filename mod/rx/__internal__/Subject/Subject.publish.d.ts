import { Function1 } from "../../../functions.js";
import { SubjectLike } from "../../../rx.js";
declare const Subject$publish: <T>(v: T) => Function1<SubjectLike<T>, SubjectLike<T>>;
export { Subject$publish as default };
