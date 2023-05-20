[Reactive-JS](../README.md) / [types](../modules/types.md) / StatefulTypeClass

# Interface: StatefulTypeClass<C\>

[types](../modules/types.md).StatefulTypeClass

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Container`](types.Container.md) |

## Hierarchy

- [`DeferredTypeClass`](types.DeferredTypeClass.md)<`C`\>

  ↳ **`StatefulTypeClass`**

  ↳↳ [`DeferredObservableModule`](DeferredObservable.DeferredObservableModule.md)

  ↳↳ [`EnumerableModule`](Enumerable.EnumerableModule.md)

  ↳↳ [`EnumeratorFactoryModule`](EnumeratorFactory.EnumeratorFactoryModule.md)

  ↳↳ [`RunnableModule`](Runnable.RunnableModule.md)

## Table of contents

### Operator Methods

- [retry](types.StatefulTypeClass.md#retry)

### Other Methods

- [generate](types.StatefulTypeClass.md#generate)
- [throws](types.StatefulTypeClass.md#throws)

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

___

## Other Methods

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
