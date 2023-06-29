<template>
    <div class="d-flex align-items-center justify-content-center">
        <div class="spinner-border" style="margin-right:0.3rem;width: 2rem; height: 2rem;" role="status">
        </div><h5>{{ title }}</h5>
    </div>
</template>

<script>
export default {
    props: {
        title: String
    }
}
</script>

<style lang="scss" scoped></style>