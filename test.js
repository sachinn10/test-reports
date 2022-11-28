function myFunction() {
    document.getElementById('div1').innerHTML = "";
    fetch("http://10.33.35.21:5000/GetProdData")
        .then(
            res =>
                res.json().then(
                    data => {
                        var t = '<tr><th></th><th></th><th></th><th></th><th></th><th>CARD</th><th>ONOFF</th><th>ONOFF</th><th>ONOFF</th><th>ONOFF</th><th></th><th>ONOFF</th><th>ONOFF</th><th>ONOFF</th><th>ONOFF</th><th></th><th></th><th></th><th>Input45</th><th>Input45</th><th>Input45</th><th>Input45</th><th>Gain</th><th>Gain</th><th>Gain</th><th>Gain</th><th>Output</th><th>Output</th><th>Output</th><th>Output</th><th></th></tr>';
                        t += '<tr><th></th><th>Date&Time</th><th>Test Time</th><th>LNA PART NUMBER</th><th>SERIAL NMBER</th><th>TYPE</th><th>LDO A</th><th>LDO B</th><th>LDO C</th><th>LDO D</th><th>3V3</th><th>LAN A</th><th>LAN B</th><th>LAN C</th><th>LAN D</th><th>5V5</th><th>Center_freq</th><th>SPAN</th><th>CH A dbm</th><th>CH B dbm</th><th>CH C dbm</th><th>CH D dbm</th><th>CH A dbm</th><th>CH B dbm</th><th>CH C dbm</th><th>CH D dbm</th><th>CH-A dbm</th><th>CH-B dbm</th><th>CH-C dbm</th><th>CH-D dbm</th><th>RESULT</th></tr>';
                        var j = 0;
                        var k =1;
                        for (let x in data) {
                            if (data[j] != undefined) {
                                if (data[j][0] != ('serail_number')) {
                                    
                                    t += '<tr><td>' + k + '</td><td>' + data[j][1]['Date_Time'] + '</td>';
                                    t += '<td>' + '' + '</td>';
                                    t += '<td>' + '' + '</td>';
                                    t += '<td>' + data[j][0] + '</td>';
                                    t += '<td>' + data[j][1]['CARD_TYPE'] + '</td>';
                                    t += '<td>' + data[j][1]['LDO_ONOFF_A'] + '</td>';
                                    t += '<td>' + data[j][1]['LDO_ONOFF_B'] + '</td>';
                                    t += '<td>' + data[j][1]['LDO_ONOFF_C'] + '</td>';
                                    t += '<td>' + data[j][1]['LDO_ONOFF_D'] + '</td>';
                                    t += '<td>' + data[j][1]['3V3'] + '</td>';
                                    t += '<td>' + data[j][1]['LNA_ONOFF_A'] + '</td>';
                                    t += '<td>' + data[j][1]['LNA_ONOFF_B'] + '</td>';
                                    t += '<td>' + data[j][1]['LNA_ONOFF_C'] + '</td>';
                                    t += '<td>' + data[j][1]['LNA_ONOFF_D'] + '</td>';
                                    t += '<td>' + data[j][1]['5V5'] + '</td>';
                                    t += '<td>' + data[j][1]['center_frequency'] + '</td>';
                                    t += '<td>' + data[j][1]['span'] + '</td>';
                                    t += '<td>' + data[j][1]['GAIN_CHANNELA'] + '</td>';
                                    t += '<td>' + data[j][1]['GAIN_CHANNELB'] + '</td>';
                                    t += '<td>' + data[j][1]['GAIN_CHANNELC'] + '</td>';
                                    t += '<td>' + data[j][1]['GAIN_CHANNELD'] + '</td>';
                                    t += '<td>' + '' + '</td>';
                                    t += '<td>' + '' + '</td>';
                                    t += '<td>' + '' + '</td>';
                                    t += '<td>' + '' + '</td>';
                                    t += '<td>' + data[j][1]['OUTPUT_CHANNELA'] + '</td>';
                                    t += '<td>' + data[j][1]['OUTPUT_CHANNELB'] + '</td>';
                                    t += '<td>' + data[j][1]['OUTPUT_CHANNELC'] + '</td>';
                                    t += '<td>' + data[j][1]['OUTPUT_CHANNELD'] + '</td>';
                                    t += '<td>' + data[j][1]['RESULT'] + '</td></tr>';
                                    k += 1;
                                }
                            }
                            j += 1;
                        }
                        document.getElementById('div1').innerHTML = t;
                    }
                )
        )
}