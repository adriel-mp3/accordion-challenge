<script setup lang="ts">
defineProps<{
	title: string;
	summary: {
		count: number;
		time: string;
	};
	label: "Aulas" | "Exercícios" | "Materiais";
}>();
</script>

<template>
	<div class="flex justify-between items-center">
		<p class="mb-2 text-lg font-semibold text-neutral-700">
			{{ title }}
		</p>
		<span class="text-sm text-neutral-500"> {{ summary.count }} {{ label }} | {{ summary.time }} </span>
	</div>
</template>
