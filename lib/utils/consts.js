import React from 'react';
import palettes from '../../node_modules/keen-dataviz/lib/palettes';
import BoldIcon from '../assets/icons/bold-solid.svg';
import ItalicIcon from '../assets/icons/italic-solid.svg';
import AlignLeftIcon from '../assets/icons/align-left-solid.svg';
import AlignRightIcon from '../assets/icons/align-right-solid.svg';
import AlignCenterIcon from '../assets/icons/align-center-solid.svg';
import AlignBottomIcon from '../assets/icons/vertical-align-bottom.svg';
import AlignMiddleIcon from '../assets/icons/vertical-align-middle.svg';
import AlignTopIcon from '../assets/icons/vertical-align-top.svg';

export const GOOGLE_FONTS_API_KEY = 'AIzaSyC529qus-Wu8LEftuMjSSBOt7mKu5lMm2E'; // please provide your API key
export const GOOGLE_FONTS_URL =
  'https://www.googleapis.com/webfonts/v1/webfonts';

export const results = {
  metric: {
    query: {
      analysis_type: 'count',
      event_collection: 'purchases',
      filters: [],
      group_by: null,
      interval: null,
      timeframe: { start: '2014-01-01', end: '2015-01-01' },
      timezone: 3600
    },
    result: 255
  },
  bar: {
    query: {
      analysis_type: 'count',
      event_collection: 'mobile_purchases',
      timeframe: {
        start: '2019-03-20T00:00:00.000-00:00',
        end: '2019-03-26T00:00:00.000-00:00'
      },
      group_by: ['product.name'],
      interval: 'daily',
      timezone: 7200
    },
    result: [
      {
        value: [
          { 'product.name': 'apps', result: 53 },
          { 'product.name': 'books', result: 47 },
          { 'product.name': 'games', result: 24 },
          { 'product.name': 'sounds', result: 76 }
        ],
        timeframe: {
          start: '2019-03-20T00:00:00.000Z',
          end: '2019-03-21T00:00:00.000Z'
        }
      },
      {
        value: [
          { 'product.name': 'apps', result: 32 },
          { 'product.name': 'books', result: 24 },
          { 'product.name': 'games', result: 56 },
          { 'product.name': 'sounds', result: 32 }
        ],
        timeframe: {
          start: '2019-03-21T00:00:00.000Z',
          end: '2019-03-22T00:00:00.000Z'
        }
      },
      {
        value: [
          { 'product.name': 'apps', result: 27 },
          { 'product.name': 'books', result: 32 },
          { 'product.name': 'games', result: 18 },
          { 'product.name': 'sounds', result: 33 }
        ],
        timeframe: {
          start: '2019-03-22T00:00:00.000Z',
          end: '2019-03-23T00:00:00.000Z'
        }
      },
      {
        value: [
          { 'product.name': 'apps', result: 68 },
          { 'product.name': 'books', result: 56 },
          { 'product.name': 'games', result: 65 },
          { 'product.name': 'sounds', result: 59 }
        ],
        timeframe: {
          start: '2019-03-23T00:00:00.000Z',
          end: '2019-03-24T00:00:00.000Z'
        }
      },
      {
        value: [
          { 'product.name': 'apps', result: 38 },
          { 'product.name': 'books', result: 48 },
          { 'product.name': 'games', result: 50 },
          { 'product.name': 'sounds', result: 26 }
        ],
        timeframe: {
          start: '2019-03-24T00:00:00.000Z',
          end: '2019-03-25T00:00:00.000Z'
        }
      },
      {
        value: [
          { 'product.name': 'apps', result: 34 },
          { 'product.name': 'books', result: 15 },
          { 'product.name': 'games', result: 18 },
          { 'product.name': 'sounds', result: 14 }
        ],
        timeframe: {
          start: '2019-03-25T00:00:00.000Z',
          end: '2019-03-26T00:00:00.000Z'
        }
      }
    ]
  },
  line: {
    query: {
      analysis_type: 'count',
      event_collection: 'mobile_purchases',
      timeframe: {
        start: '2019-03-20T00:00:00.000-00:00',
        end: '2019-03-26T00:00:00.000-00:00'
      },
      group_by: ['product.name'],
      interval: 'daily',
      timezone: 7200
    },
    result: [
      {
        value: [
          { 'product.name': 'apps', result: 53 },
          { 'product.name': 'books', result: 47 },
          { 'product.name': 'games', result: 24 },
          { 'product.name': 'sounds', result: 76 }
        ],
        timeframe: {
          start: '2019-03-20T00:00:00.000Z',
          end: '2019-03-21T00:00:00.000Z'
        }
      },
      {
        value: [
          { 'product.name': 'apps', result: 32 },
          { 'product.name': 'books', result: 24 },
          { 'product.name': 'games', result: 56 },
          { 'product.name': 'sounds', result: 32 }
        ],
        timeframe: {
          start: '2019-03-21T00:00:00.000Z',
          end: '2019-03-22T00:00:00.000Z'
        }
      },
      {
        value: [
          { 'product.name': 'apps', result: 27 },
          { 'product.name': 'books', result: 32 },
          { 'product.name': 'games', result: 18 },
          { 'product.name': 'sounds', result: 33 }
        ],
        timeframe: {
          start: '2019-03-22T00:00:00.000Z',
          end: '2019-03-23T00:00:00.000Z'
        }
      },
      {
        value: [
          { 'product.name': 'apps', result: 68 },
          { 'product.name': 'books', result: 56 },
          { 'product.name': 'games', result: 65 },
          { 'product.name': 'sounds', result: 59 }
        ],
        timeframe: {
          start: '2019-03-23T00:00:00.000Z',
          end: '2019-03-24T00:00:00.000Z'
        }
      },
      {
        value: [
          { 'product.name': 'apps', result: 38 },
          { 'product.name': 'books', result: 48 },
          { 'product.name': 'games', result: 50 },
          { 'product.name': 'sounds', result: 26 }
        ],
        timeframe: {
          start: '2019-03-24T00:00:00.000Z',
          end: '2019-03-25T00:00:00.000Z'
        }
      },
      {
        value: [
          { 'product.name': 'apps', result: 34 },
          { 'product.name': 'books', result: 15 },
          { 'product.name': 'games', result: 18 },
          { 'product.name': 'sounds', result: 14 }
        ],
        timeframe: {
          start: '2019-03-25T00:00:00.000Z',
          end: '2019-03-26T00:00:00.000Z'
        }
      }
    ]
  },
  spline: {
    query: {
      analysis_type: 'count',
      event_collection: 'mobile_purchases',
      timeframe: {
        start: '2019-03-20T00:00:00.000-00:00',
        end: '2019-03-26T00:00:00.000-00:00'
      },
      group_by: ['product.name'],
      interval: 'daily',
      timezone: 7200
    },
    result: [
      {
        value: [
          { 'product.name': 'apps', result: 53 },
          { 'product.name': 'books', result: 47 },
          { 'product.name': 'games', result: 24 },
          { 'product.name': 'sounds', result: 76 }
        ],
        timeframe: {
          start: '2019-03-20T00:00:00.000Z',
          end: '2019-03-21T00:00:00.000Z'
        }
      },
      {
        value: [
          { 'product.name': 'apps', result: 32 },
          { 'product.name': 'books', result: 24 },
          { 'product.name': 'games', result: 56 },
          { 'product.name': 'sounds', result: 32 }
        ],
        timeframe: {
          start: '2019-03-21T00:00:00.000Z',
          end: '2019-03-22T00:00:00.000Z'
        }
      },
      {
        value: [
          { 'product.name': 'apps', result: 27 },
          { 'product.name': 'books', result: 32 },
          { 'product.name': 'games', result: 18 },
          { 'product.name': 'sounds', result: 33 }
        ],
        timeframe: {
          start: '2019-03-22T00:00:00.000Z',
          end: '2019-03-23T00:00:00.000Z'
        }
      },
      {
        value: [
          { 'product.name': 'apps', result: 68 },
          { 'product.name': 'books', result: 56 },
          { 'product.name': 'games', result: 65 },
          { 'product.name': 'sounds', result: 59 }
        ],
        timeframe: {
          start: '2019-03-23T00:00:00.000Z',
          end: '2019-03-24T00:00:00.000Z'
        }
      },
      {
        value: [
          { 'product.name': 'apps', result: 38 },
          { 'product.name': 'books', result: 48 },
          { 'product.name': 'games', result: 50 },
          { 'product.name': 'sounds', result: 26 }
        ],
        timeframe: {
          start: '2019-03-24T00:00:00.000Z',
          end: '2019-03-25T00:00:00.000Z'
        }
      },
      {
        value: [
          { 'product.name': 'apps', result: 34 },
          { 'product.name': 'books', result: 15 },
          { 'product.name': 'games', result: 18 },
          { 'product.name': 'sounds', result: 14 }
        ],
        timeframe: {
          start: '2019-03-25T00:00:00.000Z',
          end: '2019-03-26T00:00:00.000Z'
        }
      }
    ]
  },
  step: {
    query: {
      analysis_type: 'count',
      event_collection: 'mobile_purchases',
      timeframe: {
        start: '2019-03-20T00:00:00.000-00:00',
        end: '2019-03-26T00:00:00.000-00:00'
      },
      group_by: ['product.name'],
      interval: 'daily',
      timezone: 7200
    },
    result: [
      {
        value: [
          { 'product.name': 'apps', result: 53 },
          { 'product.name': 'books', result: 47 },
          { 'product.name': 'games', result: 24 },
          { 'product.name': 'sounds', result: 76 }
        ],
        timeframe: {
          start: '2019-03-20T00:00:00.000Z',
          end: '2019-03-21T00:00:00.000Z'
        }
      },
      {
        value: [
          { 'product.name': 'apps', result: 32 },
          { 'product.name': 'books', result: 24 },
          { 'product.name': 'games', result: 56 },
          { 'product.name': 'sounds', result: 32 }
        ],
        timeframe: {
          start: '2019-03-21T00:00:00.000Z',
          end: '2019-03-22T00:00:00.000Z'
        }
      },
      {
        value: [
          { 'product.name': 'apps', result: 27 },
          { 'product.name': 'books', result: 32 },
          { 'product.name': 'games', result: 18 },
          { 'product.name': 'sounds', result: 33 }
        ],
        timeframe: {
          start: '2019-03-22T00:00:00.000Z',
          end: '2019-03-23T00:00:00.000Z'
        }
      },
      {
        value: [
          { 'product.name': 'apps', result: 68 },
          { 'product.name': 'books', result: 56 },
          { 'product.name': 'games', result: 65 },
          { 'product.name': 'sounds', result: 59 }
        ],
        timeframe: {
          start: '2019-03-23T00:00:00.000Z',
          end: '2019-03-24T00:00:00.000Z'
        }
      },
      {
        value: [
          { 'product.name': 'apps', result: 38 },
          { 'product.name': 'books', result: 48 },
          { 'product.name': 'games', result: 50 },
          { 'product.name': 'sounds', result: 26 }
        ],
        timeframe: {
          start: '2019-03-24T00:00:00.000Z',
          end: '2019-03-25T00:00:00.000Z'
        }
      },
      {
        value: [
          { 'product.name': 'apps', result: 34 },
          { 'product.name': 'books', result: 15 },
          { 'product.name': 'games', result: 18 },
          { 'product.name': 'sounds', result: 14 }
        ],
        timeframe: {
          start: '2019-03-25T00:00:00.000Z',
          end: '2019-03-26T00:00:00.000Z'
        }
      }
    ]
  },
  area: {
    query: {
      analysis_type: 'count',
      event_collection: 'mobile_purchases',
      timeframe: {
        start: '2019-03-20T00:00:00.000-00:00',
        end: '2019-03-26T00:00:00.000-00:00'
      },
      group_by: ['product.name'],
      interval: 'daily',
      timezone: 7200
    },
    result: [
      {
        value: [
          { 'product.name': 'apps', result: 53 },
          { 'product.name': 'books', result: 47 },
          { 'product.name': 'games', result: 24 },
          { 'product.name': 'sounds', result: 76 }
        ],
        timeframe: {
          start: '2019-03-20T00:00:00.000Z',
          end: '2019-03-21T00:00:00.000Z'
        }
      },
      {
        value: [
          { 'product.name': 'apps', result: 32 },
          { 'product.name': 'books', result: 24 },
          { 'product.name': 'games', result: 56 },
          { 'product.name': 'sounds', result: 32 }
        ],
        timeframe: {
          start: '2019-03-21T00:00:00.000Z',
          end: '2019-03-22T00:00:00.000Z'
        }
      },
      {
        value: [
          { 'product.name': 'apps', result: 27 },
          { 'product.name': 'books', result: 32 },
          { 'product.name': 'games', result: 18 },
          { 'product.name': 'sounds', result: 33 }
        ],
        timeframe: {
          start: '2019-03-22T00:00:00.000Z',
          end: '2019-03-23T00:00:00.000Z'
        }
      },
      {
        value: [
          { 'product.name': 'apps', result: 68 },
          { 'product.name': 'books', result: 56 },
          { 'product.name': 'games', result: 65 },
          { 'product.name': 'sounds', result: 59 }
        ],
        timeframe: {
          start: '2019-03-23T00:00:00.000Z',
          end: '2019-03-24T00:00:00.000Z'
        }
      },
      {
        value: [
          { 'product.name': 'apps', result: 38 },
          { 'product.name': 'books', result: 48 },
          { 'product.name': 'games', result: 50 },
          { 'product.name': 'sounds', result: 26 }
        ],
        timeframe: {
          start: '2019-03-24T00:00:00.000Z',
          end: '2019-03-25T00:00:00.000Z'
        }
      },
      {
        value: [
          { 'product.name': 'apps', result: 34 },
          { 'product.name': 'books', result: 15 },
          { 'product.name': 'games', result: 18 },
          { 'product.name': 'sounds', result: 14 }
        ],
        timeframe: {
          start: '2019-03-25T00:00:00.000Z',
          end: '2019-03-26T00:00:00.000Z'
        }
      }
    ]
  },
  pie: {
    query: {
      analysis_type: 'count',
      event_collection: 'mobile_purchases',
      timeframe: {
        start: '2019-03-20T00:00:00.000-00:00',
        end: '2019-03-26T00:00:00.000-00:00'
      },
      group_by: ['product.name'],
      timezone: 7200
    },
    result: [
      { 'product.name': 'apps', result: 252 },
      { 'product.name': 'books', result: 222 },
      { 'product.name': 'games', result: 231 },
      { 'product.name': 'sounds', result: 240 }
    ]
  },
  donut: {
    query: {
      analysis_type: 'count',
      event_collection: 'mobile_purchases',
      timeframe: {
        start: '2019-03-20T00:00:00.000-00:00',
        end: '2019-03-26T00:00:00.000-00:00'
      },
      group_by: ['product.name'],
      timezone: 7200
    },
    result: [
      { 'product.name': 'apps', result: 252 },
      { 'product.name': 'books', result: 222 },
      { 'product.name': 'games', result: 231 },
      { 'product.name': 'sounds', result: 240 }
    ]
  },
  gauge: {
    query: {
      analysis_type: 'count',
      event_collection: 'mobile_purchases',
      timeframe: {
        start: '2019-03-21T00:00:00.000-00:00',
        end: '2019-03-22T00:00:00.000-00:00'
      },
      filters: [
        {
          property_name: 'product.name',
          operator: 'eq',
          property_value: 'games'
        }
      ],
      timezone: 7200
    },
    result: 56
  },
  funnel: {
    steps: [
      {
        with_actors: false,
        actor_property: 'user.uuid',
        filters: [],
        timeframe: {
          start: '2019-03-13T00:00:00+00:00',
          end: '2019-08-14T00:00:00+00:00'
        },
        timezone: null,
        event_collection: 'pageviews',
        optional: false,
        inverted: false
      },
      {
        with_actors: false,
        actor_property: 'user.uuid',
        filters: [],
        timeframe: {
          start: '2019-03-13T00:00:00+00:00',
          end: '2019-08-14T00:00:00+00:00'
        },
        timezone: null,
        event_collection: 'signups',
        optional: false,
        inverted: false
      },
      {
        with_actors: false,
        actor_property: 'user.uuid',
        filters: [],
        timeframe: {
          start: '2019-03-13T00:00:00+00:00',
          end: '2019-08-14T00:00:00+00:00'
        },
        timezone: null,
        event_collection: 'purchases',
        optional: false,
        inverted: false
      }
    ],
    result: [1128, 317, 89]
  },
  'horizontal-funnel': {
    steps: [
      {
        with_actors: false,
        actor_property: 'user.uuid',
        filters: [],
        timeframe: {
          start: '2019-03-13T00:00:00+00:00',
          end: '2019-08-14T00:00:00+00:00'
        },
        timezone: null,
        event_collection: 'pageviews',
        optional: false,
        inverted: false
      },
      {
        with_actors: false,
        actor_property: 'user.uuid',
        filters: [],
        timeframe: {
          start: '2019-03-13T00:00:00+00:00',
          end: '2019-08-14T00:00:00+00:00'
        },
        timezone: null,
        event_collection: 'signups',
        optional: false,
        inverted: false
      },
      {
        with_actors: false,
        actor_property: 'user.uuid',
        filters: [],
        timeframe: {
          start: '2019-03-13T00:00:00+00:00',
          end: '2019-08-14T00:00:00+00:00'
        },
        timezone: null,
        event_collection: 'purchases',
        optional: false,
        inverted: false
      }
    ],
    result: [1128, 317, 89]
  },
  'funnel-3d': {
    steps: [
      {
        with_actors: false,
        actor_property: 'user.uuid',
        filters: [],
        timeframe: {
          start: '2019-03-13T00:00:00+00:00',
          end: '2019-08-14T00:00:00+00:00'
        },
        timezone: null,
        event_collection: 'pageviews',
        optional: false,
        inverted: false
      },
      {
        with_actors: false,
        actor_property: 'user.uuid',
        filters: [],
        timeframe: {
          start: '2019-03-13T00:00:00+00:00',
          end: '2019-08-14T00:00:00+00:00'
        },
        timezone: null,
        event_collection: 'banner_visibility',
        optional: false,
        inverted: false
      },
      {
        with_actors: false,
        actor_property: 'user.uuid',
        filters: [],
        timeframe: {
          start: '2019-03-13T00:00:00+00:00',
          end: '2019-08-14T00:00:00+00:00'
        },
        timezone: null,
        event_collection: 'banner_clicks',
        optional: false,
        inverted: false
      },
      {
        with_actors: false,
        actor_property: 'user.uuid',
        filters: [],
        timeframe: {
          start: '2019-03-13T00:00:00+00:00',
          end: '2019-08-14T00:00:00+00:00'
        },
        timezone: null,
        event_collection: 'signups',
        optional: false,
        inverted: false
      }
    ],
    result: [1128, 848, 581, 317]
  },
  'horizontal-funnel-3d': {
    steps: [
      {
        with_actors: false,
        actor_property: 'user.uuid',
        filters: [],
        timeframe: {
          start: '2019-03-13T00:00:00+00:00',
          end: '2019-08-14T00:00:00+00:00'
        },
        timezone: null,
        event_collection: 'pageviews',
        optional: false,
        inverted: false
      },
      {
        with_actors: false,
        actor_property: 'user.uuid',
        filters: [],
        timeframe: {
          start: '2019-03-13T00:00:00+00:00',
          end: '2019-08-14T00:00:00+00:00'
        },
        timezone: null,
        event_collection: 'banner_visibility',
        optional: false,
        inverted: false
      },
      {
        with_actors: false,
        actor_property: 'user.uuid',
        filters: [],
        timeframe: {
          start: '2019-03-13T00:00:00+00:00',
          end: '2019-08-14T00:00:00+00:00'
        },
        timezone: null,
        event_collection: 'banner_clicks',
        optional: false,
        inverted: false
      },
      {
        with_actors: false,
        actor_property: 'user.uuid',
        filters: [],
        timeframe: {
          start: '2019-03-13T00:00:00+00:00',
          end: '2019-08-14T00:00:00+00:00'
        },
        timezone: null,
        event_collection: 'signups',
        optional: false,
        inverted: false
      }
    ],
    result: [1128, 848, 581, 317]
  },
  choropleth: {
    query: {
      analysis_type: 'count',
      event_collection: 'homepage_views',
      timeframe: {
        start: '2019-04-13T00:00:00.000-00:00',
        end: '2019-04-14T00:00:00.000-00:00'
      },
      group_by: ['geo.country'],
      timezone: 3600
    },
    result: [
      { 'geo.country': 'Afghanistan', result: 49 },
      { 'geo.country': 'Albania', result: 61 },
      { 'geo.country': 'Algeria', result: 2 },
      { 'geo.country': 'Andorra', result: 1 },
      { 'geo.country': 'Angola', result: 15 },
      { 'geo.country': 'Antarctica', result: 23 },
      { 'geo.country': 'Argentina', result: 479 },
      { 'geo.country': 'Armenia', result: 73 },
      { 'geo.country': 'Australia', result: 339 },
      { 'geo.country': 'Austria', result: 10 },
      { 'geo.country': 'Azerbaijan', result: 71 },
      { 'geo.country': 'Bahamas', result: 59 },
      { 'geo.country': 'Bangladesh', result: 3 },
      { 'geo.country': 'Belarus', result: 9 },
      { 'geo.country': 'Belgium', result: 1 },
      { 'geo.country': 'Bolivia', result: 34 },
      { 'geo.country': 'Botswana', result: 7 },
      { 'geo.country': 'Brazil', result: 879 },
      { 'geo.country': 'Bulgaria', result: 3 },
      { 'geo.country': 'Cambodia', result: 52 },
      { 'geo.country': 'Cameroon', result: 3 },
      { 'geo.country': 'Canada', result: 192 },
      { 'geo.country': 'Chile', result: 37 },
      { 'geo.country': 'China', result: 587 },
      { 'geo.country': 'Colombia', result: 222 },
      { 'geo.country': 'Congo', result: 63 },
      { 'geo.country': 'Croatia', result: 4 },
      { 'geo.country': 'Denmark', result: 455 },
      { 'geo.country': 'Ecuador', result: 39 },
      { 'geo.country': 'Egypt', result: 133 },
      { 'geo.country': 'England', result: 297 },
      { 'geo.country': 'Estonia', result: 31 },
      { 'geo.country': 'Finland', result: 460 },
      { 'geo.country': 'France', result: 452 },
      { 'geo.country': 'Gambia', result: 7 },
      { 'geo.country': 'Germany', result: 155 },
      { 'geo.country': 'Ghana', result: 16 },
      { 'geo.country': 'Greece', result: 30 },
      { 'geo.country': 'Guatemala', result: 9 },
      { 'geo.country': 'Honduras', result: 9 },
      { 'geo.country': 'Hungary', result: 8 },
      { 'geo.country': 'Iceland', result: 18 },
      { 'geo.country': 'India', result: 478 },
      { 'geo.country': 'Indonesia', result: 17 },
      { 'geo.country': 'Iran', result: 40 },
      { 'geo.country': 'Iraq', result: 17 },
      { 'geo.country': 'Ireland', result: 46 },
      { 'geo.country': 'Israel', result: 28 },
      { 'geo.country': 'Italy', result: 25 },
      { 'geo.country': 'Jamaica', result: 21 },
      { 'geo.country': 'Japan', result: 97 },
      { 'geo.country': 'Liechtenstein', result: 22 },
      { 'geo.country': 'Madagascar', result: 9 },
      { 'geo.country': 'Malta', result: 1 },
      { 'geo.country': 'Mexico', result: 31 },
      { 'geo.country': 'Moldova', result: 39 },
      { 'geo.country': 'Mongolia', result: 54 },
      { 'geo.country': 'Netherlands', result: 28 },
      { 'geo.country': 'New Zealand', result: 16 },
      { 'geo.country': 'Norway', result: 22 },
      { 'geo.country': 'Pakistan', result: 45 },
      { 'geo.country': 'Paraguay', result: 59 },
      { 'geo.country': 'Poland', result: 667 },
      { 'geo.country': 'Portugal', result: 29 },
      { 'geo.country': 'Romania', result: 1 },
      { 'geo.country': 'Russia', result: 600 },
      { 'geo.country': 'Samoa', result: 62 },
      { 'geo.country': 'Scotland', result: 9 },
      { 'geo.country': 'Senegal', result: 15 },
      { 'geo.country': 'Serbia', result: 17 },
      { 'geo.country': 'Singapore', result: 9 },
      { 'geo.country': 'Slovakia', result: 27 },
      { 'geo.country': 'Slovenia', result: 1 },
      { 'geo.country': 'Somalia', result: 9 },
      { 'geo.country': 'South Korea', result: 61 },
      { 'geo.country': 'Spain', result: 60 },
      { 'geo.country': 'Sweden', result: 83 },
      { 'geo.country': 'Switzerland', result: 13 },
      { 'geo.country': 'Thailand', result: 9 },
      { 'geo.country': 'Ukraine', result: 13 },
      { 'geo.country': 'United States', result: 1299 },
      { 'geo.country': 'Uruguay', result: 12 },
      { 'geo.country': 'Venezuela', result: 63 },
      { 'geo.country': 'Vietnam', result: 30 },
      { 'geo.country': 'Wales', result: 91 }
    ]
  },
  'choropleth-us': {
    query: {
      analysis_type: 'count',
      event_collection: 'homepage_views',
      timeframe: {
        start: '2019-04-13T00:00:00.000-00:00',
        end: '2019-04-14T00:00:00.000-00:00'
      },
      group_by: ['geo.province'],
      filters: [
        {
          property_name: 'geo.country',
          operator: 'eq',
          property_value: 'United States'
        }
      ],
      timezone: 3600
    },
    result: [
      { result: 6, 'geo.province': 'Alabama' },
      { result: 17, 'geo.province': 'Alaska' },
      { result: 9, 'geo.province': 'American Samoa' },
      { result: 11, 'geo.province': 'Arizona' },
      { result: 14, 'geo.province': 'Arkansas' },
      { result: 21, 'geo.province': 'California' },
      { result: 11, 'geo.province': 'Connecticut' },
      { result: 53, 'geo.province': 'Delaware' },
      { result: 66, 'geo.province': 'Florida' },
      { result: 26, 'geo.province': 'Georgia' },
      { result: 51, 'geo.province': 'Hawaii' },
      { result: 46, 'geo.province': 'Idaho' },
      { result: 9, 'geo.province': 'Illinois' },
      { result: 77, 'geo.province': 'Indiana' },
      { result: 7, 'geo.province': 'Iowa' },
      { result: 11, 'geo.province': 'Kansas' },
      { result: 15, 'geo.province': 'Kentucky' },
      { result: 157, 'geo.province': 'Louisiana' },
      { result: 27, 'geo.province': 'Maine' },
      { result: 16, 'geo.province': 'Maryland' },
      { result: 19, 'geo.province': 'Massachusetts' },
      { result: 54, 'geo.province': 'Michigan' },
      { result: 21, 'geo.province': 'Minnesota' },
      { result: 8, 'geo.province': 'Mississippi' },
      { result: 51, 'geo.province': 'Missouri' },
      { result: 8, 'geo.province': 'Montana' },
      { result: 25, 'geo.province': 'Nebraska' },
      { result: 61, 'geo.province': 'Nevada' },
      { result: 27, 'geo.province': 'New Jersey' },
      { result: 39, 'geo.province': 'New Mexico' },
      { result: 47, 'geo.province': 'New York' },
      { result: 18, 'geo.province': 'North Carolina' },
      { result: 54, 'geo.province': 'Ohio' },
      { result: 6, 'geo.province': 'Oklahoma' },
      { result: 9, 'geo.province': 'Oregon' },
      { result: 51, 'geo.province': 'Pennsylvania' },
      { result: 50, 'geo.province': 'Tennessee' },
      { result: 2, 'geo.province': 'Texas' },
      { result: 23, 'geo.province': 'Utah' },
      { result: 5, 'geo.province': 'Vermont' },
      { result: 8, 'geo.province': 'Virginia' },
      { result: 15, 'geo.province': 'Washington' },
      { result: 39, 'geo.province': 'Wisconsin' },
      { result: 9, 'geo.province': 'Wyoming' }
    ]
  },
  table: {
    query: {
      analysis_type: 'extraction',
      event_collection: 'user_action',
      timeframe: {
        start: '2014-02-02T00:00:00.000-00:00',
        end: '2014-02-12T00:00:00.000-00:00'
      },
      property_names: ['user.name', 'battery_level', 'keen.timestamp'],
      timezone: 3600
    },
    result: [
      {
        battery_level: 0.18,
        user: { name: 'Florence Clarke' },
        keen: { timestamp: '2014-02-07T20:29:30.915Z' }
      },
      {
        battery_level: 0.88,
        user: { name: 'Nora Briggs' },
        keen: { timestamp: '2014-02-10T18:39:46.587Z' }
      },
      {
        battery_level: 0.67,
        user: { name: 'Kyle Gonzales' },
        keen: { timestamp: '2014-02-10T10:49:19.067Z' }
      },
      {
        battery_level: 0.47,
        user: { name: 'Mason Chapman' },
        keen: { timestamp: '2014-02-08T14:54:31.495Z' }
      },
      {
        battery_level: 0.73,
        user: { name: 'Mollie Jordan' },
        keen: { timestamp: '2014-02-03T18:12:37.714Z' }
      },
      {
        battery_level: 0.78,
        user: { name: 'Jane Moss' },
        keen: { timestamp: '2014-02-11T10:17:42.047Z' }
      },
      {
        battery_level: 0.83,
        user: { name: 'Donald Boone' },
        keen: { timestamp: '2014-02-06T16:05:58.206Z' }
      },
      {
        battery_level: 0.25,
        user: { name: 'Donald Boone' },
        keen: { timestamp: '2014-02-11T09:39:57.938Z' }
      },
      {
        battery_level: 0.78,
        user: { name: 'Phoebe Mack' },
        keen: { timestamp: '2014-02-07T19:55:08.812Z' }
      },
      {
        battery_level: 0.3,
        user: { name: 'Callie Hansen' },
        keen: { timestamp: '2014-02-09T18:28:00.925Z' }
      },
      {
        battery_level: 0.18,
        user: { name: 'Steven McDonald' },
        keen: { timestamp: '2014-02-02T18:31:27.694Z' }
      },
      {
        battery_level: 0.35,
        user: { name: 'Amanda Obrien' },
        keen: { timestamp: '2014-02-04T12:48:03.587Z' }
      },
      {
        battery_level: 0.5,
        user: { name: 'Joe Chambers' },
        keen: { timestamp: '2014-02-06T12:24:13.906Z' }
      },
      {
        battery_level: 0.59,
        user: { name: 'Fanny Bell' },
        keen: { timestamp: '2014-02-10T12:11:11.525Z' }
      },
      {
        battery_level: 0.58,
        user: { name: 'Dominic Haynes' },
        keen: { timestamp: '2014-02-07T19:23:23.654Z' }
      },
      {
        battery_level: 0.28,
        user: { name: 'Lucas Stone' },
        keen: { timestamp: '2014-02-07T18:49:22.586Z' }
      }
    ]
  }
};

