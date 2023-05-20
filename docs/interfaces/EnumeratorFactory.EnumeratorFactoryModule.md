[Reactive-JS](../README.md) / [EnumeratorFactory](../modules/EnumeratorFactory.md) / EnumeratorFactoryModule

# Interface: EnumeratorFactoryModule

[EnumeratorFactory](../modules/EnumeratorFactory.md).EnumeratorFactoryModule

## Hierarchy

- [`EnumerableContainerModule`](types.EnumerableContainerModule.md)<[`Type`](../modules/EnumeratorFactory.md#type)\>

- [`StatefulContainerModule`](types.StatefulContainerModule.md)<[`Type`](../modules/EnumeratorFactory.md#type)\>

  ↳ **`EnumeratorFactoryModule`**

## Table of contents

### Methods

- [toObservable](EnumeratorFactory.EnumeratorFactoryModule.md#toobservable)

## Methods

### toObservable

▸ **toObservable**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`T`\>, [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`T`\>, [`EnumerableLike`](types.EnumerableLike.md)<`T`\>\>

#### Overrides

[EnumerableContainerModule](types.EnumerableContainerModule.md).[toObservable](types.EnumerableContainerModule.md#toobservable)

▸ **toObservable**<`T`\>(`options`): [`Function1`](../modules/functions.md#function1)<[`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`T`\>, [`RunnableLike`](types.RunnableLike.md)<`T`\>\>

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

[`Function1`](../modules/functions.md#function1)<[`EnumeratorFactoryLike`](../modules/types.md#enumeratorfactorylike)<`T`\>, [`RunnableLike`](types.RunnableLike.md)<`T`\>\>

#### Overrides

[EnumerableContainerModule](types.EnumerableContainerModule.md).[toObservable](types.EnumerableContainerModule.md#toobservable)
