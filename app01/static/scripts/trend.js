var symptomName = last_year_month();


$(function(){


  init();

})

 function init(){

   var myColor = ['#1089E7', '#F57474', '#56D0E3', '#F8B448', '#8B78F6'];

   //主要传染病
   var histogramChart1 = echarts.init(document.getElementById('histogramChart1'));
   histogramChart1.setOption({

     color:['#5bc0de'],
     grid:{
         left: '5%',
         right: '5%',
         bottom: '5%',
         containLabel: true
     },
     tooltip : {
        trigger: 'item',
        formatter: "{a}<br/>{b}<br/>{c}人"
    },
     calculable : true,
     xAxis : [
         {
             type : 'category',
             data : ['病毒性肝炎发病(人)','肺结核发病(人)','梅毒发病(人)','淋病发病(人)','布鲁氏菌病发病(人)','艾滋病发病(人)','细菌性发病(人)','猩红热发病(人)'],
             axisLine:{
                  lineStyle:{
                      color: '#5bc0de'
                  },
              },
              axisLabel : {
                interval:0,
                rotate:40,
                  textStyle: {
                      color: '#fff'
                  }
              }
         }
     ],
     yAxis : [
         {
             type : 'value',
             axisLine:{
                 lineStyle:{
                     color: '#5bc0de'
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
         }
     ],
     series : [
         {
             name:'主要传染病',
             type:'bar',
             barWidth : 20,
             data:[1105865,560847,441159,96313,66138,52058,35951,20794],
         },
     ]
   })

   //主要症状
   var histogramChart2 = echarts.init(document.getElementById('histogramChart2'));
   histogramChart2.setOption({

     color:['#FD6C88'],
     grid:{
         left: '5%',
         right: '5%',
         bottom: '10%',
         containLabel: true
     },
     tooltip : {
        trigger: 'item',
        formatter: "{a}<br/>{b}<br/>{c}%"
    },
     calculable : true,
     yAxis : [
         {
             type : 'category',
             data : ['印度','印度尼西亚','中国','菲律宾','巴基斯坦','尼日利亚','孟加拉国','刚果民主共和国'],
             axisLine:{
                  lineStyle:{
                      color: '#FD6C88'
                  },
              },
              axisLabel : {
                  textStyle: {
                      color: '#fff'
                  }
              }
         }
     ],
     xAxis : [
         {
             type : 'value',
             axisLine:{
                 lineStyle:{
                     color: '#FD6C88'
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
         }
     ],
     series : [
         {

             type:'bar',
             barWidth : 20,
             name:'传染病分布率：',
             data:[27,10,7.1,7,5.7,4.5,3.6,3],
         },
     ]
   })

   //传染病发病趋势
   var lineChart1 = echarts.init(document.getElementById('lineChart1'));
   lineChart1.setOption({
     title: {
        text: '传染病发病趋势',
        textStyle:{
           fontSize:16,
           color:'#ff7f50'
       },
    },
     color:["#ff7f50"],
     grid:{
         left: '15%',
         right: '5%',
         bottom: '15%',

     },
     tooltip : {
          trigger: 'item',
          formatter: "{a}<br/>{b}<br/>{c}人"
      },

     calculable : true,
         yAxis: [
             {
                 type: 'value',
                 axisLine:{
                     lineStyle:{
                         color: '#ff7f50'
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
             }
         ],
         xAxis: [
             {
                 type: 'category',
                 data : symptomName,
                 boundaryGap : false,
                 axisLine:{
                     lineStyle:{
                         color: '#ff7f50'
                     },
                 },
                 splitLine: {
                     "show": false
                 },
                 axisLabel: {
                   // interval:0,
                   // rotate:40,
                     textStyle: {
                         color: '#fff'
                     },
                     formatter: function (value) {
                         return value + ""
                     },
                 },
             }
         ],
     series : [
         {
             name:'传染病人数',
             type:'line',
             smooth:true,
             itemStyle: {normal: {areaStyle: {type: 'default'}}},
             data:[120, 132, 101, 134, 90, 230, 210,120, 132, 101, 134, 90]
         },
     ]

   })

   //主要疾病排行
   var histogramChart3 = echarts.init(document.getElementById('histogramChart3'));
   histogramChart3.setOption({

     grid: {
         top: '12%',
         left: '30%'
     },
      xAxis: {
          show: false
      },
      yAxis: [{
          show: true,
          data:  ['艾滋病死亡(人)','肺结核死亡(人)','狂犬病死亡(人)','病毒性肝炎死亡(人)','流行性出血热死亡(人)','梅毒死亡(人)','乙脑死亡(人)','新生破伤风死亡(人)'],
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


      }, {
          show: true,
          inverse: true,
          data:[],
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

      }],
      series: [{
          name: '条',
          type: 'bar',
          yAxisIndex: 0,
          data: [18885, 2205, 118, 543,34,23,5,1],
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
      }, {
          name: '框',
          type: 'bar',
          yAxisIndex: 1,
          barGap: '-100%',
          data: [20000, 20000, 20000, 20000,20000,20000,20000,20000],
          barWidth: 15,
          itemStyle: {
              normal: {
                  color: 'none',
                  borderColor: '#00c1de',
                  borderWidth: 1,
                  barBorderRadius: 15,
              }
          }
      }, ]
   })

    // 疾病发病趋势
    var lineChart2 = echarts.init(document.getElementById('lineChart2'));
   lineChart2.setOption({
     title: {
        text: '艾滋病历年死亡率',
        textStyle:{
           fontSize:16,
           color:'#32cd32'
       },
       x:"center"
    },
     color:["#32cd32"],
     grid:{
         left: '15%',
         right: '5%',
         bottom: '25%',

     },
     tooltip : {
          trigger: 'item',
          formatter: "{a}<br/>{b}<br/>{c}人"
      },

     calculable : true,
         yAxis: [
             {
                 type: 'value',
                 axisLine:{
                     lineStyle:{
                         color: '#32cd32'
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
             }
         ],
         xAxis: [
             {
                 type: 'category',
                 data : [2017,2018,2019,2020,2021,2022],
                 boundaryGap : false,
                 axisLine:{
                     lineStyle:{
                         color: '#32cd32'
                     },
                 },
                 splitLine: {
                     "show": false
                 },
                 axisLabel: {
                   // interval:0,
                   // rotate:40,
                     textStyle: {
                         color: '#fff'
                     },
                     formatter: function (value) {
                         return value + ""
                     },
                 },
             }
         ],
     series : [
         {
             name:'疾病发病人数',
             type:'line',
             smooth:true,
             itemStyle: {normal: {areaStyle: {type: 'default'}}},
             data:[1.1100,1.3459,1.5036,1.3405,1.3919,1.3388]
         },
     ]

   })




   //年龄分布
   var pieChart1 = echarts.init(document.getElementById('pieChart1'));
   pieChart1.setOption({
     color:["#ff7f50","#87cefa","#00ff00","#FD6C88"],
     tooltip : {
      trigger: 'item',
      formatter: "{a}<br/>{b}<br/>{c}%"
     },
     calculable : true,
     series : [
         {
             name:'发病人数',
             type:'pie',
             radius : [30, 110],
             center : ['50%', '50%'],
             roseType : 'area',
             x: '50%',



             sort : 'ascending',
             data:[
                 {value:16, name:'空气传播'},
                 {value:9, name:'水和食物传播'},
                 {value:13, name:'虫媒传播'},
                 {value:56, name:'接触性传播'},

             ]
         }
     ]
   })

   // 性别分布
    var labelFromatter = {
    normal: {
        label: {
            position: 'center',
            formatter: function (params) {
                if (params.name == "其他") {
                    return "其他" + ":" + (params.percent + '%');
                } else {
                    return params.name + ":" + (params.percent + '%');
                }
            },
        },
        labelLine: {
            show: false
        }
    },
};

    var pieChart2 = echarts.init(document.getElementById('pieChart2'));
    pieChart2.setOption({
    color: ['#87cefa', '#FD6C88', '#6a5acd', "#ff7f50"],
    tooltip: {
        trigger: 'item',
        formatter: "{b}({c})<br/>{d}%"
    },
    series: [
        {
            type: 'pie',
            center: ['50%', '50%'],
            radius: [55, 95],
            x: '0%', // for funnel
            itemStyle: labelFromatter,
            data: [
                { name: '甲', value: 2 },
                { name: '乙', value: 28 },
                { name: '丙', value: 11 },
                { name: '其他', value: 18 },
            ]
            },
        ],
   })

 }
