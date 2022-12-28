/// <reference types="./SubjectLike.publishTo.d.ts" />
import { SubjectLike_publish } from '../../../rx.mjs';

const publishTo = (subject) => v => {
    subject[SubjectLike_publish](v);
    return v;
};

export { publishTo as default };
