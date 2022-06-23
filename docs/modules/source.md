[Reactive-JS](../README.md) / source

# Module: source

## Table of contents

### Classes

- [AbstractDisposableSource](../classes/source.AbstractDisposableSource.md)
- [AbstractSource](../classes/source.AbstractSource.md)

### Interfaces

- [Lift](../interfaces/source.Lift.md)
- [SinkLike](../interfaces/source.SinkLike.md)
- [SourceLike](../interfaces/source.SourceLike.md)

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

## Functions

### createCatchErrorOperator

▸ **createCatchErrorOperator**<`C`\>(`m`, `CatchErrorSink`): <T_1\>(`onError`: [`Function1`](functions.md#function1)<`unknown`, `void` \| [`ContainerOf`](container.md#containerof)<`C`, `T_1`\>\>) => [`ContainerOperator`](container.md#containeroperator)<`C`, `T_1`, `T_1`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`SourceLike`](../interfaces/source.SourceLike.md)<`C`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`Lift`](../interfaces/source.Lift.md)<`C`\> |
| `CatchErrorSink` | <T\>(`delegate`: [`LiftedStateOf`](liftable.md#liftedstateof)<`C`, `T`\>) => [`LiftedStateOf`](liftable.md#liftedstateof)<`C`, `T`\> & { `delegate`: [`LiftedStateOf`](liftable.md#liftedstateof)<`C`, `T`\>  } |

#### Returns

`fn`

▸ <`T_1`\>(`onError`): [`ContainerOperator`](container.md#containeroperator)<`C`, `T_1`, `T_1`\>

##### Type parameters

| Name |
| :------ |
| `T_1` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `onError` | [`Function1`](functions.md#function1)<`unknown`, `void` \| [`ContainerOf`](container.md#containerof)<`C`, `T_1`\>\> |

##### Returns

[`ContainerOperator`](container.md#containeroperator)<`C`, `T_1`, `T_1`\>

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
| `DecodeWithCharsetSink` | (`delegate`: [`LiftedStateOf`](liftable.md#liftedstateof)<`C`, `string`\>, `textDecoder`: `TextDecoder`) => [`LiftedStateOf`](liftable.md#liftedstateof)<`C`, `ArrayBuffer`\> & { `delegate`: [`LiftedStateOf`](liftable.md#liftedstateof)<`C`, `string`\> ; `textDecoder`: `TextDecoder`  } |

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
| `DistinctUntilChangedSink` | <T\>(`delegate`: [`LiftedStateOf`](liftable.md#liftedstateof)<`C`, `T`\>, `equality`: [`Equality`](functions.md#equality)<`T`\>) => [`LiftedStateOf`](liftable.md#liftedstateof)<`C`, `T`\> & { `delegate`: [`LiftedStateOf`](liftable.md#liftedstateof)<`C`, `T`\> ; `equality`: [`Equality`](functions.md#equality)<`T`\> ; `hasValue`: `boolean` ; `prev`: [`Option`](option.md#option)<`T`\>  } |

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
| `EverySatisfySink` | <T\>(`delegate`: [`LiftedStateOf`](liftable.md#liftedstateof)<`C`, `boolean`\>, `predicate`: [`Predicate`](functions.md#predicate)<`T`\>) => [`LiftedStateOf`](liftable.md#liftedstateof)<`C`, `T`\> & { `delegate`: [`LiftedStateOf`](liftable.md#liftedstateof)<`C`, `boolean`\> ; `predicate`: [`Predicate`](functions.md#predicate)<`T`\>  } |

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
| `KeepSink` | <T\>(`delegate`: [`LiftedStateOf`](liftable.md#liftedstateof)<`C`, `T`\>, `predicate`: [`Predicate`](functions.md#predicate)<`T`\>) => [`LiftedStateOf`](liftable.md#liftedstateof)<`C`, `T`\> & { `delegate`: [`LiftedStateOf`](liftable.md#liftedstateof)<`C`, `T`\> ; `predicate`: [`Predicate`](functions.md#predicate)<`T`\>  } |

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
| `MapSink` | <TA, TB\>(`delegate`: [`LiftedStateOf`](liftable.md#liftedstateof)<`C`, `TB`\>, `mapper`: [`Function1`](functions.md#function1)<`TA`, `TB`\>) => [`LiftedStateOf`](liftable.md#liftedstateof)<`C`, `TA`\> & { `delegate`: [`LiftedStateOf`](liftable.md#liftedstateof)<`C`, `TB`\> ; `mapper`: [`Function1`](functions.md#function1)<`TA`, `TB`\>  } |

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
| `OnNotifySink` | <T\>(`delegate`: [`LiftedStateOf`](liftable.md#liftedstateof)<`C`, `T`\>, `onNotify`: [`SideEffect1`](functions.md#sideeffect1)<`T`\>) => [`LiftedStateOf`](liftable.md#liftedstateof)<`C`, `T`\> & { `delegate`: [`LiftedStateOf`](liftable.md#liftedstateof)<`C`, `T`\> ; `onNotify`: [`SideEffect1`](functions.md#sideeffect1)<`T`\>  } |

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
| `PairwiseSink` | <T\>(`delegate`: [`LiftedStateOf`](liftable.md#liftedstateof)<`C`, [[`Option`](option.md#option)<`T`\>, `T`]\>) => [`LiftedStateOf`](liftable.md#liftedstateof)<`C`, `T`\> & { `delegate`: [`LiftedStateOf`](liftable.md#liftedstateof)<`C`, [[`Option`](option.md#option)<`T`\>, `T`]\> ; `hasPrev`: `boolean` ; `prev`: [`Option`](option.md#option)<`T`\>  } |

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
| `ReduceSink` | <T, TAcc\>(`delegate`: [`LiftedStateOf`](liftable.md#liftedstateof)<`C`, `TAcc`\>, `reducer`: [`Reducer`](functions.md#reducer)<`T`, `TAcc`\>, `acc`: `TAcc`) => [`LiftedStateOf`](liftable.md#liftedstateof)<`C`, `T`\> & { `acc`: `TAcc` ; `reducer`: [`Reducer`](functions.md#reducer)<`T`, `TAcc`\>  } |

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
| `ScanSink` | <T, TAcc\>(`delegate`: [`LiftedStateOf`](liftable.md#liftedstateof)<`C`, `TAcc`\>, `reducer`: [`Reducer`](functions.md#reducer)<`T`, `TAcc`\>, `acc`: `TAcc`) => [`LiftedStateOf`](liftable.md#liftedstateof)<`C`, `T`\> & { `acc`: `TAcc` ; `delegate`: [`LiftedStateOf`](liftable.md#liftedstateof)<`C`, `TAcc`\> ; `reducer`: [`Reducer`](functions.md#reducer)<`T`, `TAcc`\>  } |

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
| `SkipFirstSink` | <T\>(`delegate`: [`LiftedStateOf`](liftable.md#liftedstateof)<`C`, `T`\>, `skipCount`: `number`) => [`LiftedStateOf`](liftable.md#liftedstateof)<`C`, `T`\> & { `count`: `number` ; `delegate`: [`LiftedStateOf`](liftable.md#liftedstateof)<`C`, `T`\> ; `skipCount`: `number`  } |

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
| `SomeSatisfySink` | <T\>(`delegate`: [`LiftedStateOf`](liftable.md#liftedstateof)<`C`, `boolean`\>, `predicate`: [`Predicate`](functions.md#predicate)<`T`\>) => [`LiftedStateOf`](liftable.md#liftedstateof)<`C`, `T`\> & { `delegate`: [`LiftedStateOf`](liftable.md#liftedstateof)<`C`, `boolean`\> ; `predicate`: [`Predicate`](functions.md#predicate)<`T`\>  } |

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
| `TakeFirstSink` | <T\>(`delegate`: [`LiftedStateOf`](liftable.md#liftedstateof)<`C`, `T`\>, `maxCount`: `number`) => [`LiftedStateOf`](liftable.md#liftedstateof)<`C`, `T`\> & { `count`: `number` ; `delegate`: [`LiftedStateOf`](liftable.md#liftedstateof)<`C`, `T`\> ; `maxCount`: `number`  } |

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
| `TakeLastSink` | <T\>(`delegate`: [`LiftedStateOf`](liftable.md#liftedstateof)<`C`, `T`\>, `maxCount`: `number`) => [`LiftedStateOf`](liftable.md#liftedstateof)<`C`, `T`\> & { `last`: `T`[] ; `maxCount`: `number`  } |

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
| `TakeWhileSink` | <T\>(`delegate`: [`LiftedStateOf`](liftable.md#liftedstateof)<`C`, `T`\>, `predicate`: [`Predicate`](functions.md#predicate)<`T`\>, `inclusive`: `boolean`) => [`LiftedStateOf`](liftable.md#liftedstateof)<`C`, `T`\> & { `delegate`: [`LiftedStateOf`](liftable.md#liftedstateof)<`C`, `T`\> ; `inclusive`: `boolean` ; `predicate`: [`Predicate`](functions.md#predicate)<`T`\>  } |

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
| `ThrowIfEmptySink` | <T\>(`delegate`: [`LiftedStateOf`](liftable.md#liftedstateof)<`C`, `T`\>) => [`LiftedStateOf`](liftable.md#liftedstateof)<`C`, `T`\> & { `delegate`: [`LiftedStateOf`](liftable.md#liftedstateof)<`C`, `T`\> ; `isEmpty`: `boolean`  } |

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

▸ **createUsing**<`C`\>(`UsingSource`): <TResource_1, T_1\>(`resourceFactory`: [`Factory`](functions.md#factory)<`TResource_1`\>, `sourceFactory`: [`Function1`](functions.md#function1)<`TResource_1`, `C`\>) => `C`<TResource1, TResource2, T_2\>(`resourceFactory`: [`Factory`](functions.md#factory)<readonly [`TResource1`, `TResource2`]\>, `sourceFactory`: [`Function2`](functions.md#function2)<`TResource1`, `TResource2`, `C`\>) => `C`<TResource1_1, TResource2_1, TResource3, T_3\>(`resourceFactory`: [`Factory`](functions.md#factory)<readonly [`TResource1_1`, `TResource2_1`, `TResource3`]\>, `sourceFactory`: [`Function3`](functions.md#function3)<`TResource1_1`, `TResource2_1`, `TResource3`, `C`\>) => `C`<TResource1_2, TResource2_2, TResource3_1, TResource4, T_4\>(`resourceFactory`: [`Factory`](functions.md#factory)<readonly [`TResource1_2`, `TResource2_2`, `TResource3_1`, `TResource4`]\>, `sourceFactory`: [`Function4`](functions.md#function4)<`TResource1_2`, `TResource2_2`, `TResource3_1`, `TResource4`, `C`\>) => `C`<TResource1_3, TResource2_3, TResource3_2, TResource4_1, TResource5, T_5\>(`resourceFactory`: [`Factory`](functions.md#factory)<readonly [`TResource1_3`, `TResource2_3`, `TResource3_2`, `TResource4_1`, `TResource5`]\>, `sourceFactory`: [`Function5`](functions.md#function5)<`TResource1_3`, `TResource2_3`, `TResource3_2`, `TResource4_1`, `TResource5`, `C`\>) => `C`<TResource_2, T_6\>(`resourceFactory`: [`Factory`](functions.md#factory)<`TResource_2` \| readonly `TResource_2`[]\>, `sourceFactoryFactory`: (...`resources`: readonly `TResource_2`[]) => `C`) => `C`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`SourceLike`](../interfaces/source.SourceLike.md)<`C`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `UsingSource` | <TResource, T\>(`resourceFactory`: [`Factory`](functions.md#factory)<`TResource` \| readonly `TResource`[]\>, `sourceFactory`: (...`resources`: readonly `TResource`[]) => `C`) => `C` & { `resourceFactory`: [`Function1`](functions.md#function1)<[`LiftedStateOf`](liftable.md#liftedstateof)<`C`, `T`\>, `TResource` \| readonly `TResource`[]\> ; `sourceFactory`: (...`resources`: readonly `TResource`[]) => `C`  } |

#### Returns

`fn`

▸ <`TResource_1`, `T_1`\>(`resourceFactory`, `sourceFactory`): `C`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TResource_1` | extends [`DisposableLike`](../interfaces/disposable.DisposableLike.md) |
| `T_1` | `T_1` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `resourceFactory` | [`Factory`](functions.md#factory)<`TResource_1`\> |
| `sourceFactory` | [`Function1`](functions.md#function1)<`TResource_1`, `C`\> |

##### Returns

`C`

▸ <`TResource1`, `TResource2`, `T_2`\>(`resourceFactory`, `sourceFactory`): `C`

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
| `sourceFactory` | [`Function2`](functions.md#function2)<`TResource1`, `TResource2`, `C`\> |

##### Returns

`C`

▸ <`TResource1_1`, `TResource2_1`, `TResource3`, `T_3`\>(`resourceFactory`, `sourceFactory`): `C`

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
| `sourceFactory` | [`Function3`](functions.md#function3)<`TResource1_1`, `TResource2_1`, `TResource3`, `C`\> |

##### Returns

`C`

▸ <`TResource1_2`, `TResource2_2`, `TResource3_1`, `TResource4`, `T_4`\>(`resourceFactory`, `sourceFactory`): `C`

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
| `sourceFactory` | [`Function4`](functions.md#function4)<`TResource1_2`, `TResource2_2`, `TResource3_1`, `TResource4`, `C`\> |

##### Returns

`C`

▸ <`TResource1_3`, `TResource2_3`, `TResource3_2`, `TResource4_1`, `TResource5`, `T_5`\>(`resourceFactory`, `sourceFactory`): `C`

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
| `sourceFactory` | [`Function5`](functions.md#function5)<`TResource1_3`, `TResource2_3`, `TResource3_2`, `TResource4_1`, `TResource5`, `C`\> |

##### Returns

`C`

▸ <`TResource_2`, `T_6`\>(`resourceFactory`, `sourceFactoryFactory`): `C`

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TResource_2` | extends [`DisposableLike`](../interfaces/disposable.DisposableLike.md) |
| `T_6` | `T_6` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `resourceFactory` | [`Factory`](functions.md#factory)<`TResource_2` \| readonly `TResource_2`[]\> |
| `sourceFactoryFactory` | (...`resources`: readonly `TResource_2`[]) => `C` |

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
| `sink` | [`LiftedStateOf`](liftable.md#liftedstateof)<`C`, `T`\> |

#### Returns

[`SideEffect1`](functions.md#sideeffect1)<`C`\>
