require("source-map-support").install();
exports.ids = [3];
exports.modules = {

/***/ 10:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Kjorskra__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Layout__ = __webpack_require__(82);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();





/* harmony default export */ __webpack_exports__["default"] = (({ params, url }) => {
  let { nidurstada } = params;

  let nidurstadaObj = null;
  let ogImage = null;

  if (nidurstada) {
    try {
      if (false) {
        nidurstada = atob(nidurstada);
      } else {
        nidurstada = Buffer.from(nidurstada, 'base64').toString('binary');
      }

      nidurstada = nidurstada.split('|');

      const [fornafn, kjorstadur, kjordeild, kjordaemi, coordinates] = nidurstada;

      if (coordinates) {
        ogImage = `https://voliprav.si/og-image-kjorskra/${coordinates.split(',').join('%2C')}`;
      }

      nidurstadaObj = {
        fornafn,
        kjorstadur,
        kjordeild,
        kjordaemi
      };
    } catch (e) {}
  }

  const title = nidurstadaObj ? `Kjörstaðurinn minn er ${nidurstadaObj.kjorstadur}` : 'Hvar á ég að kjósa?';
  return {
    chunks: ['kjorskra'],
    title: `${title} - Voli prav`,
    path: url,
    ogImage,
    description: 'Veist ekki HVAR þú átt að kjósa? Flettu upp þínum kjörstað með einföldu uppflettingartóli. Við finnum einnig út bestu leiðina fyrir þig til að komast á kjörstað!',
    component: _jsx(__WEBPACK_IMPORTED_MODULE_2__components_Layout__["a" /* default */], {
      page: 'kjorskra',
      title: 'Hvar \xE1 \xE9g a\xF0 kj\xF3sa?'
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_1__Kjorskra__["a" /* default */], {
      nidurstada: nidurstadaObj,
      googleMapURL: 'https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyAWfToca-SwGGN9_2MnUHL1V5xSESYoAAk&libraries=geometry,drawing,places',
      loadingElement: _jsx('div', {
        style: { height: `100%` }
      })
    }))
  };
});

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Kjorskra_scss__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Kjorskra_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Kjorskra_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__walking_png__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__walking_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__walking_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__driving_png__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__driving_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__driving_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__bicycling_png__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__bicycling_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__bicycling_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__bus_png__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__bus_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__bus_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__bus_json__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__bus_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__bus_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Autocomplete__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__OpeningHours__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__history__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_kennitala__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_kennitala___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_kennitala__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_react_google_maps__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_react_google_maps___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_react_google_maps__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }


















const Map = Object(__WEBPACK_IMPORTED_MODULE_13_react_google_maps__["withGoogleMap"])(({ mapOptions, kjorstadur }) => {
  return _jsx(__WEBPACK_IMPORTED_MODULE_13_react_google_maps__["GoogleMap"], {
    defaultZoom: mapOptions.zoom,
    center: mapOptions.center
  }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_13_react_google_maps__["Marker"], {
    position: mapOptions.center
  }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_13_react_google_maps__["InfoWindow"], {}, void 0, _jsx('div', {}, void 0, 'Kj\xF6rsta\xF0urinn \xFEinn er ', _jsx('b', {}, void 0, kjorstadur)))));
});

const getItineryInfo = ({ duration, distance, type, from, to }) => {
  return {
    walking: {
      text: 'að labba',
      icon: __WEBPACK_IMPORTED_MODULE_4__walking_png___default.a,
      link: `https://www.google.com/maps/dir/?api=1&origin=${from.lat},${from.lng}&destination=${to.lat},${to.lng}&travelmode=WALKING`,
      linkText: 'Google Maps'
    },
    driving: {
      text: 'að keyra',
      icon: __WEBPACK_IMPORTED_MODULE_5__driving_png___default.a,
      link: `https://www.google.com/maps/dir/?api=1&origin=${from.lat},${from.lng}&destination=${to.lat},${to.lng}&travelmode=DRIVING`,
      linkText: 'Google Maps'
    },
    bicycling: {
      text: 'að hjóla',
      icon: __WEBPACK_IMPORTED_MODULE_6__bicycling_png___default.a,
      link: `https://www.google.com/maps/dir/?api=1&origin=${from.lat},${from.lng}&destination=${to.lat},${to.lng}&travelmode=BICYCLING`,
      linkText: 'Google Maps'
    },
    bussing: {
      text: 'með strætó',
      icon: __WEBPACK_IMPORTED_MODULE_7__bus_png___default.a,
      link: `https://straeto.is`,
      linkText: 'Strætó.is'
    }
  }[type];
};

class Itinery extends __WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"] {
  render() {
    const { duration, distance } = this.props;

    const { text, icon, link, linkText } = getItineryInfo(this.props);

    return _jsx('li', {
      className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(!duration ? __WEBPACK_IMPORTED_MODULE_3__Kjorskra_scss___default.a.faded : null)
    }, void 0, _jsx('div', {
      className: __WEBPACK_IMPORTED_MODULE_3__Kjorskra_scss___default.a.icon,
      style: { backgroundImage: `url(${icon})` }
    }), _jsx('div', {}, void 0, _jsx('b', {}, void 0, duration ? Math.round(duration / 60) : '...', ' m\xEDn\xFAtur'), '\xA0', text, '.', _jsx('div', {}, void 0, 'Sj\xE1 n\xE1nar \xE1 \xA0', _jsx('a', {
      href: link,
      target: '_blank'
    }, void 0, linkText))));
  }
}

var _ref = _jsx('h3', {}, void 0, 'En st\xF3ra spurningin er, hvar k\xFDst \xFE\xFA?');

var _ref2 = _jsx('h3', {}, void 0, 'Finnum \xFAt \xFAr \xFEv\xED hvar \xFE\xFA \xE1tt a\xF0 kj\xF3sa!');

var _ref3 = _jsx('b', {}, void 0, 'kj\xF6rsta\xF0urinn');

var _ref4 = _jsx('i', {}, void 0, 'kj\xF6rd\xE6minu');

var _ref5 = _jsx('h3', {}, void 0, 'N\xFA \xFEurfum vi\xF0 bara a\xF0 koma \xFE\xE9r \xE1 kj\xF6rsta\xF0!');

var _ref6 = _jsx('h3', {}, void 0, 'Skelltu \xFE\xE9r \xE1 kj\xF6rsta\xF0, \xFE\xFA ert a\xF0eins...');

var _ref7 = _jsx('div', {}, void 0, 'R\xF6ng sta\xF0setning');

var _ref8 = _jsx('p', {}, void 0, 'Uppflettingar eru ger\xF0ar \xED', ' ', _jsx('a', {
  href: 'https://www.skra.is/folk/kjorskra-og-kosningar/hvar-a-eg-ad-kjosa/',
  target: '_blank'
}, void 0, 'Kj\xF6rskr\xE1'), '. G\xF6gn eru ekki geymd.');

