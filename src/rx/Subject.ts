import Subject_create from "./Subject/__internal__/Subject.create";
import Subject_publish from "./Subject/__internal__/Subject.publish";
import Subject_publishTo from "./Subject/__internal__/Subject.publishTo";

export const create = Subject_create;
export const publish = Subject_publish;
export const publishTo = Subject_publishTo;

/** @ignore */
const Subject = {
  create,
  publish,
  publishTo,
};

export default Subject;
