(function() {  
    var config = {
        type: 'pie',
        title: {
            display: true,
            text: 'Custom Chart Title'
        },
        data: {
            datasets: [{
                data: [
                    20,
                    40,
                    40
                ],
                backgroundColor: [
                    "#F7464A",
                    "#FDB45C",
                    "#46BFBD"
                ]
            }],
            labels: [
                "其他开发",
                "逻辑开发",
                "界面开发"
            ]
        },
        options: {
            responsive: true
        }
    };
    var slide1Dom = document.getElementById("slide4");
    var uideveloptitle = document.getElementById("uideveloptitle");
    var pie;
    var ctx = document.getElementById("chart-area").getContext("2d");
    slide1Dom.addEventListener( "impress:stepenter", function( event ) {
        (!pie)&&(pie = new Chart(ctx, config));
        uideveloptitle.innerHTML="界面开发占总开发时间的40%以上";
    }, false );
    slide1Dom.addEventListener("impress:stepleave",function(e) {
        //pie.destroy();
        uideveloptitle.innerHTML="";
    }); 
})();