export const baseColor = '#222222';

export const defaultFont = {
  label: 'Default',
  value: ''
};

export const fontSizeOptions = [
  { label: 'Auto', value: 'auto' },
  { label: '10', value: 10 },
  { label: '12', value: 12 },
  { label: '14', value: 14 },
  { label: '16', value: 16 },
  { label: '18', value: 18 },
  { label: '20', value: 20 },
  { label: '24', value: 24 },
  { label: '30', value: 30 },
  { label: '36', value: 36 },
  { label: '48', value: 48 },
  { label: '60', value: 60 },
  { label: '72', value: 72 }
];

export const fontStyleOptions = [
  {
    label: <BoldIcon width="0.75rem" />,
    value: 'bold'
  },
  {
    label: <ItalicIcon width="0.625rem" />,
    value: 'italic'
  }
];

export const textAlignOptions = [
  {
    label: <AlignLeftIcon width="0.75rem" />,
    value: 'left'
  },
  {
    label: <AlignCenterIcon width="0.75rem" />,
    value: 'center'
  },
  {
    label: <AlignRightIcon width="0.75rem" />,
    value: 'right'
  }
];
export const textAlignOptionsVertical = [
  {
    label: <AlignTopIcon width="0.85em" />,
    value: 'top'
  },
  {
    label: <AlignMiddleIcon width="0.85em" />,
    value: 'middle'
  },
  {
    label: <AlignBottomIcon width="0.85em" />,
    value: 'bottom'
  }
];

