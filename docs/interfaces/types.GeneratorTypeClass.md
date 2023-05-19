[Reactive-JS](../README.md) / [types](../modules/types.md) / GeneratorTypeClass

# Interface: GeneratorTypeClass<C\>

[types](../modules/types.md).GeneratorTypeClass

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Container`](types.Container.md) |

## Hierarchy

- [`EnumerableTypeClass`](types.EnumerableTypeClass.md)<`C`\>

  ↳ **`GeneratorTypeClass`**

  ↳↳ [`EnumerableModule`](Enumerable.EnumerableModule.md)

  ↳↳ [`EnumeratorFactoryModule`](EnumeratorFactory.EnumeratorFactoryModule.md)

## Table of contents

### Methods

- [generate](types.GeneratorTypeClass.md#generate)
- [throws](types.GeneratorTypeClass.md#throws)

## Methods

### generate

▸ **generate**<`T`\>(`generator`, `initialValue`): [`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `generator` | [`Updater`](../modules/functions.md#updater)<`T`\> |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`T`\> |

#### Returns

[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>

___

### throws

▸ **throws**<`T`\>(`options?`): [`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.raise?` | [`Factory`](../modules/functions.md#factory)<`unknown`\> |

#### Returns

[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>
