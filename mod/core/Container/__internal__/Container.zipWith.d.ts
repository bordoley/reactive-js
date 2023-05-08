import { Container } from "../../../core.js";
declare const Container_zipWith: <C extends Container>(zip: {
    <TA, TB>(a: Container.Of<C, TA>, b: Container.Of<C, TB>): Container.Of<C, readonly [TA, TB]>;
    <TA_1, TB_1, TC>(a: Container.Of<C, TA_1>, b: Container.Of<C, TB_1>, c: Container.Of<C, TC>): Container.Of<C, readonly [TA_1, TB_1, TC]>;
    <TA_2, TB_2, TC_1, TD>(a: Container.Of<C, TA_2>, b: Container.Of<C, TB_2>, c: Container.Of<C, TC_1>, d: Container.Of<C, TD>): Container.Of<C, readonly [TA_2, TB_2, TC_1, TD]>;
    <TA_3, TB_3, TC_2, TD_1, TE>(a: Container.Of<C, TA_3>, b: Container.Of<C, TB_3>, c: Container.Of<C, TC_2>, d: Container.Of<C, TD_1>, e: Container.Of<C, TE>): Container.Of<C, readonly [TA_3, TB_3, TC_2, TD_1, TE]>;
    <TA_4, TB_4, TC_3, TD_2, TE_1, TF>(a: Container.Of<C, TA_4>, b: Container.Of<C, TB_4>, c: Container.Of<C, TC_3>, d: Container.Of<C, TD_2>, e: Container.Of<C, TE_1>, f: Container.Of<C, TF>): Container.Of<C, readonly [TA_4, TB_4, TC_3, TD_2, TE_1, TF]>;
    <TA_5, TB_5, TC_4, TD_3, TE_2, TF_1, TG>(a: Container.Of<C, TA_5>, b: Container.Of<C, TB_5>, c: Container.Of<C, TC_4>, d: Container.Of<C, TD_3>, e: Container.Of<C, TE_2>, f: Container.Of<C, TF_1>, g: Container.Of<C, TG>): Container.Of<C, readonly [TA_5, TB_5, TC_4, TD_3, TE_2, TF_1, TG]>;
    <TA_6, TB_6, TC_5, TD_4, TE_3, TF_2, TG_1, TH>(a: Container.Of<C, TA_6>, b: Container.Of<C, TB_6>, c: Container.Of<C, TC_5>, d: Container.Of<C, TD_4>, e: Container.Of<C, TE_3>, f: Container.Of<C, TF_2>, g: Container.Of<C, TG_1>, h: Container.Of<C, TH>): Container.Of<C, readonly [TA_6, TB_6, TC_5, TD_4, TE_3, TF_2, TG_1, TH]>;
    <TA_7, TB_7, TC_6, TD_5, TE_4, TF_3, TG_2, TH_1, TI>(a: Container.Of<C, TA_7>, b: Container.Of<C, TB_7>, c: Container.Of<C, TC_6>, d: Container.Of<C, TD_5>, e: Container.Of<C, TE_4>, f: Container.Of<C, TF_3>, g: Container.Of<C, TG_2>, h: Container.Of<C, TH_1>, i: Container.Of<C, TI>): Container.Of<C, readonly [TA_7, TB_7, TC_6, TD_5, TE_4, TF_3, TG_2, TH_1, TI]>;
}) => (snd: Container.Of<C, any>, ...tail: readonly Container.Of<C, any>[]) => Container.Operator<C, any, any>;
export default Container_zipWith;
