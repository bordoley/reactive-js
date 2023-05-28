import { Function1 } from "../../functions.js";
import { Container, ContainerOf, IndexedContainer } from "../../types.js";
declare const IndexedCollection_toContainer: <CIn extends IndexedContainer, COut extends Container<unknown>>(factory: <T>(values: ContainerOf<CIn, T, import("../../types.js").KeyOf<CIn>>, start: number, count: number) => ContainerOf<COut, T, import("../../types.js").KeyOf<COut>>, getLength: (c: ContainerOf<CIn, unknown, import("../../types.js").KeyOf<CIn>>) => number) => <T_1>(options?: {
    readonly start?: number;
    readonly count?: number;
}) => Function1<ContainerOf<CIn, T_1, import("../../types.js").KeyOf<CIn>>, ContainerOf<COut, T_1, import("../../types.js").KeyOf<COut>>>;
export default IndexedCollection_toContainer;
