[Reactive-JS](../README.md) / [core](../modules/core.md) / [ReactiveContainer](../modules/core.ReactiveContainer.md) / FromOptional

# Interface: FromOptional<C\>

[core](../modules/core.md).[ReactiveContainer](../modules/core.ReactiveContainer.md).FromOptional

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ObservableContainer`](core.ObservableContainer.md) |

## Hierarchy

- [`FromOptional`](core.Container.FromOptional.md)<`C`\>

  ↳ **`FromOptional`**

## Table of contents

### Constructor Methods

- [fromOptional](core.ReactiveContainer.FromOptional.md#fromoptional)

## Constructor Methods

### fromOptional

▸ **fromOptional**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<[`Optional`](../modules/functions.md#optional)<`T`\>, [`Of`](../modules/core.Container.md#of)<`C`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.delay?` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Optional`](../modules/functions.md#optional)<`T`\>, [`Of`](../modules/core.Container.md#of)<`C`, `T`\>\>

#### Overrides

[FromOptional](core.Container.FromOptional.md).[fromOptional](core.Container.FromOptional.md#fromoptional)
