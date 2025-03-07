[**Reactive-JS**](../../README.md)

***

[Reactive-JS](../../README.md) / [computations](../README.md) / ObserverLike

# Interface: ObserverLike\<T\>

A consumer of push-based notifications.

## Extends

- [`DispatcherLike`](DispatcherLike.md)\<`T`\>.[`SchedulerLike`](../../utils/interfaces/SchedulerLike.md)

## Type Parameters

• **T** = `unknown`

## Methods

### \[ObserverLike\_notify\]()

> **\[ObserverLike\_notify\]**(`event`): `void`

Notifies the observer of the next notification produced by the source.

#### Parameters

##### event

`T`

#### Returns

`void`
