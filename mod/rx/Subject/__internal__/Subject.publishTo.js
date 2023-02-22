/// <reference types="./Subject.publishTo.d.ts" />

import { SubjectLike_publish } from "../../../rx.js";
const Subject_publishTo = (subject) => v => {
    subject[SubjectLike_publish](v);
    return v;
};
export default Subject_publishTo;
