/// <reference types="./Subject.d.ts" />
import Subject_create from './__internal__/Subject/Subject.create.mjs';
import Subject_publish from './__internal__/Subject/Subject.publish.mjs';
import Subject_publishTo from './__internal__/Subject/Subject.publishTo.mjs';

const create = Subject_create;
const publish = Subject_publish;
const publishTo = Subject_publishTo;
/** @ignore */
const Subject = {
    create,
    publish,
    publishTo,
};

export { create, Subject as default, publish, publishTo };
