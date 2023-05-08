[Reactive-JS](../README.md) / [core](../modules/core.md) / [ReactiveContainer](../modules/core.ReactiveContainer.md) / FromEnumeratorFactory

# Interface: FromEnumeratorFactory<C\>

[core](../modules/core.md).[ReactiveContainer](../modules/core.ReactiveContainer.md).FromEnumeratorFactory

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`ObservableContainer`](core.ObservableContainer.md) |

## Hierarchy

- [`FromEnumeratorFactory`](core.Container.FromEnumeratorFactory.md)<`C`\>

  ↳ **`FromEnumeratorFactory`**

## Table of contents

### Constructor Methods

- [fromEnumeratorFactory](core.ReactiveContainer.FromEnumeratorFactory.md#fromenumeratorfactory)

## Constructor Methods

### fromEnumeratorFactory

▸ **fromEnumeratorFactory**<`T`\>(`factory`, `options?`): [`Of`](../modules/core.Container.md#of)<`C`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](../modules/functions.md#factory)<[`EnumeratorLike`](core.EnumeratorLike.md)<`T`\>\> |
| `options?` | `Object` |
| `options.delay?` | `number` |
| `options.delayStart?` | `boolean` |

#### Returns

[`Of`](../modules/core.Container.md#of)<`C`, `T`\>

#### Overrides

[FromEnumeratorFactory](core.Container.FromEnumeratorFactory.md).[fromEnumeratorFactory](core.Container.FromEnumeratorFactory.md#fromenumeratorfactory)
