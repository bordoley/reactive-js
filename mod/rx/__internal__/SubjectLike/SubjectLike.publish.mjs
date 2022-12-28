/// <reference types="./SubjectLike.publish.d.ts" />
import { SubjectLike_publish } from '../../../rx.mjs';

const publish = (v) => subject => {
    subject[SubjectLike_publish](v);
    return subject;
};

export { publish as default };
