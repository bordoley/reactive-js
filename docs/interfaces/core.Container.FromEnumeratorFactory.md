[Reactive-JS](../README.md) / [core](../modules/core.md) / [Container](../modules/core.Container.md) / FromEnumeratorFactory

# Interface: FromEnumeratorFactory<C\>

[core](../modules/core.md).[Container](../modules/core.Container.md).FromEnumeratorFactory

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Container`](core.Container-1.md) |

## Hierarchy

- **`FromEnumeratorFactory`**

  ↳ [`FromEnumeratorFactory`](core.ReactiveContainer.FromEnumeratorFactory.md)

## Table of contents

### Constructor Methods

- [fromEnumeratorFactory](core.Container.FromEnumeratorFactory.md#fromenumeratorfactory)

## Constructor Methods

### fromEnumeratorFactory

▸ **fromEnumeratorFactory**<`T`\>(`factory`): [`Of`](../modules/core.Container.md#of)<`C`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](../modules/functions.md#factory)<[`EnumeratorLike`](core.EnumeratorLike.md)<`T`\>\> |

#### Returns

[`Of`](../modules/core.Container.md#of)<`C`, `T`\>