export const availableChartTypes = [
  { value: 'default', label: 'Default' },
  { value: 'metric', label: 'Metric' },
  { value: 'table', label: 'Table' },
  { value: 'bar', label: 'Bar' },
  { value: 'line', label: 'Line' },
  { value: 'spline', label: 'Spline' },
  { value: 'step', label: 'Step' },
  { value: 'area', label: 'Area' },
  { value: 'pie', label: 'Pie' },
  { value: 'donut', label: 'Donut' },
  { value: 'gauge', label: 'Gauge' },
  { value: 'funnel', label: 'Funnel' },
  { value: 'horizontal-funnel', label: 'Horizontal funnel' },
  { value: 'funnel-3d', label: 'Funnel 3d' },
  { value: 'horizontal-funnel-3d', label: 'Horizontal funnel 3d' },
  { value: 'choropleth', label: 'Choropleth' }
];

const defaultPalette = {
  colors: [
    '#00bbde',
    '#fe6672',
    '#eeb058',
    '#8a8ad6',
    '#ff855c',
    '#00cfbb',
    '#5a9eed',
    '#73d483',
    '#c879bb',
    '#0099b6',
    '#d74d58',
    '#cb9141',
    '#6b6bb6',
    '#d86945',
    '#00aa99',
    '#4281c9',
    '#57b566',
    '#ac5c9e',
    '#27cceb',
    '#ff818b',
    '#f6bf71',
    '#9b9be1',
    '#ff9b79',
    '#26dfcd',
    '#73aff4',
    '#87e096',
    '#d88bcb'
  ]
};
export const chartColorPalette = {
  default: defaultPalette,
  ...palettes
};

