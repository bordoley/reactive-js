/// <reference types="./Subject.publishTo.d.ts" />
import { SubjectLike_publish } from '../../../rx.mjs';

const Subject$publishTo = (subject) => v => {
    subject[SubjectLike_publish](v);
    return v;
};

export { Subject$publishTo as default };
