/// <reference types="./Subject.publish.d.ts" />
import { SubjectLike_publish } from '../../../rx.mjs';

const Subject$publish = (v) => subject => {
    subject[SubjectLike_publish](v);
    return subject;
};

export { Subject$publish as default };
