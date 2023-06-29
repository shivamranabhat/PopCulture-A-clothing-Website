<template>
    <div>
        <div class="container">
            <div class="landing-section mb-md-4 mb-lg-4 d-flex flex-wrap justify-content-between align-items-center"
                style="height: 90vh">
                <div data-aos="slide-right" data-aos-anchor-placement="top-bottom"
                    class="landing-text mb-5 col-12 col-sm-12 col-md-6 col-lg-5 col-xl-5 d-flex flex-column justify-content-center align-items-center align-items-sm-center align-items-md-start align-items-lg-start align-items-xl-start"
                    style="height: 100%">
                    <p class="mb-1 px-2 py-1 bg-light">Free Home Delivery 24 Hours</p>
                    <h1 class="display-5 m-0" style="font-weight: 700">UNLOCK'</h1>
                    <h1 class="display-2 m-0" style="font-weight: 700">YOUR OWN STYLE</h1>
                    <p>Style your fashion like never before.</p>
                    <a class="btn btn-dark btn-lg mt-4 rounded-pill" href="#">TAKE A TOUR</a>
                </div>

                <img data-aos="slide-left" data-aos-anchor-placement="top-bottom"
                    class="main image py-4 ps-4 mb-5 col-12 col-sm-12 col-md-6 col-lg-7 col-xl-7 d-none d-sm-none d-md-block d-lg-block d-xl-block"
                    src="~/assets/images/landing.png" />

            </div>
            <!-- section products -->
            <h1 class="mt-0 mb-5 my-lg-5 text-center border-bottom pb-4" data-aos="slide-up"
                data-aos-anchor-placement="top-bottom">Hot Pick's</h1>
            <div class="row pb-3" style="margin-bottom: 2rem">
                <div class="product-card mb-3 mb-lg-5 py-2 col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4" data-aos="slide-up">
                    <div class="pointer rounded px-lg-5 d-flex align-items-center justify-content-center mb-2"
                        style="overflow:hidden">
                        <img src="~/assets/images/products/jeans.jpg" class="card-img" style="width:100%" />
                    </div>
                    <div class="description d-flex justify-content-between px-lg-5 mt-3">
                        <p class="text-uppercase">Slim fitt jeans</p>
                        <p class="text-uppercase">$ 250.00</p>
                    </div>
                </div>
                <div class="product-card mb-3 mb-lg-5 py-2 col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4" data-aos="slide-up">
                    <div class="pointer rounded px-lg-5 d-flex align-items-center justify-content-center mb-2"
                        style="overflow:hidden">
                        <img src="~/assets/images/products/tshirt1.jpg" class="card-img" style="width:100%" />
                    </div>
                    <div class="description d-flex justify-content-between px-lg-5 mt-3">
                        <p class="text-uppercase">Textured t-shirt</p>
                        <p class="text-uppercase">$ 150.00</p>
                    </div>
                </div>
                <div class="product-card mb-3 mb-lg-5 py-2 col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4" data-aos="slide-up">
                    <div class="pointer rounded px-lg-5 d-flex align-items-center justify-content-center mb-2"
                        style="overflow:hidden">
                        <img src="~/assets/images/products/shirt.jpg" class="card-img" style="width:100%" />
                    </div>
                    <div class="description d-flex justify-content-between px-lg-5 mt-3">
                        <p class="text-uppercase">Stripe print shirt</p>
                        <p class="text-uppercase">$ 250.00</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
useHead({
    title: 'Pop Culture- A Clothing Webstie'
})
</script>

<style scoped></style>