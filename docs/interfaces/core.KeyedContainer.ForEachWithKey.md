[Reactive-JS](../README.md) / [core](../modules/core.md) / [KeyedContainer](../modules/core.KeyedContainer.md) / ForEachWithKey

# Interface: ForEachWithKey<C\>

[core](../modules/core.md).[KeyedContainer](../modules/core.KeyedContainer.md).ForEachWithKey

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`KeyedContainer`](core.KeyedContainer-1.md) |

## Table of contents

### Operator Methods

- [forEachWithKey](core.KeyedContainer.ForEachWithKey.md#foreachwithkey)

## Operator Methods

### forEachWithKey

▸ **forEachWithKey**<`T`, `TKey`\>(`effect`): [`Operator`](../modules/core.KeyedContainer.md#operator)<`C`, `TKey`, `T`, `T`\>

Returns a KeyedContainer.Operator that applies the side effect function to each
value emitted by the source.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` = [`KeyOf`](../modules/core.KeyedContainer.md#keyof)<`C`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `effect` | [`SideEffect2`](../modules/functions.md#sideeffect2)<`T`, `TKey`\> |

#### Returns

[`Operator`](../modules/core.KeyedContainer.md#operator)<`C`, `TKey`, `T`, `T`\>
