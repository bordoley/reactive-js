[Reactive-JS](../README.md) / [core](../modules/core.md) / [KeyedContainer](../modules/core.KeyedContainer.md) / Empty

# Interface: Empty<C\>

[core](../modules/core.md).[KeyedContainer](../modules/core.KeyedContainer.md).Empty

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`KeyedContainer`](core.KeyedContainer-1.md) |

## Table of contents

### Constructor Methods

- [empty](core.KeyedContainer.Empty.md#empty)

## Constructor Methods

### empty

▸ **empty**<`T`, `TKey`\>(): [`Of`](../modules/core.KeyedContainer.md#of)<`C`, `TKey`, `T`\>

Return an Container that emits no items.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` = [`KeyOf`](../modules/core.KeyedContainer.md#keyof)<`C`\> |

#### Returns

[`Of`](../modules/core.KeyedContainer.md#of)<`C`, `TKey`, `T`\>
