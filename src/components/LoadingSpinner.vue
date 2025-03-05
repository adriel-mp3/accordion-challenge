<script setup lang="ts">
defineProps({
	message: {
		type: String,
		default: "Carregando...",
	},
});
</script>
<template>
	<div class="flex w-full items-center justify-center gap-4 py-4">
		<v-progress-circular indeterminate color="purple" />
		<span>{{ message }}</span>
	</div>
</template>
