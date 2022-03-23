/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/* eslint-disable global-require */

// The top-level (parent) route
const routes = {
  path: '/',

  // Keep in mind, routes are evaluated in order
  children: [
    {
      path: '/',
      load: () => import(/* webpackChunkName: 'frontpage' */ './frontpage'),
    },
    {
      path: '/4e94afa38918c6f2dcc12fd8a04d3972',
      load: () => import(/* webpackChunkName: 'prof' */ './questionnaire'),
    },
    {
      path: '/embed',
      children: [
        {
          path: '/vprasalnik',
          children: [
            {
              path: '',
              load: () =>
                import(
                  /* webpackChunkName: 'embed-prof' */ './embed/questionnaire'
                ),
            },
            {
              path: '/:results',
              load: () =>
                import(
                  /* webpackChunkName: 'embed-prof' */ './embed/questionnaire/results'
                ),
            },
          ],
        },
      ],
    },
    {
      path: '/svar',
      load: () => import(/* webpackChunkName: 'questionnaire' */ './questionnaire'),
    },
    {
      path: '/vprasalnik',
      children: [
        {
          path: '',
          load: () =>
            import(
              /* webpackChunkName: 'questionnaire-results' */ './questionnaire-results'
            ),
        },
        {
          path: '/:nidurstodur',
          load: () =>
            import(
              /* webpackChunkName: 'questionnaire-results' */ './questionnaire-results/results'
            ),
        },
      ],
    },
    {
      path: '/prejsnje-volitve',
      load: () =>
        import(
          /* webpackChunkName: 'previous-elections' */ './previous-elections'
        ),
    },
    {
      path: '/malefni',
      load: () => import(/* webpackChunkName: 'malefni' */ './malefni'),
    },
    {
      path: '/o-nas',
      load: () => import(/* webpackChunkName: 'about' */ './about'),
    },
    {
      path: '/kjorskra',
      load: () => import(/* webpackChunkName: 'kjorskra' */ './kjorskra'),
    },
    {
      path: '/kjorskra/:nidurstada',
      load: () => import(/* webpackChunkName: 'kjorskra' */ './kjorskra'),
    },
    {
      path: '/malefni/:malefni',
      load: () =>
        import(/* webpackChunkName: 'malefnisingle' */ './malefnisingle'),
    },
    {
      path: '/flokkar/bera-saman',
      children: [
        {
          path: '',
          load: () =>
            import(
              /* webpackChunkName: 'compare-parties' */ './compare-parties'
            ),
        },
        {
          path: '/:letters',
          load: () =>
            import(
              /* webpackChunkName: 'compare-parties' */ './compare-parties'
            ),
        },
      ],
    },
    {
      path: '/flokkur/:party',
      load: () => import(/* webpackChunkName: 'partysingle' */ './partysingle'),
    },
    // Wildcard routes, e.g. { path: '*', ... } (must go last)
    {
      path: '*',
      load: () => import(/* webpackChunkName: 'not-found' */ './not-found'),
    },
  ],

  async action({ next }) {
    // Execute each child route until one of them return the result
    const route = await next();

    // Provide default values for title, description etc.
    route.title = route.title || 'Voli prav';
    route.description = route.description || '';

    return route;
  },
};

// The error page is available by permanent url for development mode
if (__DEV__) {
  routes.children.unshift({
    path: '/error',
    action: require('./error').default,
  });
}

export default routes;
