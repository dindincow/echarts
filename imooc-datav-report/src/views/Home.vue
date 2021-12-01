<template>
    <div class="home">
        <TopView/>
        <SalesView/>
        <MapView/>
        <BottomView/>
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
    }
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
