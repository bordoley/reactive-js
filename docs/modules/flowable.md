[Reactive-JS](../README.md) / flowable

# Module: flowable

## Table of contents

### Interfaces

- [FlowableLike](../interfaces/flowable.FlowableLike.md)
- [FlowableSinkLike](../interfaces/flowable.FlowableSinkLike.md)
- [FlowableSinkStreamLike](../interfaces/flowable.FlowableSinkStreamLike.md)
- [FlowableStreamLike](../interfaces/flowable.FlowableStreamLike.md)

### Type Aliases

- [FlowMode](flowable.md#flowmode)
- [FlowableOperator](flowable.md#flowableoperator)

### Variables

- [toObservableT](flowable.md#toobservablet)

### Functions

- [createLiftedFlowable](flowable.md#createliftedflowable)
- [flow](flowable.md#flow)
- [toObservable](flowable.md#toobservable)

## Type Aliases

### FlowMode

Ƭ **FlowMode**: ``"resume"`` \| ``"pause"``

___

### FlowableOperator

Ƭ **FlowableOperator**<`TA`, `TB`\>: [`Function1`](functions.md#function1)<[`FlowableLike`](../interfaces/flowable.FlowableLike.md)<`TA`\>, [`FlowableLike`](../interfaces/flowable.FlowableLike.md)<`TB`\>\>

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

## Variables

### toObservableT

• `Const` **toObservableT**: [`ToObservable`](../interfaces/observable.ToObservable.md)<[`FlowableLike`](../interfaces/flowable.FlowableLike.md)<`unknown`\>\>

## Functions

### createLiftedFlowable

▸ **createLiftedFlowable**<`T`, `A`\>(`op1`): [`FlowableLike`](../interfaces/flowable.FlowableLike.md)<`A`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op1` | [`ObservableOperator`](observable.md#observableoperator)<`T`, `A`\> |

#### Returns

[`FlowableLike`](../interfaces/flowable.FlowableLike.md)<`A`\>

▸ **createLiftedFlowable**<`T`, `A`, `B`\>(`op1`, `op2`): [`FlowableLike`](../interfaces/flowable.FlowableLike.md)<`B`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op1` | [`ObservableOperator`](observable.md#observableoperator)<`T`, `A`\> |
| `op2` | [`ObservableOperator`](observable.md#observableoperator)<`A`, `B`\> |

#### Returns

[`FlowableLike`](../interfaces/flowable.FlowableLike.md)<`B`\>

▸ **createLiftedFlowable**<`T`, `A`, `B`, `C`\>(`op1`, `op2`, `op3`): [`FlowableLike`](../interfaces/flowable.FlowableLike.md)<`C`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `A` |
| `B` |
| `C` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op1` | [`ObservableOperator`](observable.md#observableoperator)<`T`, `A`\> |
| `op2` | [`ObservableOperator`](observable.md#observableoperator)<`A`, `B`\> |
| `op3` | [`ObservableOperator`](observable.md#observableoperator)<`B`, `C`\> |

#### Returns

[`FlowableLike`](../interfaces/flowable.FlowableLike.md)<`C`\>

▸ **createLiftedFlowable**<`T`, `A`, `B`, `C`, `D`\>(`op1`, `op2`, `op3`, `op4`): [`FlowableLike`](../interfaces/flowable.FlowableLike.md)<`D`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `A` |
| `B` |
| `C` |
| `D` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op1` | [`ObservableOperator`](observable.md#observableoperator)<`T`, `A`\> |
| `op2` | [`ObservableOperator`](observable.md#observableoperator)<`A`, `B`\> |
| `op3` | [`ObservableOperator`](observable.md#observableoperator)<`B`, `C`\> |
| `op4` | [`ObservableOperator`](observable.md#observableoperator)<`C`, `D`\> |

#### Returns

[`FlowableLike`](../interfaces/flowable.FlowableLike.md)<`D`\>

▸ **createLiftedFlowable**<`T`, `A`, `B`, `C`, `D`, `E`\>(`op1`, `op2`, `op3`, `op4`, `op5`): [`FlowableLike`](../interfaces/flowable.FlowableLike.md)<`E`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `A` |
| `B` |
| `C` |
| `D` |
| `E` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op1` | [`ObservableOperator`](observable.md#observableoperator)<`T`, `A`\> |
| `op2` | [`ObservableOperator`](observable.md#observableoperator)<`A`, `B`\> |
| `op3` | [`ObservableOperator`](observable.md#observableoperator)<`B`, `C`\> |
| `op4` | [`ObservableOperator`](observable.md#observableoperator)<`C`, `D`\> |
| `op5` | [`ObservableOperator`](observable.md#observableoperator)<`D`, `E`\> |

#### Returns

[`FlowableLike`](../interfaces/flowable.FlowableLike.md)<`E`\>

▸ **createLiftedFlowable**<`T`, `A`, `B`, `C`, `D`, `E`, `F`\>(`op1`, `op2`, `op3`, `op4`, `op5`, `op6`): [`FlowableLike`](../interfaces/flowable.FlowableLike.md)<`F`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `A` |
| `B` |
| `C` |
| `D` |
| `E` |
| `F` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op1` | [`ObservableOperator`](observable.md#observableoperator)<`T`, `A`\> |
| `op2` | [`ObservableOperator`](observable.md#observableoperator)<`A`, `B`\> |
| `op3` | [`ObservableOperator`](observable.md#observableoperator)<`B`, `C`\> |
| `op4` | [`ObservableOperator`](observable.md#observableoperator)<`C`, `D`\> |
| `op5` | [`ObservableOperator`](observable.md#observableoperator)<`D`, `E`\> |
| `op6` | [`ObservableOperator`](observable.md#observableoperator)<`E`, `F`\> |

#### Returns

[`FlowableLike`](../interfaces/flowable.FlowableLike.md)<`F`\>

▸ **createLiftedFlowable**<`T`, `A`, `B`, `C`, `D`, `E`, `F`, `G`\>(`op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`): [`FlowableLike`](../interfaces/flowable.FlowableLike.md)<`G`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `A` |
| `B` |
| `C` |
| `D` |
| `E` |
| `F` |
| `G` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op1` | [`ObservableOperator`](observable.md#observableoperator)<`T`, `A`\> |
| `op2` | [`ObservableOperator`](observable.md#observableoperator)<`A`, `B`\> |
| `op3` | [`ObservableOperator`](observable.md#observableoperator)<`B`, `C`\> |
| `op4` | [`ObservableOperator`](observable.md#observableoperator)<`C`, `D`\> |
| `op5` | [`ObservableOperator`](observable.md#observableoperator)<`D`, `E`\> |
| `op6` | [`ObservableOperator`](observable.md#observableoperator)<`E`, `F`\> |
| `op7` | [`ObservableOperator`](observable.md#observableoperator)<`F`, `G`\> |

#### Returns

[`FlowableLike`](../interfaces/flowable.FlowableLike.md)<`G`\>

▸ **createLiftedFlowable**<`T`, `A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`\>(`op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`, `op8`): [`FlowableLike`](../interfaces/flowable.FlowableLike.md)<`H`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `A` |
| `B` |
| `C` |
| `D` |
| `E` |
| `F` |
| `G` |
| `H` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op1` | [`ObservableOperator`](observable.md#observableoperator)<`T`, `A`\> |
| `op2` | [`ObservableOperator`](observable.md#observableoperator)<`A`, `B`\> |
| `op3` | [`ObservableOperator`](observable.md#observableoperator)<`B`, `C`\> |
| `op4` | [`ObservableOperator`](observable.md#observableoperator)<`C`, `D`\> |
| `op5` | [`ObservableOperator`](observable.md#observableoperator)<`D`, `E`\> |
| `op6` | [`ObservableOperator`](observable.md#observableoperator)<`E`, `F`\> |
| `op7` | [`ObservableOperator`](observable.md#observableoperator)<`F`, `G`\> |
| `op8` | [`ObservableOperator`](observable.md#observableoperator)<`G`, `H`\> |

#### Returns

[`FlowableLike`](../interfaces/flowable.FlowableLike.md)<`H`\>

▸ **createLiftedFlowable**<`T`, `A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`\>(`op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`, `op8`, `op9`): [`FlowableLike`](../interfaces/flowable.FlowableLike.md)<`I`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `A` |
| `B` |
| `C` |
| `D` |
| `E` |
| `F` |
| `G` |
| `H` |
| `I` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op1` | [`ObservableOperator`](observable.md#observableoperator)<`T`, `A`\> |
| `op2` | [`ObservableOperator`](observable.md#observableoperator)<`A`, `B`\> |
| `op3` | [`ObservableOperator`](observable.md#observableoperator)<`B`, `C`\> |
| `op4` | [`ObservableOperator`](observable.md#observableoperator)<`C`, `D`\> |
| `op5` | [`ObservableOperator`](observable.md#observableoperator)<`D`, `E`\> |
| `op6` | [`ObservableOperator`](observable.md#observableoperator)<`E`, `F`\> |
| `op7` | [`ObservableOperator`](observable.md#observableoperator)<`F`, `G`\> |
| `op8` | [`ObservableOperator`](observable.md#observableoperator)<`G`, `H`\> |
| `op9` | [`ObservableOperator`](observable.md#observableoperator)<`H`, `I`\> |

#### Returns

[`FlowableLike`](../interfaces/flowable.FlowableLike.md)<`I`\>

▸ **createLiftedFlowable**<`T`, `A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`\>(`op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`, `op8`, `op9`, `op10`): [`FlowableLike`](../interfaces/flowable.FlowableLike.md)<`J`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `A` |
| `B` |
| `C` |
| `D` |
| `E` |
| `F` |
| `G` |
| `H` |
| `I` |
| `J` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op1` | [`ObservableOperator`](observable.md#observableoperator)<`T`, `A`\> |
| `op2` | [`ObservableOperator`](observable.md#observableoperator)<`A`, `B`\> |
| `op3` | [`ObservableOperator`](observable.md#observableoperator)<`B`, `C`\> |
| `op4` | [`ObservableOperator`](observable.md#observableoperator)<`C`, `D`\> |
| `op5` | [`ObservableOperator`](observable.md#observableoperator)<`D`, `E`\> |
| `op6` | [`ObservableOperator`](observable.md#observableoperator)<`E`, `F`\> |
| `op7` | [`ObservableOperator`](observable.md#observableoperator)<`F`, `G`\> |
| `op8` | [`ObservableOperator`](observable.md#observableoperator)<`G`, `H`\> |
| `op9` | [`ObservableOperator`](observable.md#observableoperator)<`H`, `I`\> |
| `op10` | [`ObservableOperator`](observable.md#observableoperator)<`I`, `J`\> |

#### Returns

[`FlowableLike`](../interfaces/flowable.FlowableLike.md)<`J`\>

▸ **createLiftedFlowable**<`T`, `A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`\>(`op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`, `op8`, `op9`, `op10`, `op11`): [`FlowableLike`](../interfaces/flowable.FlowableLike.md)<`K`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `A` |
| `B` |
| `C` |
| `D` |
| `E` |
| `F` |
| `G` |
| `H` |
| `I` |
| `J` |
| `K` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op1` | [`ObservableOperator`](observable.md#observableoperator)<`T`, `A`\> |
| `op2` | [`ObservableOperator`](observable.md#observableoperator)<`A`, `B`\> |
| `op3` | [`ObservableOperator`](observable.md#observableoperator)<`B`, `C`\> |
| `op4` | [`ObservableOperator`](observable.md#observableoperator)<`C`, `D`\> |
| `op5` | [`ObservableOperator`](observable.md#observableoperator)<`D`, `E`\> |
| `op6` | [`ObservableOperator`](observable.md#observableoperator)<`E`, `F`\> |
| `op7` | [`ObservableOperator`](observable.md#observableoperator)<`F`, `G`\> |
| `op8` | [`ObservableOperator`](observable.md#observableoperator)<`G`, `H`\> |
| `op9` | [`ObservableOperator`](observable.md#observableoperator)<`H`, `I`\> |
| `op10` | [`ObservableOperator`](observable.md#observableoperator)<`I`, `J`\> |
| `op11` | [`ObservableOperator`](observable.md#observableoperator)<`J`, `K`\> |

#### Returns

[`FlowableLike`](../interfaces/flowable.FlowableLike.md)<`K`\>

▸ **createLiftedFlowable**<`T`, `A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`\>(`op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`, `op8`, `op9`, `op10`, `op11`, `op12`): [`FlowableLike`](../interfaces/flowable.FlowableLike.md)<`L`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `A` |
| `B` |
| `C` |
| `D` |
| `E` |
| `F` |
| `G` |
| `H` |
| `I` |
| `J` |
| `K` |
| `L` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op1` | [`ObservableOperator`](observable.md#observableoperator)<`T`, `A`\> |
| `op2` | [`ObservableOperator`](observable.md#observableoperator)<`A`, `B`\> |
| `op3` | [`ObservableOperator`](observable.md#observableoperator)<`B`, `C`\> |
| `op4` | [`ObservableOperator`](observable.md#observableoperator)<`C`, `D`\> |
| `op5` | [`ObservableOperator`](observable.md#observableoperator)<`D`, `E`\> |
| `op6` | [`ObservableOperator`](observable.md#observableoperator)<`E`, `F`\> |
| `op7` | [`ObservableOperator`](observable.md#observableoperator)<`F`, `G`\> |
| `op8` | [`ObservableOperator`](observable.md#observableoperator)<`G`, `H`\> |
| `op9` | [`ObservableOperator`](observable.md#observableoperator)<`H`, `I`\> |
| `op10` | [`ObservableOperator`](observable.md#observableoperator)<`I`, `J`\> |
| `op11` | [`ObservableOperator`](observable.md#observableoperator)<`J`, `K`\> |
| `op12` | [`ObservableOperator`](observable.md#observableoperator)<`K`, `L`\> |

#### Returns

[`FlowableLike`](../interfaces/flowable.FlowableLike.md)<`L`\>

___

### flow

▸ **flow**<`T`\>(): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>, [`FlowableLike`](../interfaces/flowable.FlowableLike.md)<`T`, [`FlowableStreamLike`](../interfaces/flowable.FlowableStreamLike.md)<`T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>, [`FlowableLike`](../interfaces/flowable.FlowableLike.md)<`T`, [`FlowableStreamLike`](../interfaces/flowable.FlowableStreamLike.md)<`T`\>\>\>

___

### toObservable

▸ **toObservable**<`T`\>(): [`Function1`](functions.md#function1)<[`FlowableLike`](../interfaces/flowable.FlowableLike.md)<`T`, [`FlowableStreamLike`](../interfaces/flowable.FlowableStreamLike.md)<`T`\>\>, [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`FlowableLike`](../interfaces/flowable.FlowableLike.md)<`T`, [`FlowableStreamLike`](../interfaces/flowable.FlowableStreamLike.md)<`T`\>\>, [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>\>
