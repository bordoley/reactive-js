[Reactive-JS](../README.md) / streaming

# Module: streaming

## Table of contents

### Interfaces

- [AsyncEnumeratorLike](../interfaces/streaming.AsyncEnumeratorLike.md)
- [FlowableLike](../interfaces/streaming.FlowableLike.md)
- [FlowableStreamLike](../interfaces/streaming.FlowableStreamLike.md)
- [StreamLike](../interfaces/streaming.StreamLike.md)
- [StreamableLike](../interfaces/streaming.StreamableLike.md)
- [StreamableStateLike](../interfaces/streaming.StreamableStateLike.md)

### Type Aliases

- [FlowMode](streaming.md#flowmode)

### Functions

- [createActionReducer](streaming.md#createactionreducer)
- [createLiftedFlowable](streaming.md#createliftedflowable)
- [createLiftedStreamable](streaming.md#createliftedstreamable)
- [createStateStore](streaming.md#createstatestore)
- [createStream](streaming.md#createstream)
- [createStreamble](streaming.md#createstreamble)

## Type Aliases

### FlowMode

Ƭ **FlowMode**: ``"resume"`` \| ``"pause"``

## Functions

### createActionReducer

▸ **createActionReducer**<`TAction`, `T`\>(`reducer`, `initialState`, `options?`): [`StreamableLike`](../interfaces/streaming.StreamableLike.md)<`TAction`, `T`, [`StreamLike`](../interfaces/streaming.StreamLike.md)<`TAction`, `T`\>\>

Returns a new `StreamableLike` instance that applies an accumulator function
over the notified actions, emitting each intermediate result.

#### Type parameters

| Name |
| :------ |
| `TAction` |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `reducer` | [`Reducer`](functions.md#reducer)<`TAction`, `T`\> | The accumulator function called on each notified action. |
| `initialState` | [`Factory`](functions.md#factory)<`T`\> | The initial accumulation value. |
| `options?` | `Object` | - |
| `options.equality?` | [`Equality`](functions.md#equality)<`T`\> | - |

#### Returns

[`StreamableLike`](../interfaces/streaming.StreamableLike.md)<`TAction`, `T`, [`StreamLike`](../interfaces/streaming.StreamLike.md)<`TAction`, `T`\>\>

___

### createLiftedFlowable

▸ **createLiftedFlowable**<`A`\>(`op1`): [`FlowableLike`](../interfaces/streaming.FlowableLike.md)<`A`\>

#### Type parameters

| Name |
| :------ |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op1` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, [`FlowMode`](streaming.md#flowmode), `A`\> |

#### Returns

[`FlowableLike`](../interfaces/streaming.FlowableLike.md)<`A`\>

▸ **createLiftedFlowable**<`A`, `B`\>(`op1`, `op2`): [`FlowableLike`](../interfaces/streaming.FlowableLike.md)<`B`\>

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op1` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, [`FlowMode`](streaming.md#flowmode), `A`\> |
| `op2` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `A`, `B`\> |

#### Returns

[`FlowableLike`](../interfaces/streaming.FlowableLike.md)<`B`\>

▸ **createLiftedFlowable**<`A`, `B`, `C`\>(`op1`, `op2`, `op3`): [`FlowableLike`](../interfaces/streaming.FlowableLike.md)<`C`\>

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op1` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, [`FlowMode`](streaming.md#flowmode), `A`\> |
| `op2` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `A`, `B`\> |
| `op3` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `B`, `C`\> |

#### Returns

[`FlowableLike`](../interfaces/streaming.FlowableLike.md)<`C`\>

▸ **createLiftedFlowable**<`A`, `B`, `C`, `D`\>(`op1`, `op2`, `op3`, `op4`): [`FlowableLike`](../interfaces/streaming.FlowableLike.md)<`D`\>

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |
| `D` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op1` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, [`FlowMode`](streaming.md#flowmode), `A`\> |
| `op2` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `A`, `B`\> |
| `op3` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `B`, `C`\> |
| `op4` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `C`, `D`\> |

#### Returns

[`FlowableLike`](../interfaces/streaming.FlowableLike.md)<`D`\>

▸ **createLiftedFlowable**<`A`, `B`, `C`, `D`, `E`\>(`op1`, `op2`, `op3`, `op4`, `op5`): [`FlowableLike`](../interfaces/streaming.FlowableLike.md)<`E`\>

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |
| `D` |
| `E` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op1` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, [`FlowMode`](streaming.md#flowmode), `A`\> |
| `op2` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `A`, `B`\> |
| `op3` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `B`, `C`\> |
| `op4` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `C`, `D`\> |
| `op5` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `D`, `E`\> |

#### Returns

[`FlowableLike`](../interfaces/streaming.FlowableLike.md)<`E`\>

▸ **createLiftedFlowable**<`A`, `B`, `C`, `D`, `E`, `F`\>(`op1`, `op2`, `op3`, `op4`, `op5`, `op6`): [`FlowableLike`](../interfaces/streaming.FlowableLike.md)<`F`\>

#### Type parameters

| Name |
| :------ |
| `A` |
| `B` |
| `C` |
| `D` |
| `E` |
| `F` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op1` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, [`FlowMode`](streaming.md#flowmode), `A`\> |
| `op2` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `A`, `B`\> |
| `op3` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `B`, `C`\> |
| `op4` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `C`, `D`\> |
| `op5` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `D`, `E`\> |
| `op6` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `E`, `F`\> |

#### Returns

[`FlowableLike`](../interfaces/streaming.FlowableLike.md)<`F`\>

▸ **createLiftedFlowable**<`A`, `B`, `C`, `D`, `E`, `F`, `G`\>(`op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`): [`FlowableLike`](../interfaces/streaming.FlowableLike.md)<`G`\>

#### Type parameters

| Name |
| :------ |
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
| `op1` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, [`FlowMode`](streaming.md#flowmode), `A`\> |
| `op2` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `A`, `B`\> |
| `op3` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `B`, `C`\> |
| `op4` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `C`, `D`\> |
| `op5` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `D`, `E`\> |
| `op6` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `E`, `F`\> |
| `op7` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `F`, `G`\> |

#### Returns

[`FlowableLike`](../interfaces/streaming.FlowableLike.md)<`G`\>

▸ **createLiftedFlowable**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`\>(`op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`, `op8`): [`FlowableLike`](../interfaces/streaming.FlowableLike.md)<`H`\>

#### Type parameters

| Name |
| :------ |
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
| `op1` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, [`FlowMode`](streaming.md#flowmode), `A`\> |
| `op2` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `A`, `B`\> |
| `op3` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `B`, `C`\> |
| `op4` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `C`, `D`\> |
| `op5` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `D`, `E`\> |
| `op6` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `E`, `F`\> |
| `op7` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `F`, `G`\> |
| `op8` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `G`, `H`\> |

#### Returns

[`FlowableLike`](../interfaces/streaming.FlowableLike.md)<`H`\>

▸ **createLiftedFlowable**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`\>(`op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`, `op8`, `op9`): [`FlowableLike`](../interfaces/streaming.FlowableLike.md)<`I`\>

#### Type parameters

| Name |
| :------ |
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
| `op1` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, [`FlowMode`](streaming.md#flowmode), `A`\> |
| `op2` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `A`, `B`\> |
| `op3` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `B`, `C`\> |
| `op4` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `C`, `D`\> |
| `op5` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `D`, `E`\> |
| `op6` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `E`, `F`\> |
| `op7` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `F`, `G`\> |
| `op8` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `G`, `H`\> |
| `op9` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `H`, `I`\> |

#### Returns

[`FlowableLike`](../interfaces/streaming.FlowableLike.md)<`I`\>

▸ **createLiftedFlowable**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`\>(`op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`, `op8`, `op9`, `op10`): [`FlowableLike`](../interfaces/streaming.FlowableLike.md)<`J`\>

#### Type parameters

| Name |
| :------ |
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
| `op1` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, [`FlowMode`](streaming.md#flowmode), `A`\> |
| `op2` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `A`, `B`\> |
| `op3` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `B`, `C`\> |
| `op4` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `C`, `D`\> |
| `op5` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `D`, `E`\> |
| `op6` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `E`, `F`\> |
| `op7` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `F`, `G`\> |
| `op8` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `G`, `H`\> |
| `op9` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `H`, `I`\> |
| `op10` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `I`, `J`\> |

#### Returns

[`FlowableLike`](../interfaces/streaming.FlowableLike.md)<`J`\>

▸ **createLiftedFlowable**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`\>(`op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`, `op8`, `op9`, `op10`, `op11`): [`FlowableLike`](../interfaces/streaming.FlowableLike.md)<`K`\>

#### Type parameters

| Name |
| :------ |
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
| `op1` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, [`FlowMode`](streaming.md#flowmode), `A`\> |
| `op2` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `A`, `B`\> |
| `op3` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `B`, `C`\> |
| `op4` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `C`, `D`\> |
| `op5` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `D`, `E`\> |
| `op6` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `E`, `F`\> |
| `op7` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `F`, `G`\> |
| `op8` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `G`, `H`\> |
| `op9` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `H`, `I`\> |
| `op10` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `I`, `J`\> |
| `op11` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `J`, `K`\> |

#### Returns

[`FlowableLike`](../interfaces/streaming.FlowableLike.md)<`K`\>

▸ **createLiftedFlowable**<`A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`\>(`op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`, `op8`, `op9`, `op10`, `op11`, `op12`): [`FlowableLike`](../interfaces/streaming.FlowableLike.md)<`L`\>

#### Type parameters

| Name |
| :------ |
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
| `op1` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, [`FlowMode`](streaming.md#flowmode), `A`\> |
| `op2` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `A`, `B`\> |
| `op3` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `B`, `C`\> |
| `op4` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `C`, `D`\> |
| `op5` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `D`, `E`\> |
| `op6` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `E`, `F`\> |
| `op7` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `F`, `G`\> |
| `op8` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `G`, `H`\> |
| `op9` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `H`, `I`\> |
| `op10` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `I`, `J`\> |
| `op11` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `J`, `K`\> |
| `op12` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `K`, `L`\> |

#### Returns

[`FlowableLike`](../interfaces/streaming.FlowableLike.md)<`L`\>

___

### createLiftedStreamable

▸ **createLiftedStreamable**<`T`, `A`\>(`op1`): [`StreamableLike`](../interfaces/streaming.StreamableLike.md)<`T`, `A`, [`StreamLike`](../interfaces/streaming.StreamLike.md)<`T`, `A`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `A` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op1` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `A`\> |

#### Returns

[`StreamableLike`](../interfaces/streaming.StreamableLike.md)<`T`, `A`, [`StreamLike`](../interfaces/streaming.StreamLike.md)<`T`, `A`\>\>

▸ **createLiftedStreamable**<`T`, `A`, `B`\>(`op1`, `op2`): [`StreamableLike`](../interfaces/streaming.StreamableLike.md)<`T`, `B`, [`StreamLike`](../interfaces/streaming.StreamLike.md)<`T`, `B`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `A` |
| `B` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op1` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `A`\> |
| `op2` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `A`, `B`\> |

#### Returns

[`StreamableLike`](../interfaces/streaming.StreamableLike.md)<`T`, `B`, [`StreamLike`](../interfaces/streaming.StreamLike.md)<`T`, `B`\>\>

▸ **createLiftedStreamable**<`T`, `A`, `B`, `C`\>(`op1`, `op2`, `op3`): [`StreamableLike`](../interfaces/streaming.StreamableLike.md)<`T`, `C`, [`StreamLike`](../interfaces/streaming.StreamLike.md)<`T`, `C`\>\>

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
| `op1` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `A`\> |
| `op2` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `A`, `B`\> |
| `op3` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `B`, `C`\> |

#### Returns

[`StreamableLike`](../interfaces/streaming.StreamableLike.md)<`T`, `C`, [`StreamLike`](../interfaces/streaming.StreamLike.md)<`T`, `C`\>\>

▸ **createLiftedStreamable**<`T`, `A`, `B`, `C`, `D`\>(`op1`, `op2`, `op3`, `op4`): [`StreamableLike`](../interfaces/streaming.StreamableLike.md)<`T`, `D`, [`StreamLike`](../interfaces/streaming.StreamLike.md)<`T`, `D`\>\>

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
| `op1` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `A`\> |
| `op2` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `A`, `B`\> |
| `op3` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `B`, `C`\> |
| `op4` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `C`, `D`\> |

#### Returns

[`StreamableLike`](../interfaces/streaming.StreamableLike.md)<`T`, `D`, [`StreamLike`](../interfaces/streaming.StreamLike.md)<`T`, `D`\>\>

▸ **createLiftedStreamable**<`T`, `A`, `B`, `C`, `D`, `E`\>(`op1`, `op2`, `op3`, `op4`, `op5`): [`StreamableLike`](../interfaces/streaming.StreamableLike.md)<`T`, `E`, [`StreamLike`](../interfaces/streaming.StreamLike.md)<`T`, `E`\>\>

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
| `op1` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `A`\> |
| `op2` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `A`, `B`\> |
| `op3` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `B`, `C`\> |
| `op4` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `C`, `D`\> |
| `op5` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `D`, `E`\> |

#### Returns

[`StreamableLike`](../interfaces/streaming.StreamableLike.md)<`T`, `E`, [`StreamLike`](../interfaces/streaming.StreamLike.md)<`T`, `E`\>\>

▸ **createLiftedStreamable**<`T`, `A`, `B`, `C`, `D`, `E`, `F`\>(`op1`, `op2`, `op3`, `op4`, `op5`, `op6`): [`StreamableLike`](../interfaces/streaming.StreamableLike.md)<`T`, `F`, [`StreamLike`](../interfaces/streaming.StreamLike.md)<`T`, `F`\>\>

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
| `op1` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `A`\> |
| `op2` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `A`, `B`\> |
| `op3` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `B`, `C`\> |
| `op4` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `C`, `D`\> |
| `op5` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `D`, `E`\> |
| `op6` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `E`, `F`\> |

#### Returns

[`StreamableLike`](../interfaces/streaming.StreamableLike.md)<`T`, `F`, [`StreamLike`](../interfaces/streaming.StreamLike.md)<`T`, `F`\>\>

▸ **createLiftedStreamable**<`T`, `A`, `B`, `C`, `D`, `E`, `F`, `G`\>(`op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`): [`StreamableLike`](../interfaces/streaming.StreamableLike.md)<`T`, `G`, [`StreamLike`](../interfaces/streaming.StreamLike.md)<`T`, `G`\>\>

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
| `op1` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `A`\> |
| `op2` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `A`, `B`\> |
| `op3` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `B`, `C`\> |
| `op4` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `C`, `D`\> |
| `op5` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `D`, `E`\> |
| `op6` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `E`, `F`\> |
| `op7` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `F`, `G`\> |

#### Returns

[`StreamableLike`](../interfaces/streaming.StreamableLike.md)<`T`, `G`, [`StreamLike`](../interfaces/streaming.StreamLike.md)<`T`, `G`\>\>

▸ **createLiftedStreamable**<`T`, `A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`\>(`op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`, `op8`): [`StreamableLike`](../interfaces/streaming.StreamableLike.md)<`T`, `H`, [`StreamLike`](../interfaces/streaming.StreamLike.md)<`T`, `H`\>\>

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
| `op1` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `A`\> |
| `op2` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `A`, `B`\> |
| `op3` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `B`, `C`\> |
| `op4` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `C`, `D`\> |
| `op5` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `D`, `E`\> |
| `op6` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `E`, `F`\> |
| `op7` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `F`, `G`\> |
| `op8` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `G`, `H`\> |

#### Returns

[`StreamableLike`](../interfaces/streaming.StreamableLike.md)<`T`, `H`, [`StreamLike`](../interfaces/streaming.StreamLike.md)<`T`, `H`\>\>

▸ **createLiftedStreamable**<`T`, `A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`\>(`op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`, `op8`, `op9`): [`StreamableLike`](../interfaces/streaming.StreamableLike.md)<`T`, `I`, [`StreamLike`](../interfaces/streaming.StreamLike.md)<`T`, `I`\>\>

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
| `op1` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `A`\> |
| `op2` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `A`, `B`\> |
| `op3` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `B`, `C`\> |
| `op4` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `C`, `D`\> |
| `op5` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `D`, `E`\> |
| `op6` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `E`, `F`\> |
| `op7` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `F`, `G`\> |
| `op8` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `G`, `H`\> |
| `op9` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `H`, `I`\> |

#### Returns

[`StreamableLike`](../interfaces/streaming.StreamableLike.md)<`T`, `I`, [`StreamLike`](../interfaces/streaming.StreamLike.md)<`T`, `I`\>\>

▸ **createLiftedStreamable**<`T`, `A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`\>(`op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`, `op8`, `op9`, `op10`): [`StreamableLike`](../interfaces/streaming.StreamableLike.md)<`T`, `J`, [`StreamLike`](../interfaces/streaming.StreamLike.md)<`T`, `J`\>\>

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
| `op1` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `A`\> |
| `op2` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `A`, `B`\> |
| `op3` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `B`, `C`\> |
| `op4` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `C`, `D`\> |
| `op5` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `D`, `E`\> |
| `op6` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `E`, `F`\> |
| `op7` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `F`, `G`\> |
| `op8` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `G`, `H`\> |
| `op9` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `H`, `I`\> |
| `op10` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `I`, `J`\> |

#### Returns

[`StreamableLike`](../interfaces/streaming.StreamableLike.md)<`T`, `J`, [`StreamLike`](../interfaces/streaming.StreamLike.md)<`T`, `J`\>\>

▸ **createLiftedStreamable**<`T`, `A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`\>(`op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`, `op8`, `op9`, `op10`, `op11`): [`StreamableLike`](../interfaces/streaming.StreamableLike.md)<`T`, `K`, [`StreamLike`](../interfaces/streaming.StreamLike.md)<`T`, `K`\>\>

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
| `op1` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `A`\> |
| `op2` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `A`, `B`\> |
| `op3` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `B`, `C`\> |
| `op4` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `C`, `D`\> |
| `op5` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `D`, `E`\> |
| `op6` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `E`, `F`\> |
| `op7` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `F`, `G`\> |
| `op8` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `G`, `H`\> |
| `op9` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `H`, `I`\> |
| `op10` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `I`, `J`\> |
| `op11` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `J`, `K`\> |

#### Returns

[`StreamableLike`](../interfaces/streaming.StreamableLike.md)<`T`, `K`, [`StreamLike`](../interfaces/streaming.StreamLike.md)<`T`, `K`\>\>

▸ **createLiftedStreamable**<`T`, `A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`\>(`op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`, `op8`, `op9`, `op10`, `op11`, `op12`): [`StreamableLike`](../interfaces/streaming.StreamableLike.md)<`T`, `L`, [`StreamLike`](../interfaces/streaming.StreamLike.md)<`T`, `L`\>\>

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
| `op1` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `T`, `A`\> |
| `op2` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `A`, `B`\> |
| `op3` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `B`, `C`\> |
| `op4` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `C`, `D`\> |
| `op5` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `D`, `E`\> |
| `op6` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `E`, `F`\> |
| `op7` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `F`, `G`\> |
| `op8` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `G`, `H`\> |
| `op9` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `H`, `I`\> |
| `op10` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `I`, `J`\> |
| `op11` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `J`, `K`\> |
| `op12` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `K`, `L`\> |

#### Returns

[`StreamableLike`](../interfaces/streaming.StreamableLike.md)<`T`, `L`, [`StreamLike`](../interfaces/streaming.StreamLike.md)<`T`, `L`\>\>

___

### createStateStore

▸ **createStateStore**<`T`\>(`initialState`, `options?`): [`StreamableStateLike`](../interfaces/streaming.StreamableStateLike.md)<`T`\>

Returns a new `StateStoreLike` instance that stores state which can
be updated by notifying the instance with a `StateUpdater` that computes a
new state based upon the previous state.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `initialState` | [`Factory`](functions.md#factory)<`T`\> | The initial accumulation value. |
| `options?` | `Object` | - |
| `options.equality?` | [`Equality`](functions.md#equality)<`T`\> | - |

#### Returns

[`StreamableStateLike`](../interfaces/streaming.StreamableStateLike.md)<`T`\>

___

### createStream

▸ **createStream**<`TReq`, `T`\>(`op`, `scheduler`, `options?`): [`StreamLike`](../interfaces/streaming.StreamLike.md)<`TReq`, `T`\>

#### Type parameters

| Name |
| :------ |
| `TReq` |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `op` | [`ContainerOperator`](containers.md#containeroperator)<[`ObservableLike`](../interfaces/rx.ObservableLike.md)<`unknown`\>, `TReq`, `T`\> |
| `scheduler` | [`SchedulerLike`](../interfaces/scheduling.SchedulerLike.md) |
| `options?` | `Object` |
| `options.replay?` | `number` |

#### Returns

[`StreamLike`](../interfaces/streaming.StreamLike.md)<`TReq`, `T`\>

___

### createStreamble

▸ **createStreamble**<`TReq`, `TData`, `TStream`\>(`stream`): [`StreamableLike`](../interfaces/streaming.StreamableLike.md)<`TReq`, `TData`, `TStream`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TReq` | `TReq` |
| `TData` | `TData` |
| `TStream` | extends [`StreamLike`](../interfaces/streaming.StreamLike.md)<`TReq`, `TData`, `TStream`\> = [`StreamLike`](../interfaces/streaming.StreamLike.md)<`TReq`, `TData`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `stream` | (`scheduler`: [`SchedulerLike`](../interfaces/scheduling.SchedulerLike.md), `options?`: { `replay?`: `number`  }) => `TStream` |

#### Returns

[`StreamableLike`](../interfaces/streaming.StreamableLike.md)<`TReq`, `TData`, `TStream`\>
