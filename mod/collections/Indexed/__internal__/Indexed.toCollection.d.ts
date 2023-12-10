import { KeyedCollection, KeyedCollectionOf } from "../../../collections.js";
import { Function1 } from "../../../functions.js";
declare const Indexed_toCollection: <CIn extends KeyedCollection<number>, COut extends KeyedCollection<number>>(factory: <T>(values: KeyedCollectionOf<CIn, T, import("../../../collections.js").KeyOf<CIn>>, start: number, count: number) => KeyedCollectionOf<COut, T, import("../../../collections.js").KeyOf<COut>>, getLength: (c: KeyedCollectionOf<CIn, unknown, import("../../../collections.js").KeyOf<CIn>>) => number) => <T_1>(options?: {
    readonly start?: number;
    readonly count?: number;
}) => Function1<KeyedCollectionOf<CIn, T_1, import("../../../collections.js").KeyOf<CIn>>, KeyedCollectionOf<COut, T_1, import("../../../collections.js").KeyOf<COut>>>;
export default Indexed_toCollection;
