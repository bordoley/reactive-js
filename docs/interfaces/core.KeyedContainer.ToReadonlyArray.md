[Reactive-JS](../README.md) / [core](../modules/core.md) / [KeyedContainer](../modules/core.KeyedContainer.md) / ToReadonlyArray

# Interface: ToReadonlyArray<C\>

[core](../modules/core.md).[KeyedContainer](../modules/core.KeyedContainer.md).ToReadonlyArray

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`KeyedContainer`](core.KeyedContainer-1.md) |

## Table of contents

### Transform Methods

- [toReadonlyArray](core.KeyedContainer.ToReadonlyArray.md#toreadonlyarray)

## Transform Methods

### toReadonlyArray

▸ **toReadonlyArray**<`T`, `TKey`\>(): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/core.KeyedContainer.md#of)<`C`, `TKey`, `T`\>, readonly `T`[]\>

Converts the Container to a `ReadonlyArrayContainer`.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TKey` | extends `Object` = [`KeyOf`](../modules/core.KeyedContainer.md#keyof)<`C`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/core.KeyedContainer.md#of)<`C`, `TKey`, `T`\>, readonly `T`[]\>
