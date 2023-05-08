import { Container, EnumerableContainer } from "../../../core.js";
import Enumerable_mergeAll from "./Enumerable.mergeAll.js";

const Enumerable_concatAll: Container.TypeClass<EnumerableContainer>["concatAll"] =
  () => Enumerable_mergeAll({ concurrency: 1 });

export default Enumerable_concatAll;
