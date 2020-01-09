
# Interface: SerialDisposableLike

A Disposable container that allows replacing an inner Disposable with another,
disposing the previous inner disposable in the process. Disposing the
container also disposes the inner disposable.

## Hierarchy

* [DisposableLike](disposablelike.md)

  ↳ **SerialDisposableLike**

## Index

### Properties

* [inner](serialdisposablelike.md#inner)

## Properties

###  inner

• **inner**: *[DisposableLike](disposablelike.md)*

 The inner disposable that may be get or set. Setting the inner
 disposable disposes the old disposable unless it is reference equal
 to the new one.
