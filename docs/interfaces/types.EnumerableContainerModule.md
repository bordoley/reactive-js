[Reactive-JS](../README.md) / [types](../modules/types.md) / EnumerableContainerModule

# Interface: EnumerableContainerModule<C\>

[types](../modules/types.md).EnumerableContainerModule

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Container`](types.Container.md) |

## Hierarchy

- [`RunnableContainerModule`](types.RunnableContainerModule.md)<`C`\>

  ↳ **`EnumerableContainerModule`**

  ↳↳ [`EnumerableModule`](Enumerable.EnumerableModule.md)

  ↳↳ [`EnumeratorFactoryModule`](EnumeratorFactory.EnumeratorFactoryModule.md)

## Table of contents

### Other Methods

- [toEnumeratorFactory](types.EnumerableContainerModule.md#toenumeratorfactory)
- [toObservable](types.EnumerableContainerModule.md#toobservable)

### Transform Methods

- [enumerate](types.EnumerableContainerModule.md#enumerate)
- [toIterable](types.EnumerableContainerModule.md#toiterable)

## Other Methods

### toEnumeratorFactory

▸ **toEnumeratorFactory**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>, [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>, [`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`T`\>\>

___

### toObservable

▸ **toObservable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>, [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>, [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

#### Overrides

[RunnableContainerModule](types.RunnableContainerModule.md).[toObservable](types.RunnableContainerModule.md#toobservable)

▸ **toObservable**<`T`\>(`options`): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>, [`RunnableLike`](types.RunnableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.delay` | `number` |
| `options.delayStart?` | `boolean` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>, [`RunnableLike`](types.RunnableLike.md)<`T`\>\>

#### Overrides

RunnableContainerModule.toObservable

___

## Transform Methods

### enumerate

▸ **enumerate**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>, [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>, [`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\>

___

### toIterable

▸ **toIterable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>, `Iterable`<`T`\>\>

Converts the Container to a `IterableLike`.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`ContainerOf`](../modules/types.md#containerof)<`C`, `T`\>, `Iterable`<`T`\>\>