export const availableChartPalette = [{ value: 'default', label: 'Default' }];

Object.keys(palettes).forEach(key => {
  const obj = {
    value: key,
    label: key.charAt(0).toUpperCase() + key.slice(1)
  };
  availableChartPalette.push(obj);
});

export const defaultColors = {
  title: '#222222',
  subtitle: '#6f6f6f',
  border: '#e8e8e8',
  background: '#ffffff',
  row: '#f3f5f6',
  rowHover: '#e7e7ec'
};

export const layoutOptions = [
  { label: 'Top', value: 'top' },
  { label: 'Right', value: 'right' },
  { label: 'Bottom', value: 'bottom' },
  { label: 'Left', value: 'left' }
];

export const verticalPositionOptions = [
  { label: 'Top', value: 'top' },
  { label: 'Middle', value: 'middle' },
  { label: 'Bottom', value: 'bottom' }
];

export const horizontalPositionOptions = [
  { label: 'Left', value: 'left' },
  { label: 'Center', value: 'center' },
  { label: 'Right', value: 'right' }
];

export const gridLinesCountOptions = [
  { label: 'Auto', value: '' },
  { label: '1', value: 1 },
  { label: '2', value: 2 },
  { label: '3', value: 3 },
  { label: '4', value: 4 },
  { label: '5', value: 5 },
  { label: '6', value: 6 },
  { label: '7', value: 7 },
  { label: '8', value: 8 },
  { label: '9', value: 9 },
  { label: '10', value: 10 }
];

