[Reactive-JS](../README.md) / streamable

# Module: streamable

## Table of contents

### Interfaces

- [StreamableLike](../interfaces/streamable.StreamableLike.md)
- [StreamableStateLike](../interfaces/streamable.StreamableStateLike.md)

### Functions

- [\_\_state](streamable.md#__state)
- [\_\_stream](streamable.md#__stream)
- [createActionReducer](streamable.md#createactionreducer)
- [createLiftedStreamable](streamable.md#createliftedstreamable)
- [createStateStore](streamable.md#createstatestore)
- [createStreamble](streamable.md#createstreamble)
- [sinkInto](streamable.md#sinkinto)
- [sourceFrom](streamable.md#sourcefrom)
- [stream](streamable.md#stream)

## Functions

### \_\_state

▸ **__state**<`T`\>(`initialState`, `options?`): [`StreamLike`](../interfaces/stream.StreamLike.md)<[`Updater`](functions.md#updater)<`T`\>, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `initialState` | () => `T` |
| `options?` | `Object` |
| `options.equality?` | [`Option`](option.md#option)<[`Equality`](functions.md#equality)<`T`\>\> |

#### Returns

[`StreamLike`](../interfaces/stream.StreamLike.md)<[`Updater`](functions.md#updater)<`T`\>, `T`\>

___

### \_\_stream

▸ **__stream**<`TReq`, `T`, `TStream`\>(`streamable`, `__namedParameters?`): `TStream`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TReq` | `TReq` |
| `T` | `T` |
| `TStream` | extends [`StreamLike`](../interfaces/stream.StreamLike.md)<`TReq`, `T`, `TStream`\> |

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

### createActionReducer

▸ **createActionReducer**<`TAction`, `T`\>(`reducer`, `initialState`, `options?`): [`StreamableLike`](../interfaces/streamable.StreamableLike.md)<`TAction`, `T`, [`StreamLike`](../interfaces/stream.StreamLike.md)<`TAction`, `T`\>\>

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

[`StreamableLike`](../interfaces/streamable.StreamableLike.md)<`TAction`, `T`, [`StreamLike`](../interfaces/stream.StreamLike.md)<`TAction`, `T`\>\>

___

### createLiftedStreamable

▸ **createLiftedStreamable**<`T`, `A`\>(`op1`): [`StreamableLike`](../interfaces/streamable.StreamableLike.md)<`T`, `A`\>

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

[`StreamableLike`](../interfaces/streamable.StreamableLike.md)<`T`, `A`\>

▸ **createLiftedStreamable**<`T`, `A`, `B`\>(`op1`, `op2`): [`StreamableLike`](../interfaces/streamable.StreamableLike.md)<`T`, `B`\>

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

[`StreamableLike`](../interfaces/streamable.StreamableLike.md)<`T`, `B`\>

▸ **createLiftedStreamable**<`T`, `A`, `B`, `C`\>(`op1`, `op2`, `op3`): [`StreamableLike`](../interfaces/streamable.StreamableLike.md)<`T`, `C`\>

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

[`StreamableLike`](../interfaces/streamable.StreamableLike.md)<`T`, `C`\>

▸ **createLiftedStreamable**<`T`, `A`, `B`, `C`, `D`\>(`op1`, `op2`, `op3`, `op4`): [`StreamableLike`](../interfaces/streamable.StreamableLike.md)<`T`, `D`\>

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

[`StreamableLike`](../interfaces/streamable.StreamableLike.md)<`T`, `D`\>

▸ **createLiftedStreamable**<`T`, `A`, `B`, `C`, `D`, `E`\>(`op1`, `op2`, `op3`, `op4`, `op5`): [`StreamableLike`](../interfaces/streamable.StreamableLike.md)<`T`, `E`\>

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

[`StreamableLike`](../interfaces/streamable.StreamableLike.md)<`T`, `E`\>

▸ **createLiftedStreamable**<`T`, `A`, `B`, `C`, `D`, `E`, `F`\>(`op1`, `op2`, `op3`, `op4`, `op5`, `op6`): [`StreamableLike`](../interfaces/streamable.StreamableLike.md)<`T`, `F`\>

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

[`StreamableLike`](../interfaces/streamable.StreamableLike.md)<`T`, `F`\>

▸ **createLiftedStreamable**<`T`, `A`, `B`, `C`, `D`, `E`, `F`, `G`\>(`op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`): [`StreamableLike`](../interfaces/streamable.StreamableLike.md)<`T`, `G`\>

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

[`StreamableLike`](../interfaces/streamable.StreamableLike.md)<`T`, `G`\>

▸ **createLiftedStreamable**<`T`, `A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`\>(`op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`, `op8`): [`StreamableLike`](../interfaces/streamable.StreamableLike.md)<`T`, `H`\>

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

[`StreamableLike`](../interfaces/streamable.StreamableLike.md)<`T`, `H`\>

▸ **createLiftedStreamable**<`T`, `A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`\>(`op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`, `op8`, `op9`): [`StreamableLike`](../interfaces/streamable.StreamableLike.md)<`T`, `I`\>

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

[`StreamableLike`](../interfaces/streamable.StreamableLike.md)<`T`, `I`\>

▸ **createLiftedStreamable**<`T`, `A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`\>(`op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`, `op8`, `op9`, `op10`): [`StreamableLike`](../interfaces/streamable.StreamableLike.md)<`T`, `J`\>

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

[`StreamableLike`](../interfaces/streamable.StreamableLike.md)<`T`, `J`\>

▸ **createLiftedStreamable**<`T`, `A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`\>(`op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`, `op8`, `op9`, `op10`, `op11`): [`StreamableLike`](../interfaces/streamable.StreamableLike.md)<`T`, `K`\>

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

[`StreamableLike`](../interfaces/streamable.StreamableLike.md)<`T`, `K`\>

▸ **createLiftedStreamable**<`T`, `A`, `B`, `C`, `D`, `E`, `F`, `G`, `H`, `I`, `J`, `K`, `L`\>(`op1`, `op2`, `op3`, `op4`, `op5`, `op6`, `op7`, `op8`, `op9`, `op10`, `op11`, `op12`): [`StreamableLike`](../interfaces/streamable.StreamableLike.md)<`T`, `L`\>

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

[`StreamableLike`](../interfaces/streamable.StreamableLike.md)<`T`, `L`\>

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
| `TStream` | extends [`StreamLike`](../interfaces/stream.StreamLike.md)<`TReq`, `TData`, `TStream`\> = [`StreamLike`](../interfaces/stream.StreamLike.md)<`TReq`, `TData`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `stream` | (`scheduler`: [`SchedulerLike`](../interfaces/scheduler.SchedulerLike.md), `options?`: { `replay?`: `number`  }) => `TStream` |

#### Returns

[`StreamableLike`](../interfaces/streamable.StreamableLike.md)<`TReq`, `TData`, `TStream`\>

___

### sinkInto

▸ **sinkInto**<`TReq`, `T`, `TSinkStream`\>(`dest`): (`src`: [`StreamableLike`](../interfaces/streamable.StreamableLike.md)<`TReq`, `T`, [`StreamLike`](../interfaces/stream.StreamLike.md)<`TReq`, `T`\>\>) => [`StreamableLike`](../interfaces/streamable.StreamableLike.md)<`TReq`, `T`, [`StreamLike`](../interfaces/stream.StreamLike.md)<`TReq`, `T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TReq` | `TReq` |
| `T` | `T` |
| `TSinkStream` | extends [`StreamLike`](../interfaces/stream.StreamLike.md)<`T`, `TReq`, `TSinkStream`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `dest` | `TSinkStream` |

#### Returns

`fn`

▸ (`src`): [`StreamableLike`](../interfaces/streamable.StreamableLike.md)<`TReq`, `T`, [`StreamLike`](../interfaces/stream.StreamLike.md)<`TReq`, `T`\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `src` | [`StreamableLike`](../interfaces/streamable.StreamableLike.md)<`TReq`, `T`, [`StreamLike`](../interfaces/stream.StreamLike.md)<`TReq`, `T`\>\> |

##### Returns

[`StreamableLike`](../interfaces/streamable.StreamableLike.md)<`TReq`, `T`, [`StreamLike`](../interfaces/stream.StreamLike.md)<`TReq`, `T`\>\>

___

### sourceFrom

▸ **sourceFrom**<`TReq`, `T`, `TSinkStream`\>(`streamable`): [`Function1`](functions.md#function1)<`TSinkStream`, `TSinkStream`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TReq` | `TReq` |
| `T` | `T` |
| `TSinkStream` | extends [`StreamLike`](../interfaces/stream.StreamLike.md)<`T`, `TReq`, `TSinkStream`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `streamable` | [`StreamableLike`](../interfaces/streamable.StreamableLike.md)<`TReq`, `T`, [`StreamLike`](../interfaces/stream.StreamLike.md)<`TReq`, `T`\>\> |

#### Returns

[`Function1`](functions.md#function1)<`TSinkStream`, `TSinkStream`\>

___

### stream

▸ **stream**<`TReq`, `T`, `TStream`\>(`scheduler`, `options?`): [`Function1`](functions.md#function1)<[`StreamableLike`](../interfaces/streamable.StreamableLike.md)<`TReq`, `T`, `TStream`\>, `TStream`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TReq` | `TReq` |
| `T` | `T` |
| `TStream` | extends [`StreamLike`](../interfaces/stream.StreamLike.md)<`TReq`, `T`, `TStream`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](../interfaces/scheduler.SchedulerLike.md) |
| `options?` | `Object` |
| `options.replay?` | `number` |

#### Returns

[`Function1`](functions.md#function1)<[`StreamableLike`](../interfaces/streamable.StreamableLike.md)<`TReq`, `T`, `TStream`\>, `TStream`\>
