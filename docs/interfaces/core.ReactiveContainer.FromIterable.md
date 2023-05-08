[Reactive-JS](../README.md) / [core](../modules/core.md) / [ReactiveContainer](../modules/core.ReactiveContainer.md) / FromIterable

# Interface: FromIterable<C\>

[core](../modules/core.md).[ReactiveContainer](../modules/core.ReactiveContainer.md).FromIterable

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ObservableContainer`](core.ObservableContainer.md) |

## Hierarchy

- [`FromIterable`](core.Container.FromIterable.md)<`C`\>

  ↳ **`FromIterable`**

## Table of contents

### Constructor Methods

- [fromIterable](core.ReactiveContainer.FromIterable.md#fromiterable)

## Constructor Methods

### fromIterable

▸ **fromIterable**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, [`Of`](../modules/core.Container.md#of)<`C`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.delay?` | `number` |
| `options.delayStart?` | `boolean` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, [`Of`](../modules/core.Container.md#of)<`C`, `T`\>\>

#### Overrides

[FromIterable](core.Container.FromIterable.md).[fromIterable](core.Container.FromIterable.md#fromiterable)
