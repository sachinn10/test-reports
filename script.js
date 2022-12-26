function myFunction() {
    try {
        let r = fetch('https://10.33.41.69:5000/GetProdData');
    }
    catch (err) {
        document.getElementById("div3").innerHTML = "SERVER NOT RESPONDING";
        console.log(err);
    }
    async function getdata() {
        try {
            const response = await fetch('https://10.33.41.69:5000/GetProdData');
            var data = await response.json();
            console.log(data)
            document.getElementById("div4").innerHTML = '<div id="div2"><table id="div1"></table></div>';
            var t = '<caption>LNA TEST REPORT</caption><tr><th></th><th></th><th></th><th></th><th></th><th>CARD</th><th colspan="4">ONOFF</th><th></th><th colspan="4">ONOFF</th>' +
                '<th></th><th></th><th></th><th colspan="4">Input45</th><th colspan="4">Gain</th><th colspan="4">Output</th><th></th></tr>';
            t += '<tr><th>S/N</th><th>Date&Time</th><th>Test Time</th><th>LNA PART NUMBER</th><th>SERIAL NMBER</th><th>TYPE</th><th>LDO A</th>' +
                '<th>LDO B</th><th>LDO C</th><th>LDO D</th><th>3V3</th><th>LAN A</th><th>LAN B</th><th>LAN C</th><th>LAN D</th><th>5V5</th><th>Center_freq</th>' +
                '<th>SPAN</th><th>CH A dbm</th><th>CH B dbm</th><th>CH C dbm</th><th>CH D dbm</th><th>CH A dbm</th><th>CH B dbm</th><th>CH C dbm</th>' +
                '<th>CH D dbm</th><th>CH-A dbm</th><th>CH-B dbm</th><th>CH-C dbm</th><th>CH-D dbm</th><th>RESULT</th></tr>';
            let k = 1
            let s = 0
            const arr = ['','','','','','V','V','V','V','V','V','V','V','V','V','GHz','MHz','dbm','dbm','dbm','dbm','dbm','dbm','dbm','dbm','dbm','dbm','dbm','dbm']
            for (let x of data) {
                if (x[0] != undefined) {
                        t += '<tr><td>' + k + '</td>';
                        for (let i=0;i<=28;i++){
                        t += '<td>' + x[i] +arr[i] +'</td>';
                        }
                        if(x[29] == 'PASS'){
                        t += '<td style="background-color: green; color: white">' + x[29] + '</td></tr>';
                        k += 1;
                        }
                        else{
                            t += '<td style="background-color: red; color: white">' + x[29] + '</td></tr>';
                            k += 1;  
                        }
                    }                   
                }
            
            document.getElementById('div1').innerHTML = t;
        }
        catch (err) {
            document.getElementById("div3").innerHTML = "Server not responding";
            console.log(err)
        }
    }
    getdata();
}

function showsidebar(){
    document.getElementById('cs').style.display='inline';
    }

function hide(){
    document.getElementById('cs').style.display='none';

}

function ExportToExcel(type, fn, dl) {
    var elt = document.getElementById('div1');
    var wb = XLSX.utils.table_to_book(elt, { sheet: "sheet1" });
    return dl ?
      XLSX.write(wb, { bookType: type, bookSST: true, type: 'base64' }):
      XLSX.writeFile(wb, fn || ('LNA_Report.' + (type || 'xlsx')));
 }

function result(){
    try {
        let r = fetch('http://10.33.35.21:5000/GetProdData');
    }
    catch (err) {
        document.getElementById("div3").innerHTML = "SERVER NOT RESPONDING";
        console.log(err);
    }
    async function getdata() {
        try {
            const response = await fetch('http://10.33.35.21:5000/GetProdData');
            var data = await response.json();
            console.log(data)
            document.getElementById("div4").innerHTML ="";
            document.getElementById("div4").innerHTML = '<div id="div2"><table id="div1"></table></div>';
            var t = '<caption>LNA TEST REPORT</caption><tr><th></th><th></th><th></th><th></th><th></th><th>CARD</th><th></th></tr>';
            t += '<tr><th>S/N</th><th>Date&Time</th><th>Test Time</th><th>LNA PART NUMBER</th><th>SERIAL NMBER</th><th>TYPE</th><th>RESULT</th></tr>';
            let k = 1
            let s = 0
            const arr = ['','','','','']
            for (let x of data) {

                if (x[0] != undefined) {
                        t += '<tr><td>' + k + '</td>';
                        for (let i=0;i<=4;i++){
                        t += '<td>' + x[i] +arr[i] +'</td>';
                        }
                        if(x[29] == 'PASS'){
                        t += '<td style="background-color: green; color: white">' + x[29] + '</td></tr>';
                        k += 1;
                        }
                        else{
                            t += '<td style="background-color: red; color: white">' + x[29] + '</td></tr>';
                            k += 1;  
                        }
                    }      
                }
            document.getElementById('div1').innerHTML = t;
        }
        catch (err) {
            document.getElementById("div3").innerHTML = "Server not responding";
            console.log(err)
        }
    }
    getdata();
}

function Export() {
    html2canvas(document.getElementById('div1'), {
        onrendered: function (canvas) {
            var data = canvas.toDataURL();
            var docDefinition = {
                content: [{
                    image: data,
                    width: 700
                }]
            };
            pdfMake.createPdf(docDefinition).download("Table.pdf");
        }
    });
}


function login()
{
    var uname = document.getElementById("email").value;
    var pwd = document.getElementById("pwd1").value;
    if(uname =='')
    {
        alert("please enter user name.");
    }
    else if(pwd=='')
    {
        alert("enter the password");
    }
    else if(pwd.length < 6)
    {
        alert("Password min length is 6.");
    }
    else
    {
        if ((uname == 'tejas') & (pwd=='tejas123')){
            //Redirecting to other page or webste code or you can set your own html page.
            window.close()
            window.open('homepage.html')  
        }
        
        else{
            alert("Invalid Username or Password")
        }
    }
}

//Reset Inputfield code.
function clearFunc()
{
    document.getElementById("email").value="";
    document.getElementById("pwd1").value="";
}