class Kjorskra extends __WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"] {
  constructor(props) {
    super(props);
    this.state = {
      kennitala: '',
      data: null,
      isFetching: false,
      fetchError: '',
      mapOptions: {
        zoom: 13,
        center: { lat: 65.7, lng: -19.6 }
      },
      currentAddress: null,
      driving: {},
      walking: {},
      bicycling: {},
      bussing: {} //Stupid, but consistency
    };

    this.onAutocompleteMounted = ref => {
      this.autocomplete = ref;
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.submit = this.submit.bind(this);
    this.submitCurrentAddress = this.submitCurrentAddress.bind(this);
  }
  componentWillMount() {
    // if (__DEV__) {
    //   // To test
    //   this.setState({
    //     mapOptions: {
    //       zoom: 13,
    //       center: { lat: 64.1163028, lng: -21.7996805 }
    //     },
    //     data: {
    //       success: true,
    //       kennitala: '1234567890',
    //       nafn: 'Kristján Ingi Mikaelsson',
    //       logheimili: 'Melbær 14',
    //       kjordaemi: 'Reykjavíkurkjördæmi suður',
    //       sveitafelag: 'Reykjavík',
    //       kjorstadur: 'Árbæjarskóli',
    //       kjordeild: '5'
    //     }
    //   });
    //
    //   this.setState({
    //     currentAddress: { lat: 64.11, lng: -21.79 }
    //   });
    //
    //   // setTimeout(() => {
    //   this.setState({
    //     walking: { duration: 1500, distance: 1111 },
    //     bicycling: { duration: 1000, distance: 1234 },
    //     driving: { duration: 700, distance: 1357 },
    //     bussing: { duration: 1200, distance: 1200 }
    //   });
    //   // }, 3000);
    // }
  }
  isKennitalaValid() {
    return Object(__WEBPACK_IMPORTED_MODULE_12_kennitala__["isPerson"])(this.state.kennitala);
  }
  getDistance({ from, to, costing }) {
    return _asyncToGenerator(function* () {
      const json = {
        locations: [{
          lat: from.lat(),
          lon: from.lng()
        }, {
          lat: to.lat(),
          lon: to.lng()
        }]
      };

      console.log('json', json);

      const directionsService = new window.google.maps.DirectionsService();

      console.log('sending', {
        origin: from,
        destination: to,
        travelMode: costing.toUpperCase()
      });

      const response = yield directionsService.route({
        origin: from,
        destination: to,
        travelMode: costing.toUpperCase()
      });

      if (!response || !response.routes || !response.routes[0] || !response.routes[0].legs[0]) {
        return {
          distance: null,
          duration: null
        };
      }

      console.log('response', response.routes[0].legs[0]);

      return {
        distance: response.routes[0].legs[0].distance.value,
        duration: response.routes[0].legs[0].duration.value
      };

      // const url = [
      //   'https://valhalla.mapzen.com/route?api_key=mapzen-pRTGdQw&json=',
      //   JSON.stringify(json)
      // ].join('');

      // let response;

      // try {
      //   response = await this.context.fetch(url);
      //   const data = await response.json();
      //   const result = data.trip.summary;

      //   return {
      //     distance: result.length * 1000,
      //     duration: result.time
      //   };
      // } catch (error) {
      //   console.error(
      //     'Error fetching distance',
      //     response && response.status,
      //     error
      //   );
      //   return {
      //     distance: null,
      //     duration: null
      //   };
      // }
    })();
  }
  getBusDistance({ from, to }) {
    var _this = this;

    return _asyncToGenerator(function* () {
      console.log('getBusDistance', from, to);
      const now = new Date();
      const timestamp = `${now.getHours()}:${('0' + now.getMinutes()).substr(-2)}`;

      const date = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;

      const url = ['https://otp.straeto.is/otp/routers/default/plan?fromPlace=', `${from.lat()},${from.lng()}`, '&toPlace=', `${to.lat()},${to.lng()}`, '&time=', timestamp, '&date=', date, '&mode=TRANSIT,WALK&arriveBy=false&wheelchair=false&showIntermediateStops=false&numItineraries=1&locale=is'].join('');

      console.log('bus url', url);

      const response = yield _this.context.fetch(url, {
        headers: {
          Accept: 'application/json'
        }
      });
      const data = yield response.json();
      console.log('bus data', data);

      if (response.status !== 200 || !data.plan) {
        //@TODO handle bus error
        console.error('Error fetching bus data', response.status, response);
        return {
          distance: null,
          duration: null
        };
      }

      let shortestTrip = data.plan.itineraries[0];

      data.plan.itineraries.forEach(function (itinery) {
        if (shortestTrip.duration > itinery.duration) shortestTrip = itinery;
      });

      const { duration, legs } = shortestTrip;
      const distance = legs.reduce(function (sum, leg) {
        return sum + leg.distance;
      }, 0);

      return {
        distance,
        duration
      };
    })();
  }
  locationFromPlace(place) {
    var _this2 = this;

    return _asyncToGenerator(function* () {
      if (place.geometry) {
        return {
          center: {
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng()
          }
        };
      }
      return _this2.locationFromAddress(place.name);
    })();
  }
  locationFromAddress(address) {
    return _asyncToGenerator(function* () {
      const geocoder = new window.google.maps.Geocoder();

      const response = yield geocoder.geocode({ address: address });

      if (!response.results || response.results.length === 0) {
        return {
          center: {
            lat: 64,
            lng: -21
          }
        };
      }

      const coords = response.results[0].geometry.location;

      return {
        center: {
          lat: coords.lat(),
          lng: coords.lng()
        }
      };
    })();
  }

  onInputChange(type, e) {
    this.setState({
      [type]: e.target.value
    });
  }
  submit(event) {
    var _this3 = this;

    return _asyncToGenerator(function* () {
      if (event && event.preventDefault) {
        event.preventDefault();
      }
      const { kennitala } = _this3.state;

      if (!_this3.isKennitalaValid(kennitala)) {
        console.log('Not a valid kennitala');
        return;
      }

      _this3.setState({
        isFetching: true,
        fetchError: ''
      });

      let data;

      try {
        let url = `https://voliprav.si/kjorskra-lookup/${Object(__WEBPACK_IMPORTED_MODULE_12_kennitala__["clean"])(kennitala)}`;

        if (false) {
          url = `http://localhost:3000/kjorskra-lookup/${cleanKennitala(kennitala)}`;
        }

        const response = yield _this3.context.fetch(url);
        data = yield response.json();

        if (!data.success) {
          throw data;
        }
      } catch (e) {
        console.error(e);

        const newState = {
          isFetching: false,
          fetchError: 'Villa kom upp!'
        };

        if (e.success === false && e.message === 'Kennitala not found') {
          newState.fetchError = 'Kennitala fannst ekki!';
        }

        _this3.setState(newState);
        return;
      }

      _this3.setState({
        isFetching: false,
        data
      });

      const options = yield _this3.locationFromAddress(`${data.kjorstadur}, ${data.sveitafelag}`);

      _this3.setState({
        mapOptions: _extends({
          zoom: 13
        }, options)
      });

      if (options.invalidLocation === true) {
        return;
      }

      const { nafn, kjorstadur, kjordeild, kjordaemi } = data;

      const hash = btoa(`${nafn.split(' ')[0]}|${kjorstadur}|${kjordeild}|${kjordaemi}|${options.center.lat.toFixed(4)},${options.center.lng.toFixed(4)}`);

      __WEBPACK_IMPORTED_MODULE_11__history__["a" /* default */].replace(`/kjorskra/${encodeURIComponent(hash)}`);
    })();
  }
  submitCurrentAddress(event) {
    var _this4 = this;

    return _asyncToGenerator(function* () {
      if (event && event.preventDefault) {
        event.preventDefault();
      }

      const { mapOptions } = _this4.state;
      const lookupPlace = _this4.autocomplete.getPlace();

      _this4.setState({
        isFetching: true,
        fetchError: ''
      });

      const location = yield _this4.locationFromPlace(lookupPlace);

      _this4.setState({
        isFetching: false
      });

      if (location.invalidLocation) {
        _this4.setState({
          fetchError: 'Heimilisfang fannst ekki!'
        });
        return;
      }

      _this4.setState({
        currentAddress: location.center
      });

      const position = {
        from: new window.google.maps.LatLng(location.center.lat, location.center.lng),
        to: new window.google.maps.LatLng(mapOptions.center.lat, mapOptions.center.lng)
      };

      //Look up all the itineries and emit them asynchronous
      _this4.getDistance(_extends({}, position, {
        costing: 'walking'
      })).then(function (data) {
        return _this4.setState({ walking: data });
      });

      _this4.getDistance(_extends({}, position, {
        costing: 'bicycling'
      })).then(function (data) {
        return _this4.setState({ bicycling: data });
      });

      _this4.getDistance(_extends({}, position, {
        costing: 'driving'
      })).then(function (data) {
        return _this4.setState({ driving: data });
      });

      _this4.getBusDistance(_extends({}, position)).then(function (data) {
        return _this4.setState({ bussing: data });
      });
    })();
  }
  getItineriesByDistance({ from, to, types }) {
    let itineries = ['walking', 'bicycling', 'driving', 'bussing'].map(type => ({
      type,
      data: types[type],
      from,
      to
    }));

    itineries.sort((a, b) => {
      if (a.data.duration > b.data.duration) return 1;
      if (a.data.duration < b.data.duration) return -1;
      return 0;
    });

    return itineries;
  }
  render() {
    const { nidurstada } = this.props;

    const {
      kennitala,
      data,
      isFetching,
      fetchError,
      mapOptions,
      currentAddress,
      walking,
      driving,
      bicycling,
      bussing
    } = this.state;

    return _jsx('div', {
      className: __WEBPACK_IMPORTED_MODULE_3__Kjorskra_scss___default.a.root
    }, void 0, _jsx('div', {
      className: `${__WEBPACK_IMPORTED_MODULE_3__Kjorskra_scss___default.a.background} ${data ? __WEBPACK_IMPORTED_MODULE_3__Kjorskra_scss___default.a.backgroundgone : null}`
    }), !data && _jsx('div', {}, void 0, _jsx('div', {
      className: __WEBPACK_IMPORTED_MODULE_3__Kjorskra_scss___default.a.lookupContainer
    }, void 0, nidurstada && _jsx('div', {}, void 0, _jsx('h3', {
      className: __WEBPACK_IMPORTED_MODULE_3__Kjorskra_scss___default.a.friendHeading
    }, void 0, _jsx('b', {}, void 0, nidurstada.fornafn), ' er \xED kj\xF6rd\xE6minu', ' ', _jsx('b', {}, void 0, nidurstada.kjordaemi), ' og kj\xF6rsta\xF0urinn er', ' ', _jsx('b', {}, void 0, nidurstada.kjorstadur), '.'), _ref), !nidurstada && _ref2, _jsx('div', {
      className: __WEBPACK_IMPORTED_MODULE_3__Kjorskra_scss___default.a.lookupWrap
    }, void 0, _jsx('input', {
      autoFocus: true,
      value: kennitala,
      type: 'number',
      pattern: '[\\d]*',
      placeholder: 'Sl\xE1\xF0u inn kennit\xF6luna \xFE\xEDna',
      className: __WEBPACK_IMPORTED_MODULE_3__Kjorskra_scss___default.a.input,
      onChange: e => this.onInputChange('kennitala', e),
      onKeyUp: e => {
        e.keyCode === 13 && this.submit();
      }
    }), _jsx('input', {
      onClick: this.submit,
      type: 'button',
      disabled: !this.isKennitalaValid(kennitala),
      className: __WEBPACK_IMPORTED_MODULE_3__Kjorskra_scss___default.a.submit,
      value: 'Leita'
    })))), data && _jsx('div', {
      className: __WEBPACK_IMPORTED_MODULE_3__Kjorskra_scss___default.a.results
    }, void 0, _jsx('div', {
      className: __WEBPACK_IMPORTED_MODULE_3__Kjorskra_scss___default.a.leftResults
    }, void 0, _jsx('p', {}, void 0, 'H\xE6 ', data.nafn.split(' ')[0], ', ', _ref3, ' \xFEinn er:'), _jsx('p', {
      className: __WEBPACK_IMPORTED_MODULE_3__Kjorskra_scss___default.a.kjorstadur
    }, void 0, data.kjorstadur, ', ', data.sveitafelag), _jsx('p', {
      className: __WEBPACK_IMPORTED_MODULE_3__Kjorskra_scss___default.a.votingInfo
    }, void 0, '\xDE\xFA ert \xED ', _jsx('b', {}, void 0, 'kj\xF6rdeild ', data.kjordeild), ' og \xFE\xFA grei\xF0ir atkv\xE6\xF0i \xED ', _ref4, ' ', _jsx('b', {}, void 0, data.kjordaemi), '.'), _jsx(__WEBPACK_IMPORTED_MODULE_10__OpeningHours__["a" /* default */], {
      sveitafelag: data.sveitafelag
    }), !currentAddress && _jsx('div', {
      className: __WEBPACK_IMPORTED_MODULE_3__Kjorskra_scss___default.a.currentAddressBox
    }, void 0, _ref5, _jsx('form', {
      onSubmit: this.submitCurrentAddress
    }, void 0, _jsx('div', {
      className: __WEBPACK_IMPORTED_MODULE_3__Kjorskra_scss___default.a.currentAddressContainer
    }, void 0, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__Autocomplete__["a" /* default */], {
      ref: this.onAutocompleteMounted,
      type: 'text',
      placeholder: 'N\xFAverandi heimilisfang',
      className: __WEBPACK_IMPORTED_MODULE_3__Kjorskra_scss___default.a.input
    }), _jsx('button', {
      type: 'submit',
      className: __WEBPACK_IMPORTED_MODULE_3__Kjorskra_scss___default.a.submit
    }, void 0, '\xC1fram')))), currentAddress && _jsx('div', {
      className: __WEBPACK_IMPORTED_MODULE_3__Kjorskra_scss___default.a.itineriesBox
    }, void 0, _ref6, _jsx('ul', {
      className: __WEBPACK_IMPORTED_MODULE_3__Kjorskra_scss___default.a.itineries
    }, void 0, this.getItineriesByDistance({
      from: currentAddress,
      to: mapOptions.center,
      types: {
        walking,
        bicycling,
        driving,
        bussing
      }
    }).map(itinery => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Itinery, _extends({
      key: itinery.type
    }, itinery.data, {
      type: itinery.type,
      from: itinery.from,
      to: itinery.to
    })))))), mapOptions.invalidLocation && _ref7, !mapOptions.invalidLocation && _jsx('div', {
      className: __WEBPACK_IMPORTED_MODULE_3__Kjorskra_scss___default.a.mapContainer
    }, void 0, _jsx(Map, {
      containerElement: _jsx('div', {
        style: { height: `100%`, width: '100%' }
      }),
      mapElement: _jsx('div', {
        style: { height: '100%', width: '100%' }
      }),
      mapOptions: mapOptions,
      kjorstadur: data.kjorstadur
    }))), _jsx('div', {
      className: __WEBPACK_IMPORTED_MODULE_3__Kjorskra_scss___default.a.disclaimer
    }, void 0, isFetching && _jsx('div', {
      className: `${__WEBPACK_IMPORTED_MODULE_3__Kjorskra_scss___default.a.errormsg} ${__WEBPACK_IMPORTED_MODULE_3__Kjorskra_scss___default.a.fetching}`
    }, void 0, 'N\xE6 \xED g\xF6gn'), fetchError && _jsx('div', {
      className: `${__WEBPACK_IMPORTED_MODULE_3__Kjorskra_scss___default.a.errormsg} ${__WEBPACK_IMPORTED_MODULE_3__Kjorskra_scss___default.a.fetchError}`
    }, void 0, fetchError), _ref8));
  }
}

