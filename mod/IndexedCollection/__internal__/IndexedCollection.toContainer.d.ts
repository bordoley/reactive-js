import { Function1 } from "../../functions.js";
import { Container, ContainerOf, KeyedContainer, KeyedContainerOf } from "../../types.js";
declare const IndexedCollection_toContainer: <CIn extends KeyedContainer<number>, COut extends Container>(factory: <T>(values: KeyedContainerOf<CIn, number, T>, start: number, count: number) => ContainerOf<COut, T>, getLength: (c: ContainerOf<CIn, unknown>) => number) => <T_1>(options?: {
    readonly start?: number;
    readonly count?: number;
}) => Function1<KeyedContainerOf<CIn, number, T_1>, ContainerOf<COut, T_1>>;
export default IndexedCollection_toContainer;
