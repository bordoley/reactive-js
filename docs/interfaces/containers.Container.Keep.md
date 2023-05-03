[Reactive-JS](../README.md) / [containers](../modules/containers.md) / [Container](../modules/containers.Container.md) / Keep

# Interface: Keep<C\>

[containers](../modules/containers.md).[Container](../modules/containers.Container.md).Keep

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Container`](containers.Container-1.md) |

## Table of contents

### Operator Methods

- [keep](containers.Container.Keep.md#keep)

## Operator Methods

### keep

▸ **keep**<`T`\>(`predicate`): [`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `T`\>

Returns a ContainerOperator that only emits items produced by the
source that satisfy the specified predicate.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`T`\> |

#### Returns

[`ContainerOperator`](../modules/containers.md#containeroperator)<`C`, `T`, `T`\>