Kjorskra.contextTypes = {
  fetch: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_13_react_google_maps__["withScriptjs"])(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_3__Kjorskra_scss___default.a)(Kjorskra)));

/***/ }),

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(200);
    var insertCss = __webpack_require__(7);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!../../../node_modules/sass-loader/dist/cjs.js!./Kjorskra.scss", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!../../../node_modules/sass-loader/dist/cjs.js!./Kjorskra.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "@-webkit-keyframes kS-Dk{0%{opacity:1}50%{opacity:.5}to{opacity:1}}@keyframes kS-Dk{0%{opacity:1}50%{opacity:.5}to{opacity:1}}._2uA_F{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}._1Ns0u{max-width:720px;margin:0 auto}._1Ns0u h3{font-size:32px;font-size:2rem;line-height:1.4;font-weight:300;text-align:center;margin-bottom:24px;margin-bottom:1.5rem;margin-top:16px;margin-top:1rem;color:#313131;font-family:Roboto,sans-serif}@media screen and (max-width:850px){._1Ns0u h3{font-size:1.4rem}}._1Ns0u h3 b{font-weight:500}._1Ns0u ._FGb6{font-size:24px;font-size:1.5rem}@media screen and (max-width:850px){._1Ns0u ._FGb6{font-size:1.1rem}}._3tNeC{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}._3tL0D{background-size:cover;position:fixed;top:0;left:0;right:0;bottom:0;z-index:-1;opacity:1}._1_QhH{-webkit-transition:all .25s cubic-bezier(.4,.15,0,.975);-o-transition:all .25s cubic-bezier(.4,.15,0,.975);transition:all .25s cubic-bezier(.4,.15,0,.975);opacity:0}._3Ujcc{width:300px;height:64px;height:4rem;border:0;border-radius:4px;outline:none;background:#eaeaea;font-size:14.4px;font-size:.9rem;color:gray;-webkit-box-sizing:border-box;box-sizing:border-box;padding:0 16px;padding:0 1rem;-moz-appearance:textfield;text-align:center}._3Ujcc::-webkit-inner-spin-button,._3Ujcc::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.SWQ94{width:100px;height:64px;height:4rem;padding:0 16px;padding:0 1rem;margin-left:12px;border-radius:4px;background:#7eb3d5;color:#fff;cursor:pointer;text-align:center;font-weight:800;border:0;font-size:16px;font-size:1rem;-webkit-transition:all .25s cubic-bezier(.4,.15,0,.975);-o-transition:all .25s cubic-bezier(.4,.15,0,.975);transition:all .25s cubic-bezier(.4,.15,0,.975);-webkit-appearance:none}.SWQ94[disabled]{background:#ced5dc;pointer-events:none}.SWQ94:hover{background-color:#6ea3c5}._1nuj4{width:100px;height:64px;height:4rem;padding:0 16px;padding:0 1rem;margin-left:12px;border-radius:4px;background:#7eb3d5;color:#fff;cursor:pointer;text-align:center;font-weight:800;border:0;font-size:16px;font-size:1rem;-webkit-transition:all .25s cubic-bezier(.4,.15,0,.975);-o-transition:all .25s cubic-bezier(.4,.15,0,.975);transition:all .25s cubic-bezier(.4,.15,0,.975);-webkit-appearance:none;background:#fff;color:#7eb3d5}._1nuj4[disabled]{background:#ced5dc;pointer-events:none}._1nuj4:hover{background-color:#6ea3c5}._2rYP6{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-pack:distribute;justify-content:space-around;max-width:900px;margin:auto}@media screen and (max-width:850px){._2rYP6{-webkit-box-orient:vertical;-webkit-box-direction:reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse}}._37jOW{margin-right:20px}@media screen and (max-width:850px){._37jOW{margin-top:20px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center}}._3vmaU{font-size:32px;font-size:2rem;font-weight:300;line-height:1.2;margin-bottom:.2em;margin-top:.2em}@media screen and (max-width:850px){._3vmaU,.IfjeE{text-align:center}}.GO79e h3{margin-top:15px}@media screen and (max-width:850px){.GO79e h3{text-align:center}}._2iFtZ li{list-style:none;margin-top:8px}._2iFtZ ._3cBRu,._2iFtZ li{display:-webkit-box;display:-ms-flexbox;display:flex}._2iFtZ ._3cBRu{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:16px;height:28px;background:50% no-repeat;background-size:16px 16px;margin-right:8px}.YSukd{opacity:.5}._17ez2{min-width:350px;max-width:430px;width:100%;height:323px}@media screen and (max-width:850px){._17ez2{width:100vw;max-width:100vw;min-width:100vw;margin-left:-15px;height:220px}}.JpLuM form{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}.JpLuM h3{margin-bottom:.5em;font-size:16px;font-size:1rem;margin-top:16px;margin-top:1rem}@media screen and (max-width:850px){.JpLuM h3{text-align:center}}.vW35r{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;max-width:300px}@media screen and (max-width:850px){.vW35r{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center}}.vW35r input{min-width:120px;max-width:300px;width:100%}@media screen and (max-width:850px){.vW35r ._3Ujcc{height:40px;width:100%}}@media screen and (max-width:850px){.vW35r .SWQ94{margin-top:10px;height:40px;margin-left:0}}._1tNVA{-webkit-transition:all .5s ease-in-out;-o-transition:all .5s ease-in-out;transition:all .5s ease-in-out;-webkit-animation:kS-Dk normal 1.5s infinite ease-in-out;animation:kS-Dk normal 1.5s infinite ease-in-out}._1tNVA,._1zEpd{font-weight:800;text-align:center}._1zEpd{position:fixed;bottom:0;left:0;right:0;padding:32px;padding:2rem;background:#fff;-webkit-transition:all .25s cubic-bezier(.4,.15,0,.975);-o-transition:all .25s cubic-bezier(.4,.15,0,.975);transition:all .25s cubic-bezier(.4,.15,0,.975);-webkit-box-shadow:0 0 16px solid rgba(0,0,0,.2);box-shadow:0 0 16px solid rgba(0,0,0,.2)}._3Ya97{color:red}._1eiVs{font-size:12.8px;font-size:.8rem;margin:auto;margin-top:40px}", ""]);

// exports
exports.locals = {
	"root": "_2uA_F",
	"lookupContainer": "_1Ns0u",
	"friendHeading": "_FGb6",
	"lookupWrap": "_3tNeC",
	"background": "_3tL0D",
	"backgroundgone": "_1_QhH",
	"input": "_3Ujcc",
	"submit": "SWQ94",
	"submitwhite": "_1nuj4",
	"results": "_2rYP6",
	"leftResults": "_37jOW",
	"kjorstadur": "_3vmaU",
	"votingInfo": "IfjeE",
	"itineriesBox": "GO79e",
	"itineries": "_2iFtZ",
	"icon": "_3cBRu",
	"faded": "YSukd",
	"mapContainer": "_17ez2",
	"currentAddressBox": "JpLuM",
	"currentAddressContainer": "vW35r",
	"fetching": "_1tNVA",
	"blink": "kS-Dk",
	"errormsg": "_1zEpd",
	"fetchError": "_3Ya97",
	"disclaimer": "_1eiVs"
};

/***/ }),

/***/ 201:
/***/ (function(module, exports) {

module.exports = "/assets/bc2cfac3.png";

/***/ }),

/***/ 202:
/***/ (function(module, exports) {

module.exports = "/assets/5e4d2d76.png";

/***/ }),

/***/ 203:
/***/ (function(module, exports) {

module.exports = "/assets/19904944.png";

/***/ }),

/***/ 204:
/***/ (function(module, exports) {

module.exports = "/assets/279cd161.png";

/***/ }),

