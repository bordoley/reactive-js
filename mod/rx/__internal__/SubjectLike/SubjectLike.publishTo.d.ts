import { SideEffect1 } from "../../../functions.mjs";
import { SubjectLike } from "../../../rx.mjs";
declare const publishTo: <T>(subject: SubjectLike<T>) => SideEffect1<T>;
export { publishTo as default };
