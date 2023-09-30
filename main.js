// ==UserScript==
// @name         Geo-FS Pushback
// @namespace    https://github.com/TotallyRealElonMusk/GeoFS-Pushback/new/main?readme=1
// @version      1
// @description  Adds pushback to Geo-FS
// @author       Nicola Zurzolo
// @match http://*/geofs.php*
// @match https://*/geofs.php*
// @run-at document-end
// @grant        none
// ==/UserScript==

(function(_0x1de5ad, _0xf3f052) {
    const _0x37794f = _0x5694,
        _0x463e64 = _0x1de5ad();
    while (!![]) {
        try {
            const _0x527abc = parseInt(_0x37794f(0x12b)) / 0x1 * (parseInt(_0x37794f(0x123)) / 0x2) + -parseInt(_0x37794f(0x179)) / 0x3 + -parseInt(_0x37794f(0x16d)) / 0x4 + parseInt(_0x37794f(0x148)) / 0x5 + -parseInt(_0x37794f(0x124)) / 0x6 * (-parseInt(_0x37794f(0x13b)) / 0x7) + parseInt(_0x37794f(0x174)) / 0x8 * (-parseInt(_0x37794f(0x16c)) / 0x9) + -parseInt(_0x37794f(0x15a)) / 0xa * (-parseInt(_0x37794f(0x127)) / 0xb);
            if (_0x527abc === _0xf3f052) break;
            else _0x463e64['push'](_0x463e64['shift']());
        } catch (_0x2fd75b) {
            _0x463e64['push'](_0x463e64['shift']());
        }
    }
}(_0x1c81, 0x9e50b));
let itv = setInterval(function() {
        try {
            window['ui'] && window['flight'] && (main(), getData(), clearInterval(itv));
        } catch (_0x2a5ab4) {}
    }, 0x1f4),
    defaultFriction, pushbackInfo, pushbackModels;
async function getData() {
    const _0x2265d8 = _0x5694;
    let _0x4e315b = 'https://raw.githubusercontent.com/TotallyRealElonMusk/GeoFS-Pushback/main/pushback%20data/pushback.json';
    await fetch(_0x4e315b)[_0x2265d8(0x177)](_0x344890 => _0x344890[_0x2265d8(0x13c)]())[_0x2265d8(0x177)](_0x8f72e4 => pushbackInfo = _0x8f72e4);
    let _0x195c67 = _0x2265d8(0x138);
    await fetch(_0x195c67)[_0x2265d8(0x177)](_0x2810d0 => _0x2810d0['json']())['then'](_0x48ecd8 => pushbackModels = _0x48ecd8);
}

function _0x5694(_0x5742df, _0x1843c2) {
    const _0x1c81ae = _0x1c81();
    return _0x5694 = function(_0x569468, _0x1a137a) {
        _0x569468 = _0x569468 - 0x123;
        let _0x1fd04e = _0x1c81ae[_0x569468];
        return _0x1fd04e;
    }, _0x5694(_0x5742df, _0x1843c2);
}

