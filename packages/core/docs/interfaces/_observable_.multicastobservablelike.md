[@reactive-js/core - v0.0.37](../README.md) › ["observable"](../modules/_observable_.md) › [MulticastObservableLike](_observable_.multicastobservablelike.md)

# Interface: MulticastObservableLike <**T**>

An `ObservableLike` that shares a common subscription to an underlying observable source.

## Type parameters

▪ **T**

## Hierarchy

* [ObservableLike](_observable_.observablelike.md)‹T›

* [DisposableLike](_disposable_.disposablelike.md)

  ↳ **MulticastObservableLike**

  ↳ [AsyncEnumeratorLike](_async_enumerable_.asyncenumeratorlike.md)

  ↳ [SubjectLike](_observable_.subjectlike.md)

## Index

### Properties

* [subscriberCount](_observable_.multicastobservablelike.md#subscribercount)

## Properties

###  subscriberCount

• **subscriberCount**: *number*

The number of subscribers currently subscribed.
