[Reactive-JS](../README.md) / [core](../modules/core.md) / [ReactiveContainer](../modules/core.ReactiveContainer.md) / FromFactory

# Interface: FromFactory<C\>

[core](../modules/core.md).[ReactiveContainer](../modules/core.ReactiveContainer.md).FromFactory

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ObservableContainer`](core.ObservableContainer.md) |

## Hierarchy

- [`FromFactory`](core.Container.FromFactory.md)<`C`\>

  ↳ **`FromFactory`**

## Table of contents

### Constructor Methods

- [fromFactory](core.ReactiveContainer.FromFactory.md#fromfactory)

## Constructor Methods

### fromFactory

▸ **fromFactory**<`T`\>(`factory`, `options?`): [`Of`](../modules/core.Container.md#of)<`C`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](../modules/functions.md#factory)<`T`\> |
| `options?` | `Object` |
| `options.delay?` | `number` |

#### Returns

[`Of`](../modules/core.Container.md#of)<`C`, `T`\>

#### Overrides

[FromFactory](core.Container.FromFactory.md).[fromFactory](core.Container.FromFactory.md#fromfactory)