/***/ 205:
/***/ (function(module, exports) {

module.exports = {"requestParameters":{"date":"2017-10-20","mode":"TRANSIT,WALK","arriveBy":"false","wheelchair":"false","showIntermediateStops":"false","fromPlace":"64.1456203,-21.8666037","toPlace":"64.1163028,-21.7996805","time":"14:50","locale":"is","numItineraries":"3"},"plan":{"date":1508511000000,"from":{"name":"Upphafstaður","lon":-21.8666037,"lat":64.1456203,"orig":"","vertexType":"NORMAL"},"to":{"name":"Áfangastað","lon":-21.7996805,"lat":64.1163028,"orig":"","vertexType":"NORMAL"},"itineraries":[{"duration":1580,"startTime":1508511380000,"endTime":1508512960000,"walkTime":618,"transitTime":960,"waitingTime":2,"walkDistance":731.9999699122933,"walkLimitExceeded":false,"elevationLost":0,"elevationGained":0,"transfers":0,"legs":[{"startTime":1508511380000,"endTime":1508511839000,"departureDelay":0,"arrivalDelay":0,"realTime":false,"distance":548.675,"pathway":false,"mode":"WALK","route":"","agencyTimeZoneOffset":0,"interlineWithPreviousLeg":false,"from":{"name":"Upphafstaður","lon":-21.8666037,"lat":64.1456203,"departure":1508511380000,"orig":"","vertexType":"NORMAL"},"to":{"name":"Hrafnista","stopId":"1:90000188","stopCode":"HRAFNI1","lon":-21.867406,"lat":64.149018,"arrival":1508511839000,"departure":1508511840000,"stopIndex":9,"stopSequence":10,"vertexType":"TRANSIT"},"legGeometry":{"points":"omofKfymdC@s@?W?E?AW???A?????A?????AA????A??????AA?????A??A??A????A??A??A??A??A?????AA??A??AA?????AA??A???A??IUiAuAYtBM`ACRANEXARCXGGIGGx@AJEn@Cb@I`B?HAb@Af@??{CyAYGOCUIKSMPOPKNMHG@E???A@?@?@A??@?@?@?@EFEFQUOUG[GUOWYIQKHk@?A","length":101},"rentedBike":false,"transitLeg":false,"duration":459,"steps":[{"distance":276.106,"relativeDirection":"DEPART","streetName":"göngustígur","absoluteDirection":"EAST","stayOn":false,"area":false,"bogusName":false,"lon":-21.866599417045258,"lat":64.14568240233562,"elevation":[]},{"distance":250.251,"relativeDirection":"RIGHT","streetName":"Ã¾jónustu vegur","absoluteDirection":"NORTH","stayOn":false,"area":false,"bogusName":true,"lon":-21.8685879,"lat":64.1468886,"elevation":[]},{"distance":9.701,"relativeDirection":"CONTINUE","streetName":"Kleppsvegur","absoluteDirection":"NORTH","stayOn":false,"area":false,"bogusName":false,"lon":-21.867757400000002,"lat":64.1489395,"elevation":[]},{"distance":12.617,"relativeDirection":"RIGHT","streetName":"göngustígur","absoluteDirection":"SOUTHEAST","stayOn":false,"area":false,"bogusName":true,"lon":-21.867695700000002,"lat":64.1490225,"elevation":[]}]},{"startTime":1508511840000,"endTime":1508512800000,"departureDelay":0,"arrivalDelay":0,"realTime":false,"distance":6526.983823317477,"pathway":false,"mode":"BUS","route":"16","agencyName":"Strætó bs.","agencyUrl":"http://straeto.is/","agencyTimeZoneOffset":0,"routeType":3,"routeId":"1:16.17301.ST","interlineWithPreviousLeg":false,"tripBlockId":"4414","headsign":"Árbær/Hraunsás","agencyId":"1","tripId":"1:306945","serviceDate":"20171020","from":{"name":"Hrafnista","stopId":"1:90000188","stopCode":"HRAFNI1","lon":-21.867406,"lat":64.149018,"arrival":1508511839000,"departure":1508511840000,"stopIndex":9,"stopSequence":10,"vertexType":"TRANSIT"},"to":{"name":"Bæjarbraut","stopId":"1:90000732","stopCode":"BÆJARB8","lon":-21.799352,"lat":64.117652,"arrival":1508512800000,"departure":1508512801000,"stopIndex":22,"stopSequence":23,"vertexType":"TRANSIT"},"legGeometry":{"points":"ubpfKz}mdCZ{B`@sC^{BPcAPgARaANu@XoANq@Ry@T}@XeA\\mAl@mBd@uAf@yAd@qA\\cAZy@zDaLjEiMfBkFhA{C^aA`@{@b@w@JQ^k@j@{@h@m@v@u@n@e@bAi@|@[d@Kb@G\\Ax@Cn@E|@EzDMpDMhFQtDMnEObCIRArACb@CdFUdIc@pEUbG[p@G|AMvC]zCa@jAWj@M\\Ih@KVGb@K^IlBa@JNZCVC\\@THVb@Pf@Fh@@p@E`AQbAUr@[j@WZ_@J]H[?c@Ba@EYUQ_@Ms@E}@@aADwCBc@HaAn@yIb@eHLaCPsDX}GX}H?IJiEHyCDoBP_CTcDFw@Hu@BUDKHYFMFIHGFC@?J?HBHDHHFJFPBLDTBVBf@?dB@fE?dE?rC@`@WLu@h@y@h@u@\\G?WDA?O@??MA]C_@I?A???A???A???A???A???A???A???A???A???A???A???AA??A?????A???A???A???A??AA?????A???A???AA????A?????A??AA?????A?????AA????A????A??A???????AA??????A??A??????A??A???????A??A????????FwFFmED{B@mA@iA?}@@i@?_A?g@?u@A{BAgHAY?iB?s@AgBAaCCyCA}@?mAGwCG_BCi@UeCO_BIi@Q_B[aCSwCKsBC}@fCK\\CJ?DAj@?X?L?LA@?@?H@??l@A|@ABxB@lA@nC@vA??@^?bA@v@@Z@VF`@BPBL@D@@HXHNFHDBFFFDF@RD?A@?@@hARFAF?BABAFEBE@ADIJKDABAZFt@JN@B@HEJWFa@@q@FqDD_BAu@I_AAS_@mDCo@@aAJ}FTiKNcI@q@FcEA{@?m@?IBiADuBBaBBaC?oA?{B???[?Y??@}A?_BDaBLk@HeAHy@Fu@ZeDj@gGRyBTgCUOi@_@}AcAWQ[SKEQGKCy@MSC??u@Mi@ES?{@FwCFCgE?u@G{K?k@???{A?S?YEeD?}@CkHAcGCiDHkBFeA\\\\d@LX???D@h@CfAExBGr@C\\A`@?N@L?H?J@J@F@NDXFHDJBHDLFPH\\TDB|@l@b@Zb@Z??n@d@vA`AAF?F?J@H@H@HBDBDB@B?B?BABABEBI@K@ClBnAFj@RSf@^f@\\","length":443},"routeShortName":"16","rentedBike":false,"transitLeg":true,"duration":960,"steps":[]},{"startTime":1508512801000,"endTime":1508512960000,"departureDelay":0,"arrivalDelay":0,"realTime":false,"distance":182.93699999999998,"pathway":false,"mode":"WALK","route":"","agencyTimeZoneOffset":0,"interlineWithPreviousLeg":false,"from":{"name":"Bæjarbraut","stopId":"1:90000732","stopCode":"BÆJARB8","lon":-21.799352,"lat":64.117652,"arrival":1508512800000,"departure":1508512801000,"stopIndex":22,"stopSequence":23,"vertexType":"TRANSIT"},"to":{"name":"Áfangastað","lon":-21.7996805,"lat":64.1163028,"arrival":1508512960000,"orig":"","vertexType":"NORMAL"},"legGeometry":{"points":"k~ifKlu`dCRNx@j@hBnA@O@QPJLiBJFPLTP","length":11},"rentedBike":false,"transitLeg":false,"duration":159,"steps":[{"distance":116.30599999999998,"relativeDirection":"DEPART","streetName":"göngustígur","absoluteDirection":"SOUTH","stayOn":false,"area":false,"bogusName":true,"lon":-21.79942940354801,"lat":64.1176631216134,"elevation":[]},{"distance":9.644,"relativeDirection":"RIGHT","streetName":"Bæjarbraut","absoluteDirection":"SOUTH","stayOn":false,"area":false,"bogusName":false,"lon":-21.799952400000002,"lat":64.1167214,"elevation":[]},{"distance":26.816,"relativeDirection":"LEFT","streetName":"Rofabær","absoluteDirection":"EAST","stayOn":false,"area":false,"bogusName":false,"lon":-21.800012300000002,"lat":64.11663870000001,"elevation":[]},{"distance":30.171,"relativeDirection":"RIGHT","streetName":"road","absoluteDirection":"SOUTH","stayOn":false,"area":false,"bogusName":true,"lon":-21.7994893,"lat":64.116561,"elevation":[]}]}],"tooSloped":false},{"duration":1971,"startTime":1508511782000,"endTime":1508513753000,"walkTime":375,"transitTime":1440,"waitingTime":156,"walkDistance":459.4325112732098,"walkLimitExceeded":false,"elevationLost":0,"elevationGained":0,"transfers":1,"legs":[{"startTime":1508511782000,"endTime":1508511959000,"departureDelay":0,"arrivalDelay":0,"realTime":false,"distance":209.639,"pathway":false,"mode":"WALK","route":"","agencyTimeZoneOffset":0,"interlineWithPreviousLeg":false,"from":{"name":"Upphafstaður","lon":-21.8666037,"lat":64.1456203,"departure":1508511782000,"orig":"","vertexType":"NORMAL"},"to":{"name":"Hrafnista","stopId":"1:90000249","stopCode":"AUSTUR5","lon":-21.867253,"lat":64.146758,"arrival":1508511959000,"departure":1508511960000,"stopIndex":18,"stopSequence":19,"vertexType":"TRANSIT"},"legGeometry":{"points":"omofKfymdC@s@?W?E?AW???A?????A?????AA????A??????AA?????A??A??A????A??A??A??A??A?????AA??A??AA?????AA??A???A??IUiAuAYtBM`ACRANEXARCXGGIGGx@AJ","length":63},"rentedBike":false,"transitLeg":false,"duration":177,"steps":[{"distance":209.639,"relativeDirection":"DEPART","streetName":"göngustígur","absoluteDirection":"EAST","stayOn":false,"area":false,"bogusName":false,"lon":-21.866599417045258,"lat":64.14568240233562,"elevation":[]}]},{"startTime":1508511960000,"endTime":1508512380000,"departureDelay":0,"arrivalDelay":0,"realTime":false,"distance":1713.1428650662126,"pathway":false,"mode":"BUS","route":"14","agencyName":"Strætó bs.","agencyUrl":"http://straeto.is/","agencyTimeZoneOffset":0,"routeType":3,"routeId":"1:14.17301.ST","interlineWithPreviousLeg":false,"tripBlockId":"4408","headsign":"Grandi","agencyId":"1","tripId":"1:308544","serviceDate":"20171020","from":{"name":"Hrafnista","stopId":"1:90000249","stopCode":"AUSTUR5","lon":-21.867253,"lat":64.146758,"arrival":1508511959000,"departure":1508511960000,"stopIndex":18,"stopSequence":19,"vertexType":"TRANSIT"},"to":{"name":"Hátún","stopId":"1:90000049","stopCode":"LAUGAV2","lon":-21.898187,"lat":64.141195,"arrival":1508512380000,"departure":1508512380000,"stopIndex":22,"stopSequence":23,"vertexType":"TRANSIT"},"legGeometry":{"points":"}sofKn}mdCIbACr@ItBA\\CjA?jC?|@@|@?b@@|B?fB@zC@lC@~A?XAd@?v@AhAC?A@CBADCD?FAF?F@D?D@B@D@B@B@@@@B?@?Bp@@p@@hA@`@@~CDpH@|EAfA?RChA?n@LtH@lA@pC@vB@lA@bE@pC?dA@p@@tC?j@@lA@zBDlC@RBdBDdBD`B?FHxDFdDBx@lAQXIbAUx@Qf@KVA~@@`CTP@??zEb@ZBb@D`AHtBPxAXv@?n@`@PVJXFj@Bb@e@nFK~@Gp@Gf@Eb@OjA[|BS~A]jC","length":101},"routeShortName":"14","rentedBike":false,"transitLeg":true,"duration":420,"steps":[]},{"startTime":1508512380000,"endTime":1508512466000,"departureDelay":0,"arrivalDelay":0,"realTime":false,"distance":110.928,"pathway":false,"mode":"WALK","route":"","agencyTimeZoneOffset":0,"interlineWithPreviousLeg":false,"from":{"name":"Hátún","stopId":"1:90000049","stopCode":"LAUGAV2","lon":-21.898187,"lat":64.141195,"arrival":1508512380000,"departure":1508512380000,"stopIndex":22,"stopSequence":23,"vertexType":"TRANSIT"},"to":{"name":"Gamla sjónvarpshúsið","stopId":"1:90000031","stopCode":"LAUGAV1","lon":-21.896676,"lat":64.140661,"arrival":1508512466000,"departure":1508512620000,"stopIndex":7,"stopSequence":8,"vertexType":"TRANSIT"},"legGeometry":{"points":"mqnfKt~sdC?CJ{@DODSBMBOBOFFLLHHf@yD","length":12},"rentedBike":false,"transitLeg":false,"duration":86,"steps":[{"distance":110.928,"relativeDirection":"DEPART","streetName":"Hátún => Gamla sjónvarpshúsið","absoluteDirection":"SOUTHEAST","stayOn":false,"area":false,"bogusName":false,"lon":-21.898187,"lat":64.141195,"elevation":[]}]},{"startTime":1508512620000,"endTime":1508513640000,"departureDelay":0,"arrivalDelay":0,"realTime":false,"distance":5733.490338898779,"pathway":false,"mode":"BUS","route":"5","agencyName":"Strætó bs.","agencyUrl":"http://straeto.is/","agencyTimeZoneOffset":0,"routeType":3,"routeId":"1:5.17301.ST","interlineWithPreviousLeg":false,"tripBlockId":"4179","headsign":"Norðlingaholt","agencyId":"1","tripId":"1:306550","serviceDate":"20171020","from":{"name":"Gamla sjónvarpshúsið","stopId":"1:90000031","stopCode":"LAUGAV1","lon":-21.896676,"lat":64.140661,"arrival":1508512466000,"departure":1508512620000,"stopIndex":7,"stopSequence":8,"vertexType":"TRANSIT"},"to":{"name":"Rofabær / Hábær","stopId":"1:90000400","stopCode":"ROFABÆ1","lon":-21.801618,"lat":64.11686,"arrival":1508513640000,"departure":1508513641000,"stopIndex":17,"stopSequence":18,"vertexType":"TRANSIT"},"legGeometry":{"points":"innfK~tsdCD_@Hq@NiAH{@@?ZqCHm@V{BJgAHoAFq@BoA?e@@aACsAK}CUqHCyAAgA?kB??AiB?gE?}A@mA@}ABcADoAD_ABi@BQB_@HeAN}ARgBRqAN}@P_AXmA@EP{@^yAj@mBV{@JY^mAVs@FOn@cB^{@bBsDdD}GBGlAgCpAkCPa@x@aBFf@GTFUGg@@CvCeGJUh@iAl@oAP]nAiCpBeE|@mBf@cAz@iB`@{@Vg@`@}@^_Ab@gAx@}B^mAl@qBfAcEFSBIBEPUBBDBB?DADABEBEBGPCTH`@T`@J\\H@???TB\\@R@dDSLH|BQ@?@A`@CDAJA\\@LDLLJPDFDPFPBRBVBR?V?X?XAb@C\\C\\I`@ERGPGLGFMFK@KAKGIIIOGUCWCUAU@w@ToFBY@YBm@h@sFjCyXRsBvBcUbAoKnAyNBc@HaAn@yIb@eHLaCPsDX}GX}H?IJiEHyCDoBDeDD}CFuEBqF@aG?cEAeJEsLK{WAo@AwDC_G??AaEEkNJwMHeFDaDJyCDkBBg@D[JYV]b@G\\E^Ad@Ab@Ab@?h@?n@Dl@Ff@J^J`@Lb@PLk@HeAHy@Fu@ZeDj@gGRyBTgCj@`@x@l@??XRB@fBlA^Vb@Zd@\\z@j@d@\\TPNoBJsAP{B@KHeAJuATuCL}A^aFT{CT{CDk@XcDHiA","length":237},"routeShortName":"5","rentedBike":false,"transitLeg":true,"duration":1020,"steps":[]},{"startTime":1508513641000,"endTime":1508513753000,"departureDelay":0,"arrivalDelay":0,"realTime":false,"distance":138.71099999999998,"pathway":false,"mode":"WALK","route":"","agencyTimeZoneOffset":0,"interlineWithPreviousLeg":false,"from":{"name":"Rofabær / Hábær","stopId":"1:90000400","stopCode":"ROFABÆ1","lon":-21.801618,"lat":64.11686,"arrival":1508513640000,"departure":1508513641000,"stopIndex":17,"stopSequence":18,"vertexType":"TRANSIT"},"to":{"name":"Áfangastað","lon":-21.7996805,"lat":64.1163028,"arrival":1508513753000,"orig":"","vertexType":"NORMAL"},"legGeometry":{"points":"kyifKbcadCBa@JqA\\kELiBJFPLTP","length":8},"rentedBike":false,"transitLeg":false,"duration":112,"steps":[{"distance":108.53999999999999,"relativeDirection":"DEPART","streetName":"Rofabær","absoluteDirection":"EAST","stayOn":false,"area":false,"bogusName":false,"lon":-21.801611916972195,"lat":64.11686796826201,"elevation":[]},{"distance":30.171,"relativeDirection":"RIGHT","streetName":"road","absoluteDirection":"SOUTH","stayOn":false,"area":false,"bogusName":true,"lon":-21.7994893,"lat":64.116561,"elevation":[]}]}],"tooSloped":false},{"duration":1580,"startTime":1508513180000,"endTime":1508514760000,"walkTime":618,"transitTime":960,"waitingTime":2,"walkDistance":731.9999699122933,"walkLimitExceeded":false,"elevationLost":0,"elevationGained":0,"transfers":0,"legs":[{"startTime":1508513180000,"endTime":1508513639000,"departureDelay":0,"arrivalDelay":0,"realTime":false,"distance":548.675,"pathway":false,"mode":"WALK","route":"","agencyTimeZoneOffset":0,"interlineWithPreviousLeg":false,"from":{"name":"Upphafstaður","lon":-21.8666037,"lat":64.1456203,"departure":1508513180000,"orig":"","vertexType":"NORMAL"},"to":{"name":"Hrafnista","stopId":"1:90000188","stopCode":"HRAFNI1","lon":-21.867406,"lat":64.149018,"arrival":1508513639000,"departure":1508513640000,"stopIndex":9,"stopSequence":10,"vertexType":"TRANSIT"},"legGeometry":{"points":"omofKfymdC@s@?W?E?AW???A?????A?????AA????A??????AA?????A??A??A????A??A??A??A??A?????AA??A??AA?????AA??A???A??IUiAuAYtBM`ACRANEXARCXGGIGGx@AJEn@Cb@I`B?HAb@Af@??{CyAYGOCUIKSMPOPKNMHG@E???A@?@?@A??@?@?@?@EFEFQUOUG[GUOWYIQKHk@?A","length":101},"rentedBike":false,"transitLeg":false,"duration":459,"steps":[{"distance":276.106,"relativeDirection":"DEPART","streetName":"göngustígur","absoluteDirection":"EAST","stayOn":false,"area":false,"bogusName":false,"lon":-21.866599417045258,"lat":64.14568240233562,"elevation":[]},{"distance":250.251,"relativeDirection":"RIGHT","streetName":"Ã¾jónustu vegur","absoluteDirection":"NORTH","stayOn":false,"area":false,"bogusName":true,"lon":-21.8685879,"lat":64.1468886,"elevation":[]},{"distance":9.701,"relativeDirection":"CONTINUE","streetName":"Kleppsvegur","absoluteDirection":"NORTH","stayOn":false,"area":false,"bogusName":false,"lon":-21.867757400000002,"lat":64.1489395,"elevation":[]},{"distance":12.617,"relativeDirection":"RIGHT","streetName":"göngustígur","absoluteDirection":"SOUTHEAST","stayOn":false,"area":false,"bogusName":true,"lon":-21.867695700000002,"lat":64.1490225,"elevation":[]}]},{"startTime":1508513640000,"endTime":1508514600000,"departureDelay":0,"arrivalDelay":0,"realTime":false,"distance":6526.983823317477,"pathway":false,"mode":"BUS","route":"16","agencyName":"Strætó bs.","agencyUrl":"http://straeto.is/","agencyTimeZoneOffset":0,"routeType":3,"routeId":"1:16.17301.ST","interlineWithPreviousLeg":false,"tripBlockId":"4416","headsign":"Árbær/Hraunsás","agencyId":"1","tripId":"1:306944","serviceDate":"20171020","from":{"name":"Hrafnista","stopId":"1:90000188","stopCode":"HRAFNI1","lon":-21.867406,"lat":64.149018,"arrival":1508513639000,"departure":1508513640000,"stopIndex":9,"stopSequence":10,"vertexType":"TRANSIT"},"to":{"name":"Bæjarbraut","stopId":"1:90000732","stopCode":"BÆJARB8","lon":-21.799352,"lat":64.117652,"arrival":1508514600000,"departure":1508514601000,"stopIndex":22,"stopSequence":23,"vertexType":"TRANSIT"},"legGeometry":{"points":"ubpfKz}mdCZ{B`@sC^{BPcAPgARaANu@XoANq@Ry@T}@XeA\\mAl@mBd@uAf@yAd@qA\\cAZy@zDaLjEiMfBkFhA{C^aA`@{@b@w@JQ^k@j@{@h@m@v@u@n@e@bAi@|@[d@Kb@G\\Ax@Cn@E|@EzDMpDMhFQtDMnEObCIRArACb@CdFUdIc@pEUbG[p@G|AMvC]zCa@jAWj@M\\Ih@KVGb@K^IlBa@JNZCVC\\@THVb@Pf@Fh@@p@E`AQbAUr@[j@WZ_@J]H[?c@Ba@EYUQ_@Ms@E}@@aADwCBc@HaAn@yIb@eHLaCPsDX}GX}H?IJiEHyCDoBP_CTcDFw@Hu@BUDKHYFMFIHGFC@?J?HBHDHHFJFPBLDTBVBf@?dB@fE?dE?rC@`@WLu@h@y@h@u@\\G?WDA?O@??MA]C_@I?A???A???A???A???A???A???A???A???A???A???A???AA??A?????A???A???A???A??AA?????A???A???AA????A?????A??AA?????A?????AA????A????A??A???????AA??????A??A??????A??A???????A??A????????FwFFmED{B@mA@iA?}@@i@?_A?g@?u@A{BAgHAY?iB?s@AgBAaCCyCA}@?mAGwCG_BCi@UeCO_BIi@Q_B[aCSwCKsBC}@fCK\\CJ?DAj@?X?L?LA@?@?H@??l@A|@ABxB@lA@nC@vA??@^?bA@v@@Z@VF`@BPBL@D@@HXHNFHDBFFFDF@RD?A@?@@hARFAF?BABAFEBE@ADIJKDABAZFt@JN@B@HEJWFa@@q@FqDD_BAu@I_AAS_@mDCo@@aAJ}FTiKNcI@q@FcEA{@?m@?IBiADuBBaBBaC?oA?{B???[?Y??@}A?_BDaBLk@HeAHy@Fu@ZeDj@gGRyBTgCUOi@_@}AcAWQ[SKEQGKCy@MSC??u@Mi@ES?{@FwCFCgE?u@G{K?k@???{A?S?YEeD?}@CkHAcGCiDHkBFeA\\\\d@LX???D@h@CfAExBGr@C\\A`@?N@L?H?J@J@F@NDXFHDJBHDLFPH\\TDB|@l@b@Zb@Z??n@d@vA`AAF?F?J@H@H@HBDBDB@B?B?BABABEBI@K@ClBnAFj@RSf@^f@\\","length":443},"routeShortName":"16","rentedBike":false,"transitLeg":true,"duration":960,"steps":[]},{"startTime":1508514601000,"endTime":1508514760000,"departureDelay":0,"arrivalDelay":0,"realTime":false,"distance":182.93699999999998,"pathway":false,"mode":"WALK","route":"","agencyTimeZoneOffset":0,"interlineWithPreviousLeg":false,"from":{"name":"Bæjarbraut","stopId":"1:90000732","stopCode":"BÆJARB8","lon":-21.799352,"lat":64.117652,"arrival":1508514600000,"departure":1508514601000,"stopIndex":22,"stopSequence":23,"vertexType":"TRANSIT"},"to":{"name":"Áfangastað","lon":-21.7996805,"lat":64.1163028,"arrival":1508514760000,"orig":"","vertexType":"NORMAL"},"legGeometry":{"points":"k~ifKlu`dCRNx@j@hBnA@O@QPJLiBJFPLTP","length":11},"rentedBike":false,"transitLeg":false,"duration":159,"steps":[{"distance":116.30599999999998,"relativeDirection":"DEPART","streetName":"göngustígur","absoluteDirection":"SOUTH","stayOn":false,"area":false,"bogusName":true,"lon":-21.79942940354801,"lat":64.1176631216134,"elevation":[]},{"distance":9.644,"relativeDirection":"RIGHT","streetName":"Bæjarbraut","absoluteDirection":"SOUTH","stayOn":false,"area":false,"bogusName":false,"lon":-21.799952400000002,"lat":64.1167214,"elevation":[]},{"distance":26.816,"relativeDirection":"LEFT","streetName":"Rofabær","absoluteDirection":"EAST","stayOn":false,"area":false,"bogusName":false,"lon":-21.800012300000002,"lat":64.11663870000001,"elevation":[]},{"distance":30.171,"relativeDirection":"RIGHT","streetName":"road","absoluteDirection":"SOUTH","stayOn":false,"area":false,"bogusName":true,"lon":-21.7994893,"lat":64.116561,"elevation":[]}]}],"tooSloped":false}]},"debugOutput":{"precalculationTime":66,"pathCalculationTime":63,"pathTimes":[26,18,19],"renderingTime":1,"totalTime":130,"timedOut":false}}

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/* global google */




class Autocomplete extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.PureComponent {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.state = {
      autocomplete: null
    }, this.onChange = () => {
      const place = this.state.autocomplete.getPlace();

      if (this.props.onChange) {
        this.props.onChange(place);
      }
    }, _temp;
  }

  componentDidMount() {
    const element = __WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.findDOMNode(this);
    const autocomplete = new google.maps.places.Autocomplete(element, {
      componentRestrictions: {
        country: 'is'
      },
      types: ['geocode']
    });
    this.changeListener = google.maps.event.addListener(autocomplete, 'place_changed', this.onChange);
    this.setState({
      autocomplete
    });
  }

  componentWillUnmount() {
    google.maps.event.removeListener(this.changeListener);
  }

  getPlace() {
    return this.state.autocomplete.getPlace() || {
      name: this.input.value || this.input.placeholder
    };
  }

  render() {
    const _props = this.props,
          { onChange } = _props,
          props = _objectWithoutProperties(_props, ['onChange']);
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', _extends({ ref: input => {
        this.input = input;
      } }, props));
  }
}

