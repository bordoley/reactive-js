[Reactive-JS](../README.md) / [core](../modules/core.md) / [KeyedContainer](../modules/core.KeyedContainer.md) / Keep

# Interface: Keep<C\>

[core](../modules/core.md).[KeyedContainer](../modules/core.KeyedContainer.md).Keep

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`KeyedContainer`](core.KeyedContainer-1.md) |

## Table of contents

### Operator Methods

- [keep](core.KeyedContainer.Keep.md#keep)

## Operator Methods

### keep

▸ **keep**<`T`, `TKey`\>(`predicate`): [`Operator`](../modules/core.KeyedContainer.md#operator)<`C`, `TKey`, `T`, `T`\>

Returns a Container.Operator that only emits items produced by the
source that satisfy the specified predicate.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` = [`KeyOf`](../modules/core.KeyedContainer.md#keyof)<`C`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`T`\> |

#### Returns

[`Operator`](../modules/core.KeyedContainer.md#operator)<`C`, `TKey`, `T`, `T`\>
