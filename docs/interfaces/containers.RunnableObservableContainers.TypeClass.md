[Reactive-JS](../README.md) / [containers](../modules/containers.md) / [RunnableObservableContainers](../modules/containers.RunnableObservableContainers.md) / TypeClass

# Interface: TypeClass<C\>

[containers](../modules/containers.md).[RunnableObservableContainers](../modules/containers.RunnableObservableContainers.md).TypeClass

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`RunnableContainer`](containers.RunnableContainer-1.md) |

## Hierarchy

- [`TypeClass`](containers.DeferredObservableContainers.TypeClass.md)<`C`\>

- [`TypeClass`](containers.RunnableContainers.TypeClass.md)<`C`\>

  ↳ **`TypeClass`**

  ↳↳ [`TypeClass`](containers.EnumerableObservableContainers.TypeClass.md)

  ↳↳ [`TypeClass`](containers.RunnableContainer.TypeClass.md)

## Table of contents

### Transform Properties

- [contains](containers.RunnableObservableContainers.TypeClass.md#contains)
- [toRunnable](containers.RunnableObservableContainers.TypeClass.md#torunnable)

### Constructor Methods

- [animate](containers.RunnableObservableContainers.TypeClass.md#animate)
- [currentTime](containers.RunnableObservableContainers.TypeClass.md#currenttime)
- [empty](containers.RunnableObservableContainers.TypeClass.md#empty)
- [fromEnumeratorFactory](containers.RunnableObservableContainers.TypeClass.md#fromenumeratorfactory)
- [fromFactory](containers.RunnableObservableContainers.TypeClass.md#fromfactory)
- [fromIterable](containers.RunnableObservableContainers.TypeClass.md#fromiterable)
- [fromOptional](containers.RunnableObservableContainers.TypeClass.md#fromoptional)
- [fromReadonlyArray](containers.RunnableObservableContainers.TypeClass.md#fromreadonlyarray)
- [generate](containers.RunnableObservableContainers.TypeClass.md#generate)

### Transform Methods

- [everySatisfy](containers.RunnableObservableContainers.TypeClass.md#everysatisfy)
- [first](containers.RunnableObservableContainers.TypeClass.md#first)
- [flow](containers.RunnableObservableContainers.TypeClass.md#flow)
- [last](containers.RunnableObservableContainers.TypeClass.md#last)
- [multicast](containers.RunnableObservableContainers.TypeClass.md#multicast)
- [noneSatisfy](containers.RunnableObservableContainers.TypeClass.md#nonesatisfy)
- [reduce](containers.RunnableObservableContainers.TypeClass.md#reduce)
- [share](containers.RunnableObservableContainers.TypeClass.md#share)
- [someSatisfy](containers.RunnableObservableContainers.TypeClass.md#somesatisfy)
- [toReadonlyArray](containers.RunnableObservableContainers.TypeClass.md#toreadonlyarray)

## Transform Properties

### contains

• **contains**: <T\>(`value`: `T`, `options?`: { `equality?`: [`Equality`](../modules/functions.md#equality)<`T`\>  }) => [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>, `boolean`\>

#### Type declaration

▸ <`T`\>(`value`, `options?`): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>, `boolean`\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |
| `options?` | `Object` |
| `options.equality?` | [`Equality`](../modules/functions.md#equality)<`T`\> |

##### Returns

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>, `boolean`\>

#### Inherited from

[TypeClass](containers.RunnableContainers.TypeClass.md).[contains](containers.RunnableContainers.TypeClass.md#contains)

___

### toRunnable

• **toRunnable**: <T\>() => [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>, [`RunnableLike`](types.RunnableLike.md)<`T`\>\>

#### Type declaration

▸ <`T`\>(): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>, [`RunnableLike`](types.RunnableLike.md)<`T`\>\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Returns

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>, [`RunnableLike`](types.RunnableLike.md)<`T`\>\>

#### Inherited from

[TypeClass](containers.RunnableContainers.TypeClass.md).[toRunnable](containers.RunnableContainers.TypeClass.md#torunnable)

## Constructor Methods

### animate

▸ **animate**<`T`\>(`configs`): [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `configs` | [`AnimationConfig`](../modules/containers.RunnableObservableContainers.md#animationconfig)<`T`\> \| readonly [`AnimationConfig`](../modules/containers.RunnableObservableContainers.md#animationconfig)<`T`\>[] |

#### Returns

[`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>

___

### currentTime

▸ **currentTime**(`options?`): [`Of`](../modules/containers.Containers.md#of)<`C`, `number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.delay?` | `number` |
| `options.delayStart?` | `boolean` |

#### Returns

[`Of`](../modules/containers.Containers.md#of)<`C`, `number`\>

___

### empty

▸ **empty**<`T`\>(`options?`): [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.delay?` | `number` |

#### Returns

[`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>

#### Inherited from

[TypeClass](containers.DeferredObservableContainers.TypeClass.md).[empty](containers.DeferredObservableContainers.TypeClass.md#empty)

___

### fromEnumeratorFactory

▸ **fromEnumeratorFactory**<`T`\>(`factory`, `options?`): [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `factory` | [`Factory`](../modules/functions.md#factory)<[`EnumeratorLike`](types.EnumeratorLike.md)<`T`\>\> |
| `options?` | `Object` |
| `options.delay?` | `number` |
| `options.delayStart?` | `boolean` |

#### Returns

[`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>

#### Inherited from

[TypeClass](containers.DeferredObservableContainers.TypeClass.md).[fromEnumeratorFactory](containers.DeferredObservableContainers.TypeClass.md#fromenumeratorfactory)

___

### fromFactory

▸ **fromFactory**<`T`\>(`factory`, `options?`): [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>

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

[`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>

#### Inherited from

[TypeClass](containers.DeferredObservableContainers.TypeClass.md).[fromFactory](containers.DeferredObservableContainers.TypeClass.md#fromfactory)

___

### fromIterable

▸ **fromIterable**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.delay?` | `number` |
| `options.delayStart?` | `boolean` |

#### Returns

[`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>\>

#### Inherited from

[TypeClass](containers.DeferredObservableContainers.TypeClass.md).[fromIterable](containers.DeferredObservableContainers.TypeClass.md#fromiterable)

___

### fromOptional

▸ **fromOptional**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<[`Optional`](../modules/functions.md#optional)<`T`\>, [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.delay?` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Optional`](../modules/functions.md#optional)<`T`\>, [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>\>

#### Inherited from

[TypeClass](containers.DeferredObservableContainers.TypeClass.md).[fromOptional](containers.DeferredObservableContainers.TypeClass.md#fromoptional)

___

### fromReadonlyArray

▸ **fromReadonlyArray**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<readonly `T`[], [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.count?` | `number` |
| `options.delay?` | `number` |
| `options.delayStart?` | `boolean` |
| `options.start?` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<readonly `T`[], [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>\>

#### Inherited from

[TypeClass](containers.DeferredObservableContainers.TypeClass.md).[fromReadonlyArray](containers.DeferredObservableContainers.TypeClass.md#fromreadonlyarray)

___

### generate

▸ **generate**<`T`\>(`generator`, `initialValue`, `options?`): [`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `generator` | [`Updater`](../modules/functions.md#updater)<`T`\> |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`T`\> |
| `options?` | `Object` |
| `options.delay?` | `number` |
| `options.delayStart?` | `boolean` |

#### Returns

[`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>

#### Inherited from

[TypeClass](containers.DeferredObservableContainers.TypeClass.md).[generate](containers.DeferredObservableContainers.TypeClass.md#generate)

___

## Transform Methods

### everySatisfy

▸ **everySatisfy**<`T`\>(`predicate`): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>, `boolean`\>

Determines whether all the members of an Container satisfy the predicate.
The predicate function is invoked for each element in the Container until the
it returns false, or until the end of the Containers.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`T`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>, `boolean`\>

#### Inherited from

[TypeClass](containers.RunnableContainers.TypeClass.md).[everySatisfy](containers.RunnableContainers.TypeClass.md#everysatisfy)

___

### first

▸ **first**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>, [`Optional`](../modules/functions.md#optional)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>, [`Optional`](../modules/functions.md#optional)<`T`\>\>

#### Inherited from

[TypeClass](containers.RunnableContainers.TypeClass.md).[first](containers.RunnableContainers.TypeClass.md#first)

___

### flow

▸ **flow**<`T`\>(`scheduler`, `options?`): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>, [`PauseableObservableLike`](types.PauseableObservableLike.md)<`T`\> & [`DisposableLike`](types.DisposableLike.md)\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](types.SchedulerLike.md) |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>, [`PauseableObservableLike`](types.PauseableObservableLike.md)<`T`\> & [`DisposableLike`](types.DisposableLike.md)\>

#### Inherited from

[TypeClass](containers.RunnableContainers.TypeClass.md).[flow](containers.RunnableContainers.TypeClass.md#flow)

___

### last

▸ **last**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>, [`Optional`](../modules/functions.md#optional)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>, [`Optional`](../modules/functions.md#optional)<`T`\>\>

#### Inherited from

[TypeClass](containers.RunnableContainers.TypeClass.md).[last](containers.RunnableContainers.TypeClass.md#last)

___

### multicast

▸ **multicast**<`T`\>(`scheduler`, `options?`): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>, [`MulticastObservableLike`](types.MulticastObservableLike.md)<`T`\> & [`DisposableLike`](types.DisposableLike.md)\>

Returns a `MulticastObservableLike` backed by a single subscription to the source.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scheduler` | [`SchedulerLike`](types.SchedulerLike.md) | A `SchedulerLike` that is used to subscribe to the source observable. |
| `options?` | `Object` | - |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` | - |
| `options.capacity?` | `number` | The capacity of the stream's request queue. |
| `options.replay?` | `number` | The number of items to buffer for replay when an observer subscribes to the stream. |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>, [`MulticastObservableLike`](types.MulticastObservableLike.md)<`T`\> & [`DisposableLike`](types.DisposableLike.md)\>

#### Inherited from

[TypeClass](containers.DeferredObservableContainers.TypeClass.md).[multicast](containers.DeferredObservableContainers.TypeClass.md#multicast)

___

### noneSatisfy

▸ **noneSatisfy**<`T`\>(`predicate`): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>, `boolean`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`T`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>, `boolean`\>

#### Inherited from

[TypeClass](containers.RunnableContainers.TypeClass.md).[noneSatisfy](containers.RunnableContainers.TypeClass.md#nonesatisfy)

___

### reduce

▸ **reduce**<`T`, `TAcc`\>(`reducer`, `initialValue`): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>, `TAcc`\>

#### Type parameters

| Name |
| :------ |
| `T` |
| `TAcc` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `reducer` | [`Reducer`](../modules/functions.md#reducer)<`T`, `TAcc`\> |
| `initialValue` | [`Factory`](../modules/functions.md#factory)<`TAcc`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>, `TAcc`\>

#### Inherited from

[TypeClass](containers.RunnableContainers.TypeClass.md).[reduce](containers.RunnableContainers.TypeClass.md#reduce)

___

### share

▸ **share**<`T`\>(`scheduler`, `options?`): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>, [`SharedObservableLike`](types.SharedObservableLike.md)<`T`\>\>

Returns an `ObservableLike` backed by a shared refcounted subscription to the
source. When the refcount goes to 0, the underlying subscription
to the source is disposed.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scheduler` | [`SchedulerLike`](types.SchedulerLike.md) | A `SchedulerLike` that is used to subscribe to the source. |
| `options?` | `Object` | - |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` | - |
| `options.capacity?` | `number` | - |
| `options.replay?` | `number` | - |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>, [`SharedObservableLike`](types.SharedObservableLike.md)<`T`\>\>

#### Inherited from

[TypeClass](containers.DeferredObservableContainers.TypeClass.md).[share](containers.DeferredObservableContainers.TypeClass.md#share)

___

### someSatisfy

▸ **someSatisfy**<`T`\>(`predicate`): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>, `boolean`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`T`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>, `boolean`\>

#### Inherited from

[TypeClass](containers.RunnableContainers.TypeClass.md).[someSatisfy](containers.RunnableContainers.TypeClass.md#somesatisfy)

___

### toReadonlyArray

▸ **toReadonlyArray**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>, readonly `T`[]\>

Converts the Container to a `ReadonlyArrayContainer`.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/containers.Containers.md#of)<`C`, `T`\>, readonly `T`[]\>

#### Inherited from

[TypeClass](containers.RunnableContainers.TypeClass.md).[toReadonlyArray](containers.RunnableContainers.TypeClass.md#toreadonlyarray)
