(window['webpackJsonp'] = window['webpackJsonp'] || []).push([
  [81],
  {
    '5LIH': function (e, t, n) {},
    '7ZSp': function (e, t, n) {},
    C6LL: function (e, t, n) {
      'use strict';
      n.r(t);
      var r = n('q1tI'),
        a = n.n(r),
        o = n('dEAq'),
        i = n('tJVT'),
        l = n('MZF8'),
        u =
          (n('OxFa'),
          (e) => {
            var t = e.location,
              n = Object(r['useContext'])(o['context']),
              i = n.base,
              u = n.locale,
              c = n.config.locales,
              s = c.find((e) => {
                var t = e.name;
                return t !== u;
              });
            function d(e) {
              var n = i.replace('/'.concat(u), ''),
                r = t.pathname.replace(i, n) || '/';
              if (e !== c[0].name) {
                var a = ''.concat(n, '/').concat(e).replace(/\/\//, '/'),
                  o = t.pathname.replace(i.replace(/^\/$/, '//'), '');
                return ''.concat(a).concat(o).replace(/\/$/, '');
              }
              return r;
            }
            return s
              ? a.a.createElement(
                  'div',
                  {
                    className: '__dumi-default-locale-select',
                    'data-locale-count': c.length,
                  },
                  c.length > 2
                    ? a.a.createElement(
                        'select',
                        {
                          value: u,
                          onChange: (e) => l['a'].push(d(e.target.value)),
                        },
                        c.map((e) =>
                          a.a.createElement(
                            'option',
                            { value: e.name, key: e.name },
                            e.label,
                          ),
                        ),
                      )
                    : a.a.createElement(o['Link'], { to: d(s.name) }, s.label),
                )
              : null;
          }),
        c = u,
        s =
          (n('jp8u'),
          (e) => {
            var t = e.onMobileMenuClick,
              n = e.navPrefix,
              i = e.location,
              l = e.darkPrefix,
              u = Object(r['useContext'])(o['context']),
              s = u.base,
              d = u.config,
              f = d.mode,
              m = d.title,
              h = d.logo,
              p = u.nav;
            return a.a.createElement(
              'div',
              { className: '__dumi-default-navbar', 'data-mode': f },
              a.a.createElement('button', {
                className: '__dumi-default-navbar-toggle',
                onClick: t,
              }),
              a.a.createElement(
                o['Link'],
                {
                  className: '__dumi-default-navbar-logo',
                  style: { backgroundImage: h && "url('".concat(h, "')") },
                  to: s,
                  'data-plaintext': !1 === h || void 0,
                },
                m,
              ),
              a.a.createElement(
                'nav',
                null,
                n,
                p.map((e) => {
                  var t,
                    n =
                      Boolean(
                        null === (t = e.children) || void 0 === t
                          ? void 0
                          : t.length,
                      ) &&
                      a.a.createElement(
                        'ul',
                        null,
                        e.children.map((e) =>
                          a.a.createElement(
                            'li',
                            { key: e.path },
                            a.a.createElement(
                              o['NavLink'],
                              { to: e.path },
                              e.title,
                            ),
                          ),
                        ),
                      );
                  return a.a.createElement(
                    'span',
                    { key: e.title || e.path },
                    e.path
                      ? a.a.createElement(
                          o['NavLink'],
                          { to: e.path, key: e.path },
                          e.title,
                        )
                      : e.title,
                    n,
                  );
                }),
                a.a.createElement(
                  'div',
                  { className: '__dumi-default-navbar-tool' },
                  a.a.createElement(c, { location: i }),
                  l,
                ),
              ),
            );
          }),
        d = s,
        f = n('0Owb'),
        m = n('PpiC'),
        h =
          (n('mAF5'),
          (e) => {
            var t = e.slugs,
              n = Object(m['a'])(e, ['slugs']);
            return a.a.createElement(
              'ul',
              Object(f['a'])({ role: 'slug-list' }, n),
              t
                .filter((e) => {
                  var t = e.depth;
                  return t > 1 && t < 4;
                })
                .map((e) =>
                  a.a.createElement(
                    'li',
                    { key: e.heading, title: e.value, 'data-depth': e.depth },
                    a.a.createElement(
                      o['AnchorLink'],
                      { to: '#'.concat(e.heading) },
                      a.a.createElement('span', null, e.value),
                    ),
                  ),
                ),
            );
          }),
        p = h,
        v =
          (n('hQjr'),
          (e) => {
            var t = e.mobileMenuCollapsed,
              n = e.location,
              i = e.darkPrefix,
              l = Object(r['useContext'])(o['context']),
              u = l.config,
              s = u.logo,
              d = u.title,
              f = u.description,
              m = u.mode,
              h = u.repository.url,
              v = l.menu,
              g = l.nav,
              y = l.base,
              b = l.meta,
              E =
                Boolean((b.hero || b.features || b.gapless) && 'site' === m) ||
                !1 === b.sidemenu ||
                void 0;
            return a.a.createElement(
              'div',
              {
                className: '__dumi-default-menu',
                'data-mode': m,
                'data-hidden': E,
                'data-mobile-show': !t || void 0,
              },
              a.a.createElement(
                'div',
                { className: '__dumi-default-menu-inner' },
                a.a.createElement(
                  'div',
                  { className: '__dumi-default-menu-header' },
                  a.a.createElement(o['Link'], {
                    to: y,
                    className: '__dumi-default-menu-logo',
                    style: { backgroundImage: s && "url('".concat(s, "')") },
                  }),
                  a.a.createElement('h1', null, d),
                  a.a.createElement('p', null, f),
                  /github\.com/.test(h) &&
                    'doc' === m &&
                    a.a.createElement(
                      'p',
                      null,
                      a.a.createElement('object', {
                        type: 'image/svg+xml',
                        data: 'https://img.shields.io/github/stars'.concat(
                          h.match(/((\/[^\/]+){2})$/)[1],
                          '?style=social',
                        ),
                      }),
                    ),
                ),
                a.a.createElement(
                  'div',
                  { className: '__dumi-default-menu-mobile-area' },
                  !!g.length &&
                    a.a.createElement(
                      'ul',
                      { className: '__dumi-default-menu-nav-list' },
                      g.map((e) => {
                        var t,
                          n =
                            Boolean(
                              null === (t = e.children) || void 0 === t
                                ? void 0
                                : t.length,
                            ) &&
                            a.a.createElement(
                              'ul',
                              null,
                              e.children.map((e) =>
                                a.a.createElement(
                                  'li',
                                  { key: e.path || e.title },
                                  a.a.createElement(
                                    o['NavLink'],
                                    { to: e.path },
                                    e.title,
                                  ),
                                ),
                              ),
                            );
                        return a.a.createElement(
                          'li',
                          { key: e.path || e.title },
                          e.path
                            ? a.a.createElement(
                                o['NavLink'],
                                { to: e.path },
                                e.title,
                              )
                            : e.title,
                          n,
                        );
                      }),
                    ),
                  a.a.createElement(c, { location: n }),
                  i,
                ),
                a.a.createElement(
                  'ul',
                  { className: '__dumi-default-menu-list' },
                  !E &&
                    v.map((e) => {
                      var t,
                        r = Boolean(
                          null === (t = b.slugs) || void 0 === t
                            ? void 0
                            : t.length,
                        ),
                        i = e.children && Boolean(e.children.length),
                        l =
                          'menu' === b.toc &&
                          !i &&
                          r &&
                          e.path === n.pathname.replace(/([^^])\/$/, '$1');
                      return a.a.createElement(
                        'li',
                        { key: e.path || e.title },
                        a.a.createElement(
                          o['NavLink'],
                          {
                            to: e.path,
                            exact: !(e.children && e.children.length),
                          },
                          e.title,
                        ),
                        Boolean(e.children && e.children.length) &&
                          a.a.createElement(
                            'ul',
                            null,
                            e.children.map((e) =>
                              a.a.createElement(
                                'li',
                                { key: e.path },
                                a.a.createElement(
                                  o['NavLink'],
                                  { to: e.path, exact: !0 },
                                  a.a.createElement('span', null, e.title),
                                ),
                                Boolean(
                                  'menu' === b.toc &&
                                    'undefined' !== typeof window &&
                                    e.path === n.pathname &&
                                    r,
                                ) && a.a.createElement(p, { slugs: b.slugs }),
                              ),
                            ),
                          ),
                        l && a.a.createElement(p, { slugs: b.slugs }),
                      );
                    }),
                ),
              ),
            );
          }),
        g = v,
        y =
          (n('KAdo'),
          () => {
            var e = Object(r['useState'])(''),
              t = Object(i['a'])(e, 2),
              n = t[0],
              l = t[1],
              u = Object(r['useState'])([]),
              c = Object(i['a'])(u, 2),
              s = c[0],
              d = c[1],
              m = Object(r['useRef'])(),
              h = Object(o['useSearch'])(n),
              p = a.a.createElement(
                'svg',
                {
                  className: '__dumi-default-search-empty',
                  viewBox: '0 0 1024 1024',
                  version: '1.1',
                  xmlns: 'http://www.w3.org/2000/svg',
                  'p-id': '2347',
                  width: '32',
                  height: '32',
                },
                a.a.createElement('path', {
                  d: 'M855.6 427.2H168.5c-12.7 0-24.4 6.9-30.6 18L4.4 684.7C1.5 689.9 0 695.8 0 701.8v287.1c0 19.4 15.7 35.1 35.1 35.1H989c19.4 0 35.1-15.7 35.1-35.1V701.8c0-6-1.5-11.8-4.4-17.1L886.2 445.2c-6.2-11.1-17.9-18-30.6-18zM673.4 695.6c-16.5 0-30.8 11.5-34.3 27.7-12.7 58.5-64.8 102.3-127.2 102.3s-114.5-43.8-127.2-102.3c-3.5-16.1-17.8-27.7-34.3-27.7H119c-26.4 0-43.3-28-31.1-51.4l81.7-155.8c6.1-11.6 18-18.8 31.1-18.8h622.4c13 0 25 7.2 31.1 18.8l81.7 155.8c12.2 23.4-4.7 51.4-31.1 51.4H673.4zM819.9 209.5c-1-1.8-2.1-3.7-3.2-5.5-9.8-16.6-31.1-22.2-47.8-12.6L648.5 261c-17 9.8-22.7 31.6-12.6 48.4 0.9 1.4 1.7 2.9 2.5 4.4 9.5 17 31.2 22.8 48 13L807 257.3c16.7-9.7 22.4-31 12.9-47.8zM375.4 261.1L255 191.6c-16.7-9.6-38-4-47.8 12.6-1.1 1.8-2.1 3.6-3.2 5.5-9.5 16.8-3.8 38.1 12.9 47.8L337.3 327c16.9 9.7 38.6 4 48-13.1 0.8-1.5 1.7-2.9 2.5-4.4 10.2-16.8 4.5-38.6-12.4-48.4zM512 239.3h2.5c19.5 0.3 35.5-15.5 35.5-35.1v-139c0-19.3-15.6-34.9-34.8-35.1h-6.4C489.6 30.3 474 46 474 65.2v139c0 19.5 15.9 35.4 35.5 35.1h2.5z',
                }),
              );
            return (
              Object(r['useEffect'])(() => {
                Array.isArray(h)
                  ? d(h)
                  : 'function' === typeof h &&
                    h('.'.concat(m.current.className));
              }, [h]),
              a.a.createElement(
                'div',
                { className: '__dumi-default-search' },
                a.a.createElement(
                  'input',
                  Object(f['a'])(
                    {
                      className: '__dumi-default-search-input',
                      type: 'search',
                      ref: m,
                    },
                    Array.isArray(h)
                      ? { value: n, onChange: (e) => l(e.target.value) }
                      : {},
                  ),
                ),
                a.a.createElement(
                  'ul',
                  null,
                  s.length > 0 &&
                    s.map((e) => {
                      var t;
                      return a.a.createElement(
                        'li',
                        { key: e.path, onClick: () => l('') },
                        a.a.createElement(
                          o['AnchorLink'],
                          { to: e.path },
                          (null === (t = e.parent) || void 0 === t
                            ? void 0
                            : t.title) &&
                            a.a.createElement('span', null, e.parent.title),
                          e.title,
                        ),
                      );
                    }),
                  0 == s.length &&
                    n &&
                    a.a.createElement(
                      'li',
                      { style: { textAlign: 'center' } },
                      p,
                    ),
                ),
              )
            );
          }),
        b =
          (n('I8lp'),
          (e) => {
            var t = e.darkSwitch,
              n = e.onDarkSwitchClick,
              r = e.isSideMenu,
              l = ['dark', 'light', 'auto'],
              u = Object(o['usePrefersColor'])(),
              c = Object(i['a'])(u, 2),
              s = c[0],
              d = c[1],
              f = s,
              m = a.a.createElement(
                'svg',
                {
                  viewBox: '0 0 1024 1024',
                  version: '1.1',
                  xmlns: 'http://www.w3.org/2000/svg',
                  'p-id': '4026',
                  width: '22',
                  height: '22',
                },
                a.a.createElement('path', {
                  d: 'M915.2 476.16h-43.968c-24.704 0-44.736 16-44.736 35.84s20.032 35.904 44.736 35.904H915.2c24.768 0 44.8-16.064 44.8-35.904s-20.032-35.84-44.8-35.84zM512 265.6c-136.704 0-246.464 109.824-246.464 246.4 0 136.704 109.76 246.464 246.464 246.464S758.4 648.704 758.4 512c0-136.576-109.696-246.4-246.4-246.4z m0 425.6c-99.008 0-179.2-80.128-179.2-179.2 0-98.944 80.192-179.2 179.2-179.2S691.2 413.056 691.2 512c0 99.072-80.192 179.2-179.2 179.2zM197.44 512c0-19.84-19.136-35.84-43.904-35.84H108.8c-24.768 0-44.8 16-44.8 35.84s20.032 35.904 44.8 35.904h44.736c24.768 0 43.904-16.064 43.904-35.904zM512 198.464c19.776 0 35.84-20.032 35.84-44.8v-44.8C547.84 84.032 531.84 64 512 64s-35.904 20.032-35.904 44.8v44.8c0 24.768 16.128 44.864 35.904 44.864z m0 627.136c-19.776 0-35.904 20.032-35.904 44.8v44.736C476.096 940.032 492.16 960 512 960s35.84-20.032 35.84-44.8v-44.736c0-24.768-16.064-44.864-35.84-44.864z m329.92-592.832c17.472-17.536 20.288-43.072 6.4-57.024-14.016-14.016-39.488-11.2-57.024 6.336-4.736 4.864-26.496 26.496-31.36 31.36-17.472 17.472-20.288 43.008-6.336 57.024 13.952 14.016 39.488 11.2 57.024-6.336 4.8-4.864 26.496-26.56 31.296-31.36zM213.376 759.936c-4.864 4.8-26.56 26.624-31.36 31.36-17.472 17.472-20.288 42.944-6.4 56.96 14.016 13.952 39.552 11.2 57.024-6.336 4.8-4.736 26.56-26.496 31.36-31.36 17.472-17.472 20.288-43.008 6.336-56.96-14.016-13.952-39.552-11.072-56.96 6.336z m19.328-577.92c-17.536-17.536-43.008-20.352-57.024-6.336-14.08 14.016-11.136 39.488 6.336 57.024 4.864 4.864 26.496 26.56 31.36 31.424 17.536 17.408 43.008 20.288 56.96 6.336 14.016-14.016 11.264-39.488-6.336-57.024-4.736-4.864-26.496-26.56-31.296-31.424z m527.168 628.608c4.864 4.864 26.624 26.624 31.36 31.424 17.536 17.408 43.072 20.224 57.088 6.336 13.952-14.016 11.072-39.552-6.4-57.024-4.864-4.8-26.56-26.496-31.36-31.36-17.472-17.408-43.072-20.288-57.024-6.336-13.952 14.016-11.008 39.488 6.336 56.96z',
                  'p-id': '4027',
                }),
              ),
              h = a.a.createElement(
                'svg',
                {
                  viewBox: '0 0 1024 1024',
                  version: '1.1',
                  xmlns: 'http://www.w3.org/2000/svg',
                  'p-id': '3854',
                  width: '22',
                  height: '22',
                },
                a.a.createElement('path', {
                  d: 'M991.816611 674.909091a69.166545 69.166545 0 0 0-51.665455-23.272727 70.795636 70.795636 0 0 0-27.438545 5.585454A415.674182 415.674182 0 0 1 754.993338 698.181818c-209.594182 0-393.472-184.785455-393.472-395.636363 0-52.363636 38.539636-119.621818 69.515637-173.614546 4.887273-8.610909 9.634909-16.756364 14.103272-24.901818A69.818182 69.818182 0 0 0 384.631156 0a70.842182 70.842182 0 0 0-27.438545 5.585455C161.678429 90.298182 14.362065 307.898182 14.362065 512c0 282.298182 238.824727 512 532.38691 512a522.286545 522.286545 0 0 0 453.957818-268.334545A69.818182 69.818182 0 0 0 991.816611 674.909091zM546.679156 954.181818c-248.785455 0-462.941091-192-462.941091-442.181818 0-186.647273 140.637091-372.829091 300.939637-442.181818-36.817455 65.629091-92.578909 151.970909-92.578909 232.727273 0 250.181818 214.109091 465.454545 462.917818 465.454545a488.331636 488.331636 0 0 0 185.181091-46.545455 453.003636 453.003636 0 0 1-393.565091 232.727273z m103.656728-669.323636l-14.266182 83.781818a34.909091 34.909091 0 0 0 50.362182 36.770909l74.775272-39.563636 74.752 39.563636a36.142545 36.142545 0 0 0 16.174546 3.956364 34.909091 34.909091 0 0 0 34.210909-40.727273l-14.289455-83.781818 60.509091-59.345455a35.025455 35.025455 0 0 0-19.223272-59.578182l-83.61891-12.101818-37.376-76.101818a34.56 34.56 0 0 0-62.254545 0l-37.376 76.101818-83.618909 12.101818a34.909091 34.909091 0 0 0-19.246546 59.578182z m70.423272-64.698182a34.280727 34.280727 0 0 0 26.135273-19.083636l14.312727-29.090909 14.336 29.090909a34.257455 34.257455 0 0 0 26.135273 19.083636l32.046546 4.887273-23.272728 22.574545a35.234909 35.234909 0 0 0-10.007272 30.952727l5.46909 32.116364-28.625454-15.127273a34.490182 34.490182 0 0 0-32.302546 0l-28.695272 15.127273 5.469091-32.116364a35.141818 35.141818 0 0 0-9.984-30.952727l-23.272728-22.574545z',
                  'p-id': '3855',
                }),
              ),
              p = a.a.createElement(
                'svg',
                {
                  viewBox: '0 0 1024 1024',
                  version: '1.1',
                  xmlns: 'http://www.w3.org/2000/svg',
                  'p-id': '11002',
                  width: '22',
                  height: '22',
                },
                a.a.createElement('path', {
                  d: 'M127.658667 492.885333c0-51.882667 10.24-101.717333 30.378666-149.162666s47.786667-88.064 81.92-122.538667 75.093333-61.781333 122.538667-81.92 96.938667-30.378667 149.162667-30.378667 101.717333 10.24 149.162666 30.378667 88.405333 47.786667 122.88 81.92 61.781333 75.093333 81.92 122.538667 30.378667 96.938667 30.378667 149.162666-10.24 101.717333-30.378667 149.162667-47.786667 88.405333-81.92 122.88-75.093333 61.781333-122.88 81.92-97.28 30.378667-149.162666 30.378667-101.717333-10.24-149.162667-30.378667-88.064-47.786667-122.538667-81.92-61.781333-75.093333-81.92-122.88-30.378667-96.938667-30.378666-149.162667z m329.045333 0c0 130.048 13.994667 244.394667 41.984 343.381334h12.970667c46.762667 0 91.136-9.216 133.461333-27.306667s78.848-42.666667 109.568-73.386667 54.954667-67.242667 73.386667-109.568 27.306667-86.698667 27.306666-133.461333c0-46.421333-9.216-90.794667-27.306666-133.12s-42.666667-78.848-73.386667-109.568-67.242667-54.954667-109.568-73.386667-86.698667-27.306667-133.461333-27.306666h-11.605334c-28.672 123.562667-43.349333 237.909333-43.349333 343.722666z',
                  'p-id': '11003',
                }),
              ),
              v = l.filter((e) => e !== f),
              g = (e, t) => {
                !r && n && n(e), t !== f && d(t);
              },
              y = (e) => {
                switch (e) {
                  case 'dark':
                    return a.a.createElement(
                      'button',
                      {
                        key: 'dumi-dark-btn-moon',
                        title: 'Dark theme',
                        onClick: (t) => g(t, e),
                        className: '__dumi-default-dark-moon '.concat(
                          e === f ? '__dumi-default-dark-switch-active' : '',
                        ),
                      },
                      h,
                    );
                  case 'light':
                    return a.a.createElement(
                      'button',
                      {
                        key: 'dumi-dark-btn-sun',
                        title: 'Light theme',
                        onClick: (t) => g(t, e),
                        className: '__dumi-default-dark-sun '.concat(
                          e === f ? '__dumi-default-dark-switch-active' : '',
                        ),
                      },
                      m,
                    );
                  case 'auto':
                    return a.a.createElement(
                      'button',
                      {
                        key: 'dumi-dark-btn-auto',
                        title: 'Default to system',
                        onClick: (t) => g(t, e),
                        className: '__dumi-default-dark-auto '.concat(
                          e === f ? '__dumi-default-dark-switch-active' : '',
                        ),
                      },
                      p,
                    );
                  default:
                }
              };
            return a.a.createElement(
              'div',
              { className: '__dumi-default-dark' },
              a.a.createElement(
                'div',
                {
                  className: '__dumi-default-dark-switch '.concat(
                    !r && t ? '__dumi-default-dark-switch-open' : '',
                  ),
                },
                r ? l.map((e) => y(e)) : y(f),
              ),
              !r &&
                t &&
                a.a.createElement(
                  'div',
                  { className: '__dumi-default-dark-switch-list' },
                  v.map((e) => y(e)),
                ),
            );
          }),
        E = b,
        w =
          (n('7ZSp'),
          (e) =>
            a.a.createElement(
              a.a.Fragment,
              null,
              a.a.createElement(
                'div',
                { className: '__dumi-default-layout-hero' },
                e.image && a.a.createElement('img', { src: e.image }),
                a.a.createElement('h1', null, e.title),
                a.a.createElement('div', {
                  dangerouslySetInnerHTML: { __html: e.desc },
                }),
                e.actions &&
                  e.actions.map((e) =>
                    a.a.createElement(
                      o['Link'],
                      { to: e.link, key: e.text },
                      a.a.createElement('button', { type: 'button' }, e.text),
                    ),
                  ),
              ),
            )),
        _ = (e) =>
          a.a.createElement(
            'div',
            { className: '__dumi-default-layout-features' },
            e.map((e) =>
              a.a.createElement(
                'dl',
                {
                  key: e.title,
                  style: {
                    backgroundImage: e.icon
                      ? 'url('.concat(e.icon, ')')
                      : void 0,
                  },
                },
                e.link
                  ? a.a.createElement(
                      o['Link'],
                      { to: e.link },
                      a.a.createElement('dt', null, e.title),
                    )
                  : a.a.createElement('dt', null, e.title),
                a.a.createElement('dd', {
                  dangerouslySetInnerHTML: { __html: e.desc },
                }),
              ),
            ),
          ),
        O = (e) => {
          var t,
            n,
            l = e.children,
            u = e.location,
            c = Object(r['useContext'])(o['context']),
            s = c.config,
            f = s.mode,
            m = s.repository,
            h = (c.nav, c.meta),
            v = c.locale,
            b = m.url,
            O = m.branch,
            C = m.platform,
            A = Object(r['useState'])(!0),
            k = Object(i['a'])(A, 2),
            P = k[0],
            S = k[1],
            L = Object(r['useState'])(!1),
            j = Object(i['a'])(L, 2),
            x = j[0],
            M = j[1],
            T = 'site' === f,
            N = T && h.hero,
            B = T && h.features,
            D = !1 !== h.sidemenu && !N && !B && !h.gapless,
            I =
              !N &&
              !B &&
              Boolean(
                null === (t = h.slugs) || void 0 === t ? void 0 : t.length,
              ) &&
              ('content' === h.toc || void 0 === h.toc) &&
              !h.gapless,
            z = /^zh|cn$/i.test(v),
            R = new Date(h.updatedTime),
            H = ''
              .concat(R.toLocaleDateString([], { hour12: !1 }), ' ')
              .concat(R.toLocaleTimeString([], { hour12: !1 })),
            K =
              { github: 'GitHub', gitlab: 'GitLab' }[
                (null === (n = (b || '').match(/(github|gitlab)/)) ||
                void 0 === n
                  ? void 0
                  : n[1]) || 'nothing'
              ] || C;
          return a.a.createElement(
            'div',
            {
              className: '__dumi-default-layout',
              'data-route': u.pathname,
              'data-show-sidemenu': String(D),
              'data-show-slugs': String(I),
              'data-site-mode': T,
              'data-gapless': String(!!h.gapless),
              onClick: () => {
                M(!1), P || S(!0);
              },
            },
            a.a.createElement(d, {
              location: u,
              navPrefix: a.a.createElement(y, null),
              darkPrefix: a.a.createElement(E, {
                darkSwitch: x,
                onDarkSwitchClick: (e) => {
                  M((e) => !e), e.stopPropagation();
                },
                isSideMenu: !1,
              }),
              onMobileMenuClick: (e) => {
                S((e) => !e), e.stopPropagation();
              },
            }),
            a.a.createElement(g, {
              darkPrefix: a.a.createElement(E, {
                darkSwitch: x,
                isSideMenu: !0,
              }),
              mobileMenuCollapsed: P,
              location: u,
            }),
            I &&
              a.a.createElement(p, {
                slugs: h.slugs,
                className: '__dumi-default-layout-toc',
              }),
            N && w(h.hero),
            B && _(h.features),
            a.a.createElement(
              'div',
              { className: '__dumi-default-layout-content' },
              l,
              !N &&
                !B &&
                h.filePath &&
                !h.gapless &&
                a.a.createElement(
                  'div',
                  { className: '__dumi-default-layout-footer-meta' },
                  K &&
                    a.a.createElement(
                      o['Link'],
                      {
                        to: ''
                          .concat(b, '/edit/')
                          .concat(O, '/')
                          .concat(h.filePath),
                      },
                      z
                        ? '\u5728 '.concat(K, ' \u4e0a\u7f16\u8f91\u6b64\u9875')
                        : 'Edit this doc on '.concat(K),
                    ),
                  a.a.createElement(
                    'span',
                    {
                      'data-updated-text': z
                        ? '\u6700\u540e\u66f4\u65b0\u65f6\u95f4\uff1a'
                        : 'Last update: ',
                    },
                    H,
                  ),
                ),
              (N || B) &&
                h.footer &&
                a.a.createElement('div', {
                  className: '__dumi-default-layout-footer',
                  dangerouslySetInnerHTML: { __html: h.footer },
                }),
            ),
          );
        },
        C = O,
        A = n('D1Df'),
        k = n.n(A);
      n('5LIH');
      function P(e, t) {
        return M(e) || x(e, t) || L(e, t) || S();
      }
      function S() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      }
      function L(e, t) {
        if (e) {
          if ('string' === typeof e) return j(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === n && e.constructor && (n = e.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(e)
              : 'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? j(e, t)
              : void 0
          );
        }
      }
      function j(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function x(e, t) {
        var n =
          null == e
            ? null
            : ('undefined' !== typeof Symbol && e[Symbol.iterator]) ||
              e['@@iterator'];
        if (null != n) {
          var r,
            a,
            o = [],
            i = !0,
            l = !1;
          try {
            for (n = n.call(e); !(i = (r = n.next()).done); i = !0)
              if ((o.push(r.value), t && o.length === t)) break;
          } catch (u) {
            (l = !0), (a = u);
          } finally {
            try {
              i || null == n['return'] || n['return']();
            } finally {
              if (l) throw a;
            }
          }
          return o;
        }
      }
      function M(e) {
        if (Array.isArray(e)) return e;
      }
      var T = function (e) {
          var t = e.url,
            n = e.className,
            i = Object(r['useState'])(Math.random()),
            l = P(i, 2),
            u = l[0],
            c = l[1],
            s = Object(o['usePrefersColor'])(),
            d = P(s, 1),
            f = d[0],
            m = Object(r['useContext'])(o['context']),
            h = m.config.mode;
          return (
            Object(r['useEffect'])(
              function () {
                c(Math.random());
              },
              [f],
            ),
            a.a.createElement(
              'div',
              {
                className: ['__dumi-default-device'].concat(n).join(' '),
                'data-device-type': 'iOS',
                'data-mode': h,
              },
              a.a.createElement(
                'div',
                { className: '__dumi-default-device-status' },
                a.a.createElement('span', null, 'dumi'),
                a.a.createElement('span', null, '10:24'),
              ),
              a.a.createElement('iframe', {
                title: 'dumi-previewer',
                src: t,
                key: u,
              }),
              a.a.createElement(
                'div',
                { className: '__dumi-default-device-action' },
                a.a.createElement('button', {
                  className: '__dumi-default-icon',
                  role: 'refresh',
                  onClick: function () {
                    return c(Math.random());
                  },
                }),
                a.a.createElement(
                  'button',
                  { className: '__dumi-default-icon', role: 'qrcode' },
                  a.a.createElement(k.a, { value: t, size: 96 }),
                ),
                a.a.createElement('a', {
                  href: t,
                  target: '_blank',
                  rel: 'noreferrer',
                  className: '__dumi-default-icon',
                  role: 'open-demo',
                }),
              ),
            )
          );
        },
        N = T,
        B = n('Hf60'),
        D = (n('Vp5q'), ['children']);
      function I(e, t) {
        return U(e) || K(e, t) || R(e, t) || z();
      }
      function z() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      }
      function R(e, t) {
        if (e) {
          if ('string' === typeof e) return H(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === n && e.constructor && (n = e.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(e)
              : 'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? H(e, t)
              : void 0
          );
        }
      }
      function H(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function K(e, t) {
        var n =
          null == e
            ? null
            : ('undefined' !== typeof Symbol && e[Symbol.iterator]) ||
              e['@@iterator'];
        if (null != n) {
          var r,
            a,
            o = [],
            i = !0,
            l = !1;
          try {
            for (n = n.call(e); !(i = (r = n.next()).done); i = !0)
              if ((o.push(r.value), t && o.length === t)) break;
          } catch (u) {
            (l = !0), (a = u);
          } finally {
            try {
              i || null == n['return'] || n['return']();
            } finally {
              if (l) throw a;
            }
          }
          return o;
        }
      }
      function U(e) {
        if (Array.isArray(e)) return e;
      }
      function W(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = G(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (r = 0; r < o.length; r++)
            (n = o[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      function G(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = {},
          o = Object.keys(e);
        for (r = 0; r < o.length; r++)
          (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
        return a;
      }
      var F = function (e) {
        var t = e.children,
          n = W(e, D),
          i = Object(r['useState'])(null),
          l = I(i, 2),
          u = l[0],
          c = l[1],
          s = Object(o['useDemoUrl'])(
            null === u || void 0 === u ? void 0 : u.identifier,
          );
        return (
          Object(r['useEffect'])(function () {
            var e = function (e) {
              e.data.type === B['ACTIVE_MSG_TYPE'] &&
                c(JSON.parse(e.data.value));
            };
            return (
              window.addEventListener('message', e),
              function () {
                return window.removeEventListener('message', e);
              }
            );
          }, []),
          Object(r['useEffect'])(
            function () {
              c(null);
            },
            [n.location.pathname],
          ),
          a.a.createElement(
            C,
            n,
            a.a.createElement(
              'div',
              { className: '__dumi-default-mobile-content' },
              a.a.createElement('article', null, t),
              u &&
                a.a.createElement(N, {
                  className: '__dumi-default-mobile-content-device',
                  url: u.demoUrl || s,
                }),
            ),
          )
        );
      };
      t['default'] = F;
    },
    D1Df: function (e, t, n) {
      'use strict';
      function r(e) {
        return (
          (r =
            'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    'function' === typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                }),
          r(e)
        );
      }
      function a() {
        return (
          (a =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          a.apply(this, arguments)
        );
      }
      function o(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function i(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? o(n, !0).forEach(function (t) {
                g(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : o(n).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t),
                );
              });
        }
        return e;
      }
      function l(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = u(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (r = 0; r < o.length; r++)
            (n = o[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      function u(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = {},
          o = Object.keys(e);
        for (r = 0; r < o.length; r++)
          (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
        return a;
      }
      function c(e, t) {
        if (!(e instanceof t))
          throw new TypeError('Cannot call a class as a function');
      }
      function s(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            'value' in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function d(e, t, n) {
        return t && s(e.prototype, t), n && s(e, n), e;
      }
      function f(e, t) {
        return !t || ('object' !== r(t) && 'function' !== typeof t) ? h(e) : t;
      }
      function m(e) {
        return (
          (m = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          m(e)
        );
      }
      function h(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return e;
      }
      function p(e, t) {
        if ('function' !== typeof t && null !== t)
          throw new TypeError(
            'Super expression must either be null or a function',
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && v(e, t);
      }
      function v(e, t) {
        return (
          (v =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          v(e, t)
        );
      }
      function g(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var y = n('q1tI'),
        b = (n('17x9'), n('H38U')),
        E = n('aRTE');
      function w(e) {
        for (var t = '', n = 0; n < e.length; n++) {
          var r = e.charCodeAt(n);
          r < 128
            ? (t += String.fromCharCode(r))
            : r < 2048
            ? ((t += String.fromCharCode(192 | (r >> 6))),
              (t += String.fromCharCode(128 | (63 & r))))
            : r < 55296 || r >= 57344
            ? ((t += String.fromCharCode(224 | (r >> 12))),
              (t += String.fromCharCode(128 | ((r >> 6) & 63))),
              (t += String.fromCharCode(128 | (63 & r))))
            : (n++,
              (r = 65536 + (((1023 & r) << 10) | (1023 & e.charCodeAt(n)))),
              (t += String.fromCharCode(240 | (r >> 18))),
              (t += String.fromCharCode(128 | ((r >> 12) & 63))),
              (t += String.fromCharCode(128 | ((r >> 6) & 63))),
              (t += String.fromCharCode(128 | (63 & r))));
        }
        return t;
      }
      var _ = {
          size: 128,
          level: 'L',
          bgColor: '#FFFFFF',
          fgColor: '#000000',
          includeMargin: !1,
        },
        O = 4,
        C = 0.1;
      function A(e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          n = [];
        return (
          e.forEach(function (e, r) {
            var a = null;
            e.forEach(function (o, i) {
              if (!o && null !== a)
                return (
                  n.push(
                    'M'
                      .concat(a + t, ' ')
                      .concat(r + t, 'h')
                      .concat(i - a, 'v1H')
                      .concat(a + t, 'z'),
                  ),
                  void (a = null)
                );
              if (i !== e.length - 1) o && null === a && (a = i);
              else {
                if (!o) return;
                null === a
                  ? n.push(
                      'M'
                        .concat(i + t, ',')
                        .concat(r + t, ' h1v1H')
                        .concat(i + t, 'z'),
                    )
                  : n.push(
                      'M'
                        .concat(a + t, ',')
                        .concat(r + t, ' h')
                        .concat(i + 1 - a, 'v1H')
                        .concat(a + t, 'z'),
                    );
              }
            });
          }),
          n.join('')
        );
      }
      function k(e, t) {
        return e.slice().map(function (e, n) {
          return n < t.y || n >= t.y + t.h
            ? e
            : e.map(function (e, n) {
                return (n < t.x || n >= t.x + t.w) && e;
              });
        });
      }
      function P(e, t) {
        var n = e.imageSettings,
          r = e.size,
          a = e.includeMargin;
        if (null == n) return null;
        var o = a ? O : 0,
          i = t.length + 2 * o,
          l = Math.floor(r * C),
          u = i / r,
          c = (n.width || l) * u,
          s = (n.height || l) * u,
          d = null == n.x ? t.length / 2 - c / 2 : n.x * u,
          f = null == n.y ? t.length / 2 - s / 2 : n.y * u,
          m = null;
        if (n.excavate) {
          var h = Math.floor(d),
            p = Math.floor(f),
            v = Math.ceil(c + d - h),
            g = Math.ceil(s + f - p);
          m = { x: h, y: p, w: v, h: g };
        }
        return { x: d, y: f, h: s, w: c, excavation: m };
      }
      var S = (function () {
          try {
            new Path2D().addPath(new Path2D());
          } catch (e) {
            return !1;
          }
          return !0;
        })(),
        L = (function (e) {
          function t() {
            var e, n;
            c(this, t);
            for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
              a[o] = arguments[o];
            return (
              (n = f(this, (e = m(t)).call.apply(e, [this].concat(a)))),
              g(h(n), '_canvas', void 0),
              g(h(n), '_image', void 0),
              g(h(n), 'state', { imgLoaded: !1 }),
              g(h(n), 'handleImageLoad', function () {
                n.setState({ imgLoaded: !0 });
              }),
              n
            );
          }
          return (
            p(t, e),
            d(t, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._image && this._image.complete && this.handleImageLoad(),
                    this.update();
                },
              },
              {
                key: 'componentWillReceiveProps',
                value: function (e) {
                  var t,
                    n,
                    r =
                      null === (t = this.props.imageSettings) || void 0 === t
                        ? void 0
                        : t.src,
                    a =
                      null === (n = e.imageSettings) || void 0 === n
                        ? void 0
                        : n.src;
                  r !== a && this.setState({ imgLoaded: !1 });
                },
              },
              {
                key: 'componentDidUpdate',
                value: function () {
                  this.update();
                },
              },
              {
                key: 'update',
                value: function () {
                  var e = this.props,
                    t = e.value,
                    n = e.size,
                    r = e.level,
                    a = e.bgColor,
                    o = e.fgColor,
                    i = e.includeMargin,
                    l = e.imageSettings,
                    u = new b(-1, E[r]);
                  if ((u.addData(w(t)), u.make(), null != this._canvas)) {
                    var c = this._canvas,
                      s = c.getContext('2d');
                    if (!s) return;
                    var d = u.modules;
                    if (null === d) return;
                    var f = i ? O : 0,
                      m = d.length + 2 * f,
                      h = P(this.props, d);
                    null != l &&
                      null != h &&
                      null != h.excavation &&
                      (d = k(d, h.excavation));
                    var p = window.devicePixelRatio || 1;
                    c.height = c.width = n * p;
                    var v = (n / m) * p;
                    s.scale(v, v),
                      (s.fillStyle = a),
                      s.fillRect(0, 0, m, m),
                      (s.fillStyle = o),
                      S
                        ? s.fill(new Path2D(A(d, f)))
                        : d.forEach(function (e, t) {
                            e.forEach(function (e, n) {
                              e && s.fillRect(n + f, t + f, 1, 1);
                            });
                          }),
                      this.state.imgLoaded &&
                        this._image &&
                        null != h &&
                        s.drawImage(this._image, h.x + f, h.y + f, h.w, h.h);
                  }
                },
              },
              {
                key: 'render',
                value: function () {
                  var e = this,
                    t = this.props,
                    n = (t.value, t.size),
                    r = (t.level, t.bgColor, t.fgColor, t.style),
                    o = (t.includeMargin, t.imageSettings),
                    u = l(t, [
                      'value',
                      'size',
                      'level',
                      'bgColor',
                      'fgColor',
                      'style',
                      'includeMargin',
                      'imageSettings',
                    ]),
                    c = i({ height: n, width: n }, r),
                    s = null,
                    d = o && o.src;
                  return (
                    null != o &&
                      null != d &&
                      (s = y.createElement('img', {
                        src: d,
                        style: { display: 'none' },
                        onLoad: this.handleImageLoad,
                        ref: function (t) {
                          return (e._image = t);
                        },
                      })),
                    y.createElement(
                      y.Fragment,
                      null,
                      y.createElement(
                        'canvas',
                        a(
                          {
                            style: c,
                            height: n,
                            width: n,
                            ref: function (t) {
                              return (e._canvas = t);
                            },
                          },
                          u,
                        ),
                      ),
                      s,
                    )
                  );
                },
              },
            ]),
            t
          );
        })(y.PureComponent);
      g(L, 'defaultProps', _);
      var j = (function (e) {
        function t() {
          return c(this, t), f(this, m(t).apply(this, arguments));
        }
        return (
          p(t, e),
          d(t, [
            {
              key: 'render',
              value: function () {
                var e = this.props,
                  t = e.value,
                  n = e.size,
                  r = e.level,
                  o = e.bgColor,
                  i = e.fgColor,
                  u = e.includeMargin,
                  c = e.imageSettings,
                  s = l(e, [
                    'value',
                    'size',
                    'level',
                    'bgColor',
                    'fgColor',
                    'includeMargin',
                    'imageSettings',
                  ]),
                  d = new b(-1, E[r]);
                d.addData(w(t)), d.make();
                var f = d.modules;
                if (null === f) return null;
                var m = u ? O : 0,
                  h = f.length + 2 * m,
                  p = P(this.props, f),
                  v = null;
                null != c &&
                  null != p &&
                  (null != p.excavation && (f = k(f, p.excavation)),
                  (v = y.createElement('image', {
                    xlinkHref: c.src,
                    height: p.h,
                    width: p.w,
                    x: p.x + m,
                    y: p.y + m,
                    preserveAspectRatio: 'none',
                  })));
                var g = A(f, m);
                return y.createElement(
                  'svg',
                  a(
                    {
                      shapeRendering: 'crispEdges',
                      height: n,
                      width: n,
                      viewBox: '0 0 '.concat(h, ' ').concat(h),
                    },
                    s,
                  ),
                  y.createElement('path', {
                    fill: o,
                    d: 'M0,0 h'.concat(h, 'v').concat(h, 'H0z'),
                  }),
                  y.createElement('path', { fill: i, d: g }),
                  v,
                );
              },
            },
          ]),
          t
        );
      })(y.PureComponent);
      g(j, 'defaultProps', _);
      var x = function (e) {
        var t = e.renderAs,
          n = l(e, ['renderAs']),
          r = 'svg' === t ? j : L;
        return y.createElement(r, n);
      };
      (x.defaultProps = i({ renderAs: 'canvas' }, _)), (e.exports = x);
    },
    FT64: function (e, t, n) {
      (function (t, n) {
        e.exports = n();
      })(0, function () {
        'use strict';
        var e,
          t = function (e, t, n, r, a) {
            (r = r || 0),
              (a = a || 0),
              (this.identifier = t),
              (this.target = e),
              (this.clientX = n.clientX + r),
              (this.clientY = n.clientY + a),
              (this.screenX = n.screenX + r),
              (this.screenY = n.screenY + a),
              (this.pageX = n.pageX + r),
              (this.pageY = n.pageY + a);
          };
        function n() {
          var e = [];
          return (
            (e.item = function (e) {
              return this[e] || null;
            }),
            (e.identifiedTouch = function (e) {
              return this[e + 1] || null;
            }),
            e
          );
        }
        function r() {
          for (
            var e = [window, document.documentElement],
              t = [
                'ontouchstart',
                'ontouchmove',
                'ontouchcancel',
                'ontouchend',
              ],
              n = 0;
            n < e.length;
            n++
          )
            for (var r = 0; r < t.length; r++)
              e[n] && void 0 === e[n][t[r]] && (e[n][t[r]] = null);
        }
        function a(t) {
          return function (n) {
            1 === n.which &&
              (('mousedown' === n.type || !e || (e && !e.dispatchEvent)) &&
                (e = n.target),
              o(t, n),
              'mouseup' === n.type && (e = null));
          };
        }
        function o(t, n) {
          var r = document.createEvent('Event');
          r.initEvent(t, !0, !0),
            (r.altKey = n.altKey),
            (r.ctrlKey = n.ctrlKey),
            (r.metaKey = n.metaKey),
            (r.shiftKey = n.shiftKey),
            (r.touches = l(n)),
            (r.targetTouches = l(n)),
            (r.changedTouches = i(n)),
            e.dispatchEvent(r);
        }
        function i(r) {
          var a = n();
          return a.push(new t(e, 1, r, 0, 0)), a;
        }
        function l(e) {
          return 'mouseup' === e.type ? n() : i(e);
        }
        function u(e) {
          r(),
            e.addEventListener('mousedown', a('touchstart'), !0),
            e.addEventListener('mousemove', a('touchmove'), !0),
            e.addEventListener('mouseup', a('touchend'), !0);
        }
        return (u.multiTouchOffset = 75), u;
      });
    },
    Gb9n: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r = window;
      (t.default = r.vw =
        function (e, t) {
          var n = e || 100,
            a = t || 750,
            o = r.document,
            i = navigator.userAgent,
            l = i.match(/Android[\S\s]+AppleWebkit\/(\d{3})/i),
            u = i.match(/U3\/((\d+|\.){5,})/i),
            c = u && parseInt(u[1].split('.').join(''), 10) >= 80,
            s = navigator.appVersion.match(/(iphone|ipad|ipod)/gi),
            d = r.devicePixelRatio || 1,
            f = o.documentElement,
            m = 1,
            h = 1 / d;
          if (s);
          else if ((l && l[1] > 534) || c) {
            f.style.fontSize = n + 'px';
            var p = o.createElement('div');
            p.setAttribute('style', 'width: 1rem;display:none'),
              f.appendChild(p);
            var v = r.getComputedStyle(p).width;
            if ((f.removeChild(p), v !== f.style.fontSize)) {
              var g = parseInt(v, 10);
              (m = n / g), (h *= m);
            }
          } else h = 1;
          var y = o.querySelector('meta[name="viewport"]');
          y ||
            ((y = o.createElement('meta')),
            y.setAttribute('name', 'viewport'),
            o.head.appendChild(y)),
            y.setAttribute(
              'content',
              'width=device-width,user-scalable=no,initial-scale=' +
                h +
                ',maximum-scale=' +
                h +
                ',minimum-scale=' +
                h +
                ',viewport-fit=cover',
            );
          var b = function () {
            f.style.fontSize = (n / a) * f.clientWidth * m + 'px';
          };
          b(), r.addEventListener('resize', b);
        }),
        (e.exports = t['default']);
    },
    H38U: function (e, t, n) {
      var r = n('f4xo'),
        a = n('rcnY'),
        o = n('wU8J'),
        i = n('Iq15'),
        l = n('dWSS');
      function u(e, t) {
        (this.typeNumber = e),
          (this.errorCorrectLevel = t),
          (this.modules = null),
          (this.moduleCount = 0),
          (this.dataCache = null),
          (this.dataList = []);
      }
      var c = u.prototype;
      (c.addData = function (e) {
        var t = new r(e);
        this.dataList.push(t), (this.dataCache = null);
      }),
        (c.isDark = function (e, t) {
          if (e < 0 || this.moduleCount <= e || t < 0 || this.moduleCount <= t)
            throw new Error(e + ',' + t);
          return this.modules[e][t];
        }),
        (c.getModuleCount = function () {
          return this.moduleCount;
        }),
        (c.make = function () {
          if (this.typeNumber < 1) {
            var e = 1;
            for (e = 1; e < 40; e++) {
              for (
                var t = a.getRSBlocks(e, this.errorCorrectLevel),
                  n = new o(),
                  r = 0,
                  l = 0;
                l < t.length;
                l++
              )
                r += t[l].dataCount;
              for (l = 0; l < this.dataList.length; l++) {
                var u = this.dataList[l];
                n.put(u.mode, 4),
                  n.put(u.getLength(), i.getLengthInBits(u.mode, e)),
                  u.write(n);
              }
              if (n.getLengthInBits() <= 8 * r) break;
            }
            this.typeNumber = e;
          }
          this.makeImpl(!1, this.getBestMaskPattern());
        }),
        (c.makeImpl = function (e, t) {
          (this.moduleCount = 4 * this.typeNumber + 17),
            (this.modules = new Array(this.moduleCount));
          for (var n = 0; n < this.moduleCount; n++) {
            this.modules[n] = new Array(this.moduleCount);
            for (var r = 0; r < this.moduleCount; r++)
              this.modules[n][r] = null;
          }
          this.setupPositionProbePattern(0, 0),
            this.setupPositionProbePattern(this.moduleCount - 7, 0),
            this.setupPositionProbePattern(0, this.moduleCount - 7),
            this.setupPositionAdjustPattern(),
            this.setupTimingPattern(),
            this.setupTypeInfo(e, t),
            this.typeNumber >= 7 && this.setupTypeNumber(e),
            null == this.dataCache &&
              (this.dataCache = u.createData(
                this.typeNumber,
                this.errorCorrectLevel,
                this.dataList,
              )),
            this.mapData(this.dataCache, t);
        }),
        (c.setupPositionProbePattern = function (e, t) {
          for (var n = -1; n <= 7; n++)
            if (!(e + n <= -1 || this.moduleCount <= e + n))
              for (var r = -1; r <= 7; r++)
                t + r <= -1 ||
                  this.moduleCount <= t + r ||
                  (this.modules[e + n][t + r] =
                    (0 <= n && n <= 6 && (0 == r || 6 == r)) ||
                    (0 <= r && r <= 6 && (0 == n || 6 == n)) ||
                    (2 <= n && n <= 4 && 2 <= r && r <= 4));
        }),
        (c.getBestMaskPattern = function () {
          for (var e = 0, t = 0, n = 0; n < 8; n++) {
            this.makeImpl(!0, n);
            var r = i.getLostPoint(this);
            (0 == n || e > r) && ((e = r), (t = n));
          }
          return t;
        }),
        (c.createMovieClip = function (e, t, n) {
          var r = e.createEmptyMovieClip(t, n),
            a = 1;
          this.make();
          for (var o = 0; o < this.modules.length; o++)
            for (var i = o * a, l = 0; l < this.modules[o].length; l++) {
              var u = l * a,
                c = this.modules[o][l];
              c &&
                (r.beginFill(0, 100),
                r.moveTo(u, i),
                r.lineTo(u + a, i),
                r.lineTo(u + a, i + a),
                r.lineTo(u, i + a),
                r.endFill());
            }
          return r;
        }),
        (c.setupTimingPattern = function () {
          for (var e = 8; e < this.moduleCount - 8; e++)
            null == this.modules[e][6] && (this.modules[e][6] = e % 2 == 0);
          for (var t = 8; t < this.moduleCount - 8; t++)
            null == this.modules[6][t] && (this.modules[6][t] = t % 2 == 0);
        }),
        (c.setupPositionAdjustPattern = function () {
          for (
            var e = i.getPatternPosition(this.typeNumber), t = 0;
            t < e.length;
            t++
          )
            for (var n = 0; n < e.length; n++) {
              var r = e[t],
                a = e[n];
              if (null == this.modules[r][a])
                for (var o = -2; o <= 2; o++)
                  for (var l = -2; l <= 2; l++)
                    this.modules[r + o][a + l] =
                      -2 == o ||
                      2 == o ||
                      -2 == l ||
                      2 == l ||
                      (0 == o && 0 == l);
            }
        }),
        (c.setupTypeNumber = function (e) {
          for (
            var t = i.getBCHTypeNumber(this.typeNumber), n = 0;
            n < 18;
            n++
          ) {
            var r = !e && 1 == ((t >> n) & 1);
            this.modules[Math.floor(n / 3)][
              (n % 3) + this.moduleCount - 8 - 3
            ] = r;
          }
          for (n = 0; n < 18; n++) {
            r = !e && 1 == ((t >> n) & 1);
            this.modules[(n % 3) + this.moduleCount - 8 - 3][
              Math.floor(n / 3)
            ] = r;
          }
        }),
        (c.setupTypeInfo = function (e, t) {
          for (
            var n = (this.errorCorrectLevel << 3) | t,
              r = i.getBCHTypeInfo(n),
              a = 0;
            a < 15;
            a++
          ) {
            var o = !e && 1 == ((r >> a) & 1);
            a < 6
              ? (this.modules[a][8] = o)
              : a < 8
              ? (this.modules[a + 1][8] = o)
              : (this.modules[this.moduleCount - 15 + a][8] = o);
          }
          for (a = 0; a < 15; a++) {
            o = !e && 1 == ((r >> a) & 1);
            a < 8
              ? (this.modules[8][this.moduleCount - a - 1] = o)
              : a < 9
              ? (this.modules[8][15 - a - 1 + 1] = o)
              : (this.modules[8][15 - a - 1] = o);
          }
          this.modules[this.moduleCount - 8][8] = !e;
        }),
        (c.mapData = function (e, t) {
          for (
            var n = -1,
              r = this.moduleCount - 1,
              a = 7,
              o = 0,
              l = this.moduleCount - 1;
            l > 0;
            l -= 2
          ) {
            6 == l && l--;
            while (1) {
              for (var u = 0; u < 2; u++)
                if (null == this.modules[r][l - u]) {
                  var c = !1;
                  o < e.length && (c = 1 == ((e[o] >>> a) & 1));
                  var s = i.getMask(t, r, l - u);
                  s && (c = !c),
                    (this.modules[r][l - u] = c),
                    a--,
                    -1 == a && (o++, (a = 7));
                }
              if (((r += n), r < 0 || this.moduleCount <= r)) {
                (r -= n), (n = -n);
                break;
              }
            }
          }
        }),
        (u.PAD0 = 236),
        (u.PAD1 = 17),
        (u.createData = function (e, t, n) {
          for (
            var r = a.getRSBlocks(e, t), l = new o(), c = 0;
            c < n.length;
            c++
          ) {
            var s = n[c];
            l.put(s.mode, 4),
              l.put(s.getLength(), i.getLengthInBits(s.mode, e)),
              s.write(l);
          }
          var d = 0;
          for (c = 0; c < r.length; c++) d += r[c].dataCount;
          if (l.getLengthInBits() > 8 * d)
            throw new Error(
              'code length overflow. (' +
                l.getLengthInBits() +
                '>' +
                8 * d +
                ')',
            );
          l.getLengthInBits() + 4 <= 8 * d && l.put(0, 4);
          while (l.getLengthInBits() % 8 != 0) l.putBit(!1);
          while (1) {
            if (l.getLengthInBits() >= 8 * d) break;
            if ((l.put(u.PAD0, 8), l.getLengthInBits() >= 8 * d)) break;
            l.put(u.PAD1, 8);
          }
          return u.createBytes(l, r);
        }),
        (u.createBytes = function (e, t) {
          for (
            var n = 0,
              r = 0,
              a = 0,
              o = new Array(t.length),
              u = new Array(t.length),
              c = 0;
            c < t.length;
            c++
          ) {
            var s = t[c].dataCount,
              d = t[c].totalCount - s;
            (r = Math.max(r, s)), (a = Math.max(a, d)), (o[c] = new Array(s));
            for (var f = 0; f < o[c].length; f++)
              o[c][f] = 255 & e.buffer[f + n];
            n += s;
            var m = i.getErrorCorrectPolynomial(d),
              h = new l(o[c], m.getLength() - 1),
              p = h.mod(m);
            u[c] = new Array(m.getLength() - 1);
            for (f = 0; f < u[c].length; f++) {
              var v = f + p.getLength() - u[c].length;
              u[c][f] = v >= 0 ? p.get(v) : 0;
            }
          }
          var g = 0;
          for (f = 0; f < t.length; f++) g += t[f].totalCount;
          var y = new Array(g),
            b = 0;
          for (f = 0; f < r; f++)
            for (c = 0; c < t.length; c++)
              f < o[c].length && (y[b++] = o[c][f]);
          for (f = 0; f < a; f++)
            for (c = 0; c < t.length; c++)
              f < u[c].length && (y[b++] = u[c][f]);
          return y;
        }),
        (e.exports = u);
    },
    I8lp: function (e, t, n) {},
    Iq15: function (e, t, n) {
      var r = n('nVVt'),
        a = n('dWSS'),
        o = n('dQei'),
        i = {
          PATTERN000: 0,
          PATTERN001: 1,
          PATTERN010: 2,
          PATTERN011: 3,
          PATTERN100: 4,
          PATTERN101: 5,
          PATTERN110: 6,
          PATTERN111: 7,
        },
        l = {
          PATTERN_POSITION_TABLE: [
            [],
            [6, 18],
            [6, 22],
            [6, 26],
            [6, 30],
            [6, 34],
            [6, 22, 38],
            [6, 24, 42],
            [6, 26, 46],
            [6, 28, 50],
            [6, 30, 54],
            [6, 32, 58],
            [6, 34, 62],
            [6, 26, 46, 66],
            [6, 26, 48, 70],
            [6, 26, 50, 74],
            [6, 30, 54, 78],
            [6, 30, 56, 82],
            [6, 30, 58, 86],
            [6, 34, 62, 90],
            [6, 28, 50, 72, 94],
            [6, 26, 50, 74, 98],
            [6, 30, 54, 78, 102],
            [6, 28, 54, 80, 106],
            [6, 32, 58, 84, 110],
            [6, 30, 58, 86, 114],
            [6, 34, 62, 90, 118],
            [6, 26, 50, 74, 98, 122],
            [6, 30, 54, 78, 102, 126],
            [6, 26, 52, 78, 104, 130],
            [6, 30, 56, 82, 108, 134],
            [6, 34, 60, 86, 112, 138],
            [6, 30, 58, 86, 114, 142],
            [6, 34, 62, 90, 118, 146],
            [6, 30, 54, 78, 102, 126, 150],
            [6, 24, 50, 76, 102, 128, 154],
            [6, 28, 54, 80, 106, 132, 158],
            [6, 32, 58, 84, 110, 136, 162],
            [6, 26, 54, 82, 110, 138, 166],
            [6, 30, 58, 86, 114, 142, 170],
          ],
          G15: 1335,
          G18: 7973,
          G15_MASK: 21522,
          getBCHTypeInfo: function (e) {
            var t = e << 10;
            while (l.getBCHDigit(t) - l.getBCHDigit(l.G15) >= 0)
              t ^= l.G15 << (l.getBCHDigit(t) - l.getBCHDigit(l.G15));
            return ((e << 10) | t) ^ l.G15_MASK;
          },
          getBCHTypeNumber: function (e) {
            var t = e << 12;
            while (l.getBCHDigit(t) - l.getBCHDigit(l.G18) >= 0)
              t ^= l.G18 << (l.getBCHDigit(t) - l.getBCHDigit(l.G18));
            return (e << 12) | t;
          },
          getBCHDigit: function (e) {
            var t = 0;
            while (0 != e) t++, (e >>>= 1);
            return t;
          },
          getPatternPosition: function (e) {
            return l.PATTERN_POSITION_TABLE[e - 1];
          },
          getMask: function (e, t, n) {
            switch (e) {
              case i.PATTERN000:
                return (t + n) % 2 == 0;
              case i.PATTERN001:
                return t % 2 == 0;
              case i.PATTERN010:
                return n % 3 == 0;
              case i.PATTERN011:
                return (t + n) % 3 == 0;
              case i.PATTERN100:
                return (Math.floor(t / 2) + Math.floor(n / 3)) % 2 == 0;
              case i.PATTERN101:
                return ((t * n) % 2) + ((t * n) % 3) == 0;
              case i.PATTERN110:
                return (((t * n) % 2) + ((t * n) % 3)) % 2 == 0;
              case i.PATTERN111:
                return (((t * n) % 3) + ((t + n) % 2)) % 2 == 0;
              default:
                throw new Error('bad maskPattern:' + e);
            }
          },
          getErrorCorrectPolynomial: function (e) {
            for (var t = new a([1], 0), n = 0; n < e; n++)
              t = t.multiply(new a([1, o.gexp(n)], 0));
            return t;
          },
          getLengthInBits: function (e, t) {
            if (1 <= t && t < 10)
              switch (e) {
                case r.MODE_NUMBER:
                  return 10;
                case r.MODE_ALPHA_NUM:
                  return 9;
                case r.MODE_8BIT_BYTE:
                  return 8;
                case r.MODE_KANJI:
                  return 8;
                default:
                  throw new Error('mode:' + e);
              }
            else if (t < 27)
              switch (e) {
                case r.MODE_NUMBER:
                  return 12;
                case r.MODE_ALPHA_NUM:
                  return 11;
                case r.MODE_8BIT_BYTE:
                  return 16;
                case r.MODE_KANJI:
                  return 10;
                default:
                  throw new Error('mode:' + e);
              }
            else {
              if (!(t < 41)) throw new Error('type:' + t);
              switch (e) {
                case r.MODE_NUMBER:
                  return 14;
                case r.MODE_ALPHA_NUM:
                  return 13;
                case r.MODE_8BIT_BYTE:
                  return 16;
                case r.MODE_KANJI:
                  return 12;
                default:
                  throw new Error('mode:' + e);
              }
            }
          },
          getLostPoint: function (e) {
            for (var t = e.getModuleCount(), n = 0, r = 0; r < t; r++)
              for (var a = 0; a < t; a++) {
                for (var o = 0, i = e.isDark(r, a), l = -1; l <= 1; l++)
                  if (!(r + l < 0 || t <= r + l))
                    for (var u = -1; u <= 1; u++)
                      a + u < 0 ||
                        t <= a + u ||
                        (0 == l && 0 == u) ||
                        (i == e.isDark(r + l, a + u) && o++);
                o > 5 && (n += 3 + o - 5);
              }
            for (r = 0; r < t - 1; r++)
              for (a = 0; a < t - 1; a++) {
                var c = 0;
                e.isDark(r, a) && c++,
                  e.isDark(r + 1, a) && c++,
                  e.isDark(r, a + 1) && c++,
                  e.isDark(r + 1, a + 1) && c++,
                  (0 != c && 4 != c) || (n += 3);
              }
            for (r = 0; r < t; r++)
              for (a = 0; a < t - 6; a++)
                e.isDark(r, a) &&
                  !e.isDark(r, a + 1) &&
                  e.isDark(r, a + 2) &&
                  e.isDark(r, a + 3) &&
                  e.isDark(r, a + 4) &&
                  !e.isDark(r, a + 5) &&
                  e.isDark(r, a + 6) &&
                  (n += 40);
            for (a = 0; a < t; a++)
              for (r = 0; r < t - 6; r++)
                e.isDark(r, a) &&
                  !e.isDark(r + 1, a) &&
                  e.isDark(r + 2, a) &&
                  e.isDark(r + 3, a) &&
                  e.isDark(r + 4, a) &&
                  !e.isDark(r + 5, a) &&
                  e.isDark(r + 6, a) &&
                  (n += 40);
            var s = 0;
            for (a = 0; a < t; a++)
              for (r = 0; r < t; r++) e.isDark(r, a) && s++;
            var d = Math.abs((100 * s) / t / t - 50) / 5;
            return (n += 10 * d), n;
          },
        };
      e.exports = l;
    },
    KAdo: function (e, t, n) {},
    KcUY: function (e, t, n) {
      'use strict';
      function r(e) {
        return (
          (r =
            'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    'function' === typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                }),
          r(e)
        );
      }
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var a = c(n('q1tI')),
        o = l(n('RGYn')),
        i = l(n('nLCz'));
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function u(e) {
        if ('function' !== typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (u = function (e) {
          return e ? n : t;
        })(e);
      }
      function c(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ('object' !== r(e) && 'function' !== typeof e))
          return { default: e };
        var n = u(t);
        if (n && n.has(e)) return n.get(e);
        var a = {},
          o = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var i in e)
          if ('default' !== i && Object.prototype.hasOwnProperty.call(e, i)) {
            var l = o ? Object.getOwnPropertyDescriptor(e, i) : null;
            l && (l.get || l.set)
              ? Object.defineProperty(a, i, l)
              : (a[i] = e[i]);
          }
        return (a.default = e), n && n.set(e, a), a;
      }
      function s(e, t) {
        return p(e) || h(e, t) || f(e, t) || d();
      }
      function d() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      }
      function f(e, t) {
        if (e) {
          if ('string' === typeof e) return m(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === n && e.constructor && (n = e.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(e)
              : 'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? m(e, t)
              : void 0
          );
        }
      }
      function m(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function h(e, t) {
        var n =
          null == e
            ? null
            : ('undefined' !== typeof Symbol && e[Symbol.iterator]) ||
              e['@@iterator'];
        if (null != n) {
          var r,
            a,
            o = [],
            i = !0,
            l = !1;
          try {
            for (n = n.call(e); !(i = (r = n.next()).done); i = !0)
              if ((o.push(r.value), t && o.length === t)) break;
          } catch (u) {
            (l = !0), (a = u);
          } finally {
            try {
              i || null == n['return'] || n['return']();
            } finally {
              if (l) throw a;
            }
          }
          return o;
        }
      }
      function p(e) {
        if (Array.isArray(e)) return e;
      }
      function v(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function g(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? v(Object(n), !0).forEach(function (t) {
                y(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : v(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t),
                );
              });
        }
        return e;
      }
      function y(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var b = function (e, t) {
          var n = function () {
              for (
                var e, n = arguments.length, r = new Array(n), a = 0;
                a < n;
                a++
              )
                r[a] = arguments[a];
              var o = r[1].replace(/([^^])\/$/, '$1');
              return g(
                g(
                  {},
                  (null ===
                    (e = r[0].find(function (e) {
                      var t = e.path;
                      return t === o;
                    })) || void 0 === e
                    ? void 0
                    : e.meta) || {},
                ),
                {},
                { __pathname: t },
              );
            },
            r = (0, a.useState)(n(e, t)),
            o = s(r, 2),
            i = o[0],
            l = o[1];
          return (
            (0, a.useLayoutEffect)(
              function () {
                l(n(e, t));
              },
              [t],
            ),
            i
          );
        },
        E = function (e, t) {
          var n = function () {
              for (
                var t, n = arguments.length, r = new Array(n), a = 0;
                a < n;
                a++
              )
                r[a] = arguments[a];
              return (
                (null ===
                  (t = r[0].find(function (e) {
                    return r[1].startsWith('/'.concat(e.name));
                  })) || void 0 === t
                  ? void 0
                  : t.name) || e[0].name
              );
            },
            r = (0, a.useState)(n(e, t)),
            o = s(r, 2),
            i = o[0],
            l = o[1];
          return (
            (0, a.useLayoutEffect)(
              function () {
                l(n(e, t));
              },
              [t],
            ),
            i
          );
        },
        w = function (e, t, n) {
          var r = function () {
              for (
                var e, t = arguments.length, n = new Array(t), r = 0;
                r < t;
                r++
              )
                n[r] = arguments[r];
              for (
                var a = n[0].navs[n[1]] || [], o = '*', i = a.length - 1;
                i >= 0;
                i -= 1
              ) {
                var l = a[i],
                  u = [l].concat(l.children).filter(Boolean),
                  c = u.find(function (e) {
                    return (
                      e.path &&
                      new RegExp(
                        '^'.concat(e.path.replace(/\.html$/, ''), '(/|.|$)'),
                      ).test(n[2])
                    );
                  });
                if (c) {
                  o = c.path;
                  break;
                }
              }
              return (
                (null === (e = n[0].menus[n[1]]) || void 0 === e
                  ? void 0
                  : e[o]) || []
              );
            },
            o = (0, a.useState)(r(e, t, n)),
            i = s(o, 2),
            l = i[0],
            u = i[1];
          return (
            (0, a.useLayoutEffect)(
              function () {
                u(r(e, t, n));
              },
              [e.navs, e.menus, t, n],
            ),
            l
          );
        },
        _ = function (e, t, n) {
          var r = function () {
              for (
                var t = arguments.length, r = new Array(t), a = 0;
                a < t;
                a++
              )
                r[a] = arguments[a];
              return r[0] === r[1][0].name
                ? r[2].path
                : ''.concat(n.path, '/').concat(e).replace(/\/\//, '/');
            },
            o = (0, a.useState)(r(e, t, n)),
            i = s(o, 2),
            l = i[0],
            u = i[1];
          return (
            (0, a.useLayoutEffect)(
              function () {
                u(r(e, t, n));
              },
              [e],
            ),
            l
          );
        },
        O = function e(t) {
          var n;
          return null ===
            (n = t.find(function (t) {
              return !!t.__dumiRoot || (!!t.routes && e(t.routes));
            })) || void 0 === n
            ? void 0
            : n.routes;
        },
        C = function (e) {
          var t = e.location,
            n = e.route,
            r = e.children,
            l = t.pathname.replace(n.path.replace(/^\/$/, '//'), ''),
            u = O(e.routes) || [],
            c = b(u, t.pathname),
            s = E(o.default.locales, l),
            d = w(o.default, s, t.pathname),
            f = _(s, o.default.locales, n);
          return a.default.createElement(
            i.default.Provider,
            {
              value: {
                config: o.default,
                meta: c.__pathname === t.pathname ? c : {},
                locale: s,
                nav: o.default.navs[s] || [],
                menu: d,
                base: f,
                routes: u,
              },
            },
            r,
          );
        },
        A = C;
      t.default = A;
    },
    OxFa: function (e, t, n) {},
    PpiC: function (e, t, n) {
      'use strict';
      function r(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = {},
          o = Object.keys(e);
        for (r = 0; r < o.length; r++)
          (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
        return a;
      }
      function a(e, t) {
        if (null == e) return {};
        var n,
          a,
          o = r(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (a = 0; a < i.length; a++)
            (n = i[a]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      n.d(t, 'a', function () {
        return a;
      });
    },
    Vp5q: function (e, t, n) {},
    aRTE: function (e, t) {
      e.exports = { L: 1, M: 0, Q: 3, H: 2 };
    },
    cW5v: function (e, t, n) {
      'use strict';
      n.r(t);
      var r = n('q1tI'),
        a = n.n(r),
        o = n('dEAq'),
        i = n('FT64'),
        l = n.n(i),
        u = n('hfkL'),
        c = n.n(u),
        s = n('zKLG'),
        d = n.n(s),
        f = n('Gb9n'),
        m = n.n(f),
        h = n('tDJ2'),
        p = n.n(h);
      function v(e) {
        return E(e) || b(e) || y(e) || g();
      }
      function g() {
        throw new TypeError(
          'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      }
      function y(e, t) {
        if (e) {
          if ('string' === typeof e) return w(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          return (
            'Object' === n && e.constructor && (n = e.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(e)
              : 'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? w(e, t)
              : void 0
          );
        }
      }
      function b(e) {
        if (
          ('undefined' !== typeof Symbol && null != e[Symbol.iterator]) ||
          null != e['@@iterator']
        )
          return Array.from(e);
      }
      function E(e) {
        if (Array.isArray(e)) return w(e);
      }
      function w(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var _ = { vl: c.a, flex: d.a, vw: m.a, vh: p.a },
        O = function (e) {
          var t = e.children,
            n = Object(r['useContext'])(o['context']),
            i = n.config,
            u = Object(r['useRef'])(null),
            c = i.theme,
            s = c.hd;
          s = void 0 === s ? {} : s;
          var d = s.rules,
            f = void 0 === d ? [{ mode: 'vw', options: [100, 750] }] : d;
          return (
            Object(r['useEffect'])(function () {
              u.current && l()(u.current);
            }, []),
            Object(r['useEffect'])(
              function () {
                var e = function () {
                  var e = document.documentElement.clientWidth;
                  f.filter(function (e) {
                    return _[e.mode];
                  }).some(function (t) {
                    if (
                      (Number.isNaN(1 * t.minWidth) &&
                        Number.isNaN(1 * t.maxWidth)) ||
                      (Number.isNaN(1 * t.maxWidth) && e > t.minWidth) ||
                      (Number.isNaN(1 * t.minWidth) && e < t.maxWidth) ||
                      (e > t.minWidth && e < t.maxWidth)
                    )
                      return (
                        _[t.mode].apply(_, v([].concat(t.options))),
                        document.documentElement.setAttribute(
                          'data-scale',
                          'true',
                        ),
                        !0
                      );
                  });
                };
                return (
                  e(),
                  window.addEventListener('resize', e),
                  function () {
                    return window.removeEventListener('resize', e);
                  }
                );
              },
              [f],
            ),
            a.a.createElement(
              'div',
              { className: '__dumi-default-mobile-demo-layout', ref: u },
              t,
            )
          );
        };
      t['default'] = O;
    },
    dQei: function (e, t) {
      for (
        var n = {
            glog: function (e) {
              if (e < 1) throw new Error('glog(' + e + ')');
              return n.LOG_TABLE[e];
            },
            gexp: function (e) {
              while (e < 0) e += 255;
              while (e >= 256) e -= 255;
              return n.EXP_TABLE[e];
            },
            EXP_TABLE: new Array(256),
            LOG_TABLE: new Array(256),
          },
          r = 0;
        r < 8;
        r++
      )
        n.EXP_TABLE[r] = 1 << r;
      for (r = 8; r < 256; r++)
        n.EXP_TABLE[r] =
          n.EXP_TABLE[r - 4] ^
          n.EXP_TABLE[r - 5] ^
          n.EXP_TABLE[r - 6] ^
          n.EXP_TABLE[r - 8];
      for (r = 0; r < 255; r++) n.LOG_TABLE[n.EXP_TABLE[r]] = r;
      e.exports = n;
    },
    dWSS: function (e, t, n) {
      var r = n('dQei');
      function a(e, t) {
        if (void 0 == e.length) throw new Error(e.length + '/' + t);
        var n = 0;
        while (n < e.length && 0 == e[n]) n++;
        this.num = new Array(e.length - n + t);
        for (var r = 0; r < e.length - n; r++) this.num[r] = e[r + n];
      }
      (a.prototype = {
        get: function (e) {
          return this.num[e];
        },
        getLength: function () {
          return this.num.length;
        },
        multiply: function (e) {
          for (
            var t = new Array(this.getLength() + e.getLength() - 1), n = 0;
            n < this.getLength();
            n++
          )
            for (var o = 0; o < e.getLength(); o++)
              t[n + o] ^= r.gexp(r.glog(this.get(n)) + r.glog(e.get(o)));
          return new a(t, 0);
        },
        mod: function (e) {
          if (this.getLength() - e.getLength() < 0) return this;
          for (
            var t = r.glog(this.get(0)) - r.glog(e.get(0)),
              n = new Array(this.getLength()),
              o = 0;
            o < this.getLength();
            o++
          )
            n[o] = this.get(o);
          for (o = 0; o < e.getLength(); o++)
            n[o] ^= r.gexp(r.glog(e.get(o)) + t);
          return new a(n, 0).mod(e);
        },
      }),
        (e.exports = a);
    },
    f4xo: function (e, t, n) {
      var r = n('nVVt');
      function a(e) {
        (this.mode = r.MODE_8BIT_BYTE), (this.data = e);
      }
      (a.prototype = {
        getLength: function (e) {
          return this.data.length;
        },
        write: function (e) {
          for (var t = 0; t < this.data.length; t++)
            e.put(this.data.charCodeAt(t), 8);
        },
      }),
        (e.exports = a);
    },
    hQjr: function (e, t, n) {},
    hfkL: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r = window;
      (t.default = r.vl =
        function (e, t) {
          var n = e || 100,
            a = t || 750,
            o = r.document,
            i = navigator.userAgent,
            l = i.match(/Android[\S\s]+AppleWebkit\/(\d{3})/i),
            u = i.match(/U3\/((\d+|\.){5,})/i),
            c = u && parseInt(u[1].split('.').join(''), 10) >= 80,
            s = o.documentElement,
            d = 1;
          if ((l && l[1] > 534) || c) {
            s.style.fontSize = n + 'px';
            var f = o.createElement('div');
            f.setAttribute('style', 'width: 1rem;display:none'),
              s.appendChild(f);
            var m = r.getComputedStyle(f).width;
            if ((s.removeChild(f), m !== s.style.fontSize)) {
              var h = parseInt(m, 10);
              d = n / h;
            }
          }
          var p = o.querySelector('meta[name="viewport"]');
          p ||
            ((p = o.createElement('meta')),
            p.setAttribute('name', 'viewport'),
            o.head.appendChild(p)),
            p.setAttribute(
              'content',
              'width=device-width,user-scalable=no,initial-scale=1,maximum-scale=1,minimum-scale=1',
            );
          var v = function () {
            s.style.fontSize = (n / a) * s.clientWidth * d + 'px';
          };
          v(), r.addEventListener('resize', v);
        }),
        (e.exports = t['default']);
    },
    jp8u: function (e, t, n) {},
    mAF5: function (e, t, n) {},
    nVVt: function (e, t) {
      e.exports = {
        MODE_NUMBER: 1,
        MODE_ALPHA_NUM: 2,
        MODE_8BIT_BYTE: 4,
        MODE_KANJI: 8,
      };
    },
    rcnY: function (e, t, n) {
      var r = n('aRTE');
      function a(e, t) {
        (this.totalCount = e), (this.dataCount = t);
      }
      (a.RS_BLOCK_TABLE = [
        [1, 26, 19],
        [1, 26, 16],
        [1, 26, 13],
        [1, 26, 9],
        [1, 44, 34],
        [1, 44, 28],
        [1, 44, 22],
        [1, 44, 16],
        [1, 70, 55],
        [1, 70, 44],
        [2, 35, 17],
        [2, 35, 13],
        [1, 100, 80],
        [2, 50, 32],
        [2, 50, 24],
        [4, 25, 9],
        [1, 134, 108],
        [2, 67, 43],
        [2, 33, 15, 2, 34, 16],
        [2, 33, 11, 2, 34, 12],
        [2, 86, 68],
        [4, 43, 27],
        [4, 43, 19],
        [4, 43, 15],
        [2, 98, 78],
        [4, 49, 31],
        [2, 32, 14, 4, 33, 15],
        [4, 39, 13, 1, 40, 14],
        [2, 121, 97],
        [2, 60, 38, 2, 61, 39],
        [4, 40, 18, 2, 41, 19],
        [4, 40, 14, 2, 41, 15],
        [2, 146, 116],
        [3, 58, 36, 2, 59, 37],
        [4, 36, 16, 4, 37, 17],
        [4, 36, 12, 4, 37, 13],
        [2, 86, 68, 2, 87, 69],
        [4, 69, 43, 1, 70, 44],
        [6, 43, 19, 2, 44, 20],
        [6, 43, 15, 2, 44, 16],
        [4, 101, 81],
        [1, 80, 50, 4, 81, 51],
        [4, 50, 22, 4, 51, 23],
        [3, 36, 12, 8, 37, 13],
        [2, 116, 92, 2, 117, 93],
        [6, 58, 36, 2, 59, 37],
        [4, 46, 20, 6, 47, 21],
        [7, 42, 14, 4, 43, 15],
        [4, 133, 107],
        [8, 59, 37, 1, 60, 38],
        [8, 44, 20, 4, 45, 21],
        [12, 33, 11, 4, 34, 12],
        [3, 145, 115, 1, 146, 116],
        [4, 64, 40, 5, 65, 41],
        [11, 36, 16, 5, 37, 17],
        [11, 36, 12, 5, 37, 13],
        [5, 109, 87, 1, 110, 88],
        [5, 65, 41, 5, 66, 42],
        [5, 54, 24, 7, 55, 25],
        [11, 36, 12],
        [5, 122, 98, 1, 123, 99],
        [7, 73, 45, 3, 74, 46],
        [15, 43, 19, 2, 44, 20],
        [3, 45, 15, 13, 46, 16],
        [1, 135, 107, 5, 136, 108],
        [10, 74, 46, 1, 75, 47],
        [1, 50, 22, 15, 51, 23],
        [2, 42, 14, 17, 43, 15],
        [5, 150, 120, 1, 151, 121],
        [9, 69, 43, 4, 70, 44],
        [17, 50, 22, 1, 51, 23],
        [2, 42, 14, 19, 43, 15],
        [3, 141, 113, 4, 142, 114],
        [3, 70, 44, 11, 71, 45],
        [17, 47, 21, 4, 48, 22],
        [9, 39, 13, 16, 40, 14],
        [3, 135, 107, 5, 136, 108],
        [3, 67, 41, 13, 68, 42],
        [15, 54, 24, 5, 55, 25],
        [15, 43, 15, 10, 44, 16],
        [4, 144, 116, 4, 145, 117],
        [17, 68, 42],
        [17, 50, 22, 6, 51, 23],
        [19, 46, 16, 6, 47, 17],
        [2, 139, 111, 7, 140, 112],
        [17, 74, 46],
        [7, 54, 24, 16, 55, 25],
        [34, 37, 13],
        [4, 151, 121, 5, 152, 122],
        [4, 75, 47, 14, 76, 48],
        [11, 54, 24, 14, 55, 25],
        [16, 45, 15, 14, 46, 16],
        [6, 147, 117, 4, 148, 118],
        [6, 73, 45, 14, 74, 46],
        [11, 54, 24, 16, 55, 25],
        [30, 46, 16, 2, 47, 17],
        [8, 132, 106, 4, 133, 107],
        [8, 75, 47, 13, 76, 48],
        [7, 54, 24, 22, 55, 25],
        [22, 45, 15, 13, 46, 16],
        [10, 142, 114, 2, 143, 115],
        [19, 74, 46, 4, 75, 47],
        [28, 50, 22, 6, 51, 23],
        [33, 46, 16, 4, 47, 17],
        [8, 152, 122, 4, 153, 123],
        [22, 73, 45, 3, 74, 46],
        [8, 53, 23, 26, 54, 24],
        [12, 45, 15, 28, 46, 16],
        [3, 147, 117, 10, 148, 118],
        [3, 73, 45, 23, 74, 46],
        [4, 54, 24, 31, 55, 25],
        [11, 45, 15, 31, 46, 16],
        [7, 146, 116, 7, 147, 117],
        [21, 73, 45, 7, 74, 46],
        [1, 53, 23, 37, 54, 24],
        [19, 45, 15, 26, 46, 16],
        [5, 145, 115, 10, 146, 116],
        [19, 75, 47, 10, 76, 48],
        [15, 54, 24, 25, 55, 25],
        [23, 45, 15, 25, 46, 16],
        [13, 145, 115, 3, 146, 116],
        [2, 74, 46, 29, 75, 47],
        [42, 54, 24, 1, 55, 25],
        [23, 45, 15, 28, 46, 16],
        [17, 145, 115],
        [10, 74, 46, 23, 75, 47],
        [10, 54, 24, 35, 55, 25],
        [19, 45, 15, 35, 46, 16],
        [17, 145, 115, 1, 146, 116],
        [14, 74, 46, 21, 75, 47],
        [29, 54, 24, 19, 55, 25],
        [11, 45, 15, 46, 46, 16],
        [13, 145, 115, 6, 146, 116],
        [14, 74, 46, 23, 75, 47],
        [44, 54, 24, 7, 55, 25],
        [59, 46, 16, 1, 47, 17],
        [12, 151, 121, 7, 152, 122],
        [12, 75, 47, 26, 76, 48],
        [39, 54, 24, 14, 55, 25],
        [22, 45, 15, 41, 46, 16],
        [6, 151, 121, 14, 152, 122],
        [6, 75, 47, 34, 76, 48],
        [46, 54, 24, 10, 55, 25],
        [2, 45, 15, 64, 46, 16],
        [17, 152, 122, 4, 153, 123],
        [29, 74, 46, 14, 75, 47],
        [49, 54, 24, 10, 55, 25],
        [24, 45, 15, 46, 46, 16],
        [4, 152, 122, 18, 153, 123],
        [13, 74, 46, 32, 75, 47],
        [48, 54, 24, 14, 55, 25],
        [42, 45, 15, 32, 46, 16],
        [20, 147, 117, 4, 148, 118],
        [40, 75, 47, 7, 76, 48],
        [43, 54, 24, 22, 55, 25],
        [10, 45, 15, 67, 46, 16],
        [19, 148, 118, 6, 149, 119],
        [18, 75, 47, 31, 76, 48],
        [34, 54, 24, 34, 55, 25],
        [20, 45, 15, 61, 46, 16],
      ]),
        (a.getRSBlocks = function (e, t) {
          var n = a.getRsBlockTable(e, t);
          if (void 0 == n)
            throw new Error(
              'bad rs block @ typeNumber:' + e + '/errorCorrectLevel:' + t,
            );
          for (var r = n.length / 3, o = new Array(), i = 0; i < r; i++)
            for (
              var l = n[3 * i + 0], u = n[3 * i + 1], c = n[3 * i + 2], s = 0;
              s < l;
              s++
            )
              o.push(new a(u, c));
          return o;
        }),
        (a.getRsBlockTable = function (e, t) {
          switch (t) {
            case r.L:
              return a.RS_BLOCK_TABLE[4 * (e - 1) + 0];
            case r.M:
              return a.RS_BLOCK_TABLE[4 * (e - 1) + 1];
            case r.Q:
              return a.RS_BLOCK_TABLE[4 * (e - 1) + 2];
            case r.H:
              return a.RS_BLOCK_TABLE[4 * (e - 1) + 3];
            default:
              return;
          }
        }),
        (e.exports = a);
    },
    tDJ2: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r = window;
      (t.default = r.vh =
        function (e, t) {
          var n = e || 100,
            a = t || 1270,
            o = r.document,
            i = navigator.userAgent,
            l = i.match(/Android[\S\s]+AppleWebkit\/(\d{3})/i),
            u = i.match(/U3\/((\d+|\.){5,})/i),
            c = u && parseInt(u[1].split('.').join(''), 10) >= 80,
            s = navigator.appVersion.match(/(iphone|ipad|ipod)/gi),
            d = r.devicePixelRatio || 1,
            f = o.documentElement,
            m = 1,
            h = 1 / d;
          if (s);
          else if ((l && l[1] > 534) || c) {
            f.style.fontSize = n + 'px';
            var p = o.createElement('div');
            p.setAttribute('style', 'width: 1rem;display:none'),
              f.appendChild(p);
            var v = r.getComputedStyle(p).width;
            if ((f.removeChild(p), v !== f.style.fontSize)) {
              var g = parseInt(v, 10);
              (m = n / g), (h *= m);
            }
          } else h = 1;
          var y = o.querySelector('meta[name="viewport"]');
          y ||
            ((y = o.createElement('meta')),
            y.setAttribute('name', 'viewport'),
            o.head.appendChild(y)),
            y.setAttribute(
              'content',
              'width=device-width,user-scalable=no,initial-scale=' +
                h +
                ',maximum-scale=' +
                h +
                ',minimum-scale=' +
                h +
                ',viewport-fit=cover',
            );
          var b = function () {
            f.style.fontSize = (n / a) * f.clientHeight * m + 'px';
          };
          b(), r.addEventListener('resize', b);
        }),
        (e.exports = t['default']);
    },
    wU8J: function (e, t) {
      function n() {
        (this.buffer = new Array()), (this.length = 0);
      }
      (n.prototype = {
        get: function (e) {
          var t = Math.floor(e / 8);
          return 1 == ((this.buffer[t] >>> (7 - (e % 8))) & 1);
        },
        put: function (e, t) {
          for (var n = 0; n < t; n++)
            this.putBit(1 == ((e >>> (t - n - 1)) & 1));
        },
        getLengthInBits: function () {
          return this.length;
        },
        putBit: function (e) {
          var t = Math.floor(this.length / 8);
          this.buffer.length <= t && this.buffer.push(0),
            e && (this.buffer[t] |= 128 >>> this.length % 8),
            this.length++;
        },
      }),
        (e.exports = n);
    },
    zKLG: function (e, t, n) {
      'use strict';
      Object.defineProperty(t, '__esModule', { value: !0 });
      var r = window;
      (t.default = r.flex =
        function (e, t) {
          var n = e || 100,
            a = t || 1,
            o = r.document,
            i = navigator.userAgent,
            l = i.match(/Android[\S\s]+AppleWebkit\/(\d{3})/i),
            u = i.match(/U3\/((\d+|\.){5,})/i),
            c = u && parseInt(u[1].split('.').join(''), 10) >= 80,
            s = navigator.appVersion.match(/(iphone|ipad|ipod)/gi),
            d = r.devicePixelRatio || 1;
          s || (l && l[1] > 534) || c || (d = 1);
          var f = 1 / d,
            m = o.querySelector('meta[name="viewport"]');
          m ||
            ((m = o.createElement('meta')),
            m.setAttribute('name', 'viewport'),
            o.head.appendChild(m)),
            m.setAttribute(
              'content',
              'width=device-width,user-scalable=no,initial-scale=' +
                f +
                ',maximum-scale=' +
                f +
                ',minimum-scale=' +
                f +
                ',viewport-fit=cover',
            ),
            (o.documentElement.style.fontSize = (n / 2) * d * a + 'px');
        }),
        (e.exports = t['default']);
    },
  },
]);
