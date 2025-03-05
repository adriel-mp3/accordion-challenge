<script setup lang="ts">
import { ref } from "vue";
import BreadCrumb from "@/components/BreadCrumb.vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import NotebookList from "@/components/NotebookList.vue";

const breadcrumbItems = ref([
	{
		title: "Cadernos",
		disabled: true,
		href: "#",
	},
	{
		title: "Língua Portuguesa",
		disabled: false,
		href: "#",
		active: true,
	},
]);
</script>

<template>
	<DefaultLayout>
		<BreadCrumb :items="breadcrumbItems" class="mb-8" />
		<VContainer>
			<NotebookList />
		</VContainer>
	</DefaultLayout>
</template>
