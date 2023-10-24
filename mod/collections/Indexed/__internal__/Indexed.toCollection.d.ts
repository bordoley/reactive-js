import { Collection, CollectionOf } from "../../../collections.js";
import { Function1 } from "../../../functions.js";
declare const Indexed_toCollection: <CIn extends Collection<number>, COut extends Collection<number>>(factory: <T>(values: CollectionOf<CIn, T, import("../../../collections.js").KeyOf<CIn>>, start: number, count: number) => CollectionOf<COut, T, import("../../../collections.js").KeyOf<COut>>, getLength: (c: CollectionOf<CIn, unknown, import("../../../collections.js").KeyOf<CIn>>) => number) => <T_1>(options?: {
    readonly start?: number;
    readonly count?: number;
}) => Function1<CollectionOf<CIn, T_1, import("../../../collections.js").KeyOf<CIn>>, CollectionOf<COut, T_1, import("../../../collections.js").KeyOf<COut>>>;
export default Indexed_toCollection;
