import { Container, ContainerOf } from "../../../collections.js";
import { Function1 } from "../../../functions.js";
declare const IndexedCollection_toContainer: <CIn extends Container<number>, COut extends Container<number>>(factory: <T>(values: ContainerOf<CIn, T, import("../../../collections.js").KeyOf<CIn>>, start: number, count: number) => ContainerOf<COut, T, import("../../../collections.js").KeyOf<COut>>, getLength: (c: ContainerOf<CIn, unknown, import("../../../collections.js").KeyOf<CIn>>) => number) => <T_1>(options?: {
    readonly start?: number;
    readonly count?: number;
}) => Function1<ContainerOf<CIn, T_1, import("../../../collections.js").KeyOf<CIn>>, ContainerOf<COut, T_1, import("../../../collections.js").KeyOf<COut>>>;
export default IndexedCollection_toContainer;
