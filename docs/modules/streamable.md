[Reactive-JS](../README.md) / streamable

# Module: streamable

## Table of contents

### Interfaces

- [AsyncEnumerableLike](../interfaces/streamable.AsyncEnumerableLike.md)
- [AsyncEnumeratorLike](../interfaces/streamable.AsyncEnumeratorLike.md)
- [FlowableLike](../interfaces/streamable.FlowableLike.md)
- [FlowableSinkLike](../interfaces/streamable.FlowableSinkLike.md)
- [FlowableSinkStreamLike](../interfaces/streamable.FlowableSinkStreamLike.md)
- [FlowableStreamLike](../interfaces/streamable.FlowableStreamLike.md)
- [StateStreamLike](../interfaces/streamable.StateStreamLike.md)
- [StreamableLike](../interfaces/streamable.StreamableLike.md)
- [StreamableStateLike](../interfaces/streamable.StreamableStateLike.md)

### Type Aliases

- [ConsumeContinue](streamable.md#consumecontinue)
- [ConsumeDone](streamable.md#consumedone)
- [FlowMode](streamable.md#flowmode)
- [StreamableOperator](streamable.md#streamableoperator)

### Functions

- [\_\_stream](streamable.md#__stream)
- [consume](streamable.md#consume)
- [consumeAsync](streamable.md#consumeasync)
- [consumeContinue](streamable.md#consumecontinue-1)
- [consumeDone](streamable.md#consumedone-1)
- [createActionReducer](streamable.md#createactionreducer)
- [createFlowableSinkAccumulator](streamable.md#createflowablesinkaccumulator)
- [createLiftedStreamable](streamable.md#createliftedstreamable)
- [createStateStore](streamable.md#createstatestore)
- [createStreamble](streamable.md#createstreamble)
- [empty](streamable.md#empty)
- [flow](streamable.md#flow)
- [fromArray](streamable.md#fromarray)
- [fromEnumerable](streamable.md#fromenumerable)
- [fromIterable](streamable.md#fromiterable)
- [generate](streamable.md#generate)
- [identity](streamable.md#identity)
- [sinkInto](streamable.md#sinkinto)
- [stream](streamable.md#stream)

## Type Aliases

### ConsumeContinue

Ƭ **ConsumeContinue**<`T`\>: `Object`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | `T` |
| `type` | ``"continue"`` |

___

### ConsumeDone

Ƭ **ConsumeDone**<`T`\>: `Object`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `data` | `T` |
| `type` | ``"done"`` |

___

### FlowMode

Ƭ **FlowMode**: ``"resume"`` \| ``"pause"``

___

### StreamableOperator

Ƭ **StreamableOperator**<`TSrcReq`, `TSrc`, `TReq`, `T`\>: [`Function1`](functions.md#function1)<[`StreamableLike`](../interfaces/streamable.StreamableLike.md)<`TSrcReq`, `TSrc`, [`StreamLike`](../interfaces/observable.StreamLike.md)<`TSrcReq`, `TSrc`\>\>, [`StreamableLike`](../interfaces/streamable.StreamableLike.md)<`TReq`, `T`, [`StreamLike`](../interfaces/observable.StreamLike.md)<`TReq`, `T`\>\>\>

#### Type parameters

| Name |
| :------ |
| `TSrcReq` |
| `TSrc` |
| `TReq` |
| `T` |

## Functions

### \_\_stream

▸ **__stream**<`TReq`, `T`, `TStream`\>(`streamable`, `__namedParameters?`): `TStream`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TReq` | `TReq` |
| `T` | `T` |
| `TStream` | extends [`StreamLike`](../interfaces/observable.StreamLike.md)<`TReq`, `T`, `TStream`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `streamable` | [`StreamableLike`](../interfaces/streamable.StreamableLike.md)<`TReq`, `T`, `TStream`\> |
| `__namedParameters?` | `Object` |
| `__namedParameters.replay?` | `number` |
| `__namedParameters.scheduler?` | [`SchedulerLike`](../interfaces/scheduler.SchedulerLike.md) |

#### Returns

`TStream`

___

### consume

▸ **consume**<`T`, `TAcc`\>(`consumer`, `initial`): [`Function1`](functions.md#function1)<[`AsyncEnumerableLike`](../interfaces/streamable.AsyncEnumerableLike.md)<`T`\>, [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TAcc`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `consumer` | [`Function2`](functions.md#function2)<`TAcc`, `T`, [`ConsumeContinue`](streamable.md#consumecontinue)<`TAcc`\> \| [`ConsumeDone`](streamable.md#consumedone)<`TAcc`\>\> |
| `initial` | [`Factory`](functions.md#factory)<`TAcc`\> |

#### Returns

[`Function1`](functions.md#function1)<[`AsyncEnumerableLike`](../interfaces/streamable.AsyncEnumerableLike.md)<`T`\>, [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TAcc`\>\>

___

### consumeAsync

▸ **consumeAsync**<`T`, `TAcc`\>(`consumer`, `initial`): [`Function1`](functions.md#function1)<[`AsyncEnumerableLike`](../interfaces/streamable.AsyncEnumerableLike.md)<`T`\>, [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TAcc`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `consumer` | [`Function2`](functions.md#function2)<`TAcc`, `T`, [`ObservableLike`](../interfaces/observable.ObservableLike.md)<[`ConsumeContinue`](streamable.md#consumecontinue)<`TAcc`\> \| [`ConsumeDone`](streamable.md#consumedone)<`TAcc`\>\>\> |
| `initial` | [`Factory`](functions.md#factory)<`TAcc`\> |

#### Returns

[`Function1`](functions.md#function1)<[`AsyncEnumerableLike`](../interfaces/streamable.AsyncEnumerableLike.md)<`T`\>, [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TAcc`\>\>

___

### consumeContinue

▸ **consumeContinue**<`T`\>(`data`): [`ConsumeContinue`](streamable.md#consumecontinue)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `T` |

#### Returns

[`ConsumeContinue`](streamable.md#consumecontinue)<`T`\>

___

### consumeDone

▸ **consumeDone**<`T`\>(`data`): [`ConsumeDone`](streamable.md#consumedone)<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `T` |

#### Returns

[`ConsumeDone`](streamable.md#consumedone)<`T`\>

___

### createActionReducer

▸ **createActionReducer**<`TAction`, `T`\>(`reducer`, `initialState`, `options?`): [`StreamableLike`](../interfaces/streamable.StreamableLike.md)<`TAction`, `T`, [`StreamLike`](../interfaces/observable.StreamLike.md)<`TAction`, `T`\>\>

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

[`StreamableLike`](../interfaces/streamable.StreamableLike.md)<`TAction`, `T`, [`StreamLike`](../interfaces/observable.StreamLike.md)<`TAction`, `T`\>\>

___

### createFlowableSinkAccumulator

▸ **createFlowableSinkAccumulator**<`T`, `TAcc`\>(`reducer`, `initialValue`, `options?`): [`FlowableSinkLike`](../interfaces/streamable.FlowableSinkLike.md)<`T`\> & [`MulticastObservableLike`](../interfaces/observable.MulticastObservableLike.md)<`TAcc`\>

**`experimental`**

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `reducer` | [`Reducer`](functions.md#reducer)<`T`, `TAcc`\> |
| `initialValue` | [`Factory`](functions.md#factory)<`TAcc`\> |
| `options?` | `Object` |
| `options.replay?` | `number` |

#### Returns

[`FlowableSinkLike`](../interfaces/streamable.FlowableSinkLike.md)<`T`\> & [`MulticastObservableLike`](../interfaces/observable.MulticastObservableLike.md)<`TAcc`\>

___

### createLiftedStreamable

▸ **createLiftedStreamable**<`T`, `A`\>(`op1`): [`StreamableLike`](../interfaces/streamable.StreamableLike.md)<`T`, `A`, [`StreamLike`](../interfaces/observable.StreamLike.md)<`T`, `A`\>\>

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

[`StreamableLike`](../interfaces/streamable.StreamableLike.md)<`T`, `A`, [`StreamLike`](../interfaces/observable.StreamLike.md)<`T`, `A`\>\>

▸ **createLiftedStreamable**<`T`, `A`, `B`\>(`op1`, `op2`): [`StreamableLike`](../interfaces/streamable.StreamableLike.md)<`T`, `B`, [`StreamLike`](../interfaces/observable.StreamLike.md)<`T`, `B`\>\>

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

[`StreamableLike`](../interfaces/streamable.StreamableLike.md)<`T`, `B`, [`StreamLike`](../interfaces/observable.StreamLike.md)<`T`, `B`\>\>

▸ **createLiftedStreamable**<`T`, `A`, `B`, `C`\>(`op1`, `op2`, `op3`): [`StreamableLike`](../interfaces/streamable.StreamableLike.md)<`T`, `C`, [`StreamLike`](../interfaces/observable.StreamLike.md)<`T`, `C`\>\>

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

[`StreamableLike`](../interfaces/streamable.StreamableLike.md)<`T`, `C`, [`StreamLike`](../interfaces/observable.StreamLike.md)<`T`, `C`\>\>

▸ **createLiftedStreamable**<`T`, `A`, `B`, `C`, `D`\>(`op1`, `op2`, `op3`, `op4`): [`StreamableLike`](../interfaces/streamable.StreamableLike.md)<`T`, `D`, [`StreamLike`](../interfaces/observable.StreamLike.md)<`T`, `D`\>\>

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

[`StreamableLike`](../interfaces/streamable.StreamableLike.md)<`T`, `D`, [`StreamLike`](../interfaces/observable.StreamLike.md)<`T`, `D`\>\>

▸ **createLiftedStreamable**<`T`, `A`, `B`, `C`, `D`, `E`\>(`op1`, `op2`, `op3`, `op4`, `op5`): [`StreamableLike`](../interfaces/streamable.StreamableLike.md)<`T`, `E`, [`StreamLike`](../interfaces/observable.StreamLike.md)<`T`, `E`\>\>

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

[`StreamableLike`](../interfaces/streamable.StreamableLike.md)<`T`, `E`, [`StreamLike`](../interfaces/observable.StreamLike.md)<`T`, `E`\>\>

▸ **createLiftedStreamable**<`T`, `A`, `B`, `C`, `D`, `E`, `F`\>(`op1`, `op2`, `op3`, `op4`, `op5`, `op6`): [`StreamableLike`](../interfaces/streamable.StreamableLike.md)<`T`, `F`, [`StreamLike`](../interfaces/observable.StreamLike.md)<`T`, `F`\>\>

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

[`StreamableLike`](../interfaces/streamable.StreamableLike.md)<`T`, `F`, [`StreamLike`](../interfaces/observable.StreamLike.md)<`T`, `F`\>\>

▸ **createLiftedStreamable**<`T`, `A`, `B`, `C`, `D`, `E`, `F`, `G`\>(`op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`): [`StreamableLike`](../interfaces/streamable.StreamableLike.md)<`T`, `G`, [`StreamLike`](../interfaces/observable.StreamLike.md)<`T`, `G`\>\>

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

[`StreamableLike`](../interfaces/streamable.StreamableLike.md)<`T`, `G`, [`StreamLike`](../interfaces/observable.StreamLike.md)<`T`, `G`\>\>

▸ **createLiftedStreamable**<`T`, `A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`\>(`op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`, `op8`): [`StreamableLike`](../interfaces/streamable.StreamableLike.md)<`T`, `H`, [`StreamLike`](../interfaces/observable.StreamLike.md)<`T`, `H`\>\>

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

[`StreamableLike`](../interfaces/streamable.StreamableLike.md)<`T`, `H`, [`StreamLike`](../interfaces/observable.StreamLike.md)<`T`, `H`\>\>

▸ **createLiftedStreamable**<`T`, `A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`\>(`op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`, `op8`, `op9`): [`StreamableLike`](../interfaces/streamable.StreamableLike.md)<`T`, `I`, [`StreamLike`](../interfaces/observable.StreamLike.md)<`T`, `I`\>\>

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

[`StreamableLike`](../interfaces/streamable.StreamableLike.md)<`T`, `I`, [`StreamLike`](../interfaces/observable.StreamLike.md)<`T`, `I`\>\>

▸ **createLiftedStreamable**<`T`, `A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`\>(`op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`, `op8`, `op9`, `op10`): [`StreamableLike`](../interfaces/streamable.StreamableLike.md)<`T`, `J`, [`StreamLike`](../interfaces/observable.StreamLike.md)<`T`, `J`\>\>

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

[`StreamableLike`](../interfaces/streamable.StreamableLike.md)<`T`, `J`, [`StreamLike`](../interfaces/observable.StreamLike.md)<`T`, `J`\>\>

▸ **createLiftedStreamable**<`T`, `A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`\>(`op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`, `op8`, `op9`, `op10`, `op11`): [`StreamableLike`](../interfaces/streamable.StreamableLike.md)<`T`, `K`, [`StreamLike`](../interfaces/observable.StreamLike.md)<`T`, `K`\>\>

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

[`StreamableLike`](../interfaces/streamable.StreamableLike.md)<`T`, `K`, [`StreamLike`](../interfaces/observable.StreamLike.md)<`T`, `K`\>\>

▸ **createLiftedStreamable**<`T`, `A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`\>(`op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`, `op8`, `op9`, `op10`, `op11`, `op12`): [`StreamableLike`](../interfaces/streamable.StreamableLike.md)<`T`, `L`, [`StreamLike`](../interfaces/observable.StreamLike.md)<`T`, `L`\>\>

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

[`StreamableLike`](../interfaces/streamable.StreamableLike.md)<`T`, `L`, [`StreamLike`](../interfaces/observable.StreamLike.md)<`T`, `L`\>\>

___

### createStateStore

▸ **createStateStore**<`T`\>(`initialState`, `options?`): [`StreamableStateLike`](../interfaces/streamable.StreamableStateLike.md)<`T`\>

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

[`StreamableStateLike`](../interfaces/streamable.StreamableStateLike.md)<`T`\>

___

### createStreamble

▸ **createStreamble**<`TReq`, `TData`, `TStream`\>(`stream`): [`StreamableLike`](../interfaces/streamable.StreamableLike.md)<`TReq`, `TData`, `TStream`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TReq` | `TReq` |
| `TData` | `TData` |
| `TStream` | extends [`StreamLike`](../interfaces/observable.StreamLike.md)<`TReq`, `TData`, `TStream`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `stream` | (`scheduler`: [`SchedulerLike`](../interfaces/scheduler.SchedulerLike.md), `options?`: { `replay?`: `number`  }) => `TStream` |

#### Returns

[`StreamableLike`](../interfaces/streamable.StreamableLike.md)<`TReq`, `TData`, `TStream`\>

___

### empty

▸ **empty**<`TReq`, `T`\>(): [`StreamableLike`](../interfaces/streamable.StreamableLike.md)<`TReq`, `T`, [`StreamLike`](../interfaces/observable.StreamLike.md)<`TReq`, `T`\>\>

Returns an empty `StreamableLike` that always returns
a disposed `StreamLike` instance.

#### Type parameters

| Name |
| :------ |
| `TReq` |
| `T` |

#### Returns

[`StreamableLike`](../interfaces/streamable.StreamableLike.md)<`TReq`, `T`, [`StreamLike`](../interfaces/observable.StreamLike.md)<`TReq`, `T`\>\>

___

### flow

▸ **flow**<`T`\>(`__namedParameters?`): [`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>, [`FlowableLike`](../interfaces/streamable.FlowableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `__namedParameters?` | `Object` |
| `__namedParameters.scheduler?` | [`SchedulerLike`](../interfaces/scheduler.SchedulerLike.md) |

#### Returns

[`Function1`](functions.md#function1)<[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`T`\>, [`FlowableLike`](../interfaces/streamable.FlowableLike.md)<`T`\>\>

___

### fromArray

▸ **fromArray**<`T`\>(`options?`): [`Function1`](functions.md#function1)<readonly `T`[], [`AsyncEnumerableLike`](../interfaces/streamable.AsyncEnumerableLike.md)<`T`\>\>

Returns an `AsyncEnumerableLike` from the provided array.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.delay?` | `number` |
| `options.endIndex?` | `number` |
| `options.startIndex?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<readonly `T`[], [`AsyncEnumerableLike`](../interfaces/streamable.AsyncEnumerableLike.md)<`T`\>\>

___

### fromEnumerable

▸ **fromEnumerable**<`T`\>(): [`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`T`\>, [`AsyncEnumerableLike`](../interfaces/streamable.AsyncEnumerableLike.md)<`T`\>\>

Returns an `AsyncEnumerableLike` from the provided iterable.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<[`EnumerableLike`](../interfaces/enumerable.EnumerableLike.md)<`T`\>, [`AsyncEnumerableLike`](../interfaces/streamable.AsyncEnumerableLike.md)<`T`\>\>

___

### fromIterable

▸ **fromIterable**<`T`\>(): [`Function1`](functions.md#function1)<`Iterable`<`T`\>, [`AsyncEnumerableLike`](../interfaces/streamable.AsyncEnumerableLike.md)<`T`\>\>

Returns an `AsyncEnumerableLike` from the provided iterable.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](functions.md#function1)<`Iterable`<`T`\>, [`AsyncEnumerableLike`](../interfaces/streamable.AsyncEnumerableLike.md)<`T`\>\>

___

### generate

▸ **generate**<`T`\>(`generator`, `initialValue`, `options?`): [`AsyncEnumerableLike`](../interfaces/streamable.AsyncEnumerableLike.md)<`T`\>

Generates an `AsyncEnumerableLike` sequence from a generator function
that is applied to an accumulator value.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `generator` | [`Updater`](functions.md#updater)<`T`\> | The generator function. |
| `initialValue` | [`Factory`](functions.md#factory)<`T`\> | Factory function to generate the initial accumulator. |
| `options?` | `Object` | - |
| `options.delay?` | `number` | - |

#### Returns

[`AsyncEnumerableLike`](../interfaces/streamable.AsyncEnumerableLike.md)<`T`\>

___

### identity

▸ **identity**<`T`\>(): [`StreamableLike`](../interfaces/streamable.StreamableLike.md)<`T`, `T`, [`StreamLike`](../interfaces/observable.StreamLike.md)<`T`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`StreamableLike`](../interfaces/streamable.StreamableLike.md)<`T`, `T`, [`StreamLike`](../interfaces/observable.StreamLike.md)<`T`, `T`\>\>

___

### sinkInto

▸ **sinkInto**<`TReq`, `T`, `TOut`\>(`dest`): (`src`: [`StreamableLike`](../interfaces/streamable.StreamableLike.md)<`TReq`, `T`, [`StreamLike`](../interfaces/observable.StreamLike.md)<`TReq`, `T`\>\>) => [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TOut`\>

#### Type parameters

| Name |
| :------ |
| `TReq` |
| `T` |
| `TOut` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `dest` | [`StreamableLike`](../interfaces/streamable.StreamableLike.md)<`T`, `TReq`, [`StreamLike`](../interfaces/observable.StreamLike.md)<`T`, `TReq`\>\> |

#### Returns

`fn`

▸ (`src`): [`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TOut`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `src` | [`StreamableLike`](../interfaces/streamable.StreamableLike.md)<`TReq`, `T`, [`StreamLike`](../interfaces/observable.StreamLike.md)<`TReq`, `T`\>\> |

##### Returns

[`ObservableLike`](../interfaces/observable.ObservableLike.md)<`TOut`\>

___

### stream

▸ **stream**<`TReq`, `T`, `TStream`\>(`scheduler`, `options?`): [`Function1`](functions.md#function1)<[`StreamableLike`](../interfaces/streamable.StreamableLike.md)<`TReq`, `T`, `TStream`\>, `TStream`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TReq` | `TReq` |
| `T` | `T` |
| `TStream` | extends [`StreamLike`](../interfaces/observable.StreamLike.md)<`TReq`, `T`, `TStream`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](../interfaces/scheduler.SchedulerLike.md) |
| `options?` | `Object` |
| `options.replay?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<[`StreamableLike`](../interfaces/streamable.StreamableLike.md)<`TReq`, `T`, `TStream`\>, `TStream`\>
