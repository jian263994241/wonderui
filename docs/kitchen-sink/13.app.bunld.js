(window.webpackJsonp = window.webpackJsonp || []).push([
  [13],
  {
    754: function (e, t, a) {
      'use strict';
      a.r(t),
        a.d(t, 'default', function () {
          return i;
        });
      var r = a(0),
        n = a.n(r),
        l = a(30),
        c = Object(l.K)({ bar: { margin: '10px 0' } });
      function i(e) {
        var t = c();
        return n.a.createElement(
          l.A,
          { name: 'HeaderBar', navbar: !0 },
          n.a.createElement(l.u, {
            className: t.bar,
            barLeft: 'left',
            title: 'title',
            barRight: 'right',
          }),
          n.a.createElement(l.u, {
            className: t.bar,
            title: 'title',
            showClose: !0,
          }),
          n.a.createElement(l.u, {
            className: t.bar,
            title: 'title',
            showBack: !0,
          }),
        );
      }
    },
  },
]);
