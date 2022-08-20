/// <reference types="./SubjectLike.d.ts" />
import { S as SubjectLike_publish } from '../rx-fcdda9a1.mjs';

const publish = (v) => subject => {
    subject[SubjectLike_publish](v);
    return subject;
};
const publishTo = (subject) => v => {
    subject[SubjectLike_publish](v);
    return v;
};

export { publish, publishTo };
