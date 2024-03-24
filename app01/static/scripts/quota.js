
$(function(){


  init();

})
function init(){



  var myColor = ['#1089E7', '#F57474', '#56D0E3', '#F8B448', '#8B78F6'];

  //各医院门诊人次
var histogramChart1 = echarts.init(document.getElementById('histogramChart1'));
histogramChart1.setOption({

    grid: {
        top: '20%',
        left: '32%'
    },
    xAxis: {
        show: false
    },
    yAxis: [{
            show: true,
            data: ['公立医院', '私立医院', '三级医院', '二级医院', '一级医院'], // 添加新增医院
            inverse: true,
            axisLine: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                color: '#fff',
                formatter: (value, index) => {
                    return [

                        `{lg|${index+1}}  ` + '{title|' + value + '} '
                    ].join('\n')
                },
                rich: {
                    lg: {
                        backgroundColor: '#339911',
                        color: '#fff',
                        borderRadius: 15,
                        // padding: 5,
                        align: 'center',
                        width: 15,
                        height: 15
                    },
                }
            },


        },
        {
            show: true,
            inverse: true,
            data: [2.2,2.3,2.2,2.3,1.9], // 添加新增医院的数据
            axisLabel: {
                textStyle: {
                    fontSize: 12,
                    color: '#fff',
                },
            },
            axisLine: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },

        }
    ],
    series: [{
            name: '条',
            type: 'bar',
            yAxisIndex: 0,
            data: [2.2,2.3,2.2,2.3,1.9], // 添加新增医院的数据
            barWidth: 10,
            itemStyle: {
                normal: {
                    barBorderRadius: 20,
                    color: function(params) {
                        var num = myColor.length;
                        return myColor[params.dataIndex % num]
                    },
                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                    formatter: '{c}'
                }
            },
        },
        {
            name: '框',
            type: 'bar',
            yAxisIndex: 1,
            barGap: '-100%',
            data: [10, 10, 10, 10, 10], // 添加新增医院的数据
            barWidth: 15,
            itemStyle: {
                normal: {
                    color: 'none',
                    borderColor: '#00c1de',
                    borderWidth: 3,
                    barBorderRadius: 15,
                }
            }
        },
    ]
})

  //各医院住院人次
