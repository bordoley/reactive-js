[Reactive-JS](../README.md) / [core](../modules/core.md) / [KeyedContainer](../modules/core.KeyedContainer.md) / FromReadonlyArray

# Interface: FromReadonlyArray<C\>

[core](../modules/core.md).[KeyedContainer](../modules/core.KeyedContainer.md).FromReadonlyArray

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`KeyedContainer`](core.KeyedContainer-1.md) |

## Table of contents

### Constructor Methods

- [fromReadonlyArray](core.KeyedContainer.FromReadonlyArray.md#fromreadonlyarray)

## Constructor Methods

### fromReadonlyArray

▸ **fromReadonlyArray**<`T`, `TKey`\>(`options?`): [`Function1`](../modules/functions.md#function1)<readonly `T`[], [`Of`](../modules/core.KeyedContainer.md#of)<`C`, `TKey`, `T`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `number` = `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count?` | `number` |
| `options.start?` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<readonly `T`[], [`Of`](../modules/core.KeyedContainer.md#of)<`C`, `TKey`, `T`\>\>
