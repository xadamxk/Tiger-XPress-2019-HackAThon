import mockjs from 'mockjs';

export default {
  // These should be points, not lines
  'GET /api/stops': mockjs.mock({
    'route3stops': {
      type: 'Feature',
      geometry: {
        type: 'MultiPoint',
        coordinates: [

        ]
      }
    },
    'route1401stops': {
      type: 'Feature',
      geometry: {
        type: 'MultiPoint',
        coordinates: [

        ]
      }
    },
    'route1405stops': {
      type: 'Feature',
      geometry: {
        type: 'MultiPoint',
        coordinates: [

        ]
      }
    }
  }),
  'GET /api/routes': mockjs.mock({
    'route3route': {
      type: 'Feature',
      geometry: {
        type: 'LineString',
        coordinates: [

        ]
      }
    }
  }),
};