/* harmony default export */ __webpack_exports__["a"] = (Autocomplete);

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_countdown_now__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_countdown_now___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_countdown_now__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__OpeningHours_scss__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__OpeningHours_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__OpeningHours_scss__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();







var _ref = _jsx('div', {}, void 0, 'Kosningum er loki\xF0');

class OpeningHours extends __WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"] {
  render() {
    const { sveitafelag } = this.props;
    const now = new Date();
    const pollingStations = [{ municipality: 'Ísafjörður', open: '9:00', close: '21:00' }, { municipality: 'Bolungarvík', open: '10:00', close: '21:00' }, { municipality: 'Akureyri', open: '9:00', close: '22:00' }, { municipality: 'Blönduós', open: '10:00', close: '22:00' }, { municipality: 'Fljótsdalshérað', open: '9:00', close: '22:00' }, { municipality: 'Reykjanesbær', open: '9:00', close: '22:00' }, { municipality: 'Akranes', open: '9:00', close: '22:00' }, { municipality: 'Garðabær', open: '9:00', close: '22:00' }, { municipality: 'Hafnarfjörður', open: '9:00', close: '22:00' }, { municipality: 'Kópavogur', open: '9:00', close: '22:00' }, { municipality: 'Mosfellsbær', open: '9:00', close: '22:00' }, { municipality: 'Seltjarnarnes', open: '9:00', close: '22:00' }, { municipality: 'Reykjavík', open: '9:00', close: '22:00' }];

    const pollingStation = pollingStations.find(station => station.municipality.includes(sveitafelag));
    let start;
    let end;
    let showCountdown;

    if (pollingStation) {
      start = new Date(Date.UTC(2021, 9, 25, pollingStation.open.split(':')[0]));
      end = new Date(Date.UTC(2021, 9, 25, pollingStation.close.split(':')[0]));
      showCountdown = now.getTime() > start.getTime() && now.getTime() < end.getTime();
    }
    return _jsx('div', {}, void 0, pollingStation && _jsx('div', {}, void 0, _jsx('div', {
      className: __WEBPACK_IMPORTED_MODULE_4__OpeningHours_scss___default.a.centerTextSmall
    }, void 0, 'Kj\xF6rsta\xF0urinn \xFEinn ver\xF0ur opinn fr\xE1 klukkan', _jsx('b', {}, void 0, ' ', pollingStation.open, ' - ', pollingStation.close), ' ', '\xE1 kj\xF6rdag.'), _jsx('div', {}, void 0, showCountdown && _jsx(__WEBPACK_IMPORTED_MODULE_2_react_countdown_now___default.a, {
      date: end,
      renderer: ({ hours, minutes, completed }) => {
        if (completed) {
          // Render a completed state
          return _ref;
        }
        let out = '';

        if (hours > 0) {
          out = `Þú hefur enn ${hours} klukkustundir og ${minutes} mínútur til stefnu!`;
        }
        return _jsx('span', {
          className: __WEBPACK_IMPORTED_MODULE_4__OpeningHours_scss___default.a.centerTextSmall
        }, void 0, out);
      }
    }))));
  }
}

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_3_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_4__OpeningHours_scss___default.a)(OpeningHours));