var histogramChart2 = echarts.init(document.getElementById('histogramChart2'));
histogramChart2.setOption({

    grid: {
        top: '20%',
        left: '32%'
    },
    xAxis: {
        show: false
    },
    yAxis: [{
            show: true,
            data: ['公立医院', '私立医院', '三级医院', '二级医院', '一级医院'], // 添加新增医院
            inverse: true,
            axisLine: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                color: '#fff',
                formatter: (value, index) => {
                    return [

                        `{lg|${index+1}}  ` + '{title|' + value + '} '
                    ].join('\n')
                },
                rich: {
                    lg: {
                        backgroundColor: '#339911',
                        color: '#fff',
                        borderRadius: 15,
                        // padding: 5,
                        align: 'center',
                        width: 15,
                        height: 15
                    },
                }
            },


        },
        {
            show: true,
            inverse: true,
            data: [7.0,4.7,7.2,6.2,4.8], // 添加新增医院的数据
            axisLabel: {
                textStyle: {
                    fontSize: 12,
                    color: '#fff',
                },
            },
            axisLine: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },

        }
    ],
    series: [{
            name: '条',
            type: 'bar',
            yAxisIndex: 0,
            data: [7.0,4.7,7.2,6.2,4.8], // 添加新增医院的数据
            barWidth: 10,
            itemStyle: {
                normal: {
                    barBorderRadius: 20,
                    color: function(params) {
                        var num = myColor.length;
                        return myColor[params.dataIndex % num]
                    },
                }
            },
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                    formatter: '{c}'
                }
            },
        },
        {
            name: '框',
            type: 'bar',
            yAxisIndex: 1,
            barGap: '-100%',
            data: [10, 10, 10, 10, 10], // 添加新增医院的数据
            barWidth: 15,
            itemStyle: {
                normal: {
                    color: 'none',
                    borderColor: '#00c1de',
                    borderWidth: 3,
                    barBorderRadius: 15,
                }
            }
        },
    ]
})


    //手术工作量
    var pieChart1 = echarts.init(document.getElementById('pieChart1'));
    pieChart1.setOption({
      color:["#87cefa","#ff7f50","#32cd32","#da70d6",],
      tooltip : {
       trigger: 'item',
       formatter: "{a}<br/>{b}<br/>{c}所"
      },
      calculable : true,
      series : [
          {
              name:'公立医院数量分布',
              type:'pie',
              radius : [30, 110],
              center : ['50%', '50%'],
              roseType : 'area',
              x: '50%',
              max: 40,
              sort : 'ascending',
              data:[
                  {value:2193, name:'一级医院'},
                  {value:5718, name:'二级医院'},
                  {value:2789, name:'三级医院'},
                  {value:1104, name:'未定级'},
              ]
          }
      ]
    })

    //医疗费用
    var lineChart1 = echarts.init(document.getElementById('lineChart1'));
    lineChart1.setOption( {
      color:["#87cefa","#ff7f50","#32cd32","#da70d6",],
      tooltip : {
           trigger: 'item',
           formatter: "{a}<br/>{b}<br/>{c}亿人次"
       },
       legend: {
        data:['乡镇卫生院','社区卫生服务中心'],
        y: 'bottom',
        x:'center',
        textStyle:{
            color:'#fff',
            fontSize:12
        }
      },
      grid:{
        left: '5%',
        right: '5%',
        bottom: '10%',
        containLabel: true
      },
      calculable : true,
      xAxis : [
          {
              type : 'category',
              boundaryGap : false,
              data : ['2016','2017','2018','2019','2020','2021','2022'],
              axisLine:{
                   lineStyle:{
                       color: '#87cefa'
                   },
               },
               axisLabel : {
                 interval:0,
                 rotate:40,

                   textStyle: {
                       color: '#fff',
                       fontSize:13
                   }
               }
          }
      ],
      yAxis : [
          {
              type : 'value',
              axisLine:{
                  lineStyle:{
                      color: '#87cefa'
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
                      return value + "亿人次"
                  },
              },
          }
      ],
      series : [
          {
              name:'乡镇卫生院',
              type:'line',
              smooth:true,
              itemStyle: {normal: {areaStyle: {type: 'default'}}},
              data:[10.82,11,11,11.16,11.75,11.75,10.95,11.61,12.08]
          },
          {
              name:'社区卫生服务中心',
              type:'line',
              smooth:true,
              itemStyle: {normal: {areaStyle: {type: 'default'}}},
              data:[5.63,6.07,6.39,6.19,6.21,6.96,6.93]
          },
      ]

    })

    //体检人次
    var lineChart2 = echarts.init(document.getElementById('lineChart2'));
    lineChart2.setOption( {
      color:["#87cefa","#ff7f50","#32cd32","#da70d6",],
      tooltip : {
           trigger: 'item',
           formatter: "{a}<br/>{b}<br/>{c}万人"
       },
       legend: {
        data:['乡镇卫生院','社区卫生服务中心'],
        y: 'bottom',
        x:'center',
        textStyle:{
            color:'#fff',
            fontSize:12
        }
      },
      grid:{
        left: '5%',
        right: '5%',
        bottom: '10%',
        containLabel: true
      },
      calculable : true,
      xAxis : [
          {
              type : 'category',
              boundaryGap : false,
              data : ['2016','2017','2018','2019','2020','2021','2022'],
              axisLine:{
                   lineStyle:{
                       color: '#87cefa'
                   },
               },
               axisLabel : {
                 interval:0,
                 rotate:40,

                   textStyle: {
                       color: '#fff',
                       fontSize:13
                   }
               }
          }
      ],
      yAxis : [
          {
              type : 'value',
              axisLine:{
                  lineStyle:{
                      color: '#87cefa'
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
                      return value + "万人次"
                  },
              },
          }
      ],
      series : [
          {
              name:'乡镇卫生院',
              type:'line',
              smooth:true,
              itemStyle: {normal: {areaStyle: {type: 'default'}}},
              data:[3799.94,4047.17,3985.09,3909.39,3383.35,3223.00,3239.03]
          },
          {
              name:'社区卫生服务中心',
              type:'line',
              smooth:true,
              itemStyle: {normal: {areaStyle: {type: 'default'}}},
              data:[313.71,344.25,339.54,339.52,292.73,319.30,333.80]
          },
      ]

    })

    //床位数量分布
    var pieChart2 = echarts.init(document.getElementById('pieChart2'));
    pieChart2.setOption({
      color:["#87cefa","#ff7f50","#32cd32","#da70d6",],
      tooltip : {
       trigger: 'item',
       formatter: "{a}<br/>{b}<br/>{c}所"
      },
      calculable : true,
      series : [
          {
              name:'私立医院数量分布',
              type:'pie',
              radius : [30, 110],
              center : ['45%', '50%'],
              roseType : 'area',
              x: '50%',
              max: 40,
              sort : 'ascending',
              data:[
                  {value:10458, name:'一级医院'},
                  {value:5130, name:'二级医院'},
                  {value:486, name:'三级医院'},
                  {value:8694, name:'未定级'},
              ]
          }
      ]
    })

    //药占比
    var histogramChart3 = echarts.init(document.getElementById('histogramChart3'));
    histogramChart3.setOption( {

      color:['#87cefa'],
      grid:{
          left: '5%',
          right: '5%',
          bottom: '5%',
          containLabel: true
      },
      tooltip : {
         trigger: 'item',
         formatter: "{a}<br/>{b}<br/>{c}所"
     },
      calculable : true,
      xAxis : [
          {
              type : 'category',
              data : ['综合医院','中医医院','中西医结合医院','民族医院','专科医院'],
              axisLine:{
                   lineStyle:{
                       color: '#87cefa'
                   },
               },
               axisLabel : {
                 interval:0,
                 rotate:40,

                   textStyle: {
                       color: '#fff',
                       fontSize:13
                   }
               }
          }
      ],
      yAxis : [
          {
              type : 'value',
              axisLine:{
                  lineStyle:{
                      color: '#87cefa'
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
                      return value + '所'
                  },
              },
          }
      ],
      series : [
          {
              name:'各类医院种类分布',
              type:'bar',
              barWidth:30,
              data:[20307, 4630, 756, 329, 9699],
          },
      ]
    });

    //平均住院天数
    var histogramChart4 = echarts.init(document.getElementById('histogramChart4'));
    histogramChart4.setOption( {
      color:['#87cefa'],
      grid:{
          left: '5%',
          right: '5%',
          bottom: '5%',
          containLabel: true
      },
      tooltip : {
         trigger: 'item',
         formatter: "{a}<br/>{b}<br/>{c}亿人次"
     },
      calculable : true,
      xAxis : [
          {
              type : 'category',
              data : ['综合医院','中医医院','中西医结合医院','民族医院','专科医院'],
              axisLine:{
                   lineStyle:{
                       color: '#87cefa'
                   },
               },
               axisLabel : {
                 interval:0,
                 rotate:40,

                   textStyle: {
                       color: '#fff',
                       fontSize:13
                   }
               }
          }
      ],
      yAxis : [
          {
              type : 'value',
              axisLine:{
                  lineStyle:{
                      color: '#87cefa'
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
                      return value + '亿人次'
                  },
              },
          }
      ],
      series : [
          {
              name:'诊疗人数',
              type:'bar',
              barWidth:30,
              data:[27.27,5.99,0.77,0.15,4.01]
          },
      ]
    });

}
