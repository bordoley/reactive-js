import { Container, ContainerTypeClass, Containers } from "../../containers.js";
declare const Container_zipWith: <C extends Container>(zip: {
    <TA, TB>(a: Containers.Of<C, TA>, b: Containers.Of<C, TB>): Containers.Of<C, readonly [TA, TB]>;
    <TA_1, TB_1, TC>(a: Containers.Of<C, TA_1>, b: Containers.Of<C, TB_1>, c: Containers.Of<C, TC>): Containers.Of<C, readonly [TA_1, TB_1, TC]>;
    <TA_2, TB_2, TC_1, TD>(a: Containers.Of<C, TA_2>, b: Containers.Of<C, TB_2>, c: Containers.Of<C, TC_1>, d: Containers.Of<C, TD>): Containers.Of<C, readonly [TA_2, TB_2, TC_1, TD]>;
    <TA_3, TB_3, TC_2, TD_1, TE>(a: Containers.Of<C, TA_3>, b: Containers.Of<C, TB_3>, c: Containers.Of<C, TC_2>, d: Containers.Of<C, TD_1>, e: Containers.Of<C, TE>): Containers.Of<C, readonly [TA_3, TB_3, TC_2, TD_1, TE]>;
    <TA_4, TB_4, TC_3, TD_2, TE_1, TF>(a: Containers.Of<C, TA_4>, b: Containers.Of<C, TB_4>, c: Containers.Of<C, TC_3>, d: Containers.Of<C, TD_2>, e: Containers.Of<C, TE_1>, f: Containers.Of<C, TF>): Containers.Of<C, readonly [TA_4, TB_4, TC_3, TD_2, TE_1, TF]>;
    <TA_5, TB_5, TC_4, TD_3, TE_2, TF_1, TG>(a: Containers.Of<C, TA_5>, b: Containers.Of<C, TB_5>, c: Containers.Of<C, TC_4>, d: Containers.Of<C, TD_3>, e: Containers.Of<C, TE_2>, f: Containers.Of<C, TF_1>, g: Containers.Of<C, TG>): Containers.Of<C, readonly [TA_5, TB_5, TC_4, TD_3, TE_2, TF_1, TG]>;
    <TA_6, TB_6, TC_5, TD_4, TE_3, TF_2, TG_1, TH>(a: Containers.Of<C, TA_6>, b: Containers.Of<C, TB_6>, c: Containers.Of<C, TC_5>, d: Containers.Of<C, TD_4>, e: Containers.Of<C, TE_3>, f: Containers.Of<C, TF_2>, g: Containers.Of<C, TG_1>, h: Containers.Of<C, TH>): Containers.Of<C, readonly [TA_6, TB_6, TC_5, TD_4, TE_3, TF_2, TG_1, TH]>;
    <TA_7, TB_7, TC_6, TD_5, TE_4, TF_3, TG_2, TH_1, TI>(a: Containers.Of<C, TA_7>, b: Containers.Of<C, TB_7>, c: Containers.Of<C, TC_6>, d: Containers.Of<C, TD_5>, e: Containers.Of<C, TE_4>, f: Containers.Of<C, TF_3>, g: Containers.Of<C, TG_2>, h: Containers.Of<C, TH_1>, i: Containers.Of<C, TI>): Containers.Of<C, readonly [TA_7, TB_7, TC_6, TD_5, TE_4, TF_3, TG_2, TH_1, TI]>;
}) => (snd: Containers.Of<C, any>, ...tail: readonly Containers.Of<C, any>[]) => Containers.Operator<C, any, any>;
export default Container_zipWith;
