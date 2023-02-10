/// <reference types="./Subject.d.ts" />
import Subject_create from './Subject/__internal__/Subject.create.mjs';
import Subject_publish from './Subject/__internal__/Subject.publish.mjs';
import Subject_publishTo from './Subject/__internal__/Subject.publishTo.mjs';

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
