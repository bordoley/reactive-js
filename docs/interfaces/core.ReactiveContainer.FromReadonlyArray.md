[Reactive-JS](../README.md) / [core](../modules/core.md) / [ReactiveContainer](../modules/core.ReactiveContainer.md) / FromReadonlyArray

# Interface: FromReadonlyArray<C\>

[core](../modules/core.md).[ReactiveContainer](../modules/core.ReactiveContainer.md).FromReadonlyArray

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ObservableContainer`](core.ObservableContainer.md) |

## Hierarchy

- [`FromReadonlyArray`](core.Container.FromReadonlyArray.md)<`C`\>

  ↳ **`FromReadonlyArray`**

## Table of contents

### Constructor Methods

- [fromReadonlyArray](core.ReactiveContainer.FromReadonlyArray.md#fromreadonlyarray)

## Constructor Methods

### fromReadonlyArray

▸ **fromReadonlyArray**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<readonly `T`[], [`Of`](../modules/core.Container.md#of)<`C`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count?` | `number` |
| `options.delay?` | `number` |
| `options.delayStart?` | `boolean` |
| `options.start?` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<readonly `T`[], [`Of`](../modules/core.Container.md#of)<`C`, `T`\>\>

#### Overrides

[FromReadonlyArray](core.Container.FromReadonlyArray.md).[fromReadonlyArray](core.Container.FromReadonlyArray.md#fromreadonlyarray)
