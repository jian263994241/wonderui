(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [14],
  {
    '0H/f': function (e, t, n) {
      'use strict';
      var a = n('q1tI'),
        l = n.n(a),
        r = n('dEAq'),
        i = n('AUa1'),
        c = {
          'zh-CN': {
            name: '\u5c5e\u6027\u540d',
            description: '\u63cf\u8ff0',
            type: '\u7c7b\u578b',
            default: '\u9ed8\u8ba4\u503c',
            required: '(\u5fc5\u9009)',
          },
          'en-US': {
            name: 'Name',
            description: 'Description',
            type: 'Type',
            default: 'Default',
            required: '(required)',
          },
        };
      t['a'] = (e) => {
        var t = e.identifier,
          n = e.export,
          d = e.props,
          u = Object(r['useApiData'])(t),
          o = Object(a['useContext'])(r['context']),
          m = o.locale,
          s = /^zh|cn$/i.test(m) ? c['zh-CN'] : c['en-US'],
          p = l.a.useRef(null),
          E = Object(i['b'])(() => ('string' === typeof d ? d.split('|') : []));
        return (
          l.a.useEffect(() => {
            var e;
            p.current &&
              (null === (e = p.current.previousElementSibling) ||
                void 0 === e ||
                e.append(' - '.concat(t)));
          }, []),
          l.a.createElement(
            l.a.Fragment,
            null,
            u &&
              l.a.createElement(
                'table',
                { style: { marginTop: 24 }, ref: p },
                l.a.createElement(
                  'thead',
                  null,
                  l.a.createElement(
                    'tr',
                    null,
                    l.a.createElement(
                      'th',
                      { style: { width: '12%' } },
                      s.name,
                    ),
                    l.a.createElement('th', null, s.description),
                    l.a.createElement('th', null, s.type),
                    l.a.createElement(
                      'th',
                      { style: { width: '10%' } },
                      s.default,
                    ),
                  ),
                ),
                l.a.createElement(
                  'tbody',
                  null,
                  u[n].map((e) =>
                    E.includes(e.identifier)
                      ? l.a.createElement(
                          'tr',
                          { key: e.identifier },
                          l.a.createElement('td', null, e.identifier),
                          l.a.createElement('td', null, e.description || '-'),
                          l.a.createElement(
                            'td',
                            null,
                            l.a.createElement('code', null, e.type),
                          ),
                          l.a.createElement(
                            'td',
                            null,
                            e.default || (e.required && s.required) || '-',
                          ),
                        )
                      : null,
                  ),
                ),
              ),
          )
        );
      };
    },
    'F+kV': function (e, t, n) {
      'use strict';
      n.r(t);
      var a = n('q1tI'),
        l = n.n(a),
        r = n('dEAq');
      n('0H/f'), n('JjdP');
      t['default'] = (e) => (
        l.a.useEffect(() => {
          var t;
          null !== e &&
            void 0 !== e &&
            null !== (t = e.location) &&
            void 0 !== t &&
            t.hash &&
            r['AnchorLink'].scrollToAnchor(
              decodeURIComponent(e.location.hash.slice(1)),
            );
        }, []),
        l.a.createElement(
          l.a.Fragment,
          null,
          l.a.createElement(
            'div',
            { className: 'markdown' },
            l.a.createElement(
              'h2',
              { id: 'hello-dumi' },
              l.a.createElement(
                r['AnchorLink'],
                { to: '#hello-dumi', 'aria-hidden': 'true', tabIndex: -1 },
                l.a.createElement('span', { className: 'icon icon-link' }),
              ),
              'Hello dumi!',
            ),
          ),
        )
      );
    },
  },
]);
