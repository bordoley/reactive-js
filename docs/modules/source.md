[Reactive-JS](../README.md) / source

# Module: source

## Table of contents

### Classes

- [AbstractSource](../classes/source.AbstractSource.md)

### Interfaces

- [CreateDelegatingSink](../interfaces/source.CreateDelegatingSink.md)
- [Lift](../interfaces/source.Lift.md)
- [SinkLike](../interfaces/source.SinkLike.md)
- [SourceLike](../interfaces/source.SourceLike.md)

### Type Aliases

- [SinkOf](source.md#sinkof)

### Functions

- [createCatchErrorOperator](source.md#createcatcherroroperator)
- [createDecodeWithCharsetOperator](source.md#createdecodewithcharsetoperator)
- [createDistinctUntilChangedOperator](source.md#createdistinctuntilchangedoperator)
- [createEverySatisfyOperator](source.md#createeverysatisfyoperator)
- [createKeepOperator](source.md#createkeepoperator)
- [createMapOperator](source.md#createmapoperator)
- [createOnNotifyOperator](source.md#createonnotifyoperator)
- [createPairwiseOperator](source.md#createpairwiseoperator)
- [createReduceOperator](source.md#createreduceoperator)
- [createScanOperator](source.md#createscanoperator)
- [createSkipFirstOperator](source.md#createskipfirstoperator)
- [createSomeSatisfyOperator](source.md#createsomesatisfyoperator)
- [createTakeFirstOperator](source.md#createtakefirstoperator)
- [createTakeLastOperator](source.md#createtakelastoperator)
- [createTakeWhileOperator](source.md#createtakewhileoperator)
- [createThrowIfEmptyOperator](source.md#createthrowifemptyoperator)
- [createUsing](source.md#createusing)
- [sinkInto](source.md#sinkinto)

## Type Aliases

### SinkOf

Ƭ **SinkOf**<`C`, `T`\>: `C` extends { `sinkType`: `unknown`  } ? `C` & { `T`: `T`  }[``"sinkType"``] : { `_C`: `C` ; `_T`: () => `T`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`SourceLike`](../interfaces/source.SourceLike.md) |
| `T` | `T` |

## Functions

### createCatchErrorOperator

▸ **createCatchErrorOperator**<`C`\>(`m`): <T\>(`onError`: [`Function1`](functions.md#function1)<`unknown`, `void` \| [`ContainerOf`](container.md#containerof)<`C`, `T`\>\>) => [`ContainerOperator`](container.md#containeroperator)<`C`, `T`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`SourceLike`](../interfaces/source.SourceLike.md)<`C`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`CreateDelegatingSink`](../interfaces/source.CreateDelegatingSink.md)<`C`\> & [`Lift`](../interfaces/source.Lift.md)<`C`\> |

#### Returns

`fn`

▸ <`T`\>(`onError`): [`ContainerOperator`](container.md#containeroperator)<`C`, `T`, `T`\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `onError` | [`Function1`](functions.md#function1)<`unknown`, `void` \| [`ContainerOf`](container.md#containerof)<`C`, `T`\>\> |

##### Returns

[`ContainerOperator`](container.md#containeroperator)<`C`, `T`, `T`\>

___

### createDecodeWithCharsetOperator

▸ **createDecodeWithCharsetOperator**<`C`\>(`m`, `DecodeWithCharsetSink`): (`charset?`: `string`) => [`ContainerOperator`](container.md#containeroperator)<`C`, `ArrayBuffer`, `string`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`SourceLike`](../interfaces/source.SourceLike.md)<`C`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`FromArray`](../interfaces/container.FromArray.md)<`C`, [`FromArrayOptions`](../interfaces/container.FromArrayOptions.md)\> & [`Lift`](../interfaces/source.Lift.md)<`C`\> |
| `DecodeWithCharsetSink` | (`delegate`: [`SinkOf`](source.md#sinkof)<`C`, `string`\>, `textDecoder`: `TextDecoder`) => [`SinkOf`](source.md#sinkof)<`C`, `ArrayBuffer`\> & { `delegate`: [`SinkOf`](source.md#sinkof)<`C`, `string`\> ; `textDecoder`: `TextDecoder`  } |

#### Returns

`fn`

▸ (`charset?`): [`ContainerOperator`](container.md#containeroperator)<`C`, `ArrayBuffer`, `string`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `charset?` | `string` |

##### Returns

[`ContainerOperator`](container.md#containeroperator)<`C`, `ArrayBuffer`, `string`\>

___

### createDistinctUntilChangedOperator

▸ **createDistinctUntilChangedOperator**<`C`\>(`m`, `DistinctUntilChangedSink`): <T_1\>(`options?`: { `equality?`: [`Equality`](functions.md#equality)<`T_1`\>  }) => [`ContainerOperator`](container.md#containeroperator)<`C`, `T_1`, `T_1`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`SourceLike`](../interfaces/source.SourceLike.md)<`C`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`Lift`](../interfaces/source.Lift.md)<`C`\> |
| `DistinctUntilChangedSink` | <T\>(`delegate`: [`SinkOf`](source.md#sinkof)<`C`, `T`\>, `equality`: [`Equality`](functions.md#equality)<`T`\>) => [`SinkOf`](source.md#sinkof)<`C`, `T`\> & { `delegate`: [`SinkOf`](source.md#sinkof)<`C`, `T`\> ; `equality`: [`Equality`](functions.md#equality)<`T`\> ; `hasValue`: `boolean` ; `prev`: [`Option`](option.md#option)<`T`\>  } |

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
| `options.equality?` | [`Equality`](functions.md#equality)<`T_1`\> |

##### Returns

[`ContainerOperator`](container.md#containeroperator)<`C`, `T_1`, `T_1`\>

___

### createEverySatisfyOperator

▸ **createEverySatisfyOperator**<`C`\>(`m`, `EverySatisfySink`): <T_1\>(`predicate`: [`Predicate`](functions.md#predicate)<`T_1`\>) => [`ContainerOperator`](container.md#containeroperator)<`C`, `T_1`, `boolean`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`SourceLike`](../interfaces/source.SourceLike.md)<`C`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`FromArray`](../interfaces/container.FromArray.md)<`C`, [`FromArrayOptions`](../interfaces/container.FromArrayOptions.md)\> & [`Lift`](../interfaces/source.Lift.md)<`C`\> |
| `EverySatisfySink` | <T\>(`delegate`: [`SinkOf`](source.md#sinkof)<`C`, `boolean`\>, `predicate`: [`Predicate`](functions.md#predicate)<`T`\>) => [`SinkOf`](source.md#sinkof)<`C`, `T`\> & { `delegate`: [`SinkOf`](source.md#sinkof)<`C`, `boolean`\> ; `predicate`: [`Predicate`](functions.md#predicate)<`T`\>  } |

#### Returns

`fn`

▸ <`T_1`\>(`predicate`): [`ContainerOperator`](container.md#containeroperator)<`C`, `T_1`, `boolean`\>

##### Type parameters

| Name |
| :------ |
| `T_1` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T_1`\> |

##### Returns

[`ContainerOperator`](container.md#containeroperator)<`C`, `T_1`, `boolean`\>

___

### createKeepOperator

▸ **createKeepOperator**<`C`\>(`m`, `KeepSink`): <T_1\>(`predicate`: [`Predicate`](functions.md#predicate)<`T_1`\>) => [`ContainerOperator`](container.md#containeroperator)<`C`, `T_1`, `T_1`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`SourceLike`](../interfaces/source.SourceLike.md)<`C`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`Lift`](../interfaces/source.Lift.md)<`C`\> |
| `KeepSink` | <T\>(`delegate`: [`SinkOf`](source.md#sinkof)<`C`, `T`\>, `predicate`: [`Predicate`](functions.md#predicate)<`T`\>) => [`SinkOf`](source.md#sinkof)<`C`, `T`\> & { `delegate`: [`SinkOf`](source.md#sinkof)<`C`, `T`\> ; `predicate`: [`Predicate`](functions.md#predicate)<`T`\>  } |

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
| `C` | extends [`SourceLike`](../interfaces/source.SourceLike.md)<`C`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`Lift`](../interfaces/source.Lift.md)<`C`\> |
| `MapSink` | <TA, TB\>(`delegate`: [`SinkOf`](source.md#sinkof)<`C`, `TB`\>, `mapper`: [`Function1`](functions.md#function1)<`TA`, `TB`\>) => [`SinkOf`](source.md#sinkof)<`C`, `TA`\> & { `delegate`: [`SinkOf`](source.md#sinkof)<`C`, `TB`\> ; `mapper`: [`Function1`](functions.md#function1)<`TA`, `TB`\>  } |

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
| `C` | extends [`SourceLike`](../interfaces/source.SourceLike.md)<`C`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`Lift`](../interfaces/source.Lift.md)<`C`\> |
| `OnNotifySink` | <T\>(`delegate`: [`SinkOf`](source.md#sinkof)<`C`, `T`\>, `onNotify`: [`SideEffect1`](functions.md#sideeffect1)<`T`\>) => [`SinkOf`](source.md#sinkof)<`C`, `T`\> & { `delegate`: [`SinkOf`](source.md#sinkof)<`C`, `T`\> ; `onNotify`: [`SideEffect1`](functions.md#sideeffect1)<`T`\>  } |

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
| `C` | extends [`SourceLike`](../interfaces/source.SourceLike.md)<`C`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`Lift`](../interfaces/source.Lift.md)<`C`\> |
| `PairwiseSink` | <T\>(`delegate`: [`SinkOf`](source.md#sinkof)<`C`, [[`Option`](option.md#option)<`T`\>, `T`]\>) => [`SinkOf`](source.md#sinkof)<`C`, `T`\> & { `delegate`: [`SinkOf`](source.md#sinkof)<`C`, [[`Option`](option.md#option)<`T`\>, `T`]\> ; `hasPrev`: `boolean` ; `prev`: [`Option`](option.md#option)<`T`\>  } |

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
| `C` | extends [`SourceLike`](../interfaces/source.SourceLike.md)<`C`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`FromArray`](../interfaces/container.FromArray.md)<`C`, [`FromArrayOptions`](../interfaces/container.FromArrayOptions.md)\> & [`Lift`](../interfaces/source.Lift.md)<`C`\> |
| `ReduceSink` | <T, TAcc\>(`delegate`: [`SinkOf`](source.md#sinkof)<`C`, `TAcc`\>, `reducer`: [`Reducer`](functions.md#reducer)<`T`, `TAcc`\>, `acc`: `TAcc`) => [`SinkOf`](source.md#sinkof)<`C`, `T`\> & { `acc`: `TAcc` ; `reducer`: [`Reducer`](functions.md#reducer)<`T`, `TAcc`\>  } |

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
| `C` | extends [`SourceLike`](../interfaces/source.SourceLike.md)<`C`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`Lift`](../interfaces/source.Lift.md)<`C`\> |
| `ScanSink` | <T, TAcc\>(`delegate`: [`SinkOf`](source.md#sinkof)<`C`, `TAcc`\>, `reducer`: [`Reducer`](functions.md#reducer)<`T`, `TAcc`\>, `acc`: `TAcc`) => [`SinkOf`](source.md#sinkof)<`C`, `T`\> & { `acc`: `TAcc` ; `delegate`: [`SinkOf`](source.md#sinkof)<`C`, `TAcc`\> ; `reducer`: [`Reducer`](functions.md#reducer)<`T`, `TAcc`\>  } |

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
| `C` | extends [`SourceLike`](../interfaces/source.SourceLike.md)<`C`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`Lift`](../interfaces/source.Lift.md)<`C`\> |
| `SkipFirstSink` | <T\>(`delegate`: [`SinkOf`](source.md#sinkof)<`C`, `T`\>, `skipCount`: `number`) => [`SinkOf`](source.md#sinkof)<`C`, `T`\> & { `count`: `number` ; `delegate`: [`SinkOf`](source.md#sinkof)<`C`, `T`\> ; `skipCount`: `number`  } |

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

### createSomeSatisfyOperator

▸ **createSomeSatisfyOperator**<`C`\>(`m`, `SomeSatisfySink`): <T_1\>(`predicate`: [`Predicate`](functions.md#predicate)<`T_1`\>) => [`ContainerOperator`](container.md#containeroperator)<`C`, `T_1`, `boolean`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`SourceLike`](../interfaces/source.SourceLike.md)<`C`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`FromArray`](../interfaces/container.FromArray.md)<`C`, [`FromArrayOptions`](../interfaces/container.FromArrayOptions.md)\> & [`Lift`](../interfaces/source.Lift.md)<`C`\> |
| `SomeSatisfySink` | <T\>(`delegate`: [`SinkOf`](source.md#sinkof)<`C`, `boolean`\>, `predicate`: [`Predicate`](functions.md#predicate)<`T`\>) => [`SinkOf`](source.md#sinkof)<`C`, `T`\> & { `delegate`: [`SinkOf`](source.md#sinkof)<`C`, `boolean`\> ; `predicate`: [`Predicate`](functions.md#predicate)<`T`\>  } |

#### Returns

`fn`

▸ <`T_1`\>(`predicate`): [`ContainerOperator`](container.md#containeroperator)<`C`, `T_1`, `boolean`\>

##### Type parameters

| Name |
| :------ |
| `T_1` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](functions.md#predicate)<`T_1`\> |

##### Returns

[`ContainerOperator`](container.md#containeroperator)<`C`, `T_1`, `boolean`\>

___

### createTakeFirstOperator

▸ **createTakeFirstOperator**<`C`\>(`m`, `TakeFirstSink`): <T_1\>(`options?`: { `count?`: `number`  }) => [`ContainerOperator`](container.md#containeroperator)<`C`, `T_1`, `T_1`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`SourceLike`](../interfaces/source.SourceLike.md)<`C`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`FromArray`](../interfaces/container.FromArray.md)<`C`, [`FromArrayOptions`](../interfaces/container.FromArrayOptions.md)\> & [`Lift`](../interfaces/source.Lift.md)<`C`\> |
| `TakeFirstSink` | <T\>(`delegate`: [`SinkOf`](source.md#sinkof)<`C`, `T`\>, `maxCount`: `number`) => [`SinkOf`](source.md#sinkof)<`C`, `T`\> & { `count`: `number` ; `delegate`: [`SinkOf`](source.md#sinkof)<`C`, `T`\> ; `maxCount`: `number`  } |

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
| `C` | extends [`SourceLike`](../interfaces/source.SourceLike.md)<`C`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`FromArray`](../interfaces/container.FromArray.md)<`C`, [`FromArrayOptions`](../interfaces/container.FromArrayOptions.md)\> & [`Lift`](../interfaces/source.Lift.md)<`C`\> |
| `TakeLastSink` | <T\>(`delegate`: [`SinkOf`](source.md#sinkof)<`C`, `T`\>, `maxCount`: `number`) => [`SinkOf`](source.md#sinkof)<`C`, `T`\> & { `last`: `T`[] ; `maxCount`: `number`  } |

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
| `C` | extends [`SourceLike`](../interfaces/source.SourceLike.md)<`C`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`Lift`](../interfaces/source.Lift.md)<`C`\> |
| `TakeWhileSink` | <T\>(`delegate`: [`SinkOf`](source.md#sinkof)<`C`, `T`\>, `predicate`: [`Predicate`](functions.md#predicate)<`T`\>, `inclusive`: `boolean`) => [`SinkOf`](source.md#sinkof)<`C`, `T`\> & { `delegate`: [`SinkOf`](source.md#sinkof)<`C`, `T`\> ; `inclusive`: `boolean` ; `predicate`: [`Predicate`](functions.md#predicate)<`T`\>  } |

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

### createThrowIfEmptyOperator

▸ **createThrowIfEmptyOperator**<`C`\>(`m`, `ThrowIfEmptySink`): <T_1\>(`factory`: [`Factory`](functions.md#factory)<`unknown`\>) => [`ContainerOperator`](container.md#containeroperator)<`C`, `T_1`, `T_1`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`SourceLike`](../interfaces/source.SourceLike.md)<`C`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`Lift`](../interfaces/source.Lift.md)<`C`\> |
| `ThrowIfEmptySink` | <T\>(`delegate`: [`SinkOf`](source.md#sinkof)<`C`, `T`\>) => [`SinkOf`](source.md#sinkof)<`C`, `T`\> & { `delegate`: [`SinkOf`](source.md#sinkof)<`C`, `T`\> ; `isEmpty`: `boolean`  } |

#### Returns

`fn`

▸ <`T_1`\>(`factory`): [`ContainerOperator`](container.md#containeroperator)<`C`, `T_1`, `T_1`\>

##### Type parameters

| Name |
| :------ |
| `T_1` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](functions.md#factory)<`unknown`\> |

##### Returns

[`ContainerOperator`](container.md#containeroperator)<`C`, `T_1`, `T_1`\>

___

### createUsing

▸ **createUsing**<`C`\>(`UsingSource`): <TResource_1, T_1\>(`resourceFactory`: [`Factory`](functions.md#factory)<`TResource_1`\>, `observableFactory`: [`Function1`](functions.md#function1)<`TResource_1`, `C`\>) => `C`<TResource1, TResource2, T_2\>(`resourceFactory`: [`Factory`](functions.md#factory)<readonly [`TResource1`, `TResource2`]\>, `observableFactory`: [`Function2`](functions.md#function2)<`TResource1`, `TResource2`, `C`\>) => `C`<TResource1_1, TResource2_1, TResource3, T_3\>(`resourceFactory`: [`Factory`](functions.md#factory)<readonly [`TResource1_1`, `TResource2_1`, `TResource3`]\>, `observableFactory`: [`Function3`](functions.md#function3)<`TResource1_1`, `TResource2_1`, `TResource3`, `C`\>) => `C`<TResource1_2, TResource2_2, TResource3_1, TResource4, T_4\>(`resourceFactory`: [`Factory`](functions.md#factory)<readonly [`TResource1_2`, `TResource2_2`, `TResource3_1`, `TResource4`]\>, `observableFactory`: [`Function4`](functions.md#function4)<`TResource1_2`, `TResource2_2`, `TResource3_1`, `TResource4`, `C`\>) => `C`<TResource1_3, TResource2_3, TResource3_2, TResource4_1, TResource5, T_5\>(`resourceFactory`: [`Factory`](functions.md#factory)<readonly [`TResource1_3`, `TResource2_3`, `TResource3_2`, `TResource4_1`, `TResource5`]\>, `observableFactory`: [`Function5`](functions.md#function5)<`TResource1_3`, `TResource2_3`, `TResource3_2`, `TResource4_1`, `TResource5`, `C`\>) => `C`<TResource_2, T_6\>(`resourceFactory`: [`Factory`](functions.md#factory)<`TResource_2` \| readonly `TResource_2`[]\>, `runnableFactory`: (...`resources`: readonly `TResource_2`[]) => `C`) => `C`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`SourceLike`](../interfaces/source.SourceLike.md)<`C`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `UsingSource` | <TResource, T\>(`resourceFactory`: [`Factory`](functions.md#factory)<`TResource` \| readonly `TResource`[]\>, `sourceFactory`: (...`resources`: readonly `TResource`[]) => `C`) => `C` & { `resourceFactory`: [`Function1`](functions.md#function1)<[`SinkOf`](source.md#sinkof)<`C`, `T`\>, `TResource` \| readonly `TResource`[]\> ; `sourceFactory`: (...`resources`: readonly `TResource`[]) => `C`  } |

#### Returns

`fn`

▸ <`TResource_1`, `T_1`\>(`resourceFactory`, `observableFactory`): `C`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TResource_1` | extends [`DisposableLike`](../interfaces/disposable.DisposableLike.md) |
| `T_1` | `T_1` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `resourceFactory` | [`Factory`](functions.md#factory)<`TResource_1`\> |
| `observableFactory` | [`Function1`](functions.md#function1)<`TResource_1`, `C`\> |

##### Returns

`C`

▸ <`TResource1`, `TResource2`, `T_2`\>(`resourceFactory`, `observableFactory`): `C`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TResource1` | extends [`DisposableLike`](../interfaces/disposable.DisposableLike.md) |
| `TResource2` | extends [`DisposableLike`](../interfaces/disposable.DisposableLike.md) |
| `T_2` | `T_2` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `resourceFactory` | [`Factory`](functions.md#factory)<readonly [`TResource1`, `TResource2`]\> |
| `observableFactory` | [`Function2`](functions.md#function2)<`TResource1`, `TResource2`, `C`\> |

##### Returns

`C`

▸ <`TResource1_1`, `TResource2_1`, `TResource3`, `T_3`\>(`resourceFactory`, `observableFactory`): `C`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TResource1_1` | extends [`DisposableLike`](../interfaces/disposable.DisposableLike.md) |
| `TResource2_1` | extends [`DisposableLike`](../interfaces/disposable.DisposableLike.md) |
| `TResource3` | extends [`DisposableLike`](../interfaces/disposable.DisposableLike.md) |
| `T_3` | `T_3` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `resourceFactory` | [`Factory`](functions.md#factory)<readonly [`TResource1_1`, `TResource2_1`, `TResource3`]\> |
| `observableFactory` | [`Function3`](functions.md#function3)<`TResource1_1`, `TResource2_1`, `TResource3`, `C`\> |

##### Returns

`C`

▸ <`TResource1_2`, `TResource2_2`, `TResource3_1`, `TResource4`, `T_4`\>(`resourceFactory`, `observableFactory`): `C`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TResource1_2` | extends [`DisposableLike`](../interfaces/disposable.DisposableLike.md) |
| `TResource2_2` | extends [`DisposableLike`](../interfaces/disposable.DisposableLike.md) |
| `TResource3_1` | extends [`DisposableLike`](../interfaces/disposable.DisposableLike.md) |
| `TResource4` | extends [`DisposableLike`](../interfaces/disposable.DisposableLike.md) |
| `T_4` | `T_4` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `resourceFactory` | [`Factory`](functions.md#factory)<readonly [`TResource1_2`, `TResource2_2`, `TResource3_1`, `TResource4`]\> |
| `observableFactory` | [`Function4`](functions.md#function4)<`TResource1_2`, `TResource2_2`, `TResource3_1`, `TResource4`, `C`\> |

##### Returns

`C`

▸ <`TResource1_3`, `TResource2_3`, `TResource3_2`, `TResource4_1`, `TResource5`, `T_5`\>(`resourceFactory`, `observableFactory`): `C`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TResource1_3` | extends [`DisposableLike`](../interfaces/disposable.DisposableLike.md) |
| `TResource2_3` | extends [`DisposableLike`](../interfaces/disposable.DisposableLike.md) |
| `TResource3_2` | extends [`DisposableLike`](../interfaces/disposable.DisposableLike.md) |
| `TResource4_1` | extends [`DisposableLike`](../interfaces/disposable.DisposableLike.md) |
| `TResource5` | extends [`DisposableLike`](../interfaces/disposable.DisposableLike.md) |
| `T_5` | `T_5` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `resourceFactory` | [`Factory`](functions.md#factory)<readonly [`TResource1_3`, `TResource2_3`, `TResource3_2`, `TResource4_1`, `TResource5`]\> |
| `observableFactory` | [`Function5`](functions.md#function5)<`TResource1_3`, `TResource2_3`, `TResource3_2`, `TResource4_1`, `TResource5`, `C`\> |

##### Returns

`C`

▸ <`TResource_2`, `T_6`\>(`resourceFactory`, `runnableFactory`): `C`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TResource_2` | extends [`DisposableLike`](../interfaces/disposable.DisposableLike.md) |
| `T_6` | `T_6` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `resourceFactory` | [`Factory`](functions.md#factory)<`TResource_2` \| readonly `TResource_2`[]\> |
| `runnableFactory` | (...`resources`: readonly `TResource_2`[]) => `C` |

##### Returns

`C`

___

### sinkInto

▸ **sinkInto**<`C`, `T`\>(`sink`): [`SideEffect1`](functions.md#sideeffect1)<`C`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`SourceLike`](../interfaces/source.SourceLike.md)<`C`\> |
| `T` | `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `sink` | [`SinkOf`](source.md#sinkof)<`C`, `T`\> |

#### Returns

[`SideEffect1`](functions.md#sideeffect1)<`C`\>
