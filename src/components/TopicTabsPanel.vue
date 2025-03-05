<script setup lang="ts">
import { ref } from "vue";
import TabSummaryHeader from "@/components/TabSummaryHeader.vue";
import type { Topic } from "@/types";

defineProps<{ topic: Topic }>();
const tab = ref("lessons");
</script>

<template>
	<v-tabs v-model="tab" color="deep-purple-accent-4">
		<v-tab value="lessons">Aulas</v-tab>
		<v-tab value="exercises">Exercícios</v-tab>
		<v-tab value="materials">Materiais</v-tab>
	</v-tabs>

	<v-card-text>
		<v-tabs-window v-model="tab">
			<v-tabs-window-item value="lessons">
				<TabSummaryHeader label="Aulas" :title="topic.leassonType" :summary="{ count: topic.summary.lessonsCount, time: topic.summary.lessonsTime }" />
				<ul>
					<li v-for="lesson in topic.lessons" :key="lesson.id" class="flex items-center gap-2">
						<v-checkbox-btn color="deep-purple-accent-4" density="compact" v-model="lesson.completed" :label="lesson.title" />
						<span class="text-sm text-neutral-400"> {{ lesson.duration }} </span>
					</li>
				</ul>
			</v-tabs-window-item>

			<v-tabs-window-item value="exercises">
				<TabSummaryHeader label="Exercícios" :title="topic.exerciseType" :summary="{ count: topic.summary.exercisesCount, time: topic.summary.exercisesTime }" />
				<ul>
					<li v-for="exercise in topic.exercises" :key="exercise.id" class="flex items-center gap-2">
						<v-checkbox-btn density="compact" color="deep-purple-accent-4" v-model="exercise.completed" :label="exercise.title" />
						<span class="text-sm text-neutral-400"> {{ exercise.duration }} </span>
					</li>
				</ul>
			</v-tabs-window-item>

			<v-tabs-window-item value="materials">
				<TabSummaryHeader label="Materiais" :title="topic.materialType" :summary="{ count: topic.summary.materialsCount, time: topic.summary.materialsTime }" />
				<ul>
					<li v-for="material in topic.materials" :key="material.id" class="flex items-center gap-2">
						<v-checkbox-btn density="compact" v-model="material.completed" color="deep-purple-accent-4" :label="material.title" />
						<span class="text-sm text-neutral-400"> {{ material.duration }} </span>
					</li>
				</ul>
			</v-tabs-window-item>
		</v-tabs-window>
	</v-card-text>
</template>
