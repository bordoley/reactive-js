[Reactive-JS](../README.md) / [types](../modules/types.md) / StatefulContainerModule

# Interface: StatefulContainerModule<C\>

[types](../modules/types.md).StatefulContainerModule

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Container`](types.Container.md) |

## Hierarchy

- [`DeferredContainerModule`](types.DeferredContainerModule.md)<`C`\>

  ↳ **`StatefulContainerModule`**

  ↳↳ [`DeferredObservableModule`](DeferredObservable.DeferredObservableModule.md)

  ↳↳ [`EnumerableModule`](Enumerable.EnumerableModule.md)

  ↳↳ [`EnumeratorFactoryModule`](EnumeratorFactory.EnumeratorFactoryModule.md)

  ↳↳ [`RunnableModule`](Runnable.RunnableModule.md)

## Table of contents

### Constructor Methods

- [generate](types.StatefulContainerModule.md#generate)
- [throws](types.StatefulContainerModule.md#throws)

### Operator Methods

- [retry](types.StatefulContainerModule.md#retry)

## Constructor Methods

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

___

## Operator Methods

### retry

▸ **retry**<`T`\>(`shouldRetry`): [`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `shouldRetry` | (`count`: `number`, `error`: `Error`) => `boolean` |

#### Returns

[`ContainerOperator`](../modules/types.md#containeroperator)<`C`, `T`, `T`\>