/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(209);
    var insertCss = __webpack_require__(7);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!../../../node_modules/sass-loader/dist/cjs.js!./OpeningHours.scss", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!../../../node_modules/sass-loader/dist/cjs.js!./OpeningHours.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 209:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "@media screen and (max-width:850px){._3JZqv{text-align:center}}", ""]);

// exports
exports.locals = {
	"centerTextSmall": "_3JZqv"
};

/***/ }),

/***/ 77:
/***/ (function(module, exports) {

module.exports = "/assets/5314b16f.svg";

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__history__ = __webpack_require__(81);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }





function isMainClickEvent(event) {
  return event.button === 0;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

function isRemote(href) {
  if (__WEBPACK_IMPORTED_MODULE_2__history__["a" /* default */] == null || !href) {
    return false;
  }

  const locationHost = __WEBPACK_IMPORTED_MODULE_2__history__["a" /* default */].location.host;
  const match = href.match(/^(?:\w+:)?\/\/([^/\s]+)/);
  return match && match[1] !== locationHost;
}

function isProtocol(href) {
  return href.match(/^(?:tel|mailto):/);
}

const Link = (_ref) => {
  let { href, afterClick } = _ref,
      rest = _objectWithoutProperties(_ref, ['href', 'afterClick']);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('a', _extends({
    href: href
  }, rest.target === '_blank' && {
    rel: 'noreferrer noopener'
  }, rest, {
    onClick: event => {
      if (__WEBPACK_IMPORTED_MODULE_2__history__["a" /* default */] == null) {
        return;
      }

      if (isRemote(href)) {
        return;
      }

      if (isProtocol(href)) {
        return;
      }

      if (isModifiedEvent(event) || !isMainClickEvent(event)) {
        return;
      }

      __WEBPACK_IMPORTED_MODULE_2__history__["a" /* default */].push(href);
      if (typeof afterClick === 'function') {
        afterClick(href);
      }
      event.preventDefault();
    }
  }));
};

Link.protoTypes = {
  href: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string.isRequired,
  afterClick: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func
};

/* harmony default export */ __webpack_exports__["a"] = (Link);

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Container__ = __webpack_require__(80);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Container__["a"]; });


/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Container_scss__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Container_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Container_scss__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();





const Container = ({ children }) => _jsx('div', {
  className: __WEBPACK_IMPORTED_MODULE_2__Container_scss___default.a.root
}, void 0, children);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_2__Container_scss___default.a)(Container));

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_history__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_history___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_history__);
/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */



// Navigation manager, e.g. history.push('/home')
// https://github.com/mjackson/history
/* harmony default export */ __webpack_exports__["a"] = (false && Object(__WEBPACK_IMPORTED_MODULE_0_history__["createBrowserHistory"])());

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Layout_scss__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Layout_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Layout_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Header__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Footer__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Container__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__logo_svg__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__logo_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__logo_svg__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();









var _ref = _jsx(__WEBPACK_IMPORTED_MODULE_4__Footer__["a" /* default */], {});

class Layout extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {
  render() {
    const {
      page,
      title,
      altTitle,
      altTitleTwo,
      children,
      color,
      textColor,
      isEmbed = false,
      showHeader = true
    } = this.props;

    if (isEmbed) {
      return _jsx('div', {
        className: __WEBPACK_IMPORTED_MODULE_2__Layout_scss___default.a.root
      }, void 0, _jsx('header', {}, void 0, _jsx('a', {
        href: 'https://voliprav.si/',
        target: '_blank'
      }, void 0, _jsx('img', {
        className: __WEBPACK_IMPORTED_MODULE_2__Layout_scss___default.a.logo,
        src: __WEBPACK_IMPORTED_MODULE_6__logo_svg___default.a,
        alt: 'Voli prav'
      }))), _jsx('main', {
        className: __WEBPACK_IMPORTED_MODULE_2__Layout_scss___default.a.main
      }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_5__Container__["a" /* default */], {}, void 0, children)));
    }

    return _jsx('div', {
      className: __WEBPACK_IMPORTED_MODULE_2__Layout_scss___default.a.root
    }, void 0, showHeader && _jsx(__WEBPACK_IMPORTED_MODULE_3__Header__["a" /* default */], {
      page: page
    }), _jsx('main', {
      className: __WEBPACK_IMPORTED_MODULE_2__Layout_scss___default.a.main
    }, void 0, title && _jsx('header', {
      className: __WEBPACK_IMPORTED_MODULE_2__Layout_scss___default.a.subHeader,
      style: color == null ? undefined : {
        backgroundColor: color
      }
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_5__Container__["a" /* default */], {}, void 0, _jsx('div', {
      className: __WEBPACK_IMPORTED_MODULE_2__Layout_scss___default.a.subHeaderContent
    }, void 0, _jsx('h2', {
      className: __WEBPACK_IMPORTED_MODULE_2__Layout_scss___default.a.title,
      style: textColor ? {
        color: textColor
      } : undefined
    }, void 0, title), _jsx('p', {
      className: __WEBPACK_IMPORTED_MODULE_2__Layout_scss___default.a.altTitle,
      style: textColor ? {
        color: textColor
      } : undefined
    }, void 0, altTitle), altTitleTwo && _jsx('p', {
      className: __WEBPACK_IMPORTED_MODULE_2__Layout_scss___default.a.altTitle,
      style: textColor ? {
        color: textColor
      } : undefined
    }, void 0, altTitleTwo)))), _jsx(__WEBPACK_IMPORTED_MODULE_5__Container__["a" /* default */], {}, void 0, children)), _ref);
  }
}

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_2__Layout_scss___default.a)(Layout));

