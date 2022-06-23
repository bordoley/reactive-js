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

- [LiftOperator](liftable.md#liftoperator)
- [LiftOperatorIn](liftable.md#liftoperatorin)
- [LiftOperatorOut](liftable.md#liftoperatorout)
- [LiftedStateOf](liftable.md#liftedstateof)

### Functions

- [createDistinctUntilChangedLiftedOperator](liftable.md#createdistinctuntilchangedliftedoperator)
- [createKeepLiftedOperator](liftable.md#createkeepliftedoperator)
- [createMapLiftedOperator](liftable.md#createmapliftedoperator)
- [createOnNotifyLiftedOperator](liftable.md#createonnotifyliftedoperator)
- [createPairwiseLiftedOperator](liftable.md#createpairwiseliftedoperator)
- [createScanLiftedOperator](liftable.md#createscanliftedoperator)
- [createSkipFirstLiftedOperator](liftable.md#createskipfirstliftedoperator)
- [createTakeFirstLiftdOperator](liftable.md#createtakefirstliftdoperator)
- [createTakeWhileLiftedOperator](liftable.md#createtakewhileliftedoperator)
- [createThrowIfEmptyLiftedOperator](liftable.md#createthrowifemptyliftedoperator)

## Type Aliases

### LiftOperator

Ƭ **LiftOperator**<`TA`, `TB`, `C`, `M`\>: [`Function1`](functions.md#function1)<[`LiftOperatorIn`](liftable.md#liftoperatorin)<`TA`, `TB`, `C`, `M`\>, [`LiftOperatorOut`](liftable.md#liftoperatorout)<`TA`, `TB`, `C`, `M`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TA` | `TA` |
| `TB` | `TB` |
| `C` | extends [`LiftableLike`](../interfaces/liftable.LiftableLike.md) |
| `M` | extends [`Lift`](../interfaces/liftable.Lift.md)<`C`, ``"covariant"`` \| ``"contravariant"``\> |

___

### LiftOperatorIn

Ƭ **LiftOperatorIn**<`TA`, `TB`, `C`, `M`\>: `M` extends { `variance?`: ``"contravariant"``  } ? [`LiftedStateOf`](liftable.md#liftedstateof)<`C`, `TB`\> : [`LiftedStateOf`](liftable.md#liftedstateof)<`C`, `TA`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TA` | `TA` |
| `TB` | `TB` |
| `C` | extends [`LiftableLike`](../interfaces/liftable.LiftableLike.md) |
| `M` | extends [`Lift`](../interfaces/liftable.Lift.md)<`C`, ``"covariant"`` \| ``"contravariant"``\> |

___

### LiftOperatorOut

Ƭ **LiftOperatorOut**<`TA`, `TB`, `C`, `M`\>: `M` extends { `variance?`: ``"contravariant"``  } ? [`LiftedStateOf`](liftable.md#liftedstateof)<`C`, `TA`\> : [`LiftedStateOf`](liftable.md#liftedstateof)<`C`, `TB`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TA` | `TA` |
| `TB` | `TB` |
| `C` | extends [`LiftableLike`](../interfaces/liftable.LiftableLike.md) |
| `M` | extends [`Lift`](../interfaces/liftable.Lift.md)<`C`, ``"covariant"`` \| ``"contravariant"``\> |

___

### LiftedStateOf

Ƭ **LiftedStateOf**<`C`, `T`\>: `C` extends { `liftedStateType`: `unknown`  } ? `C` & { `T`: `T`  }[``"liftedStateType"``] : { `_C`: `C` ; `_T`: () => `T`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`LiftableLike`](../interfaces/liftable.LiftableLike.md) |
| `T` | `T` |

## Functions

### createDistinctUntilChangedLiftedOperator

▸ **createDistinctUntilChangedLiftedOperator**<`C`, `TVariance`\>(`m`, `DistinctUntilChangedLiftableState`): <T_1\>(`options?`: { `equality?`: [`Equality`](functions.md#equality)<`T_1`\>  }) => [`ContainerOperator`](container.md#containeroperator)<`C`, `T_1`, `T_1`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`LiftableLike`](../interfaces/liftable.LiftableLike.md) |
| `TVariance` | extends ``"covariant"`` \| ``"contravariant"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`Lift`](../interfaces/liftable.Lift.md)<`C`, `TVariance`\> |
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

▸ **createKeepLiftedOperator**<`C`, `TVariance`\>(`m`, `KeepLiftableState`): <T_1\>(`predicate`: [`Predicate`](functions.md#predicate)<`T_1`\>) => [`ContainerOperator`](container.md#containeroperator)<`C`, `T_1`, `T_1`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`LiftableLike`](../interfaces/liftable.LiftableLike.md) |
| `TVariance` | extends ``"covariant"`` \| ``"contravariant"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`Lift`](../interfaces/liftable.Lift.md)<`C`, `TVariance`\> |
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

▸ **createMapLiftedOperator**<`C`, `TVariance`\>(`m`, `MapLiftableState`): <TA_1, TB_1\>(`mapper`: [`Function1`](functions.md#function1)<`TA_1`, `TB_1`\>) => [`ContainerOperator`](container.md#containeroperator)<`C`, `TA_1`, `TB_1`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`LiftableLike`](../interfaces/liftable.LiftableLike.md) |
| `TVariance` | extends ``"covariant"`` \| ``"contravariant"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`Lift`](../interfaces/liftable.Lift.md)<`C`, `TVariance`\> |
| `MapLiftableState` | <TA, TB\>(`delegate`: [`LiftOperatorIn`](liftable.md#liftoperatorin)<`TA`, `TB`, `C`, [`Lift`](../interfaces/liftable.Lift.md)<`C`, `TVariance`\>\>, `mapper`: [`Function1`](functions.md#function1)<`TA`, `TB`\>) => [`LiftOperatorOut`](liftable.md#liftoperatorout)<`TA`, `TB`, `C`, [`Lift`](../interfaces/liftable.Lift.md)<`C`, `TVariance`\>\> |

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

▸ **createOnNotifyLiftedOperator**<`C`, `TVariance`\>(`m`, `OnNotifyLiftableState`): <T_1\>(`onNotify`: [`SideEffect1`](functions.md#sideeffect1)<`T_1`\>) => [`ContainerOperator`](container.md#containeroperator)<`C`, `T_1`, `T_1`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`LiftableLike`](../interfaces/liftable.LiftableLike.md) |
| `TVariance` | extends ``"covariant"`` \| ``"contravariant"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`Lift`](../interfaces/liftable.Lift.md)<`C`, `TVariance`\> |
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

### createPairwiseLiftedOperator

▸ **createPairwiseLiftedOperator**<`C`, `TVariance`\>(`m`, `PairwiseLiftableState`): <T_1\>() => [`ContainerOperator`](container.md#containeroperator)<`C`, `T_1`, [[`Option`](option.md#option)<`T_1`\>, `T_1`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`LiftableLike`](../interfaces/liftable.LiftableLike.md) |
| `TVariance` | extends ``"covariant"`` \| ``"contravariant"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`Lift`](../interfaces/liftable.Lift.md)<`C`, `TVariance`\> |
| `PairwiseLiftableState` | <T\>(`delegate`: [`LiftOperatorIn`](liftable.md#liftoperatorin)<`T`, [[`Option`](option.md#option)<`T`\>, `T`], `C`, [`Lift`](../interfaces/liftable.Lift.md)<`C`, `TVariance`\>\>) => [`LiftOperatorOut`](liftable.md#liftoperatorout)<`T`, [[`Option`](option.md#option)<`T`\>, `T`], `C`, [`Lift`](../interfaces/liftable.Lift.md)<`C`, `TVariance`\>\> |

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

▸ **createScanLiftedOperator**<`C`, `TVariance`\>(`m`, `ScanLiftableState`): <T_1, TAcc_1\>(`reducer`: [`Reducer`](functions.md#reducer)<`T_1`, `TAcc_1`\>, `initialValue`: [`Factory`](functions.md#factory)<`TAcc_1`\>) => [`ContainerOperator`](container.md#containeroperator)<`C`, `T_1`, `TAcc_1`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`LiftableLike`](../interfaces/liftable.LiftableLike.md) |
| `TVariance` | extends ``"covariant"`` \| ``"contravariant"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`Lift`](../interfaces/liftable.Lift.md)<`C`, `TVariance`\> |
| `ScanLiftableState` | <T, TAcc\>(`delegate`: [`LiftOperatorIn`](liftable.md#liftoperatorin)<`T`, `TAcc`, `C`, [`Lift`](../interfaces/liftable.Lift.md)<`C`, `TVariance`\>\>, `reducer`: [`Reducer`](functions.md#reducer)<`T`, `TAcc`\>, `acc`: `TAcc`) => [`LiftOperatorOut`](liftable.md#liftoperatorout)<`T`, `TAcc`, `C`, [`Lift`](../interfaces/liftable.Lift.md)<`C`, `TVariance`\>\> |

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

▸ **createSkipFirstLiftedOperator**<`C`, `TVariance`\>(`m`, `SkipLiftableState`): <T_1\>(`options?`: { `count?`: `number`  }) => [`ContainerOperator`](container.md#containeroperator)<`C`, `T_1`, `T_1`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`LiftableLike`](../interfaces/liftable.LiftableLike.md) |
| `TVariance` | extends ``"covariant"`` \| ``"contravariant"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`Lift`](../interfaces/liftable.Lift.md)<`C`, `TVariance`\> |
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

▸ **createTakeFirstLiftdOperator**<`C`, `TVariance`\>(`m`, `TakeFirstLiftableState`): <T_1\>(`options?`: { `count?`: `number`  }) => [`ContainerOperator`](container.md#containeroperator)<`C`, `T_1`, `T_1`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`LiftableLike`](../interfaces/liftable.LiftableLike.md) |
| `TVariance` | extends ``"covariant"`` \| ``"contravariant"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`FromArray`](../interfaces/container.FromArray.md)<`C`, [`FromArrayOptions`](../interfaces/container.FromArrayOptions.md)\> & [`Lift`](../interfaces/liftable.Lift.md)<`C`, `TVariance`\> |
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

▸ **createTakeWhileLiftedOperator**<`C`, `TVariance`\>(`m`, `TakeWhileLiftableState`): <T_1\>(`predicate`: [`Predicate`](functions.md#predicate)<`T_1`\>, `options?`: { `inclusive?`: `boolean`  }) => [`ContainerOperator`](container.md#containeroperator)<`C`, `T_1`, `T_1`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`LiftableLike`](../interfaces/liftable.LiftableLike.md) |
| `TVariance` | extends ``"covariant"`` \| ``"contravariant"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`Lift`](../interfaces/liftable.Lift.md)<`C`, `TVariance`\> |
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

▸ **createThrowIfEmptyLiftedOperator**<`C`, `TVariance`\>(`m`, `ThrowIfEmptyLiftableState`): <T_1\>(`factory`: [`Factory`](functions.md#factory)<`unknown`\>) => [`ContainerOperator`](container.md#containeroperator)<`C`, `T_1`, `T_1`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`LiftableLike`](../interfaces/liftable.LiftableLike.md) |
| `TVariance` | extends ``"covariant"`` \| ``"contravariant"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`Lift`](../interfaces/liftable.Lift.md)<`C`, `TVariance`\> |
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
