<template>
    <router-view></router-view>
</template>
<script>
export default {
    mounted () {
        this.$router.push('/home');
    },
}
</script>
