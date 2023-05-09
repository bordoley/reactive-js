[Reactive-JS](../README.md) / [core](../modules/core.md) / [EnumerableObservableContainers](../modules/core.EnumerableObservableContainers.md) / TypeClass

# Interface: TypeClass<C\>

[core](../modules/core.md).[EnumerableObservableContainers](../modules/core.EnumerableObservableContainers.md).TypeClass

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`EnumerableContainer`](core.EnumerableContainer-1.md) |

## Hierarchy

- [`TypeClass`](core.RunnableObservableContainers.TypeClass.md)<`C`\>

  ↳ **`TypeClass`**

  ↳↳ [`TypeClass`](core.EnumerableContainer.TypeClass.md)

## Table of contents

### Transform Properties

- [contains](core.EnumerableObservableContainers.TypeClass.md#contains)
- [toRunnable](core.EnumerableObservableContainers.TypeClass.md#torunnable)

### Constructor Methods

- [animate](core.EnumerableObservableContainers.TypeClass.md#animate)
- [currentTime](core.EnumerableObservableContainers.TypeClass.md#currenttime)
- [empty](core.EnumerableObservableContainers.TypeClass.md#empty)
- [fromEnumeratorFactory](core.EnumerableObservableContainers.TypeClass.md#fromenumeratorfactory)
- [fromFactory](core.EnumerableObservableContainers.TypeClass.md#fromfactory)
- [fromIterable](core.EnumerableObservableContainers.TypeClass.md#fromiterable)
- [fromOptional](core.EnumerableObservableContainers.TypeClass.md#fromoptional)
- [fromReadonlyArray](core.EnumerableObservableContainers.TypeClass.md#fromreadonlyarray)
- [generate](core.EnumerableObservableContainers.TypeClass.md#generate)

### Transform Methods

- [everySatisfy](core.EnumerableObservableContainers.TypeClass.md#everysatisfy)
- [first](core.EnumerableObservableContainers.TypeClass.md#first)
- [flow](core.EnumerableObservableContainers.TypeClass.md#flow)
- [last](core.EnumerableObservableContainers.TypeClass.md#last)
- [multicast](core.EnumerableObservableContainers.TypeClass.md#multicast)
- [noneSatisfy](core.EnumerableObservableContainers.TypeClass.md#nonesatisfy)
- [reduce](core.EnumerableObservableContainers.TypeClass.md#reduce)
- [share](core.EnumerableObservableContainers.TypeClass.md#share)
- [someSatisfy](core.EnumerableObservableContainers.TypeClass.md#somesatisfy)
- [toReadonlyArray](core.EnumerableObservableContainers.TypeClass.md#toreadonlyarray)

## Transform Properties

### contains

• **contains**: <T\>(`value`: `T`, `options?`: { `equality?`: [`Equality`](../modules/functions.md#equality)<`T`\>  }) => [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/core.Containers.md#of)<`C`, `T`\>, `boolean`\>

#### Type declaration

▸ <`T`\>(`value`, `options?`): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/core.Containers.md#of)<`C`, `T`\>, `boolean`\>

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

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/core.Containers.md#of)<`C`, `T`\>, `boolean`\>

#### Inherited from

[TypeClass](core.RunnableObservableContainers.TypeClass.md).[contains](core.RunnableObservableContainers.TypeClass.md#contains)

___

### toRunnable

• **toRunnable**: <T\>() => [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/core.Containers.md#of)<`C`, `T`\>, [`RunnableLike`](core.RunnableLike.md)<`T`\>\>

#### Type declaration

▸ <`T`\>(): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/core.Containers.md#of)<`C`, `T`\>, [`RunnableLike`](core.RunnableLike.md)<`T`\>\>

##### Type parameters

| Name |
| :------ |
| `T` |

##### Returns

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/core.Containers.md#of)<`C`, `T`\>, [`RunnableLike`](core.RunnableLike.md)<`T`\>\>

#### Inherited from

[TypeClass](core.RunnableObservableContainers.TypeClass.md).[toRunnable](core.RunnableObservableContainers.TypeClass.md#torunnable)

## Constructor Methods

### animate

▸ **animate**<`T`\>(`configs`): [`Of`](../modules/core.Containers.md#of)<`C`, `T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `configs` | [`AnimationConfig`](../modules/core.RunnableObservableContainers.md#animationconfig)<`T`\> \| readonly [`AnimationConfig`](../modules/core.RunnableObservableContainers.md#animationconfig)<`T`\>[] |

#### Returns

[`Of`](../modules/core.Containers.md#of)<`C`, `T`\>

#### Inherited from

[TypeClass](core.RunnableObservableContainers.TypeClass.md).[animate](core.RunnableObservableContainers.TypeClass.md#animate)

___

### currentTime

▸ **currentTime**(`options?`): [`Of`](../modules/core.Containers.md#of)<`C`, `number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | `Object` |
| `options.delay?` | `number` |
| `options.delayStart?` | `boolean` |

#### Returns

[`Of`](../modules/core.Containers.md#of)<`C`, `number`\>

#### Inherited from

[TypeClass](core.RunnableObservableContainers.TypeClass.md).[currentTime](core.RunnableObservableContainers.TypeClass.md#currenttime)

___

### empty

▸ **empty**<`T`\>(`options?`): [`Of`](../modules/core.Containers.md#of)<`C`, `T`\>

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

[`Of`](../modules/core.Containers.md#of)<`C`, `T`\>

#### Inherited from

[TypeClass](core.RunnableObservableContainers.TypeClass.md).[empty](core.RunnableObservableContainers.TypeClass.md#empty)

___

### fromEnumeratorFactory

▸ **fromEnumeratorFactory**<`T`\>(`factory`, `options?`): [`Of`](../modules/core.Containers.md#of)<`C`, `T`\>

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

[`Of`](../modules/core.Containers.md#of)<`C`, `T`\>

#### Inherited from

[TypeClass](core.RunnableObservableContainers.TypeClass.md).[fromEnumeratorFactory](core.RunnableObservableContainers.TypeClass.md#fromenumeratorfactory)

___

### fromFactory

▸ **fromFactory**<`T`\>(`factory`, `options?`): [`Of`](../modules/core.Containers.md#of)<`C`, `T`\>

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

[`Of`](../modules/core.Containers.md#of)<`C`, `T`\>

#### Inherited from

[TypeClass](core.RunnableObservableContainers.TypeClass.md).[fromFactory](core.RunnableObservableContainers.TypeClass.md#fromfactory)

___

### fromIterable

▸ **fromIterable**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, [`Of`](../modules/core.Containers.md#of)<`C`, `T`\>\>

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

[`Function1`](../modules/functions.md#function1)<`Iterable`<`T`\>, [`Of`](../modules/core.Containers.md#of)<`C`, `T`\>\>

#### Inherited from

[TypeClass](core.RunnableObservableContainers.TypeClass.md).[fromIterable](core.RunnableObservableContainers.TypeClass.md#fromiterable)

___

### fromOptional

▸ **fromOptional**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<[`Optional`](../modules/functions.md#optional)<`T`\>, [`Of`](../modules/core.Containers.md#of)<`C`, `T`\>\>

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

[`Function1`](../modules/functions.md#function1)<[`Optional`](../modules/functions.md#optional)<`T`\>, [`Of`](../modules/core.Containers.md#of)<`C`, `T`\>\>

#### Inherited from

[TypeClass](core.RunnableObservableContainers.TypeClass.md).[fromOptional](core.RunnableObservableContainers.TypeClass.md#fromoptional)

___

### fromReadonlyArray

▸ **fromReadonlyArray**<`T`\>(`options?`): [`Function1`](../modules/functions.md#function1)<readonly `T`[], [`Of`](../modules/core.Containers.md#of)<`C`, `T`\>\>

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

[`Function1`](../modules/functions.md#function1)<readonly `T`[], [`Of`](../modules/core.Containers.md#of)<`C`, `T`\>\>

#### Inherited from

[TypeClass](core.RunnableObservableContainers.TypeClass.md).[fromReadonlyArray](core.RunnableObservableContainers.TypeClass.md#fromreadonlyarray)

___

### generate

▸ **generate**<`T`\>(`generator`, `initialValue`, `options?`): [`Of`](../modules/core.Containers.md#of)<`C`, `T`\>

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

[`Of`](../modules/core.Containers.md#of)<`C`, `T`\>

#### Inherited from

[TypeClass](core.RunnableObservableContainers.TypeClass.md).[generate](core.RunnableObservableContainers.TypeClass.md#generate)

___

## Transform Methods

### everySatisfy

▸ **everySatisfy**<`T`\>(`predicate`): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/core.Containers.md#of)<`C`, `T`\>, `boolean`\>

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

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/core.Containers.md#of)<`C`, `T`\>, `boolean`\>

#### Inherited from

[TypeClass](core.RunnableObservableContainers.TypeClass.md).[everySatisfy](core.RunnableObservableContainers.TypeClass.md#everysatisfy)

___

### first

▸ **first**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/core.Containers.md#of)<`C`, `T`\>, [`Optional`](../modules/functions.md#optional)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/core.Containers.md#of)<`C`, `T`\>, [`Optional`](../modules/functions.md#optional)<`T`\>\>

#### Inherited from

[TypeClass](core.RunnableObservableContainers.TypeClass.md).[first](core.RunnableObservableContainers.TypeClass.md#first)

___

### flow

▸ **flow**<`T`\>(`scheduler`, `options?`): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/core.Containers.md#of)<`C`, `T`\>, [`PauseableObservableLike`](core.PauseableObservableLike.md)<`T`\> & [`DisposableLike`](core.DisposableLike.md)\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheduler` | [`SchedulerLike`](core.SchedulerLike.md) |
| `options?` | `Object` |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` |
| `options.capacity?` | `number` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/core.Containers.md#of)<`C`, `T`\>, [`PauseableObservableLike`](core.PauseableObservableLike.md)<`T`\> & [`DisposableLike`](core.DisposableLike.md)\>

#### Inherited from

[TypeClass](core.RunnableObservableContainers.TypeClass.md).[flow](core.RunnableObservableContainers.TypeClass.md#flow)

___

### last

▸ **last**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/core.Containers.md#of)<`C`, `T`\>, [`Optional`](../modules/functions.md#optional)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/core.Containers.md#of)<`C`, `T`\>, [`Optional`](../modules/functions.md#optional)<`T`\>\>

#### Inherited from

[TypeClass](core.RunnableObservableContainers.TypeClass.md).[last](core.RunnableObservableContainers.TypeClass.md#last)

___

### multicast

▸ **multicast**<`T`\>(`scheduler`, `options?`): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/core.Containers.md#of)<`C`, `T`\>, [`MulticastObservableLike`](core.MulticastObservableLike.md)<`T`\> & [`DisposableLike`](core.DisposableLike.md)\>

Returns a `MulticastObservableLike` backed by a single subscription to the source.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scheduler` | [`SchedulerLike`](core.SchedulerLike.md) | A `SchedulerLike` that is used to subscribe to the source observable. |
| `options?` | `Object` | - |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` | - |
| `options.capacity?` | `number` | The capacity of the stream's request queue. |
| `options.replay?` | `number` | The number of items to buffer for replay when an observer subscribes to the stream. |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/core.Containers.md#of)<`C`, `T`\>, [`MulticastObservableLike`](core.MulticastObservableLike.md)<`T`\> & [`DisposableLike`](core.DisposableLike.md)\>

#### Inherited from

[TypeClass](core.RunnableObservableContainers.TypeClass.md).[multicast](core.RunnableObservableContainers.TypeClass.md#multicast)

___

### noneSatisfy

▸ **noneSatisfy**<`T`\>(`predicate`): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/core.Containers.md#of)<`C`, `T`\>, `boolean`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`T`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/core.Containers.md#of)<`C`, `T`\>, `boolean`\>

#### Inherited from

[TypeClass](core.RunnableObservableContainers.TypeClass.md).[noneSatisfy](core.RunnableObservableContainers.TypeClass.md#nonesatisfy)

___

### reduce

▸ **reduce**<`T`, `TAcc`\>(`reducer`, `initialValue`): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/core.Containers.md#of)<`C`, `T`\>, `TAcc`\>

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

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/core.Containers.md#of)<`C`, `T`\>, `TAcc`\>

#### Inherited from

[TypeClass](core.RunnableObservableContainers.TypeClass.md).[reduce](core.RunnableObservableContainers.TypeClass.md#reduce)

___

### share

▸ **share**<`T`\>(`scheduler`, `options?`): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/core.Containers.md#of)<`C`, `T`\>, [`SharedObservableLike`](core.SharedObservableLike.md)<`T`\>\>

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
| `scheduler` | [`SchedulerLike`](core.SchedulerLike.md) | A `SchedulerLike` that is used to subscribe to the source. |
| `options?` | `Object` | - |
| `options.backpressureStrategy?` | ``"overflow"`` \| ``"drop-latest"`` \| ``"drop-oldest"`` \| ``"throw"`` | - |
| `options.capacity?` | `number` | - |
| `options.replay?` | `number` | - |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/core.Containers.md#of)<`C`, `T`\>, [`SharedObservableLike`](core.SharedObservableLike.md)<`T`\>\>

#### Inherited from

[TypeClass](core.RunnableObservableContainers.TypeClass.md).[share](core.RunnableObservableContainers.TypeClass.md#share)

___

### someSatisfy

▸ **someSatisfy**<`T`\>(`predicate`): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/core.Containers.md#of)<`C`, `T`\>, `boolean`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | [`Predicate`](../modules/functions.md#predicate)<`T`\> |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/core.Containers.md#of)<`C`, `T`\>, `boolean`\>

#### Inherited from

[TypeClass](core.RunnableObservableContainers.TypeClass.md).[someSatisfy](core.RunnableObservableContainers.TypeClass.md#somesatisfy)

___

### toReadonlyArray

▸ **toReadonlyArray**<`T`\>(): [`Function1`](../modules/functions.md#function1)<[`Of`](../modules/core.Containers.md#of)<`C`, `T`\>, readonly `T`[]\>

Converts the Container to a `ReadonlyArrayContainer`.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Returns

[`Function1`](../modules/functions.md#function1)<[`Of`](../modules/core.Containers.md#of)<`C`, `T`\>, readonly `T`[]\>

#### Inherited from

[TypeClass](core.RunnableObservableContainers.TypeClass.md).[toReadonlyArray](core.RunnableObservableContainers.TypeClass.md#toreadonlyarray)
