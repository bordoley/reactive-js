!(function (t, r, e) {
  "use strict";
  const {
      MAX_SAFE_INTEGER: n,
      MAX_VALUE: s,
      MIN_SAFE_INTEGER: i,
      MIN_VALUE: o,
    } = Number,
    c = t => t.length,
    u = (...t) => !1,
    h = (...t) => !0,
    a = (t, r) => t.bind(r),
    l = (t, r) => a(t[r], t),
    f = (t, r, ...e) => t.call(r, ...e),
    y =
      (...t) =>
      r =>
        A(r, ...t),
    p = t => t,
    g = (...t) => {},
    d =
      (t, ...r) =>
      e =>
        e[t](...r),
    m = Array.isArray,
    v = (
      () =>
      (t, r = { equality: P }) => {
        const e = r.equality ?? P;
        return e === P
          ? (
              t => r =>
                r !== t
            )(t)
          : r => !e(r, t);
      }
    )(),
    b = t => "function" == typeof t || t instanceof Function,
    E = t => t === k,
    S = t => t !== k,
    w = t => t,
    _ = (t, ...r) => new t(...r),
    k = void 0,
    M =
      (...t) =>
      r =>
      e =>
        r(e, ...t),
    A = (t, ...r) => {
      let e = t;
      const n = c(r);
      for (let t = 0; t < n; t++) e = r[t](e);
      return e;
    },
    N = A,
    R =
      (t, ...r) =>
      () =>
        A(t, ...r),
    x = t => {
      const r = "string" == typeof (e = t) || e instanceof String;
      var e;
      const n = t instanceof Error,
        s = r ? t : "",
        i = r || n || !S(t) ? k : { cause: t };
      return n ? t : _(Error, s, i);
    },
    L = t => {
      throw t;
    },
    I = t => L(x(k)),
    O =
      t =>
      (...r) =>
        t,
    P = (t, r) => t === r,
    { create: z, getOwnPropertyDescriptors: C, prototype: F } = Object,
    T = (t, r) => F.hasOwnProperty.call(t, r),
    D = (() => O(z(null)))(),
    q = t => Symbol(k),
    U = q(),
    j = q(),
    W = q(),
    Y = q(),
    B = q(),
    G = q(),
    H = q(),
    V = q(),
    X = q(),
    $ = q(),
    J = q(),
    K = q(),
    Q = q(),
    Z = q(),
    tt = q(),
    rt = q(),
    et = q(),
    nt = q(),
    st = q(),
    it = q(),
    ot = q(),
    ct = q(),
    ut = q(),
    ht = q(),
    at = q(),
    lt = q(),
    ft = q(),
    yt = q(),
    pt = q(),
    gt = q(),
    dt = q(),
    mt = q(),
    vt = q(),
    bt = q(),
    Et = q(),
    St = q(),
    wt = q(),
    _t = q(),
    kt = q(),
    Mt = q(),
    At = q(),
    Nt = q(),
    Rt = q(),
    xt = q(),
    Lt = q(),
    It = q(),
    Ot = q(),
    Pt = q(),
    zt = q(),
    Ct = q(),
    Ft = q(),
    Tt = q(),
    Dt = q(),
    qt = q(),
    Ut = q(),
    jt = q(),
    Wt = q(),
    Yt = q(),
    Bt = q(),
    Gt = q(),
    Ht = q(),
    Vt = q(),
    Xt = q(),
    $t = q(),
    Jt = q(),
    Kt = q(),
    Qt = q(),
    Zt = q(),
    tr = q(),
    rr = q(),
    er = q(),
    nr = q(),
    sr = q(),
    ir = q(),
    or = q(),
    cr = q(),
    ur = q(),
    hr = q(),
    ar = q(),
    lr = q(),
    fr = q(),
    yr = q(),
    pr = q(),
    gr = q(),
    dr = q(),
    mr = q(),
    vr = q(),
    br = q(),
    Er = q(),
    Sr = q(),
    wr = q(),
    _r = q(),
    kr = q(),
    Mr = q(),
    Ar = q();
  function Nr(t, r, ...e) {
    (0, t[br])(r, ...e);
  }
  const Rr = Nr,
    xr = (...t) => {
      const r = c(t);
      if (1 == r) return t[0];
      {
        let e = {},
          n = {};
        for (let s = 0; s < r; s++) {
          const r = t[s];
          (e = { ...e, ...C(r[Er]) }), (n = { ...n, ...C(r[Sr]) });
        }
        return { [Er]: z(F, e), [Sr]: z(F, n) };
      }
    },
    Lr = (t, r, e, n) => {
      if (b(t)) return { [br]: t, [Er]: r ?? {}, [Sr]: e ?? {} };
      return { ...xr(t, { [Er]: e ?? {}, [Sr]: n ?? {} }), [br]: r };
    },
    Ir = t => {
      const r = C(t[Er]),
        e = C(t[Sr]),
        n = z(F, e);
      return (...e) => {
        const s = z(n, r);
        return Nr(t, s, ...e), s;
      };
    },
    Or = t => t[Sr],
    Pr = (() =>
      N(
        Lr(
          function (t) {
            return t;
          },
          { [lr]: k, [$]: !1 },
          {
            get [X]() {
              return this[$] ? this[lr] : I();
            },
            set [X](t) {
              (this[lr] = t), (this[$] = !0);
            },
            [Mt]() {
              (this[lr] = k), (this[$] = !1);
            },
          },
        ),
        O,
      ))(),
    zr = (() => {
      const t = Ir(
        Lr(
          xr(Pr()),
          function (t, r) {
            return Rr(Pr(), t), (t[pr] = r), t;
          },
          { [pr]: k },
          {
            [V]() {
              this[Mt]();
              const t = this[pr].next();
              return t.done || (this[X] = t.value), this[$];
            },
          },
        ),
      );
      return O(t);
    })(),
    Cr = t => r => {
      const e = z(null);
      for (const n in r) T(r, n) && (e[n] = t(r[n], n));
      return e;
    },
    Fr = D,
    Tr = t => r => {
      for (const e in r)
        if (T(r, e)) {
          const n = r[e];
          t(n, e);
        }
      return r;
    },
    Dr = Cr,
    qr = Cr,
    Ur = () => t =>
      N(
        (function* () {
          for (const r in t) T(t, r) && (yield t[r]);
        })(),
        zr(),
      ),
    jr = (t, r) => {
      const e = t[G];
      if (b(r))
        try {
          r(e);
        } catch (t) {}
      else r[B](e);
    },
    Wr = Lr(
      function (t) {
        return (t[Ut] = _(Set)), t;
      },
      { [G]: k, [H]: !1, [Ut]: k },
      {
        [B](t) {
          if (!this[H]) {
            (this[G] = t), (this[H] = !0);
            const r = this[Ut];
            for (const t of r) r.delete(t), jr(this, t);
          }
        },
        [Y](t) {
          const r = this[Ut];
          this !== t &&
            (this[H]
              ? jr(this, t)
              : r.has(t) ||
                (r.add(t),
                b(t) ||
                  t[Y](e => {
                    r.delete(t);
                  })));
        },
      },
    ),
    Yr = (() =>
      Ir(
        Lr(
          xr(Wr),
          function (t, r) {
            return Rr(Wr, t), (t[K] = r), t;
          },
          { [K]: k },
          { [J]: !1 },
        ),
      ))(),
    Br = (() =>
      N(
        Lr(
          function (t, r) {
            return (t[kt] = r), t;
          },
          { [kt]: k },
          {},
        ),
        O,
      ))(),
    Gr = t => r => (r[Y](t), r),
    Hr = (() =>
      Lr(
        function (t, r) {
          return (
            (t[Ft] = r),
            N(
              r,
              Gr(r => {
                t[H] = !0;
              }),
            ),
            t
          );
        },
        { [Ft]: k, [H]: !1 },
        {
          get [G]() {
            return this[Ft][G];
          },
          [Y](t) {
            this[Ft][Y](t);
          },
          [B](t) {
            this[Ft][B](t);
          },
        },
      ))(),
    Vr = (() =>
      Ir(
        Lr(
          xr(Hr, Br()),
          function (t, r) {
            return Rr(Hr, t, r), Rr(Br(), t, r), t;
          },
          {},
          {
            [J]: !0,
            [K](t) {
              try {
                this[kt][K](t);
              } catch (t) {
                this[B](x(t));
              }
            },
          },
        ),
      ))(),
    Xr = Yr,
    $r = () => t => t[J] ? t : Vr(t),
    Jr = (() =>
      Ir(
        Lr(
          function (t, r, e) {
            return (t[ur] = r), (t[nt] = e[nt]), (t[st] = e[nt] || e[st]), t;
          },
          { [ur]: k, [st]: !1, [nt]: !1 },
          {
            [et](t) {
              try {
                this[ur](t);
              } catch (r) {
                t[B](x(r));
              }
            },
          },
        ),
      ))(),
    Kr = t => Jr(t, { [nt]: !0, [st]: !0 }),
    Qr = t => Jr(t, { [nt]: !1, [st]: !0 }),
    Zr = t => r => (
      r[Y](r => {
        S(r) && t(r);
      }),
      r
    ),
    te = t => r => (t[Y](r), N(r, Zr(l(t, B))), r),
    { abs: re, floor: ee, max: ne, min: se, random: ie } = Math,
    oe = (t, r, e) => (r > e ? e : r < t ? t : r),
    ce = t => ee(oe(0, t, n)),
    ue = t => r => e => {
      const s = c(e),
        { start: i, count: o = n, ...u } = r ?? {},
        h = o >= 0 ? oe(0, i ?? 0, s) : oe(-1, i ?? s - 1, s - 1),
        a = o >= 0 ? oe(0, o, s - h) : -se(re(o), h + 1);
      return t(e, h, a, u);
    },
    he = ue((t, r, e, n) => {
      const { delay: s = 0, delayStart: i = !1 } = n ?? {},
        o = o => {
          let c = r,
            u = e;
          N(
            o[yt](
              r => {
                for (; !o[H] && 0 !== u; ) {
                  const e = t[c];
                  u > 0 ? (c++, u--) : (c--, u++), o[rt](e), r[gt](s);
                }
                o[B]();
              },
              i ? n : k,
            ),
            te(o),
          );
        };
      return s > 0 ? Qr(o) : Kr(o);
    }),
    ae = t => r => (
      r[Y](r => {
        E(r) && t();
      }),
      r
    ),
    le = t => r => (t[Y](r), r),
    fe = (() =>
      Lr(
        function (t, r) {
          return (t[qt] = r), t;
        },
        { [qt]: k },
        {
          get [ht]() {
            return this[qt][ht];
          },
          get [at]() {
            return this[qt][at];
          },
          get [lt]() {
            return this[qt][lt];
          },
          get [pt]() {
            return this[qt][pt];
          },
          [ft]() {
            this[qt][ft]();
          },
          [yt](t, r) {
            return N(this[qt][yt](t, r), le(this));
          },
          [gt](t) {
            this[qt][gt](t);
          },
        },
      ))(),
    ye = Ir(Wr),
    pe = (() => {
      const t = ye();
      return t[B](), t;
    })(),
    ge = (() => {
      const t = (t, r, e, n) => {
          const s = t.length,
            i = _(Array, n);
          let o = 0,
            c = r >= e ? s : e;
          for (let e = r; e < c; e++) i[o++] = t[e];
          c = r >= e ? e : 0;
          for (let r = 0; r < c; r++) i[o++] = t[r];
          return i;
        },
        r = r => {
          const e = r[Bt] ?? [],
            n = e.length,
            s = r[j];
          if (s >= n >> 2 || n <= 32) return;
          const i = r[jt],
            o = r[Wt],
            c = n >> 1;
          if (o >= i && o < c) e.length >>= 1;
          else {
            const n = t(e, i, o, c);
            (r[Bt] = n), (r[jt] = 0), (r[Wt] = s);
          }
          r[Yt] = c - 1;
        };
      return N(
        Lr(
          function (t, r, e) {
            return (t[ct] = e), (t[U] = ce(r)), t;
          },
          {
            [j]: 0,
            [ct]: "overflow",
            [U]: n,
            [jt]: 0,
            [Wt]: 0,
            [Yt]: 0,
            [Bt]: k,
          },
          {
            get [Lt]() {
              const t = this[jt],
                r = this[Bt] ?? [];
              return t === this[Wt] ? k : r[t];
            },
            get [zt]() {
              const t = this[jt],
                r = this[Wt],
                e = this[Bt] ?? [],
                n = r > 0 ? r - 1 : e.length - 1;
              return t === r ? k : e[n];
            },
            [It]() {
              const t = this[Wt],
                e = this[Bt] ?? [];
              let n = this[jt];
              const s = n === t ? k : e[n];
              return (
                n !== t &&
                  ((e[n] = k),
                  (n = (n + 1) & this[Yt]),
                  (this[jt] = n),
                  this[j]--),
                r(this),
                s
              );
            },
            [Pt]() {
              const t = this[jt],
                e = this[Bt] ?? [],
                n = e.length;
              let s = this[Wt];
              const i =
                t === s
                  ? k
                  : ((s = (s - 1 + n) & this[Yt]),
                    (this[Wt] = s),
                    this[j]--,
                    e[s]);
              return (e[s] = k), r(this), i;
            },
            [tt](t) {
              const r = this[j],
                e = this[Bt]?.length ?? 0,
                n = t + this[jt],
                s = n - e;
              return (this[Bt] ?? [])[t < 0 || t >= r ? I() : n < e ? n : s];
            },
            [At](t, r) {
              const e = this[j],
                n = this[Bt]?.length ?? 0,
                s = this[jt],
                i = this[Bt] ?? [],
                o = t + s,
                c = o - n,
                u = t < 0 || t >= e ? I() : o < n ? o : c,
                h = i[u];
              return (i[u] = r), h;
            },
            [ot](r) {
              const e = this[ct];
              let n = this[j];
              const s = this[U];
              if ("drop-latest" === e && n >= s) return !1;
              "drop-oldest" === e && n >= s
                ? this[It]()
                : "throw" === e && n >= s && I();
              const i =
                  this[Bt] ??
                  ((this[Yt] = 31), (this[Bt] = _(Array, 32)), this[Bt]),
                o = this[Yt];
              let c = this[Wt];
              return (
                (i[c] = r),
                this[j]++,
                (c = (c + 1) & o),
                (this[Wt] = c),
                (r => {
                  const e = r[jt],
                    n = r[Wt];
                  if (n !== e && 0 !== n) return;
                  const s = r[Bt] ?? [],
                    i = s.length,
                    o = r[Yt],
                    c = r[j];
                  if (0 === e || (0 === n && e < i >> 2))
                    (s.length <<= 1), (r[Wt] = c + e);
                  else {
                    const o = t(s, e, n, i << 1);
                    (r[Bt] = o), (r[jt] = 0), (r[Wt] = c);
                  }
                  r[Yt] = (o << 1) | 1;
                })(this),
                this[j] < this[U]
              );
            },
          },
        ),
        O,
      );
    })(),
    de = (() => {
      const t = Or(ge());
      return O(
        Lr(
          xr(ge()),
          function (t, r) {
            return Rr(ge(), t, r[U], r[ct]), t;
          },
          { [Ht]: !1, [Gt]: pe },
          {
            [ot](r) {
              if (!this[Ht] && !this[H]) {
                const e = f(t[ot], this, r);
                return (
                  (t => {
                    if (t[Gt][H]) {
                      const r = r => {
                        for (; t[j] > 0; ) {
                          const e = t[It]();
                          t[rt](e), t[j] > 0 && r[gt]();
                        }
                        t[Ht] && t[B]();
                      };
                      t[Gt] = N(t[yt](r), te(t));
                    }
                  })(this),
                  e
                );
              }
              return !0;
            },
            [W]() {
              const t = this[Ht];
              (this[Ht] = !0), this[Gt][H] && !t && this[B]();
            },
          },
        ),
      );
    })(),
    me = (() =>
      O(
        Lr(
          xr(de(), fe, Wr),
          function (t, r, e) {
            return Rr(Wr, t), Rr(fe, t, r), Rr(de(), t, e), t;
          },
          {},
          { [rt](t) {} },
        ),
      ))(),
    ve = t => r => (t[et](r), r);
  class be {
    [Kt];
    [Qt];
    [nt];
    [st];
    constructor(t, r, e, n) {
      (this[Kt] = t), (this[Qt] = r), (this[nt] = e), (this[st] = n);
    }
    [et](t) {
      A(t, ...this[Qt], ve(this[Kt]));
    }
  }
  const Ee = t => r => e => {
      const n = e[Kt] ?? e,
        s = [r, ...(e[Qt] ?? [])],
        i = t[nt] && n[nt],
        o = (t[nt] || t[st]) && n[st];
      return _(be, n, s, i, o);
    },
    Se = Ee({ [nt]: !0, [st]: !0 }),
    we = (() => Ir(ge()))(),
    _e = (() =>
      O(
        Lr(
          xr(de(), fe, Hr),
          function (t, r, e) {
            return Rr(Hr, t, r), Rr(fe, t, r), Rr(de(), t, e), t;
          },
          {},
          {},
        ),
      ))(),
    ke = (() => {
      const t = Ir(
        Lr(
          xr(_e(), Br()),
          function (t, r, e) {
            return Rr(_e(), t, r, r), Rr(Br(), t, r), (t[ar] = e), t;
          },
          { [ar]: k },
          {
            [rt](t) {
              this[ar](t) || this[ft](), this[kt][rt](t);
            },
          },
        ),
      );
      return r => {
        const e = b(r) ? r : l(r, ot);
        return N(t, M(e), Se);
      };
    })(),
    Me = t => ke(y(t, h)),
    Ae = (() => Ir(me()))(),
    Ne = (t, r) => e => N(Ae(t, r), ve(e)),
    Re = (t, r) => {
      Rr(me(), t, r, r), N(t, te(r));
    },
    xe = t => {
      const r = (() => {
        const t = (t, r) => {
          t[gr]++, N(r, Me(l(t[kt], rt)), Ne(t[kt], t), te(t[kt]), ae(t[mr]));
        };
        return Ir(
          Lr(
            xr(me(), Br()),
            function (r, e, n, s, i) {
              return (
                Re(r, e),
                Rr(Br(), r, e),
                (r[vr] = we(n, s)),
                (r[dr] = i),
                (r[gr] = 0),
                (r[mr] = () => {
                  r[gr]--;
                  const e = r[vr][It]();
                  S(e) ? t(r, e) : r[H] && r[gr] <= 0 && r[kt][B]();
                }),
                N(
                  r,
                  ae(() => {
                    e[H] || (r[vr][j] + r[gr] === 0 && e[B]());
                  }),
                ),
                r
              );
            },
            { [gr]: 0, [dr]: 0, [mr]: k, [vr]: k },
            {
              [rt](r) {
                this[gr] < this[dr] ? t(this, r) : this[vr][ot](r);
              },
            },
          ),
        );
      })();
      return (e = {}) => {
        const s = ((i = e.concurrency ?? n), ee(oe(1, i, n)));
        var i;
        const o = ce(e.capacity ?? n),
          c = N(r, M(o, e.backpressureStrategy ?? "overflow", s));
        return t(c);
      };
    },
    Le = (t, r) => (e, n) => y(t(e), r(n)),
    Ie = (() => {
      const t = Ir(
        Lr(
          xr(_e(), Br()),
          function (t, r, e) {
            return Rr(_e(), t, r, r), Rr(Br(), t, r), (t[tr] = e), t;
          },
          { [tr]: k },
          {
            [rt](t) {
              const r = this[tr](t);
              this[kt][rt](r);
            },
          },
        ),
      );
      return r => N(t, M(r), Se);
    })(),
    Oe = (() => xe(Ee({ [nt]: !1, [st]: !1 })))(),
    Pe = (() => O(t => N(t[Symbol.iterator](), zr())))(),
    ze = (() => {
      const t = Ir(
        Lr(
          xr(Wr),
          function (t, r) {
            return (
              Rr(Wr, t),
              (t[kr] = _(Set)),
              (t[ut] = we(r, "drop-oldest")),
              N(
                t,
                Gr(r => {
                  const e = N(t[kr], Pe());
                  for (; e[V](); ) {
                    const t = e[X];
                    S(r) ? t[B](r) : t[W]();
                  }
                }),
              ),
              t
            );
          },
          { [kr]: k, [ut]: k },
          {
            [J]: !0,
            [nt]: !1,
            [st]: !1,
            get [it]() {
              return this[kr].size;
            },
            [K](t) {
              if (!this[H]) {
                this[ut][ot](t);
                for (const r of this[kr])
                  try {
                    r[ot](t);
                  } catch (t) {
                    r[B](x(t));
                  }
              }
            },
            [et](t) {
              if (!this[H]) {
                const { [kr]: r } = this;
                r.add(t),
                  N(
                    t,
                    Gr(e => {
                      r.delete(t);
                    }),
                  );
              }
              const r = this[ut],
                e = r[j];
              try {
                for (let n = 0; n < e; n++) {
                  const e = r[tt](n);
                  t[ot](e);
                }
              } catch (r) {
                t[B](x(r));
              }
            },
          },
        ),
      );
      return r => {
        const e = ce(r?.replay ?? 0);
        return t(e);
      };
    })(),
    Ce = t => r => (r[Y](t), N(t, Zr(l(r, B))), r),
    Fe = (() =>
      N(
        Lr(
          function (t, r) {
            return (t[Jt] = r), N(t, Ce(r)), t;
          },
          { [Jt]: k },
          {
            get [Ot]() {
              return this[Jt];
            },
            set [Ot](t) {
              this[Jt][B](), (this[Jt] = t), N(this, Ce(t));
            },
          },
        ),
        O,
      ))(),
    Te = (() =>
      Ir(
        Lr(xr(Wr, Fe()), function (t, r) {
          return Rr(Wr, t), Rr(Fe(), t, r), t;
        }),
      ))(),
    De = (() =>
      Ir(
        Lr(
          xr(me()),
          function (t, r) {
            return Rr(me(), t, r, r), (t[rt] = l(r, rt)), t;
          },
          { [rt]: k },
          {},
        ),
      ))(),
    qe = t => r => r.every(t),
    Ue = t => r => r.map(t),
    je = t => t[nt],
    We = (() => y(Ue(je), qe(w)))(),
    Ye = t => t[st],
    Be = (() => y(Ue(Ye), qe(w)))(),
    Ge = (() => {
      const t = (r, e, n) =>
        N(
          De(r),
          te(r),
          ae(() => {
            n < c(e) ? N(t(r, e, n + 1), ve(e[n])) : r[B]();
          }),
        );
      return r => {
        const e = We(r),
          n = Be(r);
        return Jr(
          e => {
            0 !== c(r) ? N(t(e, r, 1), ve(r[0])) : e[B]();
          },
          { [nt]: e, [st]: n },
        );
      };
    })(),
    He = (
      t =>
      (r, ...e) =>
      n =>
        t(n, r, ...e)
    )((...t) => Ge(t)),
    Ve = Kr(t => {
      t[B]();
    }),
    Xe = t =>
      (t?.delay ?? 0) > 0
        ? Qr(r => {
            N(
              r[yt](() => r[B](), t),
              te(r),
            );
          })
        : Ve,
    $e =
      (t, r) =>
      (...e) =>
        t(r()(e)),
    Je = $e(He, he);
  class Ke {
    delay;
    constructor(t) {
      this.delay = t;
    }
  }
  const Qe = (() => {
      const t = Or(ge()),
        r = t => {
          let r = t[Et];
          for (; S(r) && r[H]; ) r = r[Et];
          return r;
        },
        e = t => {
          const e = t[wt],
            n = r(t);
          S(n) ? n[ot](t) : e[_t](t);
        },
        s = t => {
          const e = t[wt],
            n = r(t);
          if (S(n)) {
            let r = k;
            for (; (r = t[It]()), S(r); ) r[H] || n[ot](r);
          } else {
            let r = k;
            for (; (r = t[It]()), S(r); ) r[H] || e[_t](r);
          }
        };
      return Ir(
        Lr(
          xr(Wr, ge()),
          function (t, r, e, i) {
            return (
              Rr(Wr, t),
              Rr(ge(), t, n, "overflow"),
              (t[wt] = r),
              (t[cr] = e),
              (t[St] = i),
              N(t, Gr(R(t, s))),
              t
            );
          },
          { [vt]: k, [Et]: k, [St]: 0, [wt]: k, [cr]: k },
          {
            [bt]() {
              const t = this[wt];
              if (this[H]) return void s(this);
              let r = k;
              for (; (r = this[It]()), S(r); ) {
                if (((this[vt] = r), r[bt](), (this[vt] = k), this[H]))
                  return void s(this);
                if (t[pt]) return void e(this);
              }
              let n = k,
                i = k;
              this[vt] = this;
              try {
                this[cr](t);
              } catch (t) {
                t instanceof Ke ? (i = t) : (n = x(t));
              }
              (this[vt] = k),
                S(i) && !this[H]
                  ? i.delay > 0
                    ? (s(this), t[_t](this, i))
                    : e(this)
                  : (this[B](n), s(this));
            },
            [ot](r) {
              return (r[Et] = this), f(t[ot], this, r);
            },
          },
        ),
      );
    })(),
    Ze = (() => {
      const t = t => {
        let r = t[Vt],
          e = r?.[vt];
        for (; S(e) && e !== r; ) (r = e), (e = r[vt]);
        return r;
      };
      return Lr(
        xr(Wr),
        function (t, r) {
          return Rr(Wr, t), (t[at] = ce(r)), t;
        },
        { [at]: n, [Vt]: k, [$t]: !1, [Xt]: 0 },
        {
          get [ht]() {
            const t = this[Vt];
            return S(t);
          },
          get [pt]() {
            const r = this[ht],
              e = this[H],
              n = this[$t];
            return (
              r &&
              (e ||
                n ||
                this[lt] > this[Xt] + this[at] ||
                (t(this)?.[j] ?? 0) > 0 ||
                this[xt])
            );
          },
          [ft]() {
            this[$t] = !0;
          },
          [_t](r, e) {
            const n = ce(e?.delay ?? 0);
            if (r[H]) return;
            const s = t(this);
            n > 0 || E(s) || s[H] || s[St] !== r[St] || s === r || r[Et] === s
              ? ((r[Et] = k), this[Rt](r, n))
              : s[ot](r);
          },
          [yt](t, r) {
            const { priority: e = 0 } = r ?? {},
              n = N(Qe(this, t, e), le(this));
            return this[_t](n, r), n;
          },
          [gt](t = 0) {
            if (t > 0 || this[pt]) throw _(Ke, t);
          },
          [Nt](t) {
            (this[Xt] = this[lt]),
              (this[Vt] = t),
              (this[$t] = !1),
              t[bt](),
              (this[$t] = !1),
              (this[Vt] = k);
          },
        },
      );
    })(),
    tn = t => () => t(u),
    rn = tn(
      (() => {
        const t = Ir(
          Lr(
            xr(_e(), Br()),
            function (t, r, e) {
              return Rr(_e(), t, r, r), Rr(Br(), t, r), (t[rr] = e), t;
            },
            { [rr]: k },
            {
              [rt](t) {
                this[rr](t) && this[kt][rt](t);
              },
            },
          ),
        );
        return r => N(t, M(r), Se);
      })(),
    ),
    en = (() => {
      const t = (t, r, e) => {
        let n = 1;
        const s = i => {
          let o = !1;
          try {
            o = !e(n, i);
          } catch (t) {
            (o = !0), (i = S(i) ? x([t, i]) : x(t));
          }
          o ? t[B](i) : (n++, N(r, Me(l(t, rt)), Ne(t, t), le(t), Gr(s)));
        };
        return N(De(t), le(t), Gr(s));
      };
      return r => e => {
        const n = N(t, M(e, r));
        return N(e, Ee({ [nt]: !0, [st]: !0 })(n));
      };
    })(),
    nn = (() => {
      const t = Ir(
        Lr(
          xr(_e(), Br()),
          function (t, r, e, n) {
            Rr(_e(), t, r, r), Rr(Br(), t, r), (t[nr] = e);
            try {
              const r = n();
              t[er] = r;
            } catch (r) {
              t[B](x(r));
            }
            return t;
          },
          { [er]: k, [nr]: k },
          {
            [rt](t) {
              const r = this[nr](this[er], t);
              (this[er] = r), this[kt][rt](r);
            },
          },
        ),
      );
      return (r, e) => N(t, M(r, e), Se);
    })(),
    sn =
      (t, r) =>
      (...e) =>
      n =>
        N(e, r(), t(n)),
    on = sn(He, he),
    cn = (() => {
      const t = Ir(
        Lr(
          xr(_e(), Br()),
          function (t, r, e, n) {
            return (
              Rr(_e(), t, r, r), Rr(Br(), t, r), (t[rr] = e), (t[Mr] = n), t
            );
          },
          { [rr]: k, [Mr]: k },
          {
            [rt](t) {
              const r = this[rr](t);
              (r || this[Mr]) && this[kt][rt](t), r || this[B]();
            },
          },
        ),
      );
      return (r, e = {}) => {
        const { inclusive: n = !1 } = e;
        return N(t, M(r, n), Se);
      };
    })(),
    un = (() =>
      O(
        Lr(
          function (t, r) {
            return (t[Tt] = r), t;
          },
          { [Tt]: k },
          {
            get [ut]() {
              return this[Tt][ut];
            },
            get [nt]() {
              return this[Tt][nt];
            },
            get [st]() {
              return this[Tt][st];
            },
            [et](t) {
              this[Tt][et](t);
            },
          },
        ),
      ))(),
    hn = t => r => (r[Y](t), t[Y](r), r),
    an = (t, r = {}) =>
      (
        (t, r, e = {}) =>
        s => {
          const {
              backpressureStrategy: i = "overflow",
              capacity: o = n,
              replay: c = 0,
            } = e,
            u = t({ replay: c }),
            h = b(r) ? N(r(), te(u)) : r;
          return N(s, Me(l(u, K)), Ne(h, { [U]: o, [ct]: i }), hn(u)), u;
        }
      )(ze, t, r),
    ln = (() =>
      O(
        Lr(
          function (t, r) {
            return (t[Dt] = r), t;
          },
          { [Dt]: k },
          {
            get [ct]() {
              return this[Dt][ct];
            },
            get [U]() {
              return this[Dt][U];
            },
            [ot](t) {
              return this[Dt][ot](t);
            },
          },
        ),
      ))(),
    fn = (() =>
      O(
        Lr(
          xr(ln()),
          function (t, r) {
            return Rr(ln(), t, r), (t[Ct] = r), t;
          },
          { [Ct]: k },
          {
            [W]() {
              this[Ct][W]();
            },
          },
        ),
      ))(),
    yn = (() =>
      Ir(
        Lr(
          function (t) {
            return t;
          },
          { [hr]: k },
          {
            [nt]: !1,
            [st]: !1,
            get [ct]() {
              return this[hr][ct];
            },
            get [U]() {
              return this[hr][U];
            },
            [ot](t) {
              const r = this[hr],
                e = r[ht],
                n = 0 === r[j],
                s = r[H];
              return e && n && !s ? (r[rt](t), !0) : !!s || r[ot](t);
            },
            [W]() {
              this[hr][W]();
            },
            [et](t) {
              S(this[hr]) && I(), (this[hr] = t);
            },
          },
        ),
      ))(),
    pn = (() =>
      O(
        Lr(
          xr(fn(), un(), Hr),
          function (t, r, e, n) {
            t[dt] = e;
            const s = yn(),
              i = N(s, r, an(e, n));
            return Rr(Hr, t, i), Rr(fn(), t, s), Rr(un(), t, i), t;
          },
          { [dt]: k },
          {},
        ),
      ))(),
    gn = (() => {
      const t = "object" == typeof performance && b(performance.now),
        r = "object" == typeof process && b(process.hrtime);
      return t
        ? l(performance, "now")
        : r
        ? () => {
            const t = process.hrtime();
            return 1e3 * t[0] + t[1] / 1e6;
          }
        : l(Date, "now");
    })(),
    dn =
      t =>
      (...r) =>
        t(t => {
          let e = t;
          for (const t of r) e = e[t];
          return e;
        }),
    mn = dn(Ie),
    vn = (() => {
      const t = (t, r) => E(r);
      return r => {
        const e = E(r)
          ? t
          : "number" == typeof r
          ? (t, e) => E(e) && t < r
          : (t, e) => E(e) && r(t);
        return en(e);
      };
    })(),
    bn = (() => {
      const t = Ir(
        Lr(
          xr(_e(), Br()),
          function (t, r, e) {
            return Rr(_e(), t, r, r), Rr(Br(), t, r), (t[Ar] = e), t;
          },
          { [Ar]: k },
          {
            [rt](t) {
              const r = this[lt],
                e = this[Ar](r, t);
              this[kt][rt](e);
            },
          },
        ),
      );
      return r => N(t, M(r), Se);
    })(),
    En = t =>
      N(
        ((t, r, e) => {
          const { delay: n = 0, delayStart: s = !1 } = e ?? {},
            i = i => {
              let o = r();
              N(
                i[yt](
                  r => {
                    for (; !i[H]; ) (o = t(o)), i[rt](o), r[gt](n);
                  },
                  s ? e : k,
                ),
                te(i),
              );
            };
          return n > 0 ? Qr(i) : Kr(i);
        })(p, O(k), t),
        bn(p),
      ),
    Sn = t => {
      return "loop" === t.type
        ? N(wn(t.animation), vn(t.count))
        : "delay" === t.type
        ? Xe({ delay: t.duration })
        : N(
            "tween" === t.type
              ? ((t, r) => {
                  const { easing: e = p } = r ?? {};
                  return N(
                    En(),
                    nn(([r, n], s) => {
                      const i = s - (r = se(s, r));
                      return [r, i > t ? 1 : e(i / t)];
                    }, O([s, 0])),
                    mn(1),
                    cn(v(1), { inclusive: !0 }),
                  );
                })(t.duration, t)
              : (t => {
                  const {
                    stiffness: r = 0.15,
                    damping: e = 0.8,
                    precision: n = 0.01,
                  } = t ?? {};
                  return N(
                    En(),
                    nn(([t, s, i], o) => {
                      const c = 1 - i,
                        u = (60 * (o - (t = se(o, t)))) / 1e3,
                        h = (i - s) / (u || 1 / 60),
                        a = (h + (r * c - e * h)) * u;
                      return [o, i, re(a) < n && re(c) < n ? 1 : i + a];
                    }, O([s, 0, 0])),
                    mn(2),
                    cn(v(1), { inclusive: !0 }),
                  );
                })(t),
            Ie(((r = t.from), (e = t.to), t => r + t * (e - r))),
            S(t.selector) ? Ie(t.selector) : p,
          );
      var r, e;
    },
    wn = t => {
      const r = m(t) ? t : [t],
        e = N(r, Ue(Sn));
      return Ge(e);
    },
    _n = Le(
      Ie,
      (() =>
        O(
          Oe({
            capacity: 0,
            backpressureStrategy: "drop-latest",
            concurrency: 1,
          }),
        ))(),
    ),
    kn = Le(Ie, Oe),
    Mn = (t => {
      const r = (() => {
        function t() {
          this[yr][Ot][H] && this[kt][B]();
        }
        return Ir(
          Lr(
            xr(me(), Br()),
            function (r, e) {
              return (
                Re(r, e),
                Rr(Br(), r, e),
                (r[yr] = N(Te(pe), te(e))),
                N(r, ae(a(t, r))),
                r
              );
            },
            { [yr]: k },
            {
              [rt](t) {
                this[yr][Ot] = N(
                  t,
                  Me(l(this[kt], rt)),
                  Ne(this[kt], this),
                  te(this[kt]),
                  ae(() => {
                    this[H] && this[kt][B]();
                  }),
                );
              },
            },
          ),
        );
      })();
      return () => t(r);
    })(Ee({ [nt]: !1, [st]: !1 })),
    An = Le(Ie, Mn),
    Nn = (() => {
      const t = Ir(
        Lr(
          xr(Wr),
          function (t, r, e, n) {
            return (
              Rr(Wr, t),
              (t[fr] = _(Set)),
              (t[rr] = r),
              (t[tr] = e),
              (t[ut] = we(n, "drop-oldest")),
              N(
                t,
                Gr(r => {
                  const e = N(t[fr], Pe());
                  for (; e[V](); ) {
                    e[X][B](r);
                  }
                }),
              ),
              t
            );
          },
          { [fr]: k, [ut]: k, [rr]: k, [tr]: k },
          {
            [J]: !0,
            get [Q]() {
              return this[fr].size;
            },
            [K](t) {
              if (this[H]) return;
              if (!this[rr](t)) return;
              const r = this[tr](t);
              this[ut][ot](r);
              for (const t of this[fr])
                try {
                  t[K](r);
                } catch (r) {
                  t[B](x(r));
                }
            },
            [Z](t) {
              if (!this[H]) {
                const r = this[fr];
                r.add(t),
                  N(
                    t,
                    Gr(e => {
                      r.delete(t);
                    }),
                  );
              }
              const r = this[ut],
                e = r[j];
              try {
                for (let n = 0; n < e; n++) {
                  const e = r[tt](n);
                  t[K](e);
                }
              } catch (r) {
                t[B](x(r));
              }
            },
          },
        ),
      );
      return (r, e, n) => {
        const s = ce(n?.replay ?? 0);
        return t(r, e, s);
      };
    })(),
    Rn = t => Nn(h, p, t),
    xn = { [U]: 0, [j]: 0, [tt]: t => I() },
    Ln = t => {
      const { [U]: r = 0 } = t ?? {};
      return 0 === r ? xn : { [U]: r, [j]: 0, [tt]: xn[tt] };
    },
    In = wn,
    On = Xe,
    Pn = Me,
    zn = (t, r) => {
      const { delay: e = 0, delayStart: n = !1 } = r ?? {},
        s = s => {
          const i = t();
          N(
            s[yt](
              t => {
                for (; !s[H]; ) i[V]() ? (s[rt](i[X]), t[gt](e)) : s[B]();
              },
              n ? r : k,
            ),
            te(s),
          );
        };
      return e > 0 ? Qr(s) : Kr(s);
    },
    Cn = rn,
    Fn = Ie,
    Tn = Oe,
    Dn = (t, r) =>
      Ne(t, {
        [U]: r?.capacity ?? n,
        [ct]: r?.backpressureStrategy ?? "overflow",
      }),
    qn = (t, r) => e => {
      return (
        (n = n => {
          const s = b(t) ? N(t(), te(n)) : t;
          N(
            e,
            ke(n),
            Ne(s, {
              [U]: r?.capacity ?? n[U],
              [ct]: r?.backpressureStrategy ?? n[ct],
            }),
            ae(l(n, W)),
            te(n),
          );
        }),
        Jr(n, { [nt]: !1, [st]: !1 })
      );
      var n;
    },
    Un = (() => Ir(pn()))(),
    jn = te,
    Wn = hn,
    Yn = ye,
    Bn = Gr,
    Gn = Zr,
    Hn = (t, r = {}) => {
      const { mode: e } = r;
      return (t => ({ [mt]: (r, e) => Un(t, r, e) }))(
        "switching" === e
          ? An(y(t, rn()))
          : "blocking" === e
          ? y(_n(y(t, rn(), on(!0), Je(!1))), on(!1))
          : kn(y(t, rn()), { ...r, concurrency: 1 }),
      );
    },
    Vn = (() => {
      const t = Rn();
      return t[B](), O(t);
    })(),
    Xn = Rn,
    $n = Vn,
    Jn = {
      [Z]: function (t) {
        t[B]();
      },
      [ut]: Ln(),
    };
  class Kn {
    [Kt];
    [Qt];
    constructor(t, r) {
      (this[Kt] = t), (this[Qt] = r);
    }
    get [ut]() {
      return Ln();
    }
    [Z](t) {
      A(t, ...this[Qt], l(this[Kt], Z));
    }
  }
  const Qn = t => r => {
      const e = r[Kt] ?? r,
        n = [t, ...(r[Qt] ?? [])];
      return _(Kn, e, n);
    },
    Zn = () => Jn,
    ts = (() => {
      const t = Ir(
        Lr(
          xr(Hr, Br()),
          function (t, r, e) {
            return Rr(Br(), t, r), Rr(Hr, t, r), (t[Zt] = e), t;
          },
          { [Zt]: k },
          {
            [J]: !1,
            [K](t) {
              this[Zt](t), this[kt][K](t);
            },
          },
        ),
      );
      return r => N(t, M(r), Qn);
    })(),
    rs = tn(
      (() => {
        const t = Ir(
          Lr(
            xr(Hr, Br()),
            function (t, r, e) {
              return Rr(Br(), t, r), Rr(Hr, t, r), (t[rr] = e), t;
            },
            { [rr]: k },
            {
              [J]: !1,
              [K](t) {
                this[rr](t) && this[kt][K](t);
              },
            },
          ),
        );
        return r => N(t, M(r), Qn);
      })(),
    ),
    es = dn(
      (() => {
        const t = Ir(
          Lr(
            xr(Hr, Br()),
            function (t, r, e) {
              return Rr(Br(), t, r), Rr(Hr, t, r), (t[tr] = e), t;
            },
            { [tr]: k },
            {
              [J]: !1,
              [K](t) {
                const r = this[tr](t);
                this[kt][K](r);
              },
            },
          ),
        );
        return r => N(t, M(r), Qn);
      })(),
    ),
    ns = (() =>
      Ir(
        Lr(
          xr(Wr),
          function (t, r, e) {
            return Rr(Wr, t), (t[wr] = r), (t[_r] = e), t;
          },
          { [wr]: k, [_r]: 0 },
          {
            get [ht]() {
              return this[wr][ht];
            },
            get [at]() {
              return this[wr][at];
            },
            get [lt]() {
              return this[wr][lt];
            },
            get [pt]() {
              return this[wr][pt];
            },
            [ft]() {
              this[wr][ft]();
            },
            [yt](t, r) {
              const e = this[wr];
              return N(e[yt](t, { ...r, priority: this[_r] }), le(this));
            },
            [gt](t = 0) {
              this[wr][gt](t);
            },
          },
        ),
      ))(),
    ss = t => N(ns, M(t)),
    is = (() =>
      Ir(
        Lr(
          xr(Ze),
          function (t, r) {
            return (
              Rr(Ze, t, 5),
              (t[sr] = r),
              (t[ir] = we(n, "overflow")),
              (t[or] = pe),
              t
            );
          },
          { [sr]: k, [ir]: k, [or]: k },
          {
            get [lt]() {
              return gn();
            },
            [xt]: !0,
            [Rt](t, r) {
              r > 16
                ? N(this[sr], d(yt, R(this, d(_t, t)), { delay: r }), te(t))
                : (this[ir][ot](t),
                  (t => {
                    if (!t[or][H]) return;
                    const r = N(ye(), te(t));
                    t[or] = r;
                    const e = () => {
                      if (r[H]) return;
                      const s = t[lt],
                        i = t[ir];
                      t[ir] = we(n, "overflow");
                      let o = k;
                      for (; (o = i[It]()), S(o); ) {
                        if ((t[Nt](o), r[H])) return;
                        if (t[lt] - s > 5) break;
                      }
                      const c = i[j],
                        u = t[ir],
                        h = u[j];
                      if (c > 0 && 0 === h) t[ir] = i;
                      else if (c > 0) {
                        t[ir] = i;
                        let r = k;
                        for (; (r = u[It]()), S(r); ) i[ot](r);
                      }
                      t[ir][j] > 0 ? requestAnimationFrame(e) : r[B]();
                    };
                    requestAnimationFrame(e);
                  })(this));
            },
          },
        ),
      ))(),
    os = (() => {
      const t = Ir(
        Lr(
          xr(Ze),
          function (t) {
            return Rr(Ze, t, 300), t;
          },
          {},
          {
            get [lt]() {
              return e.unstable_now();
            },
            get [xt]() {
              return e.unstable_shouldYield();
            },
            [Rt](t, r) {
              const n = t[St],
                s = e.unstable_scheduleCallback(
                  n,
                  () => {
                    i[B](), this[Nt](t);
                  },
                  r > 0 ? { delay: r } : k,
                ),
                i = N(Yn(), Bn(R(s, e.unstable_cancelCallback)), jn(t));
            },
          },
        ),
      );
      return r => {
        const e = t();
        return N(e, ss(r), Wn(e));
      };
    })(),
    cs = (() => {
      const t = _(Map);
      return (r = {}) => {
        const n = r.priority ?? e.unstable_NormalPriority;
        return (
          t.get(n) ??
          (() => {
            const r = os(n);
            return t.set(n, r), r;
          })()
        );
      };
    })(),
    us = (() => {
      const t = _(Map);
      return (r = {}) => {
        const n = r.priority ?? e.unstable_NormalPriority;
        return (
          t.get(n) ??
          (() => {
            const e = cs(r),
              s = is(e);
            return t.set(n, s), s;
          })()
        );
      };
    })(),
    hs = (r, e) => {
      const [n, s] = t.useState(k),
        [i, o] = t.useState(k),
        c = b(r) ? t.useMemo(r, e) : r;
      return (
        t.useEffect(() => {
          const t = N(
            Xr(t => s(r => t)),
            Gn(o),
          );
          return c[Z](t), l(t, B);
        }, [c, s, o]),
        S(i) ? L(i) : n
      );
    },
    as = On(),
    ls = (r, n, s) => {
      const i = ((r, n, s) => {
          const [i, o] = t.useState(k),
            c = b(r) ? t.useMemo(r, n) : r,
            {
              backpressureStrategy: u,
              capacity: h,
              priority: a = e.unstable_NormalPriority,
              replay: f = 1,
            } = (b(r) ? s : n) ?? {};
          return (
            t.useEffect(() => {
              const t = cs({ priority: a }),
                r = c[mt](t, {
                  replay: f,
                  backpressureStrategy: u,
                  capacity: h,
                });
              return o(r), l(r, B);
            }, [c, o, a, h]),
            i
          );
        })(r, n, s),
        o = (r => {
          const e = t.useRef();
          return (
            t.useEffect(() => {
              e.current = r;
            }, [r, e]),
            t.useCallback(
              t => {
                const r = e.current;
                return !!S(r) && r[ot](t);
              },
              [e],
            )
          );
        })(i),
        c = b(r) ? s : n,
        u = ((r, n, s) => {
          const [i, o] = t.useState(k),
            [c, u] = t.useState(k),
            h = b(r) ? t.useMemo(r, n) : r,
            {
              backpressureStrategy: a,
              capacity: f,
              priority: y = e.unstable_NormalPriority,
            } = (b(r) ? s : n) ?? {};
          return (
            t.useEffect(() => {
              const t = cs({ priority: y }),
                r = N(
                  h,
                  Pn(t => o(r => t)),
                  Dn(t, { backpressureStrategy: a, capacity: f }),
                  Gn(u),
                );
              return l(r, B);
            }, [h, o, u, y, f]),
            S(c) ? L(c) : i
          );
        })(i ?? as, c);
      return [u, o];
    },
    fs = (r, e, n = {}) => {
      const s = t.useMemo(r, e),
        i = (r => {
          const [e, n] = t.useState();
          return (
            t.useEffect(() => {
              const t = N(
                r,
                Dr(t => Xn()),
              );
              return n(t), R(t, Tr(d(B)), g);
            }, [r]),
            e ?? Fr()
          );
        })(s),
        [o, c] = ls(
          () =>
            Hn(t => {
              const r = N(
                s,
                qr((r, e) =>
                  N(
                    In(r(t)),
                    Pn(r => {
                      const n = i[e];
                      S(n) && n[K]({ event: t, value: r });
                    }),
                    Cn(),
                  ),
                ),
              );
              return N(
                zn(R(r, Ur())),
                Fn(qn(us(n))),
                Tn({ concurrency: n.concurrency }),
              );
            }, n),
          [s, n.concurrency, n.mode, i, n?.priority],
          n,
        );
      return [i, c, o];
    },
    ys = ({ replay: r } = {}) => {
      const [e, n] = t.useState($n());
      return (
        t.useEffect(() => {
          const t = Xn({ replay: r });
          return n(t), l(t, B);
        }, [r, n]),
        e
      );
    },
    ps = (t, r) => e => {
      const n = N(
          r,
          Bn(r => {
            e.removeEventListener(t, s);
          }),
        ),
        s = l(n, K);
      return e.addEventListener(t, s, { passive: !0 }), e;
    },
    gs = (() => {
      const t = (t, r, e) => (r - t == 0 ? 1 : (e - t) / (r - t));
      return r => e => {
        let n = o,
          i = 0,
          c = 0,
          u = 0,
          h = 0;
        const a = N(
          a => {
            "resize" === a.type &&
              ((n = o), (i = 0), (c = 0), (u = 0), (h = 0));
            const l = gn(),
              f = oe(0, l - n, s),
              y = e.scrollLeft,
              p = e.scrollWidth - e.clientWidth,
              g = (y - i) / f,
              d = f > 0 ? (g - u) / f : 0,
              m = e.scrollTop,
              v = e.scrollHeight - e.clientHeight,
              b = (m - c) / f,
              E = f > 0 ? (b - h) / f : 0,
              S = {
                current: y,
                scrollLength: p,
                progress: t(0, p, y),
                velocity: g,
                acceleration: d,
              },
              w = {
                current: m,
                scrollLength: v,
                progress: t(0, v, m),
                velocity: b,
                acceleration: E,
              };
            (n = l),
              (i = y),
              (u = g),
              (c = m),
              (h = b),
              r[K]({ event: "scroll", value: { x: S, y: w } });
          },
          Xr,
          $r(),
          Wn(r),
        );
        return N(e, ps("scroll", a)), N(window, ps("resize", a)), e;
      };
    })(),
    ds = ({ animation: r }) => {
      const e = ((r, e, n = []) => {
        const s = t.useRef(null),
          i = t.useCallback(e, n);
        return (
          t.useEffect(() => {
            if (E(r)) return;
            const t = Xr(t => {
              const r = s.current;
              null != r &&
                N(
                  i(t),
                  Tr((t, e) => {
                    r.style[e] = t ?? "";
                  }),
                );
            });
            return r[Z](t), l(t, B);
          }, [r, i, s]),
          s
        );
      })(r, t => ({ clipPath: `circle(${25 * t + 5}%)` }));
      return t.createElement("div", {
        ref: e,
        style: {
          backgroundColor: "orange",
          clipPath: "circle(5%)",
          top: "50%",
          left: "50%",
          width: "100%",
          height: "100%",
          position: "fixed",
          inset: "0",
        },
      });
    },
    ms = document.getElementById("root");
  r.createRoot(ms).render(
    t.createElement(() => {
      const r = ys(),
        e = (r => {
          const [e, n] = t.useState();
          return (
            t.useEffect(() => {
              E(e) || N(e, gs(r));
            }, [e, r]),
            n
          );
        })(r),
        [n, s] = ((t, r, e = {}) => {
          const [n, s, i] = fs(O({ value: t }), r, e);
          return [n.value ?? Zn(), s, i];
        })(
          t =>
            t
              ? [
                  { type: "spring", precision: 0.1, from: 1, to: 1.2 },
                  { type: "spring", precision: 0.1, from: 1.2, to: 1 },
                ]
              : [
                  { type: "spring", precision: 0.1, from: 0, to: -0.01 },
                  { type: "spring", precision: 0.1, from: -0.01, to: 0 },
                ],
          [],
          { mode: "switching" },
        ),
        i = ys();
      return (
        hs(
          R(
            r,
            ts(({ value: t }) => {
              const r = t.y.progress,
                e = t.y.velocity;
              i[K](r),
                1 === r && Math.abs(e) > 0.5 && s(!0),
                0 === r && Math.abs(e) > 0.5 && s(!1);
            }),
            rs(),
          ),
          [r, s],
        ),
        hs(R(n, es("value"), ts(l(i, K)), rs()), [n, i]),
        t.createElement(
          "div",
          {
            ref: e,
            style: {
              height: "100%",
              width: "100%",
              overflowY: "scroll",
              boxSizing: "border-box",
            },
          },
          t.createElement(
            "div",
            {
              style: {
                boxSizing: "border-box",
                height: "100%",
                width: "100%",
                position: "fixed",
                inset: "0",
                pointerEvents: "none",
                zIndex: "0",
              },
            },
            t.createElement(ds, { animation: i }),
          ),
          t.createElement("div", {
            style: { width: "100vw", height: "200vh" },
          }),
        )
      );
    }, null),
  );
})(
  React,
  ReactDOM,
  React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Scheduler,
);
