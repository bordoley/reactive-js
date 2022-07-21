[Reactive-JS](../README.md) / ix/EnumerableLike

# Module: ix/EnumerableLike

## Table of contents

### Interfaces

- [EnumerableLike](../interfaces/ix_EnumerableLike.EnumerableLike.md)
- [FromEnumerable](../interfaces/ix_EnumerableLike.FromEnumerable.md)
- [ToEnumerable](../interfaces/ix_EnumerableLike.ToEnumerable.md)

### Variables

- [liftT](ix_EnumerableLike.md#liftt)

### Functions

- [lift](ix_EnumerableLike.md#lift)

## Variables

### liftT

• `Const` **liftT**: `Lift`<[`EnumerableLike`](../interfaces/ix_EnumerableLike.EnumerableLike.md)<`unknown`\>, `TInteractive`\>

## Functions

### lift

▸ **lift**<`TA`, `TB`\>(`operator`): [`ContainerOperator`](containers_ContainerLike.md#containeroperator)<[`EnumerableLike`](../interfaces/ix_EnumerableLike.EnumerableLike.md)<`unknown`\>, `TA`, `TB`\>

Returns an EnumerableOperator that applies `operator` to
the EnumeratorLike returned by the source when enumerated.

#### Type parameters

| Name |
| :------ |
| `TA` |
| `TB` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `operator` | [`Function1`](util_functions.md#function1)<[`EnumeratorLike`](../interfaces/ix_EnumeratorLike.EnumeratorLike.md)<`TA`\>, [`EnumeratorLike`](../interfaces/ix_EnumeratorLike.EnumeratorLike.md)<`TB`\>\> |

#### Returns

[`ContainerOperator`](containers_ContainerLike.md#containeroperator)<[`EnumerableLike`](../interfaces/ix_EnumerableLike.EnumerableLike.md)<`unknown`\>, `TA`, `TB`\>
