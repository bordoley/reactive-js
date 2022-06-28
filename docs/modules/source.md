[Reactive-JS](../README.md) / source

# Module: source

## Table of contents

### Classes

- [AbstractDisposableSource](../classes/source.AbstractDisposableSource.md)
- [AbstractSource](../classes/source.AbstractSource.md)

### Interfaces

- [CreateSource](../interfaces/source.CreateSource.md)
- [Lift](../interfaces/source.Lift.md)
- [SinkLike](../interfaces/source.SinkLike.md)
- [SourceLike](../interfaces/source.SourceLike.md)

### Functions

- [createCatchErrorOperator](source.md#createcatcherroroperator)
- [createDecodeWithCharsetOperator](source.md#createdecodewithcharsetoperator)
- [createDistinctUntilChangedOperator](source.md#createdistinctuntilchangedoperator)
- [createEverySatisfyOperator](source.md#createeverysatisfyoperator)
- [createFromDisposable](source.md#createfromdisposable)
- [createKeepOperator](source.md#createkeepoperator)
- [createMapOperator](source.md#createmapoperator)
- [createNever](source.md#createnever)
- [createOnNotifyOperator](source.md#createonnotifyoperator)
- [createOnSink](source.md#createonsink)
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
- [notify](source.md#notify)
- [notifySink](source.md#notifysink)
- [sinkInto](source.md#sinkinto)
- [sourceFrom](source.md#sourcefrom)

## Functions

### createCatchErrorOperator

▸ **createCatchErrorOperator**<`C`\>(`m`, `CatchErrorSink`): <T_1\>(`f`: [`Function1`](functions.md#function1)<`unknown`, `void` \| [`ContainerOf`](container.md#containerof)<`C`, `T_1`\>\>) => [`ContainerOperator`](container.md#containeroperator)<`C`, `T_1`, `T_1`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`SourceLike`](../interfaces/source.SourceLike.md)<`C`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`Lift`](../interfaces/source.Lift.md)<`C`\> |
| `CatchErrorSink` | <T\>(`delegate`: [`LiftableStateOf`](liftable.md#liftablestateof)<`C`, `T`\>) => [`LiftableStateOf`](liftable.md#liftablestateof)<`C`, `T`\> & { `delegate`: [`LiftableStateOf`](liftable.md#liftablestateof)<`C`, `T`\>  } |

#### Returns

`fn`

▸ <`T_1`\>(`f`): [`ContainerOperator`](container.md#containeroperator)<`C`, `T_1`, `T_1`\>

##### Type parameters

| Name |
| :------ |
| `T_1` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`Function1`](functions.md#function1)<`unknown`, `void` \| [`ContainerOf`](container.md#containerof)<`C`, `T_1`\>\> |

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
| `DecodeWithCharsetSink` | (`delegate`: [`LiftableStateOf`](liftable.md#liftablestateof)<`C`, `string`\>, `textDecoder`: `TextDecoder`) => [`LiftableStateOf`](liftable.md#liftablestateof)<`C`, `ArrayBuffer`\> & { `delegate`: [`LiftableStateOf`](liftable.md#liftablestateof)<`C`, `string`\> ; `textDecoder`: `TextDecoder`  } |

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
| `DistinctUntilChangedSink` | <T\>(`delegate`: [`LiftableStateOf`](liftable.md#liftablestateof)<`C`, `T`\>, `equality`: [`Equality`](functions.md#equality)<`T`\>) => [`LiftableStateOf`](liftable.md#liftablestateof)<`C`, `T`\> & { `delegate`: [`LiftableStateOf`](liftable.md#liftablestateof)<`C`, `T`\> ; `equality`: [`Equality`](functions.md#equality)<`T`\> ; `hasValue`: `boolean` ; `prev`: [`Option`](option.md#option)<`T`\>  } |

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
| `EverySatisfySink` | <T\>(`delegate`: [`LiftableStateOf`](liftable.md#liftablestateof)<`C`, `boolean`\>, `predicate`: [`Predicate`](functions.md#predicate)<`T`\>) => [`LiftableStateOf`](liftable.md#liftablestateof)<`C`, `T`\> & { `delegate`: [`LiftableStateOf`](liftable.md#liftablestateof)<`C`, `boolean`\> ; `predicate`: [`Predicate`](functions.md#predicate)<`T`\>  } |

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

### createFromDisposable

▸ **createFromDisposable**<`C`\>(`m`): <T\>(`disposable`: [`DisposableLike`](../interfaces/disposable.DisposableLike.md)) => [`ContainerOf`](container.md#containerof)<`C`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`SourceLike`](../interfaces/source.SourceLike.md)<`C`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`CreateSource`](../interfaces/source.CreateSource.md)<`C`\> |

#### Returns

`fn`

▸ <`T`\>(`disposable`): [`ContainerOf`](container.md#containerof)<`C`, `T`\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `disposable` | [`DisposableLike`](../interfaces/disposable.DisposableLike.md) |

##### Returns

[`ContainerOf`](container.md#containerof)<`C`, `T`\>

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
| `KeepSink` | <T\>(`delegate`: [`LiftableStateOf`](liftable.md#liftablestateof)<`C`, `T`\>, `predicate`: [`Predicate`](functions.md#predicate)<`T`\>) => [`LiftableStateOf`](liftable.md#liftablestateof)<`C`, `T`\> & { `delegate`: [`LiftableStateOf`](liftable.md#liftablestateof)<`C`, `T`\> ; `predicate`: [`Predicate`](functions.md#predicate)<`T`\>  } |

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
| `MapSink` | <TA, TB\>(`delegate`: [`LiftableStateOf`](liftable.md#liftablestateof)<`C`, `TB`\>, `mapper`: [`Function1`](functions.md#function1)<`TA`, `TB`\>) => [`LiftableStateOf`](liftable.md#liftablestateof)<`C`, `TA`\> & { `delegate`: [`LiftableStateOf`](liftable.md#liftablestateof)<`C`, `TB`\> ; `mapper`: [`Function1`](functions.md#function1)<`TA`, `TB`\>  } |

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

### createNever

▸ **createNever**<`C`\>(`m`): <T\>() => [`ContainerOf`](container.md#containerof)<`C`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`SourceLike`](../interfaces/source.SourceLike.md)<`C`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`CreateSource`](../interfaces/source.CreateSource.md)<`C`\> |

#### Returns

`fn`

▸ <`T`\>(): [`ContainerOf`](container.md#containerof)<`C`, `T`\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Returns

[`ContainerOf`](container.md#containerof)<`C`, `T`\>

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
| `OnNotifySink` | <T\>(`delegate`: [`LiftableStateOf`](liftable.md#liftablestateof)<`C`, `T`\>, `onNotify`: [`SideEffect1`](functions.md#sideeffect1)<`T`\>) => [`LiftableStateOf`](liftable.md#liftablestateof)<`C`, `T`\> & { `delegate`: [`LiftableStateOf`](liftable.md#liftablestateof)<`C`, `T`\> ; `onNotify`: [`SideEffect1`](functions.md#sideeffect1)<`T`\>  } |

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

### createOnSink

▸ **createOnSink**<`C`\>(`m`): <T\>(`f`: [`Factory`](functions.md#factory)<`void` \| [`DisposableOrTeardown`](disposable.md#disposableorteardown)\>) => [`ContainerOperator`](container.md#containeroperator)<`C`, `T`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`SourceLike`](../interfaces/source.SourceLike.md)<`C`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`CreateSource`](../interfaces/source.CreateSource.md)<`C`\> |

#### Returns

`fn`

▸ <`T`\>(`f`): [`ContainerOperator`](container.md#containeroperator)<`C`, `T`, `T`\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `f` | [`Factory`](functions.md#factory)<`void` \| [`DisposableOrTeardown`](disposable.md#disposableorteardown)\> |

##### Returns

[`ContainerOperator`](container.md#containeroperator)<`C`, `T`, `T`\>

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
| `PairwiseSink` | <T\>(`delegate`: [`LiftableStateOf`](liftable.md#liftablestateof)<`C`, [[`Option`](option.md#option)<`T`\>, `T`]\>) => [`LiftableStateOf`](liftable.md#liftablestateof)<`C`, `T`\> & { `delegate`: [`LiftableStateOf`](liftable.md#liftablestateof)<`C`, [[`Option`](option.md#option)<`T`\>, `T`]\> ; `hasPrev`: `boolean` ; `prev`: [`Option`](option.md#option)<`T`\>  } |

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
| `ReduceSink` | <T, TAcc\>(`delegate`: [`LiftableStateOf`](liftable.md#liftablestateof)<`C`, `TAcc`\>, `reducer`: [`Reducer`](functions.md#reducer)<`T`, `TAcc`\>, `acc`: `TAcc`) => [`LiftableStateOf`](liftable.md#liftablestateof)<`C`, `T`\> & { `acc`: `TAcc` ; `reducer`: [`Reducer`](functions.md#reducer)<`T`, `TAcc`\>  } |

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
| `ScanSink` | <T, TAcc\>(`delegate`: [`LiftableStateOf`](liftable.md#liftablestateof)<`C`, `TAcc`\>, `reducer`: [`Reducer`](functions.md#reducer)<`T`, `TAcc`\>, `acc`: `TAcc`) => [`LiftableStateOf`](liftable.md#liftablestateof)<`C`, `T`\> & { `acc`: `TAcc` ; `delegate`: [`LiftableStateOf`](liftable.md#liftablestateof)<`C`, `TAcc`\> ; `reducer`: [`Reducer`](functions.md#reducer)<`T`, `TAcc`\>  } |

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
| `SkipFirstSink` | <T\>(`delegate`: [`LiftableStateOf`](liftable.md#liftablestateof)<`C`, `T`\>, `skipCount`: `number`) => [`LiftableStateOf`](liftable.md#liftablestateof)<`C`, `T`\> & { `count`: `number` ; `delegate`: [`LiftableStateOf`](liftable.md#liftablestateof)<`C`, `T`\> ; `skipCount`: `number`  } |

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
| `SomeSatisfySink` | <T\>(`delegate`: [`LiftableStateOf`](liftable.md#liftablestateof)<`C`, `boolean`\>, `predicate`: [`Predicate`](functions.md#predicate)<`T`\>) => [`LiftableStateOf`](liftable.md#liftablestateof)<`C`, `T`\> & { `delegate`: [`LiftableStateOf`](liftable.md#liftablestateof)<`C`, `boolean`\> ; `predicate`: [`Predicate`](functions.md#predicate)<`T`\>  } |

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
| `TakeFirstSink` | <T\>(`delegate`: [`LiftableStateOf`](liftable.md#liftablestateof)<`C`, `T`\>, `maxCount`: `number`) => [`LiftableStateOf`](liftable.md#liftablestateof)<`C`, `T`\> & { `count`: `number` ; `delegate`: [`LiftableStateOf`](liftable.md#liftablestateof)<`C`, `T`\> ; `maxCount`: `number`  } |

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
| `TakeLastSink` | <T\>(`delegate`: [`LiftableStateOf`](liftable.md#liftablestateof)<`C`, `T`\>, `maxCount`: `number`) => [`LiftableStateOf`](liftable.md#liftablestateof)<`C`, `T`\> & { `last`: `T`[] ; `maxCount`: `number`  } |

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
| `TakeWhileSink` | <T\>(`delegate`: [`LiftableStateOf`](liftable.md#liftablestateof)<`C`, `T`\>, `predicate`: [`Predicate`](functions.md#predicate)<`T`\>, `inclusive`: `boolean`) => [`LiftableStateOf`](liftable.md#liftablestateof)<`C`, `T`\> & { `delegate`: [`LiftableStateOf`](liftable.md#liftablestateof)<`C`, `T`\> ; `inclusive`: `boolean` ; `predicate`: [`Predicate`](functions.md#predicate)<`T`\>  } |

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
| `ThrowIfEmptySink` | <T\>(`delegate`: [`LiftableStateOf`](liftable.md#liftablestateof)<`C`, `T`\>) => [`LiftableStateOf`](liftable.md#liftablestateof)<`C`, `T`\> & { `delegate`: [`LiftableStateOf`](liftable.md#liftablestateof)<`C`, `T`\> ; `isEmpty`: `boolean`  } |

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

▸ **createUsing**<`C`\>(`m`): <TResource, T\>(`resourceFactory`: [`Factory`](functions.md#factory)<`TResource` \| readonly `TResource`[]\>, `sourceFactory`: (...`resources`: readonly `TResource`[]) => [`ContainerOf`](container.md#containerof)<`C`, `T`\>) => [`ContainerOf`](container.md#containerof)<`C`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`SourceLike`](../interfaces/source.SourceLike.md)<`C`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`CreateSource`](../interfaces/source.CreateSource.md)<`C`\> |

#### Returns

`fn`

▸ <`TResource`, `T`\>(`resourceFactory`, `sourceFactory`): [`ContainerOf`](container.md#containerof)<`C`, `T`\>

##### Type parameters

| Name | Type |
| :------ | :------ |
| `TResource` | extends [`DisposableLike`](../interfaces/disposable.DisposableLike.md)<`TResource`\> |
| `T` | `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `resourceFactory` | [`Factory`](functions.md#factory)<`TResource` \| readonly `TResource`[]\> |
| `sourceFactory` | (...`resources`: readonly `TResource`[]) => [`ContainerOf`](container.md#containerof)<`C`, `T`\> |

##### Returns

[`ContainerOf`](container.md#containerof)<`C`, `T`\>

___

### notify

▸ **notify**<`C`, `T`, `TSink`\>(`v`): [`Function1`](functions.md#function1)<`TSink`, `TSink`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`SourceLike`](../interfaces/source.SourceLike.md)<`C`\> |
| `T` | `T` |
| `TSink` | extends [`SinkLike`](../interfaces/source.SinkLike.md)<`unknown`, `TSink`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `T` |

#### Returns

[`Function1`](functions.md#function1)<`TSink`, `TSink`\>

___

### notifySink

▸ **notifySink**<`C`, `T`, `TSink`\>(`sink`): [`SideEffect1`](functions.md#sideeffect1)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`SourceLike`](../interfaces/source.SourceLike.md)<`C`\> |
| `T` | `T` |
| `TSink` | extends [`SinkLike`](../interfaces/source.SinkLike.md)<`unknown`, `TSink`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `sink` | `TSink` |

#### Returns

[`SideEffect1`](functions.md#sideeffect1)<`T`\>

___

### sinkInto

▸ **sinkInto**<`C`, `T`, `TSink`\>(`sink`): [`Function1`](functions.md#function1)<`C`, `C`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`SourceLike`](../interfaces/source.SourceLike.md)<`C`\> |
| `T` | `T` |
| `TSink` | extends [`SinkLike`](../interfaces/source.SinkLike.md)<`unknown`, `TSink`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `sink` | `TSink` |

#### Returns

[`Function1`](functions.md#function1)<`C`, `C`\>

___

### sourceFrom

▸ **sourceFrom**<`C`, `T`, `TSink`\>(`source`): [`Function1`](functions.md#function1)<`TSink`, `TSink`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`SourceLike`](../interfaces/source.SourceLike.md)<`C`\> |
| `T` | `T` |
| `TSink` | extends [`SinkLike`](../interfaces/source.SinkLike.md)<`unknown`, `TSink`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `C` |

#### Returns

[`Function1`](functions.md#function1)<`TSink`, `TSink`\>
