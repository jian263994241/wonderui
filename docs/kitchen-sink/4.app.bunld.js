(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    745: function (e, a, n) {
      'use strict';
      n.r(a),
        n.d(a, 'default', function () {
          return c;
        });
      var t = n(0),
        l = n.n(t),
        r = n(30);
      function c(e) {
        return l.a.createElement(
          r.A,
          { name: 'Accordion', navbar: !0 },
          l.a.createElement(
            r.m,
            null,
            l.a.createElement(
              r.a,
              { disableTranstion: !0 },
              l.a.createElement(
                r.b,
                { header: l.a.createElement('a', null, '点击展开') },
                l.a.createElement('div', null, ' 无UI '),
              ),
            ),
          ),
          l.a.createElement(
            r.x,
            { renderHeader: 'AccordionList' },
            l.a.createElement(
              r.a,
              { accordion: !0 },
              l.a.createElement(
                r.b,
                {
                  itemKey: 'key1',
                  header: l.a.createElement(r.y, null, 'Title 1'),
                },
                l.a.createElement(r.y, null, '内容 1'),
              ),
              l.a.createElement(
                r.b,
                {
                  itemKey: 'key2',
                  header: l.a.createElement(r.y, null, 'Title 2'),
                },
                l.a.createElement(r.y, null, '内容 2'),
              ),
            ),
          ),
        );
      }
    },
  },
]);
