[Reactive-JS](../README.md) / [DeferredObservable](../modules/DeferredObservable.md) / DeferredObservableModule

# Interface: DeferredObservableModule

[DeferredObservable](../modules/DeferredObservable.md).DeferredObservableModule

## Hierarchy

- [`DeferredContainerModule`](types.DeferredContainerModule.md)<[`Type`](../modules/DeferredObservable.md#type)\>

- [`HigherOrderObservableModule`](types.HigherOrderObservableModule.md)<[`Type`](../modules/DeferredObservable.md#type), [`Type`](../modules/DeferredObservable.md#type)\>

  ↳ **`DeferredObservableModule`**

## Table of contents

### Operator Methods

- [repeat](DeferredObservable.DeferredObservableModule.md#repeat)
- [retry](DeferredObservable.DeferredObservableModule.md#retry)

## Operator Methods

### repeat

▸ **repeat**<`T`\>(`predicate`): [`DeferredObservableOperator`](../modules/DeferredObservable.md#deferredobservableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`number`\> |

#### Returns

[`DeferredObservableOperator`](../modules/DeferredObservable.md#deferredobservableoperator)<`T`, `T`\>

#### Overrides

[DeferredContainerModule](types.DeferredContainerModule.md).[repeat](types.DeferredContainerModule.md#repeat)

▸ **repeat**<`T`\>(`count`): [`DeferredObservableOperator`](../modules/DeferredObservable.md#deferredobservableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `count` | `number` |

#### Returns

[`DeferredObservableOperator`](../modules/DeferredObservable.md#deferredobservableoperator)<`T`, `T`\>

#### Overrides

[DeferredContainerModule](types.DeferredContainerModule.md).[repeat](types.DeferredContainerModule.md#repeat)

▸ **repeat**<`T`\>(): [`DeferredObservableOperator`](../modules/DeferredObservable.md#deferredobservableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`DeferredObservableOperator`](../modules/DeferredObservable.md#deferredobservableoperator)<`T`, `T`\>

#### Overrides

[DeferredContainerModule](types.DeferredContainerModule.md).[repeat](types.DeferredContainerModule.md#repeat)

___

### retry

▸ **retry**<`T`\>(`shouldRetry`): [`DeferredObservableOperator`](../modules/DeferredObservable.md#deferredobservableoperator)<`T`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `shouldRetry` | (`count`: `number`, `error`: `Error`) => `boolean` |

#### Returns

[`DeferredObservableOperator`](../modules/DeferredObservable.md#deferredobservableoperator)<`T`, `T`\>