/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(84);
    var insertCss = __webpack_require__(7);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!../../../node_modules/sass-loader/dist/cjs.js!./Layout.scss", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!../../../node_modules/sass-loader/dist/cjs.js!./Layout.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "*,:after,:before{-webkit-box-sizing:inherit;box-sizing:inherit;margin:0;padding:0}html{color:#222;font-weight:400;font-size:16px;font-family:Roboto,sans-serif;line-height:1.75;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased}._1fqjz{display:-webkit-box;display:-ms-flexbox;display:flex;min-height:100vh;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}._2LtWy{background:#909dab;margin-bottom:2em;padding-bottom:calc(5px + .91667vw);padding-top:calc(5px + .91667vw)}@media(min-width:1200px){._2LtWy{padding-bottom:16px;padding-top:16px}}._2G7HN{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}._3ox9c,._3ox9c a,.wnyMH{color:#fff;text-decoration:none;font-size:calc(12px + .33333vw)}@media(min-width:1200px){._3ox9c,._3ox9c a,.wnyMH{font-size:16px}}._36cKf{-webkit-box-flex:1;-ms-flex:1 1 auto;flex:1 1 auto}._1qVSm{display:block;margin:48px auto 0;margin:3rem auto 0;width:140px}", ""]);

// exports
exports.locals = {
	"root": "_1fqjz",
	"subHeader": "_2LtWy",
	"subHeaderContent": "_2G7HN",
	"altTitle": "_3ox9c",
	"title": "wnyMH",
	"main": "_36cKf",
	"logo": "_1qVSm"
};

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Container__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Countdown__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Link__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Header_scss__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Header_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__Header_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__logo_svg__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__logo_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__logo_svg__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();










var _ref = _jsx(__WEBPACK_IMPORTED_MODULE_4__Countdown__["a" /* default */], {});

class Header extends __WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"] {
  constructor(...args) {
    var _temp;

    return _temp = super(...args), this.state = {
      isTop: true,
      isOpen: false
    }, this.lastScrollPos = undefined, this.scroll = () => {
      const scroll = window.pageYOffset;
      if (this.lastScrollPos === scroll) {
        return;
      }

      this.lastScrollPos = scroll;
      this.setState({
        isTop: scroll < 120
      });
    }, _temp;
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scroll);
    this.scroll();
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.scroll);
  }

  toggle(state) {
    const force = state == null;
    this.setState(({ isOpen }) => ({
      isOpen: force ? !isOpen : state
    }));
  }
  renderLinks() {
    const { page } = this.props;

    console.log('page', page);

    return [_jsx(__WEBPACK_IMPORTED_MODULE_5__Link__["a" /* default */], {
      afterClick: () => this.toggle(false),
      href: '/',
      className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(__WEBPACK_IMPORTED_MODULE_6__Header_scss___default.a.politics, page === 'parties' ? __WEBPACK_IMPORTED_MODULE_6__Header_scss___default.a.active : null)
    }, 'home', 'Stranke'), _jsx(__WEBPACK_IMPORTED_MODULE_5__Link__["a" /* default */], {
      afterClick: () => this.toggle(false),
      href: '/tematike/davki',
      className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(page === 'tematike' ? __WEBPACK_IMPORTED_MODULE_6__Header_scss___default.a.active : null)
    }, 'tematike-davki', 'Programske tematike'), _jsx(__WEBPACK_IMPORTED_MODULE_5__Link__["a" /* default */], {
      afterClick: () => this.toggle(false),
      href: 'https://www.dvk-rs.si/volisca/#/',
      target: '_blank'
    }, 'zemljevid', 'Zemljevid voli\u0161\u010D'), _jsx(__WEBPACK_IMPORTED_MODULE_5__Link__["a" /* default */], {
      afterClick: () => this.toggle(false),
      href: '/vprasalnik',
      className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(page === 'kosningaprof' ? __WEBPACK_IMPORTED_MODULE_6__Header_scss___default.a.active : null)
    }, 'vprasalnik', 'Vpra\u0161alnik'), _jsx(__WEBPACK_IMPORTED_MODULE_5__Link__["a" /* default */], {
      afterClick: () => this.toggle(false),
      href: '/stranke/primerjaj',
      className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(page === 'compare-parties' ? __WEBPACK_IMPORTED_MODULE_6__Header_scss___default.a.active : null)
    }, 'stranke/primerjaj', 'Primerjaj'), _jsx(__WEBPACK_IMPORTED_MODULE_5__Link__["a" /* default */], {
      afterClick: () => this.toggle(false),
      className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(page === 'prejsnje-volitve' ? __WEBPACK_IMPORTED_MODULE_6__Header_scss___default.a.active : null),
      href: '/prejsnje-volitve'
    }, 'prejsnje-volitve', 'Prej\u0161nje volitve')];
  }
  render() {
    const { isTop, isOpen } = this.state;
    return _jsx('div', {}, void 0, _jsx('div', {
      className: __WEBPACK_IMPORTED_MODULE_6__Header_scss___default.a.fake
    }), _jsx('header', {
      className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(__WEBPACK_IMPORTED_MODULE_6__Header_scss___default.a.root, isOpen && __WEBPACK_IMPORTED_MODULE_6__Header_scss___default.a.isOpen, !isTop && __WEBPACK_IMPORTED_MODULE_6__Header_scss___default.a.sticky)
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_3__Container__["a" /* default */], {}, void 0, _jsx('div', {
      className: __WEBPACK_IMPORTED_MODULE_6__Header_scss___default.a.wrap
    }, void 0, _jsx('div', {
      className: __WEBPACK_IMPORTED_MODULE_6__Header_scss___default.a.leftWrap
    }, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_5__Link__["a" /* default */], {
      afterClick: () => this.toggle(false),
      href: '/'
    }, void 0, _jsx('img', {
      src: __WEBPACK_IMPORTED_MODULE_7__logo_svg___default.a,
      className: __WEBPACK_IMPORTED_MODULE_6__Header_scss___default.a.logo
    })), _jsx('div', {
      className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(__WEBPACK_IMPORTED_MODULE_6__Header_scss___default.a.countdown)
    }, void 0, _ref)), _jsx('nav', {
      className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(__WEBPACK_IMPORTED_MODULE_6__Header_scss___default.a.desktopNav)
    }, void 0, _jsx('button', {
      className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(__WEBPACK_IMPORTED_MODULE_6__Header_scss___default.a.hamburgerBtn, isOpen && __WEBPACK_IMPORTED_MODULE_6__Header_scss___default.a.isOpen),
      onClick: () => this.toggle()
    }, void 0, _jsx('i', {
      className: __WEBPACK_IMPORTED_MODULE_6__Header_scss___default.a.hamburger
    }), ' Meni'), _jsx('div', {
      className: __WEBPACK_IMPORTED_MODULE_6__Header_scss___default.a.links
    }, void 0, this.renderLinks()))))), _jsx('nav', {
      className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(__WEBPACK_IMPORTED_MODULE_6__Header_scss___default.a.mobileNav, !isTop && __WEBPACK_IMPORTED_MODULE_6__Header_scss___default.a.sticky, isOpen && __WEBPACK_IMPORTED_MODULE_6__Header_scss___default.a.isOpen)
    }, void 0, _jsx('div', {
      className: __WEBPACK_IMPORTED_MODULE_6__Header_scss___default.a.links
    }, void 0, this.renderLinks())));
  }
}

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_6__Header_scss___default.a)(Header));

/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(87);
    var insertCss = __webpack_require__(7);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!../../../node_modules/sass-loader/dist/cjs.js!./Container.scss", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!../../../node_modules/sass-loader/dist/cjs.js!./Container.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "._1XpNO{-webkit-box-sizing:border-box;box-sizing:border-box;margin-left:auto;margin-right:auto;max-width:1200px;padding-left:15px;padding-right:15px;width:100%}", ""]);

// exports
exports.locals = {
	"root": "_1XpNO"
};

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_countdown_now__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_countdown_now___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_countdown_now__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Countdown_scss__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Countdown_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Countdown_scss__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();






var _ref = _jsx('div', {}, void 0, 'Dr\u017Eavnozborske volitve 2022');

const Countdown = () => _jsx(__WEBPACK_IMPORTED_MODULE_2_react_countdown_now___default.a, {
  date: new Date('Sunday, April 24, 2022 7:00:00 AM'),
  renderer: ({ days, completed }) => {
    if (completed) {
      // Render a completed state
      return _ref;
    }
    let out = '';
    if (days > 0) {
      out = `${days + 1} dni do volitev`;
    }

    return _jsx('span', {}, void 0, out);
  }
});

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_3__Countdown_scss___default.a)(Countdown));

