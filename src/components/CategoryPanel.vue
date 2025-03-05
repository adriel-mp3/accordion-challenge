<script setup lang="ts">
import { useStore } from "vuex";
import { computed } from "vue";
import SummaryDetails from "@/components/SummaryDetails.vue";
import TopicPanel from "@/components/TopicPanel.vue";
import LoadingSpinner from "./LoadingSpinner.vue";

const props = defineProps<{ notebookId: number }>();
const store = useStore();
const getCategoriesByNotebook = computed(() =>
	store.getters.getCategoriesByNotebook(props.notebookId),
);
const getLoadingState = computed(() =>
	store.getters.getLoadingState(props.notebookId),
);
</script>

<template>
	<LoadingSpinner v-if="getLoadingState" />
	<template v-else>
		<v-expansion-panels>
			<v-expansion-panel
				v-for="category in getCategoriesByNotebook"
				:key="category.id"
			>
				<v-expansion-panel-title class="!bg-neutral-100">
					<div>
						<p class="mb-2 font-bold">{{ category.title }}</p>
						<SummaryDetails :summary="category.summary" />
					</div>
				</v-expansion-panel-title>

				<v-expansion-panel-text>
					<TopicPanel :topics="category.topics" />
				</v-expansion-panel-text>
			</v-expansion-panel>
		</v-expansion-panels>
	</template>
</template>
