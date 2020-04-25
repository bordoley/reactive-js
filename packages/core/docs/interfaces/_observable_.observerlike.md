[@reactive-js/core - v0.0.37](../README.md) › ["observable"](../modules/_observable_.md) › [ObserverLike](_observable_.observerlike.md)

# Interface: ObserverLike <**T**>

An observer of push-based notifications within an observable source.

## Type parameters

▪ **T**

## Hierarchy

* **ObserverLike**

  ↳ [SubjectLike](_observable_.subjectlike.md)

## Index

### Methods

* [onDispose](_observable_.observerlike.md#ondispose)
* [onNotify](_observable_.observerlike.md#onnotify)

## Methods

###  onDispose

▸ **onDispose**(`error?`: [Exception](../modules/_disposable_.md#exception)): *void*

Notifies the observer that the provider has finished sending push-based notifications.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`error?` | [Exception](../modules/_disposable_.md#exception) | If present, indicates that the provider experienced an error condition.  |

**Returns:** *void*

___

###  onNotify

▸ **onNotify**(`next`: T): *void*

Provides the observer with the next item to observe.

**Parameters:**

Name | Type |
------ | ------ |
`next` | T |

**Returns:** *void*
