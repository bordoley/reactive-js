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

* [onNotify](_observable_.observerlike.md#onnotify)

## Methods

###  onNotify

▸ **onNotify**(`next`: T): *void*

Provides the observer with the next item to observe.

**Parameters:**

Name | Type |
------ | ------ |
`next` | T |

**Returns:** *void*
