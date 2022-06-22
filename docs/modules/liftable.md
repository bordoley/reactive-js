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

▸ **createDistinctUntilChangedLiftedOperator**<`C`\>(`m`, `DistinctUntilChangedLiftedState`): <T_1\>(`options?`: { `equality?`: [`Equality`](functions.md#equality)<`T_1`\>  }) => [`Function1`](functions.md#function1)<[`ContainerOf`](container.md#containerof)<`C`, `T_1`\>, [`ContainerOf`](container.md#containerof)<`C`, `T_1`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`LiftableLike`](../interfaces/liftable.LiftableLike.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `m` | [`Lift`](../interfaces/liftable.Lift.md)<`C`\> |
| `DistinctUntilChangedLiftedState` | <T\>(`delegate`: [`LiftedStateOf`](liftable.md#liftedstateof)<`C`, `T`\>, `equality`: [`Equality`](functions.md#equality)<`T`\>) => [`LiftedStateOf`](liftable.md#liftedstateof)<`C`, `T`\> |

#### Returns

`fn`

▸ <`T_1`\>(`options?`): [`Function1`](functions.md#function1)<[`ContainerOf`](container.md#containerof)<`C`, `T_1`\>, [`ContainerOf`](container.md#containerof)<`C`, `T_1`\>\>

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

[`Function1`](functions.md#function1)<[`ContainerOf`](container.md#containerof)<`C`, `T_1`\>, [`ContainerOf`](container.md#containerof)<`C`, `T_1`\>\>
