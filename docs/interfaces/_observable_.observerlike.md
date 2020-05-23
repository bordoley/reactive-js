[undefined - vundefined](../README.md) › ["observable"](../modules/_observable_.md) › [ObserverLike](_observable_.observerlike.md)

# Interface: ObserverLike <**T**>

The underlying mechanism for receiving and transforming notifications from an
observable source. The `ObserverLike` interface composes the `SchedulerLike` and
`DisposableLike` interfaces into a single unified type, while adding the capability
to receive notifications.

## Type parameters

▪ **T**

## Hierarchy

* [DisposableLike](_disposable_.disposablelike.md)

* [SchedulerLike](_scheduler_.schedulerlike.md)

  ↳ **ObserverLike**

## Index

### Methods

* [notify](_observable_.observerlike.md#notify)

## Methods

###  notify

▸ **notify**(`next`: T): *void*

Notifies the the observer of the next notification produced by the observable source.

Note: The `notify` method must be called from within a `SchedulerContinuationLike`
scheduled using the observer's `schedule` method.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`next` | T | The next notification value.  |

**Returns:** *void*
