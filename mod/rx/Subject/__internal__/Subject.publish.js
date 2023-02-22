/// <reference types="./Subject.publish.d.ts" />

import { SubjectLike_publish } from "../../../rx.js";
const Subject_publish = (v) => subject => {
    subject[SubjectLike_publish](v);
    return subject;
};
export default Subject_publish;
