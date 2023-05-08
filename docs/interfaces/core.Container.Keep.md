[Reactive-JS](../README.md) / [core](../modules/core.md) / [Container](../modules/core.Container.md) / Keep

# Interface: Keep<C\>

[core](../modules/core.md).[Container](../modules/core.Container.md).Keep

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Container`](core.Container-1.md) |

## Table of contents

### Operator Methods

- [keep](core.Container.Keep.md#keep)

## Operator Methods

### keep

▸ **keep**<`T`\>(`predicate`): [`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `T`\>

Returns a Container.Operator that only emits items produced by the
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

[`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `T`\>