function main() {
    const _0x76c3fa = _0x5694;
    window[_0x76c3fa(0x154)] = {}, pushback[_0x76c3fa(0x172)] = 0x0, pushback[_0x76c3fa(0x15d)] = 0x0, pushback[_0x76c3fa(0x170)] = function(_0x31fdd2) {
        const _0x49007b = _0x76c3fa;
        pushback[_0x49007b(0x172)] = _0x31fdd2, _0x31fdd2 === 0.5 ? _0x31fdd2 = 0x1 : null, _0x31fdd2 === -0.5 ? _0x31fdd2 = -0x1 : null, pushback[_0x49007b(0x12d)] && clearInterval(pushback['lockInt']), pushback['lockInt'] = setInterval(function() {
            const _0x1aa8f1 = _0x49007b;
            pushback[_0x1aa8f1(0x134)](_0x31fdd2);
        });
    }, pushback['stopBack'] = function() {
        const _0x26af9d = _0x76c3fa;
        clearInterval(pushback[_0x26af9d(0x12d)]), pushback[_0x26af9d(0x172)] = 0x0, pushback['pushBack'](0x0), clearInterval(pushback[_0x26af9d(0x12d)]);
    }, pushback[_0x76c3fa(0x134)] = function(_0x1edcab) {
        const _0x13edf9 = _0x76c3fa;
        let _0x27e6dc = Math['round'](geofs['animation']['values'][_0x13edf9(0x137)]),
            _0x5497ae = _0x1edcab * Math[_0x13edf9(0x144)](_0x27e6dc * Math['PI'] / 0xb4),
            _0x1082b7 = _0x1edcab * Math[_0x13edf9(0x151)](_0x27e6dc * Math['PI'] / 0xb4);
        geofs[_0x13edf9(0x163)]['instance'][_0x13edf9(0x16b)]['setLinearVelocity']([_0x5497ae, _0x1082b7, 0x0]);
    }, pushback[_0x76c3fa(0x16f)] = function(_0x136d38) {
        const _0x3613ab = _0x76c3fa;
        pushback[_0x3613ab(0x15d)] = _0x136d38, geofs[_0x3613ab(0x12a)]['values'][_0x3613ab(0x141)] = _0x136d38;
    };
    let _0x2e6f7e;

    function _0x37eb5f() {
        const _0x301c68 = _0x76c3fa;
        _0x2e6f7e != void 0x0 && _0x2e6f7e[_0x301c68(0x152)]();
        _0x2e6f7e = window[_0x301c68(0x160)]('', _0x301c68(0x176), 'toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=no,width=780,height=300,top=' + (screen[_0x301c68(0x166)] - 0x190) + _0x301c68(0x133) + (screen[_0x301c68(0x142)] - 0x348)), _0x2e6f7e[_0x301c68(0x159)][_0x301c68(0x146)][_0x301c68(0x131)] = _0x301c68(0x129);
        let _0x2be97a = _0x2e6f7e[_0x301c68(0x159)][_0x301c68(0x16a)](_0x301c68(0x15d)),
            _0x2c809c = _0x2e6f7e['document'][_0x301c68(0x16a)](_0x301c68(0x172)),
            _0xc38209 = _0x2e6f7e[_0x301c68(0x159)][_0x301c68(0x16a)](_0x301c68(0x154)),
            _0x46d315 = _0x2e6f7e[_0x301c68(0x159)][_0x301c68(0x16a)]('reset'),
            _0x2be90c = _0x2e6f7e[_0x301c68(0x159)][_0x301c68(0x16a)](_0x301c68(0x126)),
            _0x3eab34 = _0x2e6f7e[_0x301c68(0x159)]['getElementById'](_0x301c68(0x169));
        _0x2c809c[_0x301c68(0x14d)] = function() {
            const _0x4f3dc8 = _0x301c68;
            pushback[_0x4f3dc8(0x14c)] == !![] && (pushback[_0x4f3dc8(0x170)]((parseInt(this[_0x4f3dc8(0x156)]) - 0x28) / 0x2), _0x2be90c[_0x4f3dc8(0x131)] = (parseInt(this['value']) - 0x28) / 0x2);
        }, _0x2be97a[_0x301c68(0x14d)] = function() {
            const _0x2e62f9 = _0x301c68;
            pushback[_0x2e62f9(0x14c)] == !![] && (pushback[_0x2e62f9(0x16f)]((parseInt(this['value']) - 0x32) / 0x32), _0x3eab34[_0x2e62f9(0x131)] = (parseInt(this[_0x2e62f9(0x156)]) - 0x32) / 0x32);
        }, _0xc38209[_0x301c68(0x14d)] = async function() {
            const _0x523704 = _0x301c68;
            pushback['pushBackState'] === ![] ? pushback[_0x523704(0x130)](geofs[_0x523704(0x163)][_0x523704(0x167)]['id']) === !![] && (geofs[_0x523704(0x163)][_0x523704(0x167)][_0x523704(0x161)] == !![] && geofs[_0x523704(0x12a)][_0x523704(0x168)]['rollingSpeed'] < 0.5 && (await pushback['setUpdate'](), pushback[_0x523704(0x13d)](), pushback[_0x523704(0x14c)] = !![], geofs[_0x523704(0x12a)][_0x523704(0x168)]['pushBackTruck'] = 0x1, defaultFriction = geofs[_0x523704(0x163)][_0x523704(0x167)]['setup'][_0x523704(0x136)][_0x523704(0x171)]['lockSpeed'], geofs[_0x523704(0x163)][_0x523704(0x167)]['setup'][_0x523704(0x136)][_0x523704(0x171)][_0x523704(0x178)] = 0.5)) : (pushback[_0x523704(0x14c)] = ![], geofs[_0x523704(0x12a)]['values'][_0x523704(0x15c)] = 0x0, geofs['aircraft'][_0x523704(0x167)][_0x523704(0x12f)]['pushbackTruck'][_0x523704(0x158)][_0x523704(0x139)](), pushback[_0x523704(0x175)](), pushback[_0x523704(0x145)](), _0x46d315[_0x523704(0x125)]());
        }, _0x46d315['onclick'] = function() {
            const _0x147915 = _0x301c68;
            _0x2be97a[_0x147915(0x156)] = '50', _0x3eab34[_0x147915(0x131)] = '0', _0x2c809c[_0x147915(0x156)] = '40', _0x2be90c[_0x147915(0x131)] = '0', pushback[_0x147915(0x145)](), pushback[_0x147915(0x170)](0x0), pushback[_0x147915(0x145)](), pushback['startYaw'](0x0);
        }, _0x2e6f7e[_0x301c68(0x173)] = function() {
            const _0x41c55e = _0x301c68;
            pushback[_0x41c55e(0x14c)] = ![], geofs['animation'][_0x41c55e(0x168)]['pushBackTruck'] = 0x0, geofs[_0x41c55e(0x163)][_0x41c55e(0x167)][_0x41c55e(0x12f)]['pushbackTruck']['object3d'][_0x41c55e(0x139)](), pushback[_0x41c55e(0x175)](), pushback[_0x41c55e(0x145)](), _0x46d315[_0x41c55e(0x125)]();
        }, _0x2e6f7e[_0x301c68(0x149)]('keydown', function(_0x25810f) {
            const _0x5d2ed6 = _0x301c68;
            if (_0x25810f[_0x5d2ed6(0x12e)] === 0x26 && pushback['speed'] < 0x14) {
                let _0x2f7624 = pushback[_0x5d2ed6(0x172)] + 0.5;
                pushback['startBack'](_0x2f7624), _0x2be90c['innerHTML'] = _0x2f7624, _0x2c809c[_0x5d2ed6(0x156)] = _0x2f7624 * 0x2 + 0x28;
            } else {
                if (_0x25810f[_0x5d2ed6(0x12e)] === 0x28 && pushback[_0x5d2ed6(0x172)] > -0x14) {
                    let _0x568d06 = pushback[_0x5d2ed6(0x172)] - 0.5;
                    pushback[_0x5d2ed6(0x170)](_0x568d06), _0x2be90c[_0x5d2ed6(0x131)] = _0x568d06, _0x2c809c[_0x5d2ed6(0x156)] = _0x568d06 * 0x2 + 0x28;
                } else {
                    if (_0x25810f['keyCode'] === 0x27 && pushback[_0x5d2ed6(0x15d)] < 0x1) {
                        let _0x553f43 = Math[_0x5d2ed6(0x17a)]((pushback[_0x5d2ed6(0x15d)] + 0.02) * 0x64) / 0x64;
                        pushback[_0x5d2ed6(0x16f)](_0x553f43), _0x3eab34[_0x5d2ed6(0x131)] = _0x553f43, _0x2be97a[_0x5d2ed6(0x156)] = _0x553f43 * 0x32 + 0x32;
                    } else {
                        if (_0x25810f[_0x5d2ed6(0x12e)] === 0x25 && pushback[_0x5d2ed6(0x15d)] > -0x1) {
                            let _0x43d785 = Math[_0x5d2ed6(0x17a)]((pushback[_0x5d2ed6(0x15d)] - 0.02) * 0x64) / 0x64;
                            pushback[_0x5d2ed6(0x16f)](_0x43d785), _0x3eab34[_0x5d2ed6(0x131)] = _0x43d785, _0x2be97a[_0x5d2ed6(0x156)] = _0x43d785 * 0x32 + 0x32;
                        }
                    }
                }
            }
        });
    }
    pushback[_0x76c3fa(0x14c)] = ![], pushback['checkAircraft'] = function(_0x2ab80f) {
        return pushbackInfo[_0x2ab80f] ? !![] : ![];
    }, pushback[_0x76c3fa(0x128)] = function() {
        const _0x482a25 = _0x76c3fa;
        for (let _0x91881f = 0x0; _0x91881f < geofs[_0x482a25(0x163)]['instance'][_0x482a25(0x162)][_0x482a25(0x12f)][_0x482a25(0x14a)]; _0x91881f++) {
            if (geofs[_0x482a25(0x163)][_0x482a25(0x167)][_0x482a25(0x162)][_0x482a25(0x12f)][_0x91881f][_0x482a25(0x132)])
                for (let _0x4f6ba4 = 0x0; _0x4f6ba4 < geofs[_0x482a25(0x163)][_0x482a25(0x167)][_0x482a25(0x162)][_0x482a25(0x12f)][_0x91881f]['animations'][_0x482a25(0x14a)]; _0x4f6ba4++) {
                    geofs[_0x482a25(0x163)][_0x482a25(0x167)][_0x482a25(0x162)][_0x482a25(0x12f)][_0x91881f][_0x482a25(0x132)][_0x4f6ba4]['value'] == _0x482a25(0x15d) && (geofs[_0x482a25(0x163)]['instance']['setup']['parts'][_0x91881f][_0x482a25(0x132)][_0x4f6ba4][_0x482a25(0x156)] = 'yawPushback', geofs[_0x482a25(0x163)][_0x482a25(0x167)][_0x482a25(0x162)][_0x482a25(0x12f)][_0x91881f][_0x482a25(0x14f)] && (pushback[_0x482a25(0x14e)] = geofs[_0x482a25(0x163)][_0x482a25(0x167)][_0x482a25(0x162)]['parts'][_0x91881f]['animations'][_0x4f6ba4]['ratio']));
                }
        }
    }, pushback[_0x76c3fa(0x175)] = function() {
        const _0xc0bea3 = _0x76c3fa;
        clearInterval(pushback[_0xc0bea3(0x12d)]), geofs['aircraft'][_0xc0bea3(0x167)]['setup']['contactProperties'][_0xc0bea3(0x171)][_0xc0bea3(0x178)] = defaultFriction;
        for (let _0x1f9728 = 0x0; _0x1f9728 < geofs[_0xc0bea3(0x163)][_0xc0bea3(0x167)]['setup']['parts']['length']; _0x1f9728++) {
            if (geofs['aircraft']['instance']['setup']['parts'][_0x1f9728]['animations'])
                for (let _0x104b0f = 0x0; _0x104b0f < geofs[_0xc0bea3(0x163)][_0xc0bea3(0x167)][_0xc0bea3(0x162)][_0xc0bea3(0x12f)][_0x1f9728]['animations'][_0xc0bea3(0x14a)]; _0x104b0f++) {
                    geofs['aircraft'][_0xc0bea3(0x167)][_0xc0bea3(0x162)][_0xc0bea3(0x12f)][_0x1f9728][_0xc0bea3(0x132)][_0x104b0f][_0xc0bea3(0x156)] == _0xc0bea3(0x141) && (geofs['aircraft']['instance'][_0xc0bea3(0x162)][_0xc0bea3(0x12f)][_0x1f9728][_0xc0bea3(0x132)][_0x104b0f][_0xc0bea3(0x156)] = _0xc0bea3(0x15d));
                }
        }
    }, pushback[_0x76c3fa(0x13d)] = function() {
        pushback['addPushBackTruck']();
    }, pushback[_0x76c3fa(0x15e)] = function() {
        const _0x41d712 = _0x76c3fa;
        if (pushbackInfo[geofs['aircraft'][_0x41d712(0x167)]['id']]) {
            let _0x1c84f4 = {
                'name': _0x41d712(0x14b),
                'model': pushbackModels[pushbackInfo[geofs['aircraft'][_0x41d712(0x167)]['id']][_0x41d712(0x153)]],
                'position': pushbackInfo[geofs[_0x41d712(0x163)][_0x41d712(0x167)]['id']][_0x41d712(0x13f)],
                'animations': [{
                    'type': _0x41d712(0x15f),
                    'axis': 'Z',
                    'value': _0x41d712(0x141),
                    'ratio': pushback['defaultYaw']
                }, {
                    'value': _0x41d712(0x135),
                    'type': _0x41d712(0x157),
                    'value': _0x41d712(0x15c)
                }, {
                    'type': _0x41d712(0x15f),
                    'value': 'atilt',
                    'axis': 'X',
                    'ratio': -0x1
                }],
                'rotation': [0x0, 0x0, 0x0]
            };
            geofs[_0x41d712(0x163)][_0x41d712(0x167)][_0x41d712(0x143)]([_0x1c84f4], _0x41d712(0x150), 0x1, _0x41d712(0x16e));
        }
    };
    let _0x184d9f = document['getElementsByClassName']('geofs-autopilot-bar'),
        _0x5ca6a9 = document[_0x76c3fa(0x147)](_0x76c3fa(0x140));
    _0x5ca6a9[_0x76c3fa(0x155)]['add'](_0x76c3fa(0x164)), _0x5ca6a9['id'] = _0x76c3fa(0x12c), _0x5ca6a9['style'][_0x76c3fa(0x13e)] = _0x76c3fa(0x165), _0x5ca6a9[_0x76c3fa(0x131)] = _0x76c3fa(0x13a), _0x184d9f[0x0][_0x76c3fa(0x15b)](_0x5ca6a9);
    let _0x15fc99 = document[_0x76c3fa(0x16a)](_0x76c3fa(0x12c));
    _0x15fc99[_0x76c3fa(0x125)] = function() {
        _0x37eb5f();
    };
}