export const lineThicknessOptions = [
  { label: '1px', value: 1 },
  { label: '2px', value: 2 },
  { label: '4px', value: 4 },
  { label: '8px', value: 8 }
];

export const pointsSizeOptions = [
  { label: 'Auto', value: 2.5 },
  { label: '1', value: 1 },
  { label: '2', value: 2 },
  { label: '3', value: 3 },
  { label: '4', value: 4 },
  { label: '5', value: 5 },
  { label: '6', value: 6 },
  { label: '7', value: 7 },
  { label: '8', value: 8 },
  { label: '9', value: 9 },
  { label: '10', value: 10 }
];

export const stackedOptions = [
  { label: 'None', value: '' },
  { label: 'Normal', value: 'normal' },
  { label: 'Percent', value: 'percent' }
];

export const choroplethMapOptions = [
  { label: 'World', value: 'world' },
  { label: 'United States', value: 'us' }
];

export const funnelCountingMethodOptions = [
  { label: 'Absolute', value: 'absolute' },
  { label: 'Relative', value: 'relative' }
];

export const funnelEffect3dOptions = [
  { label: 'Both sides', value: 'both-sides' },
  { label: 'Left', value: 'left' },
  { label: 'Right', value: 'right' }
];

export const axisLabelHeight = 60;
export const colorPickerDefaultOption = 'transparent';

