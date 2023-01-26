/// <reference types="./Subject.d.ts" />
import Subject$create from './__internal__/Subject/Subject.create.mjs';
import Subject$publish from './__internal__/Subject/Subject.publish.mjs';
import Subject$publishTo from './__internal__/Subject/Subject.publishTo.mjs';

const create = Subject$create;
const publish = Subject$publish;
const publishTo = Subject$publishTo;

export { create, publish, publishTo };
