/// <reference types="./SubjectLike.publishTo.d.ts" />
import { SubjectLike_publish } from '../../../rx.mjs';

const SubjectLike__publishTo = (subject) => v => {
    subject[SubjectLike_publish](v);
    return v;
};

export { SubjectLike__publishTo as default };
