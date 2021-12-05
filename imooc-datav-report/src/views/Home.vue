<template>
    <div class="home">
        <TopView/>
        <!-- <SalesView/>
        <MapView/>
        <BottomView/> -->
        <v-chart :options="mydata"></v-chart>
        sdhfsdh
        sdhfsdh
        sdhfsdh
        sdhfsdh
        sdhfsdh
    </div>
</template>

<script>
import TopView from '@/components/TopView'
import SalesView from '@/components/SalesView'
import MapView from '@/components/MapView'
import BottomView from '@/components/BottomView'

export default {
    name: 'Home',
    components: {
        TopView,
        SalesView,
        MapView,
        BottomView 
    },
    data() {
        return {
            mydata: {
                xAxis: {
                    type: "category",
                },
                yAxis: {  
                    type:'value'
                }, 
                series:{
                    type:'line',
                    data:[100,200,400]
                }
            },
        };
    },
}
</script>
<style scoped lang="scss">
.home{
    width: 100%;
    height: 100%;
    padding: 20px;
    background: #eee;
    box-sizing: border-box;
}
</style>