function _0x1c81() {
    const _0x53a943 = ['then', 'lockSpeed', '1258782BnpTvr', 'round', '6TtZgaV', '12AvIPhZ', 'onclick', 'speedInfo', '319TOOmos', 'setUpdate', '<style>\x0a.slidecontainer\x20{\x0a\x20\x20width:\x20100%;\x0a\x20\x20/*\x20Width\x20of\x20the\x20outside\x20container\x20*/\x0a}\x0a\x0a/*\x20The\x20slider\x20itself\x20*/\x0a.slider\x20{\x0a\x20\x20-webkit-appearance:\x20none;\x0a\x20\x20/*\x20Override\x20default\x20CSS\x20styles\x20*/\x0a\x20\x20appearance:\x20none;\x0a\x20\x20width:\x2050%;\x0a\x20\x20/*\x20Full-width\x20*/\x0a\x20\x20height:\x2025px;\x0a\x20\x20/*\x20Specified\x20height\x20*/\x0a\x20\x20background:\x20#d3d3d3;\x0a\x20\x20/*\x20Grey\x20background\x20*/\x0a\x20\x20outline:\x20none;\x0a\x20\x20/*\x20Remove\x20outline\x20*/\x0a\x20\x20opacity:\x200.7;\x0a\x20\x20/*\x20Set\x20transparency\x20(for\x20mouse-over\x20effects\x20on\x20hover)\x20*/\x0a\x20\x20-webkit-transition:\x20.2s;\x0a\x20\x20/*\x200.2\x20seconds\x20transition\x20on\x20hover\x20*/\x0a\x20\x20transition:\x20opacity\x20.2s;\x0a}\x0a\x0a/*\x20Mouse-over\x20effects\x20*/\x0a.slider:hover\x20{\x0a\x20\x20opacity:\x201;\x0a\x20\x20/*\x20Fully\x20shown\x20on\x20mouse-over\x20*/\x0a}\x0a\x0a/*\x20The\x20slider\x20handle\x20(use\x20-webkit-\x20(Chrome,\x20Opera,\x20Safari,\x20Edge)\x20and\x20-moz-\x20(Firefox)\x20to\x20override\x20default\x20look)\x20*/\x0a.slider::-webkit-slider-thumb\x20{\x0a\x20\x20-webkit-appearance:\x20none;\x0a\x20\x20/*\x20Override\x20default\x20look\x20*/\x0a\x20\x20appearance:\x20none;\x0a\x20\x20width:\x2025px;\x0a\x20\x20/*\x20Set\x20a\x20specific\x20slider\x20handle\x20width\x20*/\x0a\x20\x20height:\x2025px;\x0a\x20\x20/*\x20Slider\x20handle\x20height\x20*/\x0a\x20\x20background:\x20#04AA6D;\x0a\x20\x20/*\x20Green\x20background\x20*/\x0a\x20\x20cursor:\x20pointer;\x0a\x20\x20/*\x20Cursor\x20on\x20hover\x20*/\x0a}\x0a\x0a.slider::-moz-range-thumb\x20{\x0a\x20\x20width:\x2025px;\x0a\x20\x20/*\x20Set\x20a\x20specific\x20slider\x20handle\x20width\x20*/\x0a\x20\x20height:\x2025px;\x0a\x20\x20/*\x20Slider\x20handle\x20height\x20*/\x0a\x20\x20background:\x20#04AA6D;\x0a\x20\x20/*\x20Green\x20background\x20*/\x0a\x20\x20cursor:\x20pointer;\x0a\x20\x20/*\x20Cursor\x20on\x20hover\x20*/\x0a}\x0a\x0a.center\x20{\x0a\x20\x20font-family:\x20verdana;\x0a\x20\x20display:\x20center;\x0a}\x0a</style>\x0a<input\x20type=\x22checkbox\x22\x20id=\x22pushback\x22\x20name=\x22pushback\x22\x20value=\x22pushback\x22\x20class=\x22center\x22></input>\x0a<labelfor=\x22pushback\x22\x20class=\x22center\x22>\x20Enable\x20pushback\x20</label></p>\x20Yaw:\x0a<div\x20id=\x22yawInfo\x22>0</div>\x0a<div\x20class=\x22slidecontainer\x22>\x0a\x20\x20<input\x20type=\x22range\x22\x20min=\x220\x22\x20max=\x22100\x22\x20value=\x2250\x22\x20class=\x22slider\x22\x20id=\x22yaw\x22>\x0a\x20\x20</p>\x20Speed:\x20<div\x20id=\x22speedInfo\x22>0</div>\x0a\x20\x20<div\x20class=\x22slidecontainer\x22>\x0a\x20\x20\x20\x20<input\x20type=\x22range\x22\x20min=\x220\x22\x20max=\x2280\x22\x20value=\x2240\x22\x20class=\x22slider\x22\x20id=\x22speed\x22>\x0a\x20\x20\x20\x20</p>\x0a\x20\x20\x20\x20<button\x20class=\x22center\x22\x20type=\x22button\x22\x20id=\x22reset\x22>Reset</button>\x0a\x20\x20\x20\x20<br>\x0a\x20\x20</div>', 'animation', '363367mttbUH', 'pushbackButtonMain', 'lockInt', 'keyCode', 'parts', 'checkAircraft', 'innerHTML', 'animations', ',left=', 'pushBack', 'view', 'contactProperties', 'heading360', 'https://raw.githubusercontent.com/TotallyRealElonMusk/GeoFS-Pushback/main/pushback%20data/pushbackModel.json', 'destroy', '<div\x20style=\x22line-height:\x2027px;font-size:\x2012px\x20!important;pointer-events:\x20none;color:\x20#FFF;text-align:\x20center;\x22>PUSHBACK</div>', '4303656PWCiJH', 'json', 'addPushBackTruckHandler', 'cssText', 'pos', 'div', 'yawPushback', 'width', 'addParts', 'sin', 'stopBack', 'body', 'createElement', '1931860IqPriw', 'addEventListener', 'length', 'pushbackTruck', 'pushBackState', 'oninput', 'defaultYaw', 'collisionPoints', 'https://raw.githubusercontent.com/', 'cos', 'close', 'model', 'pushback', 'classList', 'value', 'show', 'object3d', 'document', '75250HvkrXo', 'append', 'pushBackTruck', 'yaw', 'addPushBackTruck', 'rotate', 'open', 'groundContact', 'setup', 'aircraft', 'control-pad', 'width:\x2090px;height:\x2025px;margin:\x200px\x2010px;border-radius:\x2015px;outline:\x20none;', 'height', 'instance', 'values', 'yawInfo', 'getElementById', 'rigidBody', '324036SVkzvQ', '4544724bXaXlh', 'Zup', 'startYaw', 'startBack', 'wheel', 'speed', 'onbeforeunload', '160yAxlOT', 'revertUpdate', 'Title'];
    _0x1c81 = function() {
        return _0x53a943;
    };
    return _0x1c81();
}
