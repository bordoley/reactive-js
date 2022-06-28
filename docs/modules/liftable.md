[Reactive-JS](../README.md) / liftable

# Module: liftable

## Table of contents

### Classes

- [AbstractDisposableLiftable](../classes/liftable.AbstractDisposableLiftable.md)
- [AbstractLiftable](../classes/liftable.AbstractLiftable.md)

### Interfaces

- [Lift](../interfaces/liftable.Lift.md)
- [LiftableLike](../interfaces/liftable.LiftableLike.md)
- [LiftableStateLike](../interfaces/liftable.LiftableStateLike.md)

### Type Aliases

- [ContraVariant](liftable.md#contravariant)
- [Covariant](liftable.md#covariant)
- [LiftOperator](liftable.md#liftoperator)
- [LiftOperatorIn](liftable.md#liftoperatorin)
- [LiftOperatorOut](liftable.md#liftoperatorout)
- [LiftableStateOf](liftable.md#liftablestateof)
- [Variance](liftable.md#variance)

### Variables

- [contraVariant](liftable.md#contravariant-1)
- [covariant](liftable.md#covariant-1)

### Functions

- [createDistinctUntilChangedLiftOperator](liftable.md#createdistinctuntilchangedliftoperator)
- [createKeepLiftOperator](liftable.md#createkeepliftoperator)
- [createMapLiftOperator](liftable.md#createmapliftoperator)
- [createOnNotifyLiftOperator](liftable.md#createonnotifyliftoperator)
- [createPairwiseLiftOperator](liftable.md#createpairwiseliftoperator)
- [createScanLiftOperator](liftable.md#createscanliftoperator)
- [createSkipFirstLiftOperator](liftable.md#createskipfirstliftoperator)
- [createTakeFirstLiftOperator](liftable.md#createtakefirstliftoperator)
- [createTakeWhileLiftOperator](liftable.md#createtakewhileliftoperator)
- [createThrowIfEmptyLiftOperator](liftable.md#createthrowifemptyliftoperator)
- [lift](liftable.md#lift)

## Type Aliases

### ContraVariant

Ƭ **ContraVariant**: ``1``

___

### Covariant

Ƭ **Covariant**: ``0``

___

### LiftOperator

Ƭ **LiftOperator**<`C`, `TA`, `TB`, `M`\>: [`Function1`](functions.md#function1)<[`LiftOperatorIn`](liftable.md#liftoperatorin)<`C`, `TA`, `TB`, `M`\>, [`LiftOperatorOut`](liftable.md#liftoperatorout)<`C`, `TA`, `TB`, `M`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`LiftableLike`](../interfaces/liftable.LiftableLike.md) |
| `TA` | `TA` |
| `TB` | `TB` |
| `M` | extends [`Lift`](../interfaces/liftable.Lift.md)<`C`, [`Variance`](liftable.md#variance)\> |

___

### LiftOperatorIn

Ƭ **LiftOperatorIn**<`C`, `TA`, `TB`, `M`\>: `M` extends { `variance?`: [`ContraVariant`](liftable.md#contravariant)  } ? [`LiftableStateOf`](liftable.md#liftablestateof)<`C`, `TB`\> : [`LiftableStateOf`](liftable.md#liftablestateof)<`C`, `TA`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`LiftableLike`](../interfaces/liftable.LiftableLike.md) |
| `TA` | `TA` |
| `TB` | `TB` |
| `M` | extends [`Lift`](../interfaces/liftable.Lift.md)<`C`, [`Variance`](liftable.md#variance)\> |

___

### LiftOperatorOut

Ƭ **LiftOperatorOut**<`C`, `TA`, `TB`, `M`\>: `M` extends { `variance?`: [`ContraVariant`](liftable.md#contravariant)  } ? [`LiftableStateOf`](liftable.md#liftablestateof)<`C`, `TA`\> : [`LiftableStateOf`](liftable.md#liftablestateof)<`C`, `TB`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`LiftableLike`](../interfaces/liftable.LiftableLike.md) |
| `TA` | `TA` |
| `TB` | `TB` |
| `M` | extends [`Lift`](../interfaces/liftable.Lift.md)<`C`, [`Variance`](liftable.md#variance)\> |

___

### LiftableStateOf

Ƭ **LiftableStateOf**<`C`, `T`\>: `C` extends { `liftableStateType`: `unknown`  } ? `C` & { `T`: `T`  }[``"liftableStateType"``] : { `_C`: `C` ; `_T`: () => `T`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`LiftableLike`](../interfaces/liftable.LiftableLike.md) |
| `T` | `T` |

___

### Variance

Ƭ **Variance**: [`Covariant`](liftable.md#covariant) \| [`ContraVariant`](liftable.md#contravariant)

## Variables

### contraVariant

• `Const` **contraVariant**: [`ContraVariant`](liftable.md#contravariant)

___

### covariant

• `Const` **covariant**: [`Covariant`](liftable.md#covariant)

## Functions

### createDistinctUntilChangedLiftOperator

▸ **createDistinctUntilChangedLiftOperator**<`C`, `TVariance`\>(`m`, `DistinctUntilChangedLiftableState`): <T_1\>(`options?`: { `equality?`: [`Equality`](functions.md#equality)<`T_1`\>  }) => [`ContainerOperator`](container.md#containeroperator)<`C`, `T_1`, `T_1`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`LiftableLike`](../interfaces/liftable.LiftableLike.md) |
| `TVariance` | extends [`Variance`](liftable.md#variance) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`Lift`](../interfaces/liftable.Lift.md)<`C`, `TVariance`\> |
| `DistinctUntilChangedLiftableState` | <T\>(`delegate`: [`LiftableStateOf`](liftable.md#liftablestateof)<`C`, `T`\>, `equality`: [`Equality`](functions.md#equality)<`T`\>) => [`LiftableStateOf`](liftable.md#liftablestateof)<`C`, `T`\> |

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

### createKeepLiftOperator

▸ **createKeepLiftOperator**<`C`, `TVariance`\>(`m`, `KeepLiftableState`): <T_1\>(`predicate`: [`Predicate`](functions.md#predicate)<`T_1`\>) => [`ContainerOperator`](container.md#containeroperator)<`C`, `T_1`, `T_1`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`LiftableLike`](../interfaces/liftable.LiftableLike.md) |
| `TVariance` | extends [`Variance`](liftable.md#variance) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`Lift`](../interfaces/liftable.Lift.md)<`C`, `TVariance`\> |
| `KeepLiftableState` | <T\>(`delegate`: [`LiftableStateOf`](liftable.md#liftablestateof)<`C`, `T`\>, `predicate`: [`Predicate`](functions.md#predicate)<`T`\>) => [`LiftableStateOf`](liftable.md#liftablestateof)<`C`, `T`\> |

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

### createMapLiftOperator

▸ **createMapLiftOperator**<`C`, `TVariance`\>(`m`, `MapLiftableState`): <TA_1, TB_1\>(`mapper`: [`Function1`](functions.md#function1)<`TA_1`, `TB_1`\>) => [`ContainerOperator`](container.md#containeroperator)<`C`, `TA_1`, `TB_1`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`LiftableLike`](../interfaces/liftable.LiftableLike.md) |
| `TVariance` | extends [`Variance`](liftable.md#variance) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`Lift`](../interfaces/liftable.Lift.md)<`C`, `TVariance`\> |
| `MapLiftableState` | <TA, TB\>(`delegate`: [`LiftOperatorIn`](liftable.md#liftoperatorin)<`C`, `TA`, `TB`, [`Lift`](../interfaces/liftable.Lift.md)<`C`, `TVariance`\>\>, `mapper`: [`Function1`](functions.md#function1)<`TA`, `TB`\>) => [`LiftOperatorOut`](liftable.md#liftoperatorout)<`C`, `TA`, `TB`, [`Lift`](../interfaces/liftable.Lift.md)<`C`, `TVariance`\>\> |

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

### createOnNotifyLiftOperator

▸ **createOnNotifyLiftOperator**<`C`, `TVariance`\>(`m`, `OnNotifyLiftableState`): <T_1\>(`onNotify`: [`SideEffect1`](functions.md#sideeffect1)<`T_1`\>) => [`ContainerOperator`](container.md#containeroperator)<`C`, `T_1`, `T_1`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`LiftableLike`](../interfaces/liftable.LiftableLike.md) |
| `TVariance` | extends [`Variance`](liftable.md#variance) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`Lift`](../interfaces/liftable.Lift.md)<`C`, `TVariance`\> |
| `OnNotifyLiftableState` | <T\>(`delegate`: [`LiftableStateOf`](liftable.md#liftablestateof)<`C`, `T`\>, `onNotify`: [`SideEffect1`](functions.md#sideeffect1)<`T`\>) => [`LiftableStateOf`](liftable.md#liftablestateof)<`C`, `T`\> |

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

### createPairwiseLiftOperator

▸ **createPairwiseLiftOperator**<`C`, `TVariance`\>(`m`, `PairwiseLiftableState`): <T_1\>() => [`ContainerOperator`](container.md#containeroperator)<`C`, `T_1`, [[`Option`](option.md#option)<`T_1`\>, `T_1`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`LiftableLike`](../interfaces/liftable.LiftableLike.md) |
| `TVariance` | extends [`Variance`](liftable.md#variance) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`Lift`](../interfaces/liftable.Lift.md)<`C`, `TVariance`\> |
| `PairwiseLiftableState` | <T\>(`delegate`: [`LiftOperatorIn`](liftable.md#liftoperatorin)<`C`, `T`, [[`Option`](option.md#option)<`T`\>, `T`], [`Lift`](../interfaces/liftable.Lift.md)<`C`, `TVariance`\>\>) => [`LiftOperatorOut`](liftable.md#liftoperatorout)<`C`, `T`, [[`Option`](option.md#option)<`T`\>, `T`], [`Lift`](../interfaces/liftable.Lift.md)<`C`, `TVariance`\>\> |

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

### createScanLiftOperator

▸ **createScanLiftOperator**<`C`, `TVariance`\>(`m`, `ScanLiftableState`): <T_1, TAcc_1\>(`reducer`: [`Reducer`](functions.md#reducer)<`T_1`, `TAcc_1`\>, `initialValue`: [`Factory`](functions.md#factory)<`TAcc_1`\>) => [`ContainerOperator`](container.md#containeroperator)<`C`, `T_1`, `TAcc_1`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`LiftableLike`](../interfaces/liftable.LiftableLike.md) |
| `TVariance` | extends [`Variance`](liftable.md#variance) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`Lift`](../interfaces/liftable.Lift.md)<`C`, `TVariance`\> |
| `ScanLiftableState` | <T, TAcc\>(`delegate`: [`LiftOperatorIn`](liftable.md#liftoperatorin)<`C`, `T`, `TAcc`, [`Lift`](../interfaces/liftable.Lift.md)<`C`, `TVariance`\>\>, `reducer`: [`Reducer`](functions.md#reducer)<`T`, `TAcc`\>, `acc`: `TAcc`) => [`LiftOperatorOut`](liftable.md#liftoperatorout)<`C`, `T`, `TAcc`, [`Lift`](../interfaces/liftable.Lift.md)<`C`, `TVariance`\>\> |

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

### createSkipFirstLiftOperator

▸ **createSkipFirstLiftOperator**<`C`, `TVariance`\>(`m`, `SkipLiftableState`): <T_1\>(`options?`: { `count?`: `number`  }) => [`ContainerOperator`](container.md#containeroperator)<`C`, `T_1`, `T_1`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`LiftableLike`](../interfaces/liftable.LiftableLike.md) |
| `TVariance` | extends [`Variance`](liftable.md#variance) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`Lift`](../interfaces/liftable.Lift.md)<`C`, `TVariance`\> |
| `SkipLiftableState` | <T\>(`delegate`: [`LiftOperatorIn`](liftable.md#liftoperatorin)<`C`, `T`, `T`, [`Lift`](../interfaces/liftable.Lift.md)<`C`, `TVariance`\>\>, `skipCount`: `number`) => [`LiftOperatorOut`](liftable.md#liftoperatorout)<`C`, `T`, `T`, [`Lift`](../interfaces/liftable.Lift.md)<`C`, `TVariance`\>\> |

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

### createTakeFirstLiftOperator

▸ **createTakeFirstLiftOperator**<`C`, `TVariance`\>(`m`, `TakeFirstLiftableState`): <T_1\>(`options?`: { `count?`: `number`  }) => [`ContainerOperator`](container.md#containeroperator)<`C`, `T_1`, `T_1`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`LiftableLike`](../interfaces/liftable.LiftableLike.md) |
| `TVariance` | extends [`Variance`](liftable.md#variance) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`FromArray`](../interfaces/container.FromArray.md)<`C`, [`FromArrayOptions`](../interfaces/container.FromArrayOptions.md)\> & [`Lift`](../interfaces/liftable.Lift.md)<`C`, `TVariance`\> |
| `TakeFirstLiftableState` | <T\>(`delegate`: [`LiftOperatorIn`](liftable.md#liftoperatorin)<`C`, `T`, `T`, [`FromArray`](../interfaces/container.FromArray.md)<`C`, [`FromArrayOptions`](../interfaces/container.FromArrayOptions.md)\> & [`Lift`](../interfaces/liftable.Lift.md)<`C`, `TVariance`\>\>, `maxCount`: `number`) => [`LiftOperatorOut`](liftable.md#liftoperatorout)<`C`, `T`, `T`, [`FromArray`](../interfaces/container.FromArray.md)<`C`, [`FromArrayOptions`](../interfaces/container.FromArrayOptions.md)\> & [`Lift`](../interfaces/liftable.Lift.md)<`C`, `TVariance`\>\> |

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

### createTakeWhileLiftOperator

▸ **createTakeWhileLiftOperator**<`C`, `TVariance`\>(`m`, `TakeWhileLiftableState`): <T_1\>(`predicate`: [`Predicate`](functions.md#predicate)<`T_1`\>, `options?`: { `inclusive?`: `boolean`  }) => [`ContainerOperator`](container.md#containeroperator)<`C`, `T_1`, `T_1`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`LiftableLike`](../interfaces/liftable.LiftableLike.md) |
| `TVariance` | extends [`Variance`](liftable.md#variance) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`Lift`](../interfaces/liftable.Lift.md)<`C`, `TVariance`\> |
| `TakeWhileLiftableState` | <T\>(`delegate`: [`LiftOperatorIn`](liftable.md#liftoperatorin)<`C`, `T`, `T`, [`Lift`](../interfaces/liftable.Lift.md)<`C`, `TVariance`\>\>, `predicate`: [`Predicate`](functions.md#predicate)<`T`\>, `inclusive`: `boolean`) => [`LiftOperatorOut`](liftable.md#liftoperatorout)<`C`, `T`, `T`, [`Lift`](../interfaces/liftable.Lift.md)<`C`, `TVariance`\>\> |

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

### createThrowIfEmptyLiftOperator

▸ **createThrowIfEmptyLiftOperator**<`C`, `TVariance`\>(`m`, `ThrowIfEmptyLiftableState`): <T_1\>(`factory`: [`Factory`](functions.md#factory)<`unknown`\>) => [`ContainerOperator`](container.md#containeroperator)<`C`, `T_1`, `T_1`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`LiftableLike`](../interfaces/liftable.LiftableLike.md) |
| `TVariance` | extends [`Variance`](liftable.md#variance) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`Lift`](../interfaces/liftable.Lift.md)<`C`, `TVariance`\> |
| `ThrowIfEmptyLiftableState` | <T\>(`delegate`: [`LiftOperatorIn`](liftable.md#liftoperatorin)<`C`, `T`, `T`, [`Lift`](../interfaces/liftable.Lift.md)<`C`, `TVariance`\>\>) => [`LiftOperatorOut`](liftable.md#liftoperatorout)<`C`, `T`, `T`, [`Lift`](../interfaces/liftable.Lift.md)<`C`, `TVariance`\>\> & { `isEmpty`: `boolean`  } |

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

### lift

▸ **lift**<`C`, `TA`, `TB`, `TVariance`\>(`m`): [`Function1`](functions.md#function1)<[`LiftOperator`](liftable.md#liftoperator)<`C`, `TA`, `TB`, [`Lift`](../interfaces/liftable.Lift.md)<`C`, `TVariance`\>\>, [`ContainerOperator`](container.md#containeroperator)<`C`, `TA`, `TB`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`LiftableLike`](../interfaces/liftable.LiftableLike.md) |
| `TA` | `TA` |
| `TB` | `TB` |
| `TVariance` | extends [`Variance`](liftable.md#variance) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`Lift`](../interfaces/liftable.Lift.md)<`C`, `TVariance`\> |

#### Returns

[`Function1`](functions.md#function1)<[`LiftOperator`](liftable.md#liftoperator)<`C`, `TA`, `TB`, [`Lift`](../interfaces/liftable.Lift.md)<`C`, `TVariance`\>\>, [`ContainerOperator`](container.md#containeroperator)<`C`, `TA`, `TB`\>\>