/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(90);
    var insertCss = __webpack_require__(7);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!../../../node_modules/sass-loader/dist/cjs.js!./Countdown.scss", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!../../../node_modules/sass-loader/dist/cjs.js!./Countdown.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(92);
    var insertCss = __webpack_require__(7);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!../../../node_modules/sass-loader/dist/cjs.js!./Header.scss", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!../../../node_modules/sass-loader/dist/cjs.js!./Header.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "._14IZ-{background:#fff;-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);left:0;position:fixed;top:0;-webkit-transition:background-color .3s,-webkit-box-shadow .25s,-webkit-transform .25s;transition:background-color .3s,-webkit-box-shadow .25s,-webkit-transform .25s;-o-transition:background-color .3s,box-shadow .25s,transform .25s;transition:background-color .3s,box-shadow .25s,transform .25s;transition:background-color .3s,box-shadow .25s,transform .25s,-webkit-box-shadow .25s,-webkit-transform .25s;width:100%;z-index:10}._14IZ-._1Epgq{background:hsla(0,0%,100%,.9);-webkit-box-shadow:none;box-shadow:none}._1v_7G,._3A-Ww,._3SOFP{-webkit-transition:-webkit-transform .25s;transition:-webkit-transform .25s;-o-transition:transform .25s;transition:transform .25s;transition:transform .25s,-webkit-transform .25s}._3Ep1Z{-webkit-transition:opacity .25s;-o-transition:opacity .25s;transition:opacity .25s}._3zCJn,._302yF{height:calc(8.88889px + 9.25926vw)}@media(max-width:767px){._3zCJn,._302yF{height:80px}}@media(min-width:1200px){._3zCJn,._302yF{height:120px}}._2HiBp{background:hsla(0,0%,100%,.9);-webkit-box-shadow:0 2px 10px rgba(0,0,0,.12);box-shadow:0 2px 10px rgba(0,0,0,.12);-webkit-transform:translateY(-30px);-ms-transform:translateY(-30px);transform:translateY(-30px)}._2HiBp ._3Ep1Z{opacity:0}._2HiBp ._3SOFP{-webkit-transform:translateY(20px);-ms-transform:translateY(20px);transform:translateY(20px)}._2HiBp ._1v_7G,._2HiBp ._3A-Ww{-webkit-transform:translateY(15px);-ms-transform:translateY(15px);transform:translateY(15px)}@media(min-width:1200px){._2HiBp{-webkit-transform:translateY(-60px);-ms-transform:translateY(-60px);transform:translateY(-60px)}._2HiBp ._3Ep1Z{opacity:0}._2HiBp ._3SOFP{-webkit-transform:translateY(35px);-ms-transform:translateY(35px);transform:translateY(35px)}._2HiBp ._1v_7G{-webkit-transform:translateY(30px);-ms-transform:translateY(30px);transform:translateY(30px)}}._1vXac ._1v_7G{display:none}@media(min-width:768px){._1vXac ._1v_7G{display:block}}._3cNHi{-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:hsla(0,0%,100%,.9);-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);display:-webkit-box;display:-ms-flexbox;display:flex;bottom:-30px;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;left:0;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;pointer-events:none;position:fixed;-webkit-transition:-webkit-transform .4s ease-in-out;transition:-webkit-transform .4s ease-in-out;-o-transition:transform .4s ease-in-out;transition:transform .4s ease-in-out;transition:transform .4s ease-in-out,-webkit-transform .4s ease-in-out;-webkit-transform:translateY(-140%);-ms-transform:translateY(-140%);transform:translateY(-140%);width:100%;z-index:9;top:calc(8.88889px + 9.25926vw)}._3cNHi._1Epgq{pointer-events:auto;-webkit-transform:none;-ms-transform:none;transform:none}._3cNHi._2HiBp._1Epgq{-webkit-transform:translateY(-30px);-ms-transform:translateY(-30px);transform:translateY(-30px)}._3cNHi ._1v_7G{text-align:center;padding-bottom:30px}._3cNHi ._1v_7G a{background-position:0 1.7em;font-size:32px;font-size:2rem;margin:0 auto;display:table;padding:.3em 0}@media(max-width:767px){._3cNHi{top:80px}}@media(min-width:1200px){._3cNHi{top:120px}}._3A-Ww{border:none;background:transparent;-webkit-appearance:none;-moz-appearance:none;appearance:none;font-size:16px;font-size:1rem;outline:none}@media(min-width:768px){._3A-Ww,._3cNHi{display:none}}._3VBnB{-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;height:16px;width:16px;margin-right:8px;margin-top:-2px;vertical-align:middle}._3VBnB:after,._3VBnB:before{display:block;content:\"\";height:2px;background:#777;-webkit-transition:-webkit-transform .4s,-webkit-filter .4s;transition:-webkit-transform .4s,-webkit-filter .4s;-o-transition:transform .4s,filter .4s;transition:transform .4s,filter .4s;transition:transform .4s,filter .4s,-webkit-transform .4s,-webkit-filter .4s;-webkit-transform-origin:50% 50%;-ms-transform-origin:50% 50%;transform-origin:50% 50%;width:100%}._3VBnB:before{filter:url('data:image/svg+xml;charset=utf-8,<svg xmlns=\"http://www.w3.org/2000/svg\"><filter id=\"filter\"><feGaussianBlur in=\"SourceAlpha\" stdDeviation=\"0\" /><feOffset dx=\"1\" dy=\"8\" result=\"offsetblur\" /><feFlood flood-color=\"rgba(119,119,119,1)\" /><feComposite in2=\"offsetblur\" operator=\"in\" /><feMerge><feMergeNode /><feMergeNode in=\"SourceGraphic\" /></feMerge></filter></svg>#filter');-webkit-filter:drop-shadow(0 7px 0 #777);filter:drop-shadow(0 7px 0 #777)}._1Epgq ._3VBnB:before{filter:url('data:image/svg+xml;charset=utf-8,<svg xmlns=\"http://www.w3.org/2000/svg\"><filter id=\"filter\"><feGaussianBlur in=\"SourceAlpha\" stdDeviation=\"0\" /><feOffset dx=\"1\" dy=\"15\" result=\"offsetblur\" /><feFlood flood-color=\"rgba(255,255,255,0)\" /><feComposite in2=\"offsetblur\" operator=\"in\" /><feMerge><feMergeNode /><feMergeNode in=\"SourceGraphic\" /></feMerge></filter></svg>#filter');-webkit-filter:drop-shadow(0 14px 0 hsla(0,0%,100%,0));filter:drop-shadow(0 14px 0 rgba(255,255,255,0));-webkit-transform:translateY(7px) rotate(225deg);-ms-transform:translateY(7px) rotate(225deg);transform:translateY(7px) rotate(225deg)}._1Epgq ._3VBnB:after{-webkit-transform:translateY(-7px) rotate(-225deg);-ms-transform:translateY(-7px) rotate(-225deg);transform:translateY(-7px) rotate(-225deg)}._302yF{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}._3SOFP{position:relative}._1AtfL{width:90px}@media(min-width:370px){._1AtfL{width:120px}}._3Ep1Z{bottom:-5px;font-size:9px;opacity:.7;position:absolute;left:0;white-space:nowrap}@media(min-width:370px){._3Ep1Z{font-size:11px;bottom:-8px;left:auto;right:0}}._1v_7G a{display:inline-block;background-image:-webkit-gradient(linear,left bottom,left top,from(#555),to(#555));background-image:-webkit-linear-gradient(bottom,#555,#555);background-image:-o-linear-gradient(bottom,#555,#555);background-image:linear-gradient(0deg,#555,#555);background-position:0 calc(2em + 4px);background-repeat:no-repeat;background-size:100% 1px;color:#0a2645;margin-left:1.5em;padding:1em 0;-webkit-transition:background-size .25s,background-position .25s;-o-transition:background-size .25s,background-position .25s;transition:background-size .25s,background-position .25s;text-decoration:none;text-shadow:1px 1px #fff,-1px 1px #fff,0 -1px #fff}@media(max-width:510px){._1v_7G a{font-size:.9em;margin-left:.7em;padding:.8em 0}}._1v_7G a:not(._1Z5Aq){background-size:0 1px;background-position-x:50%;opacity:.5}._1v_7G a._1Z5Aq{cursor:default}._1v_7G a:last-child:first-letter,._2M3Iw:first-letter{text-transform:uppercase}@media(max-width:510px){.lfe4P{display:none}}._3Ep1Z{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;-webkit-box-flex:1;-ms-flex:1 1;flex:1 1}", ""]);

// exports
exports.locals = {
	"root": "_14IZ-",
	"isOpen": "_1Epgq",
	"hamburgerBtn": "_3A-Ww",
	"leftWrap": "_3SOFP",
	"links": "_1v_7G",
	"countdown": "_3Ep1Z",
	"fake": "_3zCJn",
	"wrap": "_302yF",
	"sticky": "_2HiBp",
	"desktopNav": "_1vXac",
	"mobileNav": "_3cNHi",
	"hamburger": "_3VBnB",
	"logo": "_1AtfL",
	"active": "_1Z5Aq",
	"politics": "_2M3Iw",
	"politicsPrefix": "lfe4P"
};

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Footer__ = __webpack_require__(94);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__Footer__["a"]; });


/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Footer_scss__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Footer_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Footer_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Link__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Container_Container__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__logo_svg__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__logo_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__logo_svg__);
var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();








const Footer = () => _jsx('footer', {
  className: __WEBPACK_IMPORTED_MODULE_2__Footer_scss___default.a.footer
}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_4__Container_Container__["a" /* default */], {}, void 0, _jsx('div', {
  className: __WEBPACK_IMPORTED_MODULE_2__Footer_scss___default.a.wrap
}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_3__Link__["a" /* default */], {
  href: '/'
}, void 0, _jsx('img', {
  className: __WEBPACK_IMPORTED_MODULE_2__Footer_scss___default.a.logo,
  src: __WEBPACK_IMPORTED_MODULE_5__logo_svg___default.a,
  alt: 'Logo'
})), _jsx('nav', {
  className: __WEBPACK_IMPORTED_MODULE_2__Footer_scss___default.a.nav
}, void 0, _jsx(__WEBPACK_IMPORTED_MODULE_3__Link__["a" /* default */], {
  className: __WEBPACK_IMPORTED_MODULE_2__Footer_scss___default.a.link,
  href: '/o-nas'
}, void 0, 'O nas'), _jsx(__WEBPACK_IMPORTED_MODULE_3__Link__["a" /* default */], {
  className: __WEBPACK_IMPORTED_MODULE_2__Footer_scss___default.a.link,
  href: '/prejsnje-volitve'
}, void 0, 'Prej\u0161nje volitve'), _jsx(__WEBPACK_IMPORTED_MODULE_3__Link__["a" /* default */], {
  className: __WEBPACK_IMPORTED_MODULE_2__Footer_scss___default.a.link,
  target: '_blank',
  href: 'https://github.com/sraka1/voliprav-web'
}, void 0, 'GitHub')))));

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_1_isomorphic_style_loader_lib_withStyles___default()(__WEBPACK_IMPORTED_MODULE_2__Footer_scss___default.a)(Footer));

/***/ }),

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {


    var content = __webpack_require__(96);
    var insertCss = __webpack_require__(7);

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    module.exports = content.locals || {};
    module.exports._getContent = function() { return content; };
    module.exports._getCss = function() { return content.toString(); };
    module.exports._insertCss = function(options) { return insertCss(content, options) };
    
    // Hot Module Replacement
    // https://webpack.github.io/docs/hot-module-replacement
    // Only activated in browser context
    if (false) {
      var removeCss = function() {};
      module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!../../../node_modules/sass-loader/dist/cjs.js!./Footer.scss", function() {
        content = require("!!../../../node_modules/css-loader/index.js??ref--1-rules-2!../../../node_modules/postcss-loader/lib/index.js??ref--1-rules-3!../../../node_modules/sass-loader/dist/cjs.js!./Footer.scss");

        if (typeof content === 'string') {
          content = [[module.id, content, '']];
        }

        removeCss = insertCss(content, { replace: true });
      });
      module.hot.dispose(function() { removeCss(); });
    }
  

/***/ }),

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(6)(false);
// imports


// module
exports.push([module.i, "._2nhzB{background:#fff;border-top:1px solid #efefef;color:#313131;opacity:.8;margin-top:48px;margin-top:3rem}._3aBnd{padding:1em 0}@media(min-width:578px){._3aBnd{-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}}@media(min-width:578px){._3aBnd,._36Xgk{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex}}.NoJN3{display:block;color:inherit;text-decoration:none}@media(min-width:578px){.NoJN3{padding-left:1em}}._1W3uT{display:inherit;width:90px}@media(min-width:370px){._1W3uT{width:120px}}", ""]);

// exports
exports.locals = {
	"footer": "_2nhzB",
	"wrap": "_3aBnd",
	"nav": "_36Xgk",
	"link": "NoJN3",
	"logo": "_1W3uT"
};

/***/ })

};;
//# sourceMappingURL=kjorskra.js.map