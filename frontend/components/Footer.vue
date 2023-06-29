<template>
    <div class="row-fluid mb-0 py-4 bg-dark">
        <div class="container">
            <div class="row-fluid d-flex justify-content-between align-items-center">
                <img src="~/assets/images/popculturedark.svg" class="logo" style="height: 1.5rem" alt="" />
                <div class="footer-social-icons d-flex">
                    <NuxtLink to="" class="footer-social facebook">
                        <i class="fa-brands fa-facebook-f"></i>
                    </NuxtLink>
                    <NuxtLink to="" class="footer-social instagram">
                        <i class="fa-brands fa-instagram"></i>
                    </NuxtLink>
                    <NuxtLink to="" class="footer-social twitter">
                        <i class="fa-brands fa-twitter"></i>
                    </NuxtLink>
                </div>
            </div>
            <div class="row footer-line mt-3"></div>
            <div class="d-flex align-items-center pl-3 my-4">
                <p class="text-white m-0 p-0 col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                    Copyright 2022. All Rights Reserved
                </p>
                <ul
                    class="footer-navigation align-items-start justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-end justify-content-xl-end m-0 col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 d-none d-sm-none d-md-none d-lg-flex d-xl-flex">
                    <li>
                        <NuxtLink to="#">Home</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="#">Products</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="#">About</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="#">Contact</NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped></style>