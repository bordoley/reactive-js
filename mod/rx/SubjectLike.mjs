/// <reference types="./SubjectLike.d.ts" />
import { S as SubjectLike_publish } from '../ReactiveContainerLike-29f1e1fa.mjs';

const publish = (v) => subject => {
    subject[SubjectLike_publish](v);
    return subject;
};
const publishTo = (subject) => v => {
    subject[SubjectLike_publish](v);
    return v;
};

export { publish, publishTo };
