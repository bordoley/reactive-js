[Reactive-JS](../README.md) / sink

# Module: sink

## Table of contents

### Interfaces

- [Lift](../interfaces/sink.Lift.md)
- [Sink](../interfaces/sink.Sink.md)
- [SinkLike](../interfaces/sink.SinkLike.md)
- [SourceLike](../interfaces/sink.SourceLike.md)

### Type Aliases

- [SinkOf](sink.md#sinkof)

### Functions

- [createKeepOperator](sink.md#createkeepoperator)
- [createMapOperator](sink.md#createmapoperator)
- [createOnNotifyOperator](sink.md#createonnotifyoperator)
- [createPairwiseOperator](sink.md#createpairwiseoperator)
- [createReduceOperator](sink.md#createreduceoperator)
- [createScanOperator](sink.md#createscanoperator)
- [createSkipFirstOperator](sink.md#createskipfirstoperator)
- [createTakeFirstOperator](sink.md#createtakefirstoperator)
- [createTakeLastOperator](sink.md#createtakelastoperator)
- [createTakeWhileOperator](sink.md#createtakewhileoperator)
- [notifyDecodeWithCharset](sink.md#notifydecodewithcharset)
- [notifyDistinctUntilChanged](sink.md#notifydistinctuntilchanged)

## Type Aliases

### SinkOf

Ƭ **SinkOf**<`C`, `T`\>: `C` extends { `sinkType`: `unknown`  } ? `C` & { `T`: `T`  }[``"sinkType"``] : { `_C`: `C` ; `_T`: () => `T`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`SourceLike`](../interfaces/sink.SourceLike.md) |
| `T` | `T` |

## Functions

### createKeepOperator

▸ **createKeepOperator**<`C`\>(`m`, `KeepSink`): <T_1\>(`predicate`: [`Predicate`](functions.md#predicate)<`T_1`\>) => [`ContainerOperator`](container.md#containeroperator)<`C`, `T_1`, `T_1`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`SourceLike`](../interfaces/sink.SourceLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`Lift`](../interfaces/sink.Lift.md)<`C`\> |
| `KeepSink` | <T\>(`delegate`: [`SinkOf`](sink.md#sinkof)<`C`, `T`\>, `predicate`: [`Predicate`](functions.md#predicate)<`T`\>) => [`SinkOf`](sink.md#sinkof)<`C`, `T`\> & { `delegate`: [`SinkOf`](sink.md#sinkof)<`C`, `T`\> ; `predicate`: [`Predicate`](functions.md#predicate)<`T`\>  } |

#### Returns

`fn`

▸ <`T_1`\>(`predicate`): [`ContainerOperator`](container.md#containeroperator)<`C`, `T_1`, `T_1`\>

##### Type parameters

| Name |
| :------ |
| `T_1` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T_1`\> |

##### Returns

[`ContainerOperator`](container.md#containeroperator)<`C`, `T_1`, `T_1`\>

___

### createMapOperator

▸ **createMapOperator**<`C`\>(`m`, `MapSink`): <TA_1, TB_1\>(`mapper`: [`Function1`](functions.md#function1)<`TA_1`, `TB_1`\>) => [`ContainerOperator`](container.md#containeroperator)<`C`, `TA_1`, `TB_1`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`SourceLike`](../interfaces/sink.SourceLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`Lift`](../interfaces/sink.Lift.md)<`C`\> |
| `MapSink` | <TA, TB\>(`delegate`: [`SinkOf`](sink.md#sinkof)<`C`, `TB`\>, `mapper`: [`Function1`](functions.md#function1)<`TA`, `TB`\>) => [`SinkOf`](sink.md#sinkof)<`C`, `TA`\> & { `delegate`: [`SinkLike`](../interfaces/sink.SinkLike.md)<`TB`\> ; `mapper`: [`Function1`](functions.md#function1)<`TA`, `TB`\>  } |

#### Returns

`fn`

▸ <`TA_1`, `TB_1`\>(`mapper`): [`ContainerOperator`](container.md#containeroperator)<`C`, `TA_1`, `TB_1`\>

##### Type parameters

| Name |
| :------ |
| `TA_1` |
| `TB_1` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `mapper` | [`Function1`](functions.md#function1)<`TA_1`, `TB_1`\> |

##### Returns

[`ContainerOperator`](container.md#containeroperator)<`C`, `TA_1`, `TB_1`\>

___

### createOnNotifyOperator

▸ **createOnNotifyOperator**<`C`\>(`m`, `OnNotifySink`): <T_1\>(`onNotify`: [`SideEffect1`](functions.md#sideeffect1)<`T_1`\>) => [`ContainerOperator`](container.md#containeroperator)<`C`, `T_1`, `T_1`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`SourceLike`](../interfaces/sink.SourceLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`Lift`](../interfaces/sink.Lift.md)<`C`\> |
| `OnNotifySink` | <T\>(`delegate`: [`SinkOf`](sink.md#sinkof)<`C`, `T`\>, `onNotify`: [`SideEffect1`](functions.md#sideeffect1)<`T`\>) => [`SinkOf`](sink.md#sinkof)<`C`, `T`\> & { `delegate`: [`SinkLike`](../interfaces/sink.SinkLike.md)<`T`\> ; `onNotify`: [`SideEffect1`](functions.md#sideeffect1)<`T`\>  } |

#### Returns

`fn`

▸ <`T_1`\>(`onNotify`): [`ContainerOperator`](container.md#containeroperator)<`C`, `T_1`, `T_1`\>

##### Type parameters

| Name |
| :------ |
| `T_1` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `onNotify` | [`SideEffect1`](functions.md#sideeffect1)<`T_1`\> |

##### Returns

[`ContainerOperator`](container.md#containeroperator)<`C`, `T_1`, `T_1`\>

___

### createPairwiseOperator

▸ **createPairwiseOperator**<`C`\>(`m`, `PairwiseSink`): <T_1\>() => [`ContainerOperator`](container.md#containeroperator)<`C`, `T_1`, [[`Option`](option.md#option)<`T_1`\>, `T_1`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`SourceLike`](../interfaces/sink.SourceLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`Lift`](../interfaces/sink.Lift.md)<`C`\> |
| `PairwiseSink` | <T\>(`delegate`: [`SinkOf`](sink.md#sinkof)<`C`, [[`Option`](option.md#option)<`T`\>, `T`]\>) => [`SinkOf`](sink.md#sinkof)<`C`, `T`\> & { `delegate`: [`SinkOf`](sink.md#sinkof)<`C`, [[`Option`](option.md#option)<`T`\>, `T`]\> ; `hasPrev`: `boolean` ; `prev`: [`Option`](option.md#option)<`T`\>  } |

#### Returns

`fn`

▸ <`T_1`\>(): [`ContainerOperator`](container.md#containeroperator)<`C`, `T_1`, [[`Option`](option.md#option)<`T_1`\>, `T_1`]\>

##### Type parameters

| Name |
| :------ |
| `T_1` |

##### Returns

[`ContainerOperator`](container.md#containeroperator)<`C`, `T_1`, [[`Option`](option.md#option)<`T_1`\>, `T_1`]\>

___

### createReduceOperator

▸ **createReduceOperator**<`C`\>(`m`, `ReduceSink`): <T_1, TAcc_1\>(`reducer`: [`Reducer`](functions.md#reducer)<`T_1`, `TAcc_1`\>, `initialValue`: [`Factory`](functions.md#factory)<`TAcc_1`\>) => [`ContainerOperator`](container.md#containeroperator)<`C`, `T_1`, `TAcc_1`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`SourceLike`](../interfaces/sink.SourceLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`FromArray`](../interfaces/container.FromArray.md)<`C`, [`FromArrayOptions`](../interfaces/container.FromArrayOptions.md)\> & [`Lift`](../interfaces/sink.Lift.md)<`C`\> & [`Sink`](../interfaces/sink.Sink.md)<`C`\> |
| `ReduceSink` | <T, TAcc\>(`delegate`: [`SinkOf`](sink.md#sinkof)<`C`, `TAcc`\>, `reducer`: [`Reducer`](functions.md#reducer)<`T`, `TAcc`\>, `acc`: `TAcc`) => [`SinkOf`](sink.md#sinkof)<`C`, `T`\> & { `acc`: `TAcc` ; `reducer`: [`Reducer`](functions.md#reducer)<`T`, `TAcc`\>  } |

#### Returns

`fn`

▸ <`T_1`, `TAcc_1`\>(`reducer`, `initialValue`): [`ContainerOperator`](container.md#containeroperator)<`C`, `T_1`, `TAcc_1`\>

##### Type parameters

| Name |
| :------ |
| `T_1` |
| `TAcc_1` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `reducer` | [`Reducer`](functions.md#reducer)<`T_1`, `TAcc_1`\> |
| `initialValue` | [`Factory`](functions.md#factory)<`TAcc_1`\> |

##### Returns

[`ContainerOperator`](container.md#containeroperator)<`C`, `T_1`, `TAcc_1`\>

___

### createScanOperator

▸ **createScanOperator**<`C`\>(`m`, `ScanSink`): <T_1, TAcc_1\>(`reducer`: [`Reducer`](functions.md#reducer)<`T_1`, `TAcc_1`\>, `initialValue`: [`Factory`](functions.md#factory)<`TAcc_1`\>) => [`ContainerOperator`](container.md#containeroperator)<`C`, `T_1`, `TAcc_1`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`SourceLike`](../interfaces/sink.SourceLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`Lift`](../interfaces/sink.Lift.md)<`C`\> |
| `ScanSink` | <T, TAcc\>(`delegate`: [`SinkOf`](sink.md#sinkof)<`C`, `TAcc`\>, `reducer`: [`Reducer`](functions.md#reducer)<`T`, `TAcc`\>, `acc`: `TAcc`) => [`SinkOf`](sink.md#sinkof)<`C`, `T`\> & { `acc`: `TAcc` ; `delegate`: [`SinkOf`](sink.md#sinkof)<`C`, `TAcc`\> ; `reducer`: [`Reducer`](functions.md#reducer)<`T`, `TAcc`\>  } |

#### Returns

`fn`

▸ <`T_1`, `TAcc_1`\>(`reducer`, `initialValue`): [`ContainerOperator`](container.md#containeroperator)<`C`, `T_1`, `TAcc_1`\>

##### Type parameters

| Name |
| :------ |
| `T_1` |
| `TAcc_1` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `reducer` | [`Reducer`](functions.md#reducer)<`T_1`, `TAcc_1`\> |
| `initialValue` | [`Factory`](functions.md#factory)<`TAcc_1`\> |

##### Returns

[`ContainerOperator`](container.md#containeroperator)<`C`, `T_1`, `TAcc_1`\>

___

### createSkipFirstOperator

▸ **createSkipFirstOperator**<`C`\>(`m`, `SkipFirstSink`): <T_1\>(`options?`: { `count?`: `number`  }) => [`ContainerOperator`](container.md#containeroperator)<`C`, `T_1`, `T_1`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`SourceLike`](../interfaces/sink.SourceLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`Lift`](../interfaces/sink.Lift.md)<`C`\> |
| `SkipFirstSink` | <T\>(`delegate`: [`SinkOf`](sink.md#sinkof)<`C`, `T`\>, `skipCount`: `number`) => [`SinkOf`](sink.md#sinkof)<`C`, `T`\> & { `count`: `number` ; `delegate`: [`SinkOf`](sink.md#sinkof)<`C`, `T`\> ; `skipCount`: `number`  } |

#### Returns

`fn`

▸ <`T_1`\>(`options?`): [`ContainerOperator`](container.md#containeroperator)<`C`, `T_1`, `T_1`\>

##### Type parameters

| Name |
| :------ |
| `T_1` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count?` | `number` |

##### Returns

[`ContainerOperator`](container.md#containeroperator)<`C`, `T_1`, `T_1`\>

___

### createTakeFirstOperator

▸ **createTakeFirstOperator**<`C`\>(`m`, `TakeFirstSink`): <T_1\>(`options?`: { `count?`: `number`  }) => [`ContainerOperator`](container.md#containeroperator)<`C`, `T_1`, `T_1`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`SourceLike`](../interfaces/sink.SourceLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`FromArray`](../interfaces/container.FromArray.md)<`C`, [`FromArrayOptions`](../interfaces/container.FromArrayOptions.md)\> & [`Lift`](../interfaces/sink.Lift.md)<`C`\> |
| `TakeFirstSink` | <T\>(`delegate`: [`SinkOf`](sink.md#sinkof)<`C`, `T`\>, `maxCount`: `number`) => [`SinkOf`](sink.md#sinkof)<`C`, `T`\> & { `count`: `number` ; `delegate`: [`SinkOf`](sink.md#sinkof)<`C`, `T`\> ; `maxCount`: `number`  } |

#### Returns

`fn`

▸ <`T_1`\>(`options?`): [`ContainerOperator`](container.md#containeroperator)<`C`, `T_1`, `T_1`\>

##### Type parameters

| Name |
| :------ |
| `T_1` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count?` | `number` |

##### Returns

[`ContainerOperator`](container.md#containeroperator)<`C`, `T_1`, `T_1`\>

___

### createTakeLastOperator

▸ **createTakeLastOperator**<`C`\>(`m`, `TakeLastSink`): <T_1\>(`options?`: { `count?`: `number`  }) => [`ContainerOperator`](container.md#containeroperator)<`C`, `T_1`, `T_1`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`SourceLike`](../interfaces/sink.SourceLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`FromArray`](../interfaces/container.FromArray.md)<`C`, [`FromArrayOptions`](../interfaces/container.FromArrayOptions.md)\> & [`Sink`](../interfaces/sink.Sink.md)<`C`\> & [`Lift`](../interfaces/sink.Lift.md)<`C`\> |
| `TakeLastSink` | <T\>(`delegate`: [`SinkOf`](sink.md#sinkof)<`C`, `T`\>, `maxCount`: `number`) => [`SinkOf`](sink.md#sinkof)<`C`, `T`\> & { `last`: `T`[] ; `maxCount`: `number`  } |

#### Returns

`fn`

▸ <`T_1`\>(`options?`): [`ContainerOperator`](container.md#containeroperator)<`C`, `T_1`, `T_1`\>

##### Type parameters

| Name |
| :------ |
| `T_1` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count?` | `number` |

##### Returns

[`ContainerOperator`](container.md#containeroperator)<`C`, `T_1`, `T_1`\>

___

### createTakeWhileOperator

▸ **createTakeWhileOperator**<`C`\>(`m`, `TakeWhileSink`): <T_1\>(`predicate`: [`Predicate`](functions.md#predicate)<`T_1`\>, `options?`: { `inclusive?`: `boolean`  }) => [`ContainerOperator`](container.md#containeroperator)<`C`, `T_1`, `T_1`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`SourceLike`](../interfaces/sink.SourceLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`Lift`](../interfaces/sink.Lift.md)<`C`\> |
| `TakeWhileSink` | <T\>(`delegate`: [`SinkOf`](sink.md#sinkof)<`C`, `T`\>, `predicate`: [`Predicate`](functions.md#predicate)<`T`\>, `inclusive`: `boolean`) => [`SinkOf`](sink.md#sinkof)<`C`, `T`\> & { `delegate`: [`SinkOf`](sink.md#sinkof)<`C`, `T`\> ; `inclusive`: `boolean` ; `predicate`: [`Predicate`](functions.md#predicate)<`T`\>  } |

#### Returns

`fn`

▸ <`T_1`\>(`predicate`, `options?`): [`ContainerOperator`](container.md#containeroperator)<`C`, `T_1`, `T_1`\>

##### Type parameters

| Name |
| :------ |
| `T_1` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T_1`\> |
| `options?` | `Object` |
| `options.inclusive?` | `boolean` |

##### Returns

[`ContainerOperator`](container.md#containeroperator)<`C`, `T_1`, `T_1`\>

___

### notifyDecodeWithCharset

▸ **notifyDecodeWithCharset**(`this`, `next`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`SinkLike`](../interfaces/sink.SinkLike.md)<`ArrayBuffer`\> & { `delegate`: [`SinkLike`](../interfaces/sink.SinkLike.md)<`string`\> ; `textDecoder`: `TextDecoder`  } |
| `next` | `ArrayBuffer` |

#### Returns

`void`

___

### notifyDistinctUntilChanged

▸ **notifyDistinctUntilChanged**<`T`\>(`this`, `next`): `void`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `this` | [`SinkLike`](../interfaces/sink.SinkLike.md)<`T`\> & { `delegate`: [`SinkLike`](../interfaces/sink.SinkLike.md)<`T`\> ; `equality`: [`Equality`](functions.md#equality)<`T`\> ; `hasValue`: `boolean` ; `prev`: [`Option`](option.md#option)<`T`\>  } |
| `next` | `T` |

#### Returns

`void`