export const accordionSection = {
  appearance: true,
  title: true,
  axis: true,
  legend: true,
  gridline: true,
  series: true,
  tooltip: true,
  table: true,
  funnel: true
};

export const funnels = [
  'funnel',
  'funnel-3d',
  'horizontal-funnel',
  'horizontal-funnel-3d'
];

export const defaultState = {
  chart: availableChartTypes[0].value,
  chartPalette: availableChartPalette[0].value,
  colors: chartColorPalette[availableChartPalette[0].value].colors,
  general_prefix: '',
  general_suffix: '',
  chart_slider_show: false,
  appearance_background: defaultColors.background,
  appearance_border: defaultColors.border,
  appearance_color: defaultColors.background,
  appearance_font_family: defaultFont.value,
  appearance_font_size: fontSizeOptions[11].value,
  appearance_font_bold: true,
  appearance_font_italic: false,
  appearance_sparkline: false,
  title_show: false,
  title_text: '',
  title_textAlign: horizontalPositionOptions[0].value,
  title_color: defaultColors.title,
  title_font_family: defaultFont.value,
  title_font_size: fontSizeOptions[0].value,
  title_font_bold: false,
  title_font_italic: false,
  subtitle_show: false,
  subtitle_text: '',
  subtitle_textAlign: horizontalPositionOptions[0].value,
  subtitle_color: defaultColors.subtitle,
  subtitle_font_family: defaultFont.value,
  subtitle_font_size: fontSizeOptions[0].value,
  subtitle_font_bold: false,
  subtitle_font_italic: false,
  axis_vertical_title_show: false,
  axis_vertical_title_text: '',
  axis_vertical_title_textAlign: verticalPositionOptions[1].value,
  axis_vertical_title_color: defaultColors.title,
  axis_vertical_title_font_family: defaultFont.value,
  axis_vertical_title_font_size: fontSizeOptions[0].value,
  axis_vertical_title_font_bold: false,
  axis_vertical_title_font_italic: false,
  axis_vertical_label_show: false,
  axis_vertical_label_color: defaultColors.title,
  axis_vertical_label_font_family: defaultFont.value,
  axis_vertical_label_font_size: fontSizeOptions[0].value,
  axis_vertical_label_font_bold: false,
  axis_vertical_label_font_italic: false,
  axis_horizontal_title_show: false,
  axis_horizontal_title_text: '',
  axis_horizontal_title_textAlign: horizontalPositionOptions[0].value,
  axis_horizontal_title_color: defaultColors.title,
  axis_horizontal_title_font_family: defaultFont.value,
  axis_horizontal_title_font_size: fontSizeOptions[0].value,
  axis_horizontal_title_font_bold: false,
  axis_horizontal_title_font_italic: false,
  axis_horizontal_label_show: false,
  axis_horizontal_label_color: defaultColors.title,
  axis_horizontal_label_font_family: defaultFont.value,
  axis_horizontal_label_font_size: fontSizeOptions[0].value,
  axis_horizontal_label_font_bold: false,
  axis_horizontal_label_font_italic: false,
  legend_show: false,
  legend_color: defaultColors.title,
  legend_font_family: defaultFont.value,
  legend_font_size: fontSizeOptions[0].value,
  legend_font_bold: false,
  legend_font_italic: false,
  legend_layout: layoutOptions[0].value,
  legend_position_horizontal: horizontalPositionOptions[0].value,
  legend_position_vertical: verticalPositionOptions[0].value,
  grid_show: false,
  grid_lines_color: defaultColors.border,
  grid_lines_count: gridLinesCountOptions[0].value,
  subgrid_show: false,
  subgrid_lines_color: defaultColors.border,
  subgrid_lines_count: gridLinesCountOptions[0].value,
  series_label_show: false,
  series_label_color: defaultColors.title,
  series_label_font_family: defaultFont.value,
  series_label_font_size: fontSizeOptions[0].value,
  series_label_font_bold: false,
  series_label_font_italic: false,
  series_label_textAlign: horizontalPositionOptions[1].value,
  series_line: lineThicknessOptions[0].value,
  series_points_show: false,
  series_points_size: pointsSizeOptions[0].value,
  series_stacked: stackedOptions[0].value,
  tooltip_color: defaultColors.title,
  tooltip_font_family: defaultFont.value,
  tooltip_font_size: fontSizeOptions[0].value,
  tooltip_font_bold: false,
  tooltip_font_italic: false,
  tooltip_background: defaultColors.background,
  tooltip_border: colorPickerDefaultOption,
  tooltip_simpleTooltip: false,
  table_pagination_show: false,
  table_pagination_limit: 1,
  table_header_show: false,
  table_header_textAlign: horizontalPositionOptions[0].value,
  table_header_color: defaultColors.title,
  table_header_font_family: defaultFont.value,
  table_header_font_size: fontSizeOptions[0].value,
  table_header_font_bold: false,
  table_header_font_italic: false,
  table_body_show: false,
  table_body_textAlign: horizontalPositionOptions[0].value,
  table_body_color: defaultColors.title,
  table_body_font_family: defaultFont.value,
  table_body_font_size: fontSizeOptions[0].value,
  table_body_font_bold: false,
  table_body_font_italic: false,
  table_body_row_alternate_color: defaultColors.row,
  table_body_row_hover_background: defaultColors.rowHover,
  choropleth_map: choroplethMapOptions[0].value,
  choropleth_border_show: false,
  choropleth_border_size: lineThicknessOptions[0].value,
  choropleth_border_color: defaultColors.border,
  funnel_lines: false,
  funnel_results: false,
  funnel_percents_show: false,
  funnel_percents_count: funnelCountingMethodOptions[0].value,
  funnel_percents_decimals: 0,
  funnel_hover: false,
  funnel_margin: false,
  funnel_minimal_size: 50,
  funnel_effect3d: funnelEffect3dOptions[0].value,
  funnel_label_textAlign: horizontalPositionOptions[1].value,
  funnel_label_color: defaultColors.title,
  funnel_label_font_family: defaultFont.value,
  funnel_label_font_size: fontSizeOptions[0].value,
  funnel_label_font_bold: false,
  funnel_label_font_italic: false
};
