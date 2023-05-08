[Reactive-JS](../README.md) / [core](../modules/core.md) / [Container](../modules/core.Container.md) / FromReadonlyArray

# Interface: FromReadonlyArray<C\>

[core](../modules/core.md).[Container](../modules/core.Container.md).FromReadonlyArray

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Container`](core.Container-1.md) |

## Hierarchy

- **`FromReadonlyArray`**

  ↳ [`FromReadonlyArray`](core.ReactiveContainer.FromReadonlyArray.md)

## Table of contents

### Constructor Methods

- [fromReadonlyArray](core.Container.FromReadonlyArray.md#fromreadonlyarray)

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
| `options.start?` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<readonly `T`[], [`Of`](../modules/core.Container.md#of)<`C`, `T`\>\>
