<script setup lang="ts">

interface BreadCrumbItems {
	title: string;
	disabled?: boolean;
	href: string;
	active?: boolean;
}

defineProps<{
  items: BreadCrumbItems[];
}>();
</script>

<template>
	<div>
		<v-breadcrumbs
			:items="items"
			divider="/"
			active-class="!underline !decoration-purple-600 !decoration-3 !underline-offset-8"
		></v-breadcrumbs>
	</div>
</template>
