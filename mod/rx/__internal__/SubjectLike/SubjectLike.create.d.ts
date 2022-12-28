import { SubjectLike } from "../../../rx.mjs";
declare const create: <T>(options?: {
    replay?: number;
}) => SubjectLike<T>;
export { create as default };
