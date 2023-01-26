/// <reference types="./Subject.publish.d.ts" />
import { SubjectLike_publish } from '../../../rx.mjs';

const Subject_publish = (v) => subject => {
    subject[SubjectLike_publish](v);
    return subject;
};

export { Subject_publish as default };
