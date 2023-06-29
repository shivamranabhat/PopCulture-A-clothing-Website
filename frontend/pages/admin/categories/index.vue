<template>
    <div class="container">
        <div class="content py-5" style="height: 80vh">

            <div class="row align-items-center my-4">
                <h5 class="col-6 m-0">Category List</h5>
                <div class="d-flex justify-content-end col-6">
                    <NuxtLink to="/admin/categories/create" class="btn btn-dark"><i
                            class="bi bi-plus-circle me-2"></i>Create New</NuxtLink>
                </div>
            </div>
            <table class="table table-bordered table-striped" style="width:100%">
                <thead>
                    <tr>
                        <th>
                            S.N.
                        </th>
                        <th>
                            Category Name
                        </th>
                        <th>
                            Description
                        </th>
                        <th>
                            Created At
                        </th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody v-if="isLoading">
                    <tr class="text-center">
                        <td colspan="5">
                            <Spinner :title="isLoadingTitle" />
                        </td>
                    </tr>
                </tbody>
                <tbody v-else>
                    <tr v-for="(category, index) in categories" :key="index">
                        <td>
                            {{ index + 1 }}
                        </td>
                        <td width="50%">
                            {{ category.name }}
                        </td>
                        <td width="30%">
                            {{ category.description }}
                        </td>
                        <td width="20%">
                            {{ category.created_at }}
                        </td>
                        <td>
                            <div class=" btn-group" role="group">
                                <NuxtLink class="btn btn-dark" to="#"><i class="bi bi-pen"></i></NuxtLink>
                                <button class="btn btn-outline-danger" data-bs-toggle="modal" data-bs-target="#delete"><i
                                        class="bi bi-trash3"></i></button>
                                <div ref="deleteModal" class="modal fade" id="delete" tabindex="-1"
                                    aria-labelledby="deleteLabel" aria-hidden="true">
                                    <div class="modal-dialog modal-dialog-centered">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                <h5>Are you sure want to delete this?</h5>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-dark" data-bs-dismiss="modal"><i
                                                        class="bi bi-x-circle"></i> Close</button>
                                                <button type="button" @click="deleteCategory(category.slug)"
                                                    class="btn btn-danger"><i class="bi bi-trash3"></i> Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>


        </div>
    </div>
</template>

<script>
import axios from 'axios';
useHead({
    title: 'Categories'
})
export default {
    data() {
        return {
            categories: {},
            isLoading: true,
            isLoadingTitle: 'Loading...',
        }
    },
    mounted() {
        this.getCategories();
    },
    methods: {
        async getCategories() {
            this.isLoading = true;
            try {
                const res = await axios.get('http://127.0.0.1:8000/api/category');
                this.categories = res.data.categories;
                this.isLoading = false;
            }
            catch (error) {
                console.log(error);
            }
            finally {
                this.isLoading = false;
            }
        },
        async deleteCategory(categorySlug) {
            this.isLoading = true;
            this.isLoadingTitle = 'Deleting'
            try {
                const res = await axios.delete(`http://127.0.0.1:8000/api/delete-category/${categorySlug}`);
                this.isLoading = false;
                this.getCategories();
                $this.ref.deleteModal.hide();
            }
            catch (error) {
                console.log(error);
            }
        }
    }
}
</script>

<style scoped></style>