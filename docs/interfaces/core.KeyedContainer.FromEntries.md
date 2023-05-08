[Reactive-JS](../README.md) / [core](../modules/core.md) / [KeyedContainer](../modules/core.KeyedContainer.md) / FromEntries

# Interface: FromEntries<C\>

[core](../modules/core.md).[KeyedContainer](../modules/core.KeyedContainer.md).FromEntries

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`KeyedContainer`](core.KeyedContainer-1.md) |

## Table of contents

### Constructor Methods

- [fromEntries](core.KeyedContainer.FromEntries.md#fromentries)

## Constructor Methods

### fromEntries

▸ **fromEntries**<`T`, `TKey`\>(): [`Function1`](../modules/functions.md#function1)<[`EnumeratorLike`](core.EnumeratorLike.md)<[`TKey`, `T`]\>, [`Of`](../modules/core.KeyedContainer.md#of)<`C`, `TKey`, `T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` = [`KeyOf`](../modules/core.KeyedContainer.md#keyof)<`C`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumeratorLike`](core.EnumeratorLike.md)<[`TKey`, `T`]\>, [`Of`](../modules/core.KeyedContainer.md#of)<`C`, `TKey`, `T`\>\>
