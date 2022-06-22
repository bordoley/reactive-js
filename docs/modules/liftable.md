[Reactive-JS](../README.md) / liftable

# Module: liftable

## Table of contents

### Classes

- [AbstractDisposableLiftable](../classes/liftable.AbstractDisposableLiftable.md)
- [AbstractLiftable](../classes/liftable.AbstractLiftable.md)

### Interfaces

- [Lift](../interfaces/liftable.Lift.md)
- [LiftableLike](../interfaces/liftable.LiftableLike.md)
- [LiftedStateLike](../interfaces/liftable.LiftedStateLike.md)

### Type Aliases

- [LiftedStateOf](liftable.md#liftedstateof)

### Functions

- [createDistinctUntilChangedLiftedOperator](liftable.md#createdistinctuntilchangedliftedoperator)
- [createKeepLiftedOperator](liftable.md#createkeepliftedoperator)
- [createMapLiftedOperator](liftable.md#createmapliftedoperator)
- [createOnNotifyLiftedOperator](liftable.md#createonnotifyliftedoperator)
- [createPairwiseLiftdOperator](liftable.md#createpairwiseliftdoperator)
- [createScanLiftedOperator](liftable.md#createscanliftedoperator)
- [createSkipFirstLiftedOperator](liftable.md#createskipfirstliftedoperator)
- [createTakeFirstLiftdOperator](liftable.md#createtakefirstliftdoperator)
- [createTakeWhileLiftedOperator](liftable.md#createtakewhileliftedoperator)
- [createThrowIfEmptyLiftedOperator](liftable.md#createthrowifemptyliftedoperator)

## Type Aliases

### LiftedStateOf

Ƭ **LiftedStateOf**<`C`, `T`\>: `C` extends { `liftedStateType`: `unknown`  } ? `C` & { `T`: `T`  }[``"liftedStateType"``] : { `_C`: `C` ; `_T`: () => `T`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`LiftableLike`](../interfaces/liftable.LiftableLike.md) |
| `T` | `T` |

## Functions

### createDistinctUntilChangedLiftedOperator

▸ **createDistinctUntilChangedLiftedOperator**<`C`\>(`m`, `DistinctUntilChangedLiftableState`): <T_1\>(`options?`: { `equality?`: [`Equality`](functions.md#equality)<`T_1`\>  }) => [`ContainerOperator`](container.md#containeroperator)<`C`, `T_1`, `T_1`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`LiftableLike`](../interfaces/liftable.LiftableLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`Lift`](../interfaces/liftable.Lift.md)<`C`\> |
| `DistinctUntilChangedLiftableState` | <T\>(`delegate`: [`LiftedStateOf`](liftable.md#liftedstateof)<`C`, `T`\>, `equality`: [`Equality`](functions.md#equality)<`T`\>) => [`LiftedStateOf`](liftable.md#liftedstateof)<`C`, `T`\> |

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

### createKeepLiftedOperator

▸ **createKeepLiftedOperator**<`C`\>(`m`, `KeepLiftableState`): <T_1\>(`predicate`: [`Predicate`](functions.md#predicate)<`T_1`\>) => [`ContainerOperator`](container.md#containeroperator)<`C`, `T_1`, `T_1`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`LiftableLike`](../interfaces/liftable.LiftableLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`Lift`](../interfaces/liftable.Lift.md)<`C`\> |
| `KeepLiftableState` | <T\>(`delegate`: [`LiftedStateOf`](liftable.md#liftedstateof)<`C`, `T`\>, `predicate`: [`Predicate`](functions.md#predicate)<`T`\>) => [`LiftedStateOf`](liftable.md#liftedstateof)<`C`, `T`\> |

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

### createMapLiftedOperator

▸ **createMapLiftedOperator**<`C`\>(`m`, `MapLiftableState`): <TA_1, TB_1\>(`mapper`: [`Function1`](functions.md#function1)<`TA_1`, `TB_1`\>) => [`ContainerOperator`](container.md#containeroperator)<`C`, `TA_1`, `TB_1`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`LiftableLike`](../interfaces/liftable.LiftableLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`Lift`](../interfaces/liftable.Lift.md)<`C`\> |
| `MapLiftableState` | <TA, TB\>(`delegate`: [`LiftedStateOf`](liftable.md#liftedstateof)<`C`, `TB`\>, `mapper`: [`Function1`](functions.md#function1)<`TA`, `TB`\>) => [`LiftedStateOf`](liftable.md#liftedstateof)<`C`, `TA`\> |

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

### createOnNotifyLiftedOperator

▸ **createOnNotifyLiftedOperator**<`C`\>(`m`, `OnNotifyLiftableState`): <T_1\>(`onNotify`: [`SideEffect1`](functions.md#sideeffect1)<`T_1`\>) => [`ContainerOperator`](container.md#containeroperator)<`C`, `T_1`, `T_1`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`LiftableLike`](../interfaces/liftable.LiftableLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`Lift`](../interfaces/liftable.Lift.md)<`C`\> |
| `OnNotifyLiftableState` | <T\>(`delegate`: [`LiftedStateOf`](liftable.md#liftedstateof)<`C`, `T`\>, `onNotify`: [`SideEffect1`](functions.md#sideeffect1)<`T`\>) => [`LiftedStateOf`](liftable.md#liftedstateof)<`C`, `T`\> |

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

### createPairwiseLiftdOperator

▸ **createPairwiseLiftdOperator**<`C`\>(`m`, `PairwiseLiftableState`): <T_1\>() => [`ContainerOperator`](container.md#containeroperator)<`C`, `T_1`, [[`Option`](option.md#option)<`T_1`\>, `T_1`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`LiftableLike`](../interfaces/liftable.LiftableLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`Lift`](../interfaces/liftable.Lift.md)<`C`\> |
| `PairwiseLiftableState` | <T\>(`delegate`: [`LiftedStateOf`](liftable.md#liftedstateof)<`C`, [[`Option`](option.md#option)<`T`\>, `T`]\>) => [`LiftedStateOf`](liftable.md#liftedstateof)<`C`, `T`\> |

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

### createScanLiftedOperator

▸ **createScanLiftedOperator**<`C`\>(`m`, `ScanLiftableState`): <T_1, TAcc_1\>(`reducer`: [`Reducer`](functions.md#reducer)<`T_1`, `TAcc_1`\>, `initialValue`: [`Factory`](functions.md#factory)<`TAcc_1`\>) => [`ContainerOperator`](container.md#containeroperator)<`C`, `T_1`, `TAcc_1`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`LiftableLike`](../interfaces/liftable.LiftableLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`Lift`](../interfaces/liftable.Lift.md)<`C`\> |
| `ScanLiftableState` | <T, TAcc\>(`delegate`: [`LiftedStateOf`](liftable.md#liftedstateof)<`C`, `TAcc`\>, `reducer`: [`Reducer`](functions.md#reducer)<`T`, `TAcc`\>, `acc`: `TAcc`) => [`LiftedStateOf`](liftable.md#liftedstateof)<`C`, `T`\> |

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

### createSkipFirstLiftedOperator

▸ **createSkipFirstLiftedOperator**<`C`\>(`m`, `SkipLiftableState`): <T_1\>(`options?`: { `count?`: `number`  }) => [`ContainerOperator`](container.md#containeroperator)<`C`, `T_1`, `T_1`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`LiftableLike`](../interfaces/liftable.LiftableLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`Lift`](../interfaces/liftable.Lift.md)<`C`\> |
| `SkipLiftableState` | <T\>(`delegate`: [`LiftedStateOf`](liftable.md#liftedstateof)<`C`, `T`\>, `skipCount`: `number`) => [`LiftedStateOf`](liftable.md#liftedstateof)<`C`, `T`\> |

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

### createTakeFirstLiftdOperator

▸ **createTakeFirstLiftdOperator**<`C`\>(`m`, `TakeFirstLiftableState`): <T_1\>(`options?`: { `count?`: `number`  }) => [`ContainerOperator`](container.md#containeroperator)<`C`, `T_1`, `T_1`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`LiftableLike`](../interfaces/liftable.LiftableLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`FromArray`](../interfaces/container.FromArray.md)<`C`, [`FromArrayOptions`](../interfaces/container.FromArrayOptions.md)\> & [`Lift`](../interfaces/liftable.Lift.md)<`C`\> |
| `TakeFirstLiftableState` | <T\>(`delegate`: [`LiftedStateOf`](liftable.md#liftedstateof)<`C`, `T`\>, `maxCount`: `number`) => [`LiftedStateOf`](liftable.md#liftedstateof)<`C`, `T`\> |

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

### createTakeWhileLiftedOperator

▸ **createTakeWhileLiftedOperator**<`C`\>(`m`, `TakeWhileLiftableState`): <T_1\>(`predicate`: [`Predicate`](functions.md#predicate)<`T_1`\>, `options?`: { `inclusive?`: `boolean`  }) => [`ContainerOperator`](container.md#containeroperator)<`C`, `T_1`, `T_1`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`LiftableLike`](../interfaces/liftable.LiftableLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`Lift`](../interfaces/liftable.Lift.md)<`C`\> |
| `TakeWhileLiftableState` | <T\>(`delegate`: [`LiftedStateOf`](liftable.md#liftedstateof)<`C`, `T`\>, `predicate`: [`Predicate`](functions.md#predicate)<`T`\>, `inclusive`: `boolean`) => [`LiftedStateOf`](liftable.md#liftedstateof)<`C`, `T`\> |

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

### createThrowIfEmptyLiftedOperator

▸ **createThrowIfEmptyLiftedOperator**<`C`\>(`m`, `ThrowIfEmptyLiftableState`): <T_1\>(`factory`: [`Factory`](functions.md#factory)<`unknown`\>) => [`ContainerOperator`](container.md#containeroperator)<`C`, `T_1`, `T_1`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`LiftableLike`](../interfaces/liftable.LiftableLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`Lift`](../interfaces/liftable.Lift.md)<`C`\> |
| `ThrowIfEmptyLiftableState` | <T\>(`delegate`: [`LiftedStateOf`](liftable.md#liftedstateof)<`C`, `T`\>) => [`LiftedStateOf`](liftable.md#liftedstateof)<`C`, `T`\> & { `isEmpty`: `boolean`  } |

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
