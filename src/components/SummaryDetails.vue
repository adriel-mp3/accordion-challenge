<script setup lang="ts">
import type { CategorySummary } from "@/types";

defineProps<{ summary: CategorySummary }>();
</script>

<template>
	<ul class="flex flex-wrap gap-4 text-xs text-neutral-500">
		<li>
			<span class="font-bold text-neutral-700">Aulas</span>
			{{ summary.lessonsCount }} | {{ summary.lessonsTime }}
		</li>
		<li>
			<span class="font-bold text-neutral-700">Exercícios</span>
			{{ summary.exercisesCount }} | {{ summary.exercisesTime }}
		</li>
		<li>
			<span class="font-bold text-neutral-700">Materiais</span>
			{{ summary.materialsCount }} | {{ summary.materialsTime }}
		</li>
	</ul>
</template>
