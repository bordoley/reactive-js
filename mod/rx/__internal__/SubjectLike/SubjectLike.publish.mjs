/// <reference types="./SubjectLike.publish.d.ts" />
import { SubjectLike_publish } from '../../../rx.mjs';

const SubjectLike__publish = (v) => subject => {
    subject[SubjectLike_publish](v);
    return subject;
};

export { SubjectLike__publish as default };
