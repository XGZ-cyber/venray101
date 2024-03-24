var symptomName = last_month_day();

$(function () {


    init();
    init2();
    $("#el-dialog").addClass("hide");
    $(".close").click(function (event) {
        $("#el-dialog").addClass("hide");
    });

    var date = new Date();
    var numble = date.getDate();
    var today = getFormatMonth(new Date());
    $("#date1").html(today);
    $("#date2").html(today);
    $("#date3").html(today);
    $("#date4").html(today);


    lay('.demo-input').each(function () {
        laydate.render({
            type: 'month',
            elem: this,
            trigger: 'click',
            theme: '#95d7fb',
            calendar: true,
            showBottom: true,
            done: function () {
                console.log($("#startDate").val())

            }
        })
    });

})

function init() {
    //地图
    var mapChart = echarts.init(document.getElementById('mapChart'));
    mapChart.setOption({
        bmap: {
            center: [105, 35],
            zoom: 5,
            roam: true,
        },
        tooltip: {
            trigger: 'item',
            formatter: function (params, ticket, callback) {
                return params.value[2]; // 这里可以根据需要自定义提示信息
            }
        },
        series: [{
            type: 'scatter',
            coordinateSystem: 'bmap',
            data: [
                // 示例数据，格式：[经度, 纬度, 发病率]
                [121.4737, 31.2304, 4], // 上海
                [120.1536, 30.2875, 5], // 浙江
                [114.1772, 22.3027, 6], // 香港
                [113.2663, 23.1322, 4.5], // 广东
                [114.2986, 30.5844, 5.8], // 湖北
                [104.0657, 30.6595, 4.1], // 四川

            ],
            itemStyle: {
                color:'red'

            }

        },
            {
                type: 'scatter',
                coordinateSystem: 'bmap',
                data: [
                    // 示例数据，格式：[经度, 纬度, 发病率]
                    [113.5491, 22.1987, 1], // 澳门
                    [117.200983, 39.084158, 2], // 天津
                    [117.200983, 39.084158, 2], // 天津
                    [101.7782, 36.6171, 2.3], // 青海
                    [91.1409, 29.6456, 1.5], // 西藏
                    [102.8329, 24.8801, 2.8], // 云南
                    [119.2965, 26.0745, 2.5], // 福建
                ],
                itemStyle: {
                    color: 'green'

                }
            },
            {
                type: 'scatter',
                coordinateSystem: 'bmap',
                data: [
                    // 示例数据，格式：[经度, 纬度, 发病率]
                    [116.4074, 39.9042, 3], // 北京
                    [118.7632, 32.0617, 3.5], // 江苏
                     [112.9823, 28.1941, 3.2], // 湖南
                     [118.7632, 32.0617, 3.5], // 江苏
                    [103.8343, 36.0611, 3.2], // 甘肃
                    [87.6179, 43.7928, 3.8], // 新疆
                ],
                itemStyle: {
                    color: 'yellow'

                }
            }
        ]
    });




// 设置地图的样式
    var bmap = mapChart.getModel().getComponent('bmap').getBMap();
    bmap.addControl(new BMap.MapTypeControl({mapTypes: [BMAP_NORMAL_MAP, BMAP_SATELLITE_MAP]}));
    bmap.setMapStyle({style: 'midnight'});


// 初始化 echarts 实例
    var pieChart1 = echarts.init(document.getElementById('pieChart1'));

// 设置图表配置项
    pieChart1.setOption({
        color: ["#87cefa", "#ff7f50"],
        legend: {
            y: '260',
            x: 'center',
            textStyle: {
                color: '#ffffff',
            },
            data: ['公立医院', '私立医院']
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a}<br/>{b}<br/>{c}G ({d}%)"
        },
        calculable: false,
        series: [{
            name: '采集数据量',
            type: 'pie',
            radius: ['40%', '70%'],
            center: ['50%', '45%'],
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                },
                emphasis: {
                    label: {
                        show: true,
                        position: 'center',
                        textStyle: {
                            fontSize: '20',
                            fontWeight: 'bold'
                        }
                    }
                }
            },
            data: [
                {value: 11746, name: '公立医院'},
                {value: 25230, name: '私立医院'},
                // 这里可以继续添加更多数据项
            ]
        }]
    });


    var lineChart = echarts.init(document.getElementById('lineChart'));
    lineChart.setOption({

        color: ["#87cefa", "#ff7f50", "#32cd32"],
        legend: {
            y: '260',
            x: 'center',
            textStyle: {
                color: '#ffffff',

            },
            data: ['政府卫生支出(亿元)', '社会卫生支出(亿元)', '个人现金卫生支出(亿元)'],
        },
        calculable: false,
        tooltip: {
            trigger: 'item',
            formatter: "{a}<br/>{b}<br/>{c}"
        },
        yAxis: [
            {
                type: 'value',
                axisLine: {onZero: false},
                axisLine: {
                    lineStyle: {
                        color: '#034c6a'
                    },
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    }
                },
                splitLine: {
                    lineStyle: {
                        width: 0,
                        type: 'solid'
                    }
                },
                data: ['30000', '33000', '36000', '39000', '42000'] // 设置刻度值列表
            }
        ],
        xAxis: [
            {
                type: 'category',
                data: ['2019', '2020', '2021', '2022', '2023'],
                axisLine: {
                    lineStyle: {
                        color: '#034c6a'
                    },
                },
                splitLine: {
                    "show": false
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    },
                    align: 'center', // 将刻度标签居中对齐
                },
                splitLine: {
                    lineStyle: {
                        width: 0,
                        type: 'solid'
                    }
                },
            }
        ],
        grid: {
            left: '10%',
            right: '10%',
            bottom: '20%',
            containLabel: true
        },
        series: [
            {
                name: '政府卫生支出(亿元)',
                type: 'line',
                smooth: true,
                itemStyle: {
                    normal: {
                        lineStyle: {
                            shadowColor: 'rgba(0,0,0,0.4)'
                        }
                    }
                },
                data: ['16399.13', '18016.95', '21941.90', '20676.06', '24040.89']
            },
            {
                name: '个人现金卫生支出(亿元)',
                type: 'line',
                smooth: true,
                itemStyle: {
                    normal: {
                        lineStyle: {
                            shadowColor: 'rgba(0,0,0,0.4)'
                        }
                    }
                },
                data: ['16911.99', '18673.87', '19959.43', '21205.67', '22940.94']
            },
            {
                name: '社会卫生支出(亿元)',
                type: 'line',
                smooth: true,
                itemStyle: {
                    normal: {
                        lineStyle: {
                            shadowColor: 'rgba(0,0,0,0.4)'
                        }
                    }
                },
                data: ['25810.78', '29150.57', '30273.67', '34963.26', '38345.67']
            },
        ]
    });
