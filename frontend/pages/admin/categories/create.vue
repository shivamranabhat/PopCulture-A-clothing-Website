<template>
    <div class="container">
        <form @submit.prevent="saveCategory" class="content pt-4" style="height: 80vh">
            <div class="border p-3">
                <div class="row pb-2">
                    <h4>Create Category</h4>
                    <hr />
                </div>
                <div v-if="isLoading">
                    <Spinner :title="isLoadingTitle" />
                </div>
                <div v-else>
                    <div class="mb-3">
                        <label for="Name">Name</label>
                        <input id="name" name="name" v-model="category.name" class="form-control" />
                        <span class="text-danger" v-if="this.errorList.name">{{ this.errorList.name[0] }}</span>
                    </div>
                    <div class="mb-3">
                        <label for="description">Description</label>
                        <input id="description" name="description" v-model="category.description" class="form-control" />
                        <span class="text-danger" v-if="this.errorList.description">{{ this.errorList.description[0]
                        }}</span>
                    </div>
                    <button type="submit" class="btn btn-dark mt-2" style="margin-right: 1rem;">Create</button>
                    <NuxtLink to="/admin/categories" class="btn mt-2 btn-outline-dark">Back</NuxtLink>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            category: {
                name: '',
                description: ''
            },
            isLoading: false,
            isLoadingTitle: 'Loading...',
            errorList: {}
        }
    },
    methods: {
        async saveCategory() {
            this.isLoading = true;
            this.isLoadingTitle = "Saving...";
            try {
                const response = await axios.post('http://127.0.0.1:8000/api/store-category', this.category);
                this.category.name = '';
                this.category.description = '';
                this.isLoading = false;
            } catch (error) {
                if (error.response) {
                    if (error.response.status == 422) {
                        this.errorList = error.response.data.errors;
                        this.isLoading = false;
                    }
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped></style>