<template>
    <CommonCard 
        title="累计用戶數"
        value="2,157,420"
    >
        <template>
            <div id="total-user-chart" :style="{width:'100%',height:'100%'}"></div>
        </template>
        <template v-slot:footer>
            <div class="total-user-footer">
                <span>日同比</span>
                <span class="emphasis">8.73%</span>
                <div class="increase"></div>
                <span class="month">月同比</span>
                <span class="emphasis">5.73%</span>
                <div class="decrease"></div>
            </div>
        
        </template>  
    </CommonCard>
</template>

<script>
import commonCardMixin from '@/mixins/commonCardMixin'

export default {
    mixins:[commonCardMixin],
    mounted(){
        let chart = this.$echarts.init(document.getElementById('total-user-chart'));
       
        chart.setOption({
            xAxis:{
                type:'value',
                //max:250,
                
            },
            yAxis:{
                type:'category',
            },
            series:[
                {
                    type:'bar',
                    stack:'總量',
                    data:[220],
                    barWidth:10,
                    itemStyle:{
                        color:'#45c946'
                    },
    
                },{
                    type:'bar',
                    stack:'總量',
                    data:[300],
                    itemStyle:{
                        color:'#eee'
                    }
                },
                ,{
                    type:'custom',
                    stack:'總量',
                    data:[220],
                    renderItem:(params,api)=>{
                        const value = api.value(0);
                        const endPoint = api.coord([value,0]);
                        return {
                            type:'group',
                            position:endPoint,
                            children:[
                                {
                                    type:'path',
                                    shape:{
                                        d:'M0 767.909l512.029-511.913L1024 767.909 0 767.909z',
                                        x:-5,
                                        y:5,
                                        width:10,
                                        height:10,
                                        layout:'cover'
                                    },
                                    style:{
                                        fill:'red'
                                    },
                                    
                                },
                                {
                                    type:'path',
                                    shape:{
                                        d:'M1024 255.996 511.971 767.909 0 255.996 1024 255.996z',
                                        x:-5,
                                        y:-15,
                                        width:10,
                                        height:10,
                                        layout:'cover'
                                    },
                                    style:{
                                        fill:'red'
                                    },
                                   
                                }
                            ]
                            
                        }
                    }
                }
            ],
            grid:{
                top:0,
                bottom:0,
                left:0,
                right:0
            }
        })
    }
}
</script>
<style scoped lang="scss">
.total-user-footer{
    display: flex;
    align-items: center;
    .month{
        margin-left: 10px;
    }
}
</style>
