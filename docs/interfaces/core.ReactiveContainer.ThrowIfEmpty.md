[Reactive-JS](../README.md) / [core](../modules/core.md) / [ReactiveContainer](../modules/core.ReactiveContainer.md) / ThrowIfEmpty

# Interface: ThrowIfEmpty<C\>

[core](../modules/core.md).[ReactiveContainer](../modules/core.ReactiveContainer.md).ThrowIfEmpty

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ObservableContainer`](core.ObservableContainer.md) |

## Table of contents

### Operator Methods

- [throwIfEmpty](core.ReactiveContainer.ThrowIfEmpty.md#throwifempty)

## Operator Methods

### throwIfEmpty

▸ **throwIfEmpty**<`T`\>(`factory`): [`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `T`\>

Returns a Container that emits an error if the source completes without emitting a value.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `factory` | [`Factory`](../modules/functions.md#factory)<`unknown`\> | A factory function invoked to produce the error to be thrown. |

#### Returns

[`Operator`](../modules/core.Container.md#operator)<`C`, `T`, `T`\>