//直方图
    var histogramChart = echarts.init(document.getElementById('histogramChart'));
    histogramChart.setOption({

        color: ["#87cefa", "#ff7f50", "#32cd32", "#da70d6",],
        legend: {
            y: '250',
            x: 'center',
            data: ['卫生人员数(万人)', '卫生技术人员数(万人)', '注册护士数(万人)',],
            textStyle: {
                color: '#ffffff',

            }
        },

        calculable: false,


        grid: {
            left: '5%',
            right: '5%',
            bottom: '20%',
            containLabel: true
        },

        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },

        xAxis: [
            {
                type: 'value',
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#fff'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: ['#f2f2f2'],
                        width: 0,
                        type: 'solid'
                    }
                }

            }
        ],

        yAxis: [
            {
                type: 'category',
                data: ['2019', '2020', '2021', '2022', '2023'],
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#fff'
                    }
                },
                splitLine: {
                    lineStyle: {
                        width: 0,
                        type: 'solid'
                    }
                }
            }
        ],

        series: [
            {
                name: '卫生人员数(万人)',
                type: 'bar',
                stack: '总量',
                itemStyle: {normal: {label: {show: true, position: 'insideRight'}}},
                data: [1230.03, 1292.83, 1347.50, 1398.54, 1441.08]
            },
            {
                name: '卫生技术人员数(万人)',
                type: 'bar',
                stack: '总量',
                itemStyle: {normal: {label: {show: true, position: 'insideRight'}}},
                data: [952.92, 1015.40, 1067.80, 1124.42, 1247.00]
            },
            {
                name: '注册护士数(万人)',
                type: 'bar',
                stack: '总量',
                itemStyle: {normal: {label: {show: true, position: 'insideRight'}}},
                data: [444.50, 470.87, 501.94, 522.42, 563.00]
            },


        ]
    });

   var waterfallChart = echarts.init(document.getElementById('lineChart2'));
waterfallChart.setOption({
    color:["#87cefa","#ff7f50","#32cd32","#da70d6",],
    legend: {
        y : '260',
        x : 'center',
        textStyle : {
            color : '#ffffff',
        },
        data : [''],
    },
    calculable : false,
    tooltip : {
        trigger: 'item',
        formatter: "{a}<br/>{b}<br/>{c}"
    },
    yAxis: [
        {
            type: 'value',
            axisLine : {onZero: false},
            axisLine:{
                lineStyle:{
                    color: '#034c6a'
                },
            },
            axisLabel: {
                textStyle: {
                    color: '#fff'
                },
                formatter: function (value) {
                    return value + ""
                },
            },
            splitLine:{
                lineStyle:{
                    width:0,
                    type:'solid'
                }
            }
        }
    ],
    xAxis: [
        {
            type: 'category',
            data : ['2015', '2016', '2017', '2018', '2019','2020','2021','2022','2023'],
            axisLine:{
                lineStyle:{
                    color: '#034c6a'
                },
            },
            splitLine: {
                "show": false
            },
            axisLabel: {
                textStyle: {
                    color: '#fff'
                },
                formatter: function (value) {
                    return value + ""
                },
            },
            splitLine:{
                lineStyle:{
                    width:0,
                    type:'solid'
                }
            },
        }
    ],
    grid:{
        left: '5%',
        right: '5%',
        bottom: '20%',
        containLabel: true
    },
    series : [
        {
            name:'个人医疗费用支出',
            type:'bar',
            stack: 'total',
            itemStyle: {
                normal: {
                    lineStyle: {
                        shadowColor : 'rgba(0,0,0,0.4)'
                    }
                }
            },
            data:[2962.18,3328.61,3756.72,4206.74,4669.34,5112.34,5439.97,6044.09,6520]
        },
    ]
});
}
