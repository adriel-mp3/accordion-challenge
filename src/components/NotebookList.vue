<script setup lang="ts">
import { useStore } from "vuex";
import { computed, onMounted, ref } from "vue";
import SummaryDetails from "@/components/SummaryDetails.vue";
import TabSummaryHeader from "./TabSummaryHeader.vue";

const tab = ref("lessons");

const store = useStore();
const notebooks = computed(() => store.state.notebooks);

onMounted(() => {
	store.dispatch("fetchNotebooks");
});

const getCategoriesByNotebook = (id: number) => computed(() => store.getters.getCategoriesByNotebook(id));
const getLoadingState = (id: number) => computed(() => store.getters.getLoadingState(id));
const fetchCategories = (id: number) => store.dispatch("fetchCategories", id);
</script>

<template>
	<section>
		<VContainer>
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
						<div
							v-if="getLoadingState(notebook.id).value"
							class="flex w-full items-center justify-center gap-4 py-4"
						>
							<v-progress-circular indeterminate color="purple" />
							<span>Carregando...</span>
						</div>

						<!-- Renderiza as categorias -->
						<template v-if="!getLoadingState(notebook.id).value">
							<v-expansion-panels>
								<v-expansion-panel
									v-for="category in getCategoriesByNotebook(notebook.id).value"
									:key="category.id"
								>
									<v-expansion-panel-title class="!bg-neutral-100">
										<div>
											<p class="mb-2 font-bold">{{ category.title }}</p>
											<SummaryDetails :summary="category.summary" />
										</div>
									</v-expansion-panel-title>

									<v-expansion-panel-text>
										<!-- Renderiza os tópicos dentro da categoria -->
										<v-expansion-panels>
											<v-expansion-panel
												v-for="topic in category.topics"
												:key="topic.id"
											>
												<v-expansion-panel-title>
													<div>
														<p class="mb-2 font-bold">{{ topic.title }}</p>
														<SummaryDetails :summary="topic.summary" />
													</div>
												</v-expansion-panel-title>

												<v-expansion-panel-text>
													<!--  Tabs de aulas, exercícios e materiais -->
													<v-tabs v-model="tab" color="deep-purple-accent-4">
														<v-tab
															value="lessons"
															class="!text-xs !normal-case"
														>
															Aulas {{ topic.summary.lessonsCount }} |
															{{ topic.summary.lessonsTime }}
														</v-tab>
														<v-tab
															value="exercises"
															class="!text-xs !normal-case"
														>
															Exercícios {{ topic.summary.exercisesCount }} |
															{{ topic.summary.exercisesTime }}
														</v-tab>
														<v-tab
															value="materials"
															class="!text-xs !normal-case"
														>
															Materiais {{ topic.summary.materialsCount }} |
															{{ topic.summary.materialsTime }}
														</v-tab>
													</v-tabs>

													<v-card-text>
														<v-tabs-window v-model="tab">
															<v-tabs-window-item value="lessons">
																<TabSummaryHeader
																	label="Aulas"
																	:title="topic.leassonType"
																	:summary="{
																		count: topic.summary.lessonsCount,
																		time: topic.summary.lessonsTime,
																	}"
																/>
																<ul>
																	<li
																		v-for="lesson in topic.lessons"
																		:key="lesson.id"
																		class="flex items-center gap-2"
																	>
																		<v-checkbox-btn
																			color="deep-purple-accent-4"
																			density="compact"
																			v-model="lesson.completed"
																			:label="lesson.title"
																		/>
																		<span class="text-sm text-neutral-400">
																			{{ lesson.duration }}
																		</span>
																	</li>
																</ul>
															</v-tabs-window-item>

															<v-tabs-window-item value="exercises">
																<TabSummaryHeader
																	class="mb-2"
																	label="Exercícios"
																	:title="topic.exerciseType"
																	:summary="{
																		count: topic.summary.exercisesCount,
																		time: topic.summary.exercisesTime,
																	}"
																/>
																<ul>
																	<li
																		v-for="exercise in topic.exercises"
																		:key="exercise.id"
																		class="flex items-center gap-2"
																	>
																		<v-checkbox-btn
																			density="compact"
																			color="deep-purple-accent-4"
																			v-model="exercise.completed"
																			:label="exercise.title"
																		/>
																		<span class="text-sm text-neutral-400">
																			{{ exercise.duration }}
																		</span>
																	</li>
																</ul>
															</v-tabs-window-item>

															<v-tabs-window-item value="materials">
																<TabSummaryHeader
																	class="mb-2"
																	label="Materiais"
																	:title="topic.materialType"
																	:summary="{
																		count: topic.summary.materialsCount,
																		time: topic.summary.materialsTime,
																	}"
																/>
																<ul>
																	<li
																		v-for="material in topic.materials"
																		class="flex items-center gap-2"
																		:key="material.id"
																	>
																		<v-checkbox-btn
																			density="compact"
																			v-model="material.completed"
																			color="deep-purple-accent-4"
																			:label="material.title"
																		/>
																		<span class="text-sm text-neutral-400">
																			{{ material.duration }}
																		</span>
																	</li>
																</ul>
															</v-tabs-window-item>
														</v-tabs-window>
													</v-card-text>
												</v-expansion-panel-text>
											</v-expansion-panel>
										</v-expansion-panels>
									</v-expansion-panel-text>
								</v-expansion-panel>
							</v-expansion-panels>
						</template>
					</v-expansion-panel-text>
				</v-expansion-panel>
			</v-expansion-panels>
      <span v-if="!notebooks.length">Sem cadernos para exibir</span>
		</VContainer>
	</section>
</template>
