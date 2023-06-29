<template>
    <header>
        <nav class="navbar fixed-top navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow">
            <div class="container">
                <NuxtLink to="#" class="navbar-brand d-flex align-items-center justify-content-center h-100" asp-area=""
                    asp-controller="Home" asp-action="Index"><img src="~/assets/images/popculture.svg"
                        style="height: 1.5rem" /></NuxtLink>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=".navbar-collapse"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="navbar-collapse collapse d-sm-inline-flex justify-content-between">
                    <ul class="navbar-nav mx-auto flex-grow-1">
                        <li class="nav-item">
                            <NuxtLink class="nav-link text-dark" to="/" asp-action="Index">Home</NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink class="nav-link text-dark" to="/admin/categories">Categories</NuxtLink>
                        </li>

                    </ul>
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <NuxtLink class="btn btn-sm border-black nav-link me-2" id="register" to="#">Register
                            </NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink class="btn btn-sm btn-dark nav-link text-light px-3" id="login" to="#">Login
                            </NuxtLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>