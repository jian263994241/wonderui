(window.webpackJsonp = window.webpackJsonp || []).push([
  [10],
  {
    751: function (e, n, t) {
      'use strict';
      t.r(n),
        t.d(n, 'default', function () {
          return u;
        });
      var a = t(9),
        l = t.n(a),
        c = t(0),
        r = t.n(c),
        o = t(30),
        i = Object(o.L)(o.g)({ '& + &': { marginTop: 10 } });
      function u(e) {
        var n = r.a.useState(!1),
          t = l()(n, 2),
          a = t[0],
          c = t[1],
          u = r.a.useState(),
          m = l()(u, 2),
          b = m[0],
          h = m[1],
          d = r.a.useCallback(function (e) {
            h(e), c(!0);
          }, []),
          f = r.a.useCallback(function () {
            c(!1);
          }, []);
        return r.a.createElement(
          o.A,
          { name: 'Drawer', navbar: !0 },
          r.a.createElement(
            o.m,
            null,
            r.a.createElement(
              'p',
              null,
              '点击按钮从四个方向出现一个半屏的浮层.',
            ),
            r.a.createElement(
              i,
              { fullWidth: !0, onClick: d.bind(null, 'right') },
              'Anchor Right',
            ),
            r.a.createElement(
              i,
              { fullWidth: !0, onClick: d.bind(null, 'left') },
              'Anchor Left',
            ),
            r.a.createElement(
              i,
              { fullWidth: !0, onClick: d.bind(null, 'top') },
              'Anchor Top',
            ),
            r.a.createElement(
              i,
              { fullWidth: !0, onClick: d.bind(null, 'bottom') },
              'Anchor Bottom',
            ),
          ),
          r.a.createElement(
            o.p,
            { visible: a, anchor: b, onCancel: f },
            r.a.createElement(o.e, { space: 2, blank: 2 }, 'I am here.'),
          ),
        );
      }
    },
  },
]);
