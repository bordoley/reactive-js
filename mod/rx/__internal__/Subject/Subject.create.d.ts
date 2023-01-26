import { SubjectLike } from "../../../rx.js";
declare const Subject$create: <T>(options?: {
    replay?: number;
}) => SubjectLike<T>;
export { Subject$create as default };
