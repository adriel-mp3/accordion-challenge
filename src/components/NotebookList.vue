<script setup lang="ts">
import { useStore } from "vuex";
import { computed, onMounted } from "vue";
import CategoryPanel from "@/components/CategoryPanel.vue";
import SummaryDetails from "@/components/SummaryDetails.vue";
import EmptyNotebookList from "./EmptyNotebookList.vue";

const store = useStore();
const notebooks = computed(() => []);

onMounted(() => {
	store.dispatch("fetchNotebooks");
});

const fetchCategories = (id: number) => store.dispatch("fetchCategories", id);
</script>

<template>
	<section>
		<v-container>
			<v-expansion-panels variant="accordion" v-if="notebooks.length">
				<v-expansion-panel
					v-for="notebook in notebooks"
					:key="notebook.id"
					@group:selected="fetchCategories(notebook.id)"
				>
					<v-expansion-panel-title>
						<div>
							<p class="mb-2 font-bold">{{ notebook.title }}</p>
							<SummaryDetails :summary="notebook.summary" />
						</div>
					</v-expansion-panel-title>

					<v-expansion-panel-text>
						<CategoryPanel :notebookId="notebook.id" />
					</v-expansion-panel-text>
				</v-expansion-panel>
			</v-expansion-panels>
			<EmptyNotebookList v-if="!notebooks.length" />
		</v-container>
	</section>
</template>
