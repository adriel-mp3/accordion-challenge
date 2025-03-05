<script setup lang="ts">
import { portugueseNotebooksWithoutCategory } from "@/mocks/notebook";
import type { Category, Notebook } from "@/types";
import { ref } from "vue";
import SummaryDetails from "./SummaryDetails.vue";

const notebooks = ref<Omit<Notebook, "categories">[]>(
	portugueseNotebooksWithoutCategory,
);

const notebookCategories = ref<{ [key: number]: Category[] }>({});
const tab = ref(null);
// Estado de loading para cada seção
const loading = ref<{ [key: number]: boolean }>({});

// Simula requisição para buscar os conteúdos da seção pelo ID
const getCategoriesByNotebookId = async (id: number) => {
	if (notebookCategories.value[id]) return;
	loading.value[id] = true;

	await new Promise((resolve) => setTimeout(resolve, 1500));

	const mockData: { [key: number]: Category[] } = {
		1: [
			{
				id: 1,
				title: "Competência 01: Palavras, Imagem e Vida Social",
				summary: {
					exercisesCount: 100,
					exercisesTime: "100h",
					lessonsTime: "10h",
					lessonsCount: 100,
					materialsTime: "1h",
					materialsCount: 10,
				},
				topics: [
					{
						id: 1,
						title: "Titulo teste",
						summary: {
							exercisesCount: 100,
							exercisesTime: "100h",
							lessonsTime: "10h",
							lessonsCount: 100,
							materialsTime: "1h",
							materialsCount: 10,
						},
						lessons: [
							{
								id: 1,
								title: "Titulo teste",
								duration: "10h",
								completed: true,
							},
						],
						exercises: [
							{
								id: 1,
								title: "Titulo teste",
								completed: true,
							},
						],
						materials: [
							{
								id: 1,
								title: "Titulo teste",
								completed: true,
							},
						],
					},
				],
			},
			{
				id: 2,
				title: "Competência 06: Texto - Contexto e Função",
				summary: {
					exercisesCount: 100,
					exercisesTime: "100h",
					lessonsTime: "10h",
					lessonsCount: 100,
					materialsTime: "1h",
					materialsCount: 10,
				},
				topics: [
					{
						id: 1,
						title: "Titulo testezin",
						summary: {
							exercisesCount: 100,
							exercisesTime: "100h",
							lessonsTime: "10h",
							lessonsCount: 100,
							materialsTime: "1h",
							materialsCount: 10,
						},
						lessons: [
							{
								id: 1,
								title: "Titulo teste",
								duration: "10h",
								completed: true,
							},
						],
						exercises: [
							{
								id: 1,
								title: "Titulo teste",
								completed: true,
							},
						],
						materials: [
							{
								id: 1,
								title: "Titulo teste",
								completed: true,
							},
						],
					},
					{
						id: 1,
						title: "Titulo testezin 2",
						summary: {
							exercisesCount: 100,
							exercisesTime: "100h",
							lessonsTime: "10h",
							lessonsCount: 100,
							materialsTime: "1h",
							materialsCount: 10,
						},
						lessons: [
							{
								id: 1,
								title: "Lição 1",
								duration: "10h",
								completed: true,
							},
              {
								id: 1,
								title: "Lição 2",
								duration: "10h",
								completed: true,
							},
						],
						exercises: [
							{
								id: 1,
								title: "Titulo teste",
								completed: true,
							},
						],
						materials: [
							{
								id: 1,
								title: "Titulo teste",
								completed: true,
							},
						],
					},
				],
			},
			{
				id: 3,
				title: "Competência 07: Opiniões e Pontos de Vista",
				summary: {
					exercisesCount: 100,
					exercisesTime: "100h",
					lessonsTime: "10h",
					lessonsCount: 100,
					materialsTime: "1h",
					materialsCount: 10,
				},
				topics: [],
			},
		],
		2: [
			{
				id: 1,
				title: "Fonologia",
				summary: {
					exercisesCount: 100,
					exercisesTime: "100h",
					lessonsTime: "10h",
					lessonsCount: 100,
					materialsTime: "1h",
					materialsCount: 10,
				},
				topics: [],
			},
			{
				id: 1,
				title: "Morfologia",
				summary: {
					exercisesCount: 100,
					exercisesTime: "100h",
					lessonsTime: "10h",
					lessonsCount: 100,
					materialsTime: "1h",
					materialsCount: 10,
				},
				topics: [],
			},
		],
	};

	notebookCategories.value[id] = mockData[id] || [];
	loading.value[id] = false;
};
</script>

<template>
	<section>
		<VContainer>
			<v-expansion-panels variant="accordion">
				<v-expansion-panel
					v-for="notebook in notebooks"
					:key="notebook.id"
					@group:selected="getCategoriesByNotebookId(notebook.id)"
				>
					<v-expansion-panel-title class="!block">
						<p class="mb-2 font-bold">{{ notebook.title }}</p>
						<SummaryDetails :summary="notebook.summary" />
					</v-expansion-panel-title>

					<v-expansion-panel-text>
						<div
							v-if="loading[notebook.id]"
							class="flex w-full items-center justify-center gap-4 py-4"
						>
							<v-progress-circular indeterminate color="purple" />
							<span>Carregando...</span>
						</div>

						<!-- Renderiza as categorias -->
						<template v-if="!loading[notebook.id]">
							<v-expansion-panels>
								<v-expansion-panel
									v-for="category in notebookCategories[notebook.id]"
									:key="category.id"
								>
									<v-expansion-panel-title class="!block !bg-neutral-100">
										<p class="mb-2 font-bold">{{ category.title }}</p>
										<SummaryDetails :summary="category.summary" />
									</v-expansion-panel-title>

									<v-expansion-panel-text>
										<!-- Renderiza os tópicos dentro da categoria -->
										<v-expansion-panels>
											<v-expansion-panel
												v-for="topic in category.topics"
												:key="topic.id"
											>
												<v-expansion-panel-title class="!block">
													<p class="mb-2 font-bold">{{ topic.title }}</p>
													<SummaryDetails :summary="topic.summary" />
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
															Exercícios{{ topic.summary.exercisesCount }} |
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
																<ul>
																	<li
																		v-for="lesson in topic.lessons"
																		:key="lesson.id"
																	>
																		{{ lesson.title }}
																	</li>
																</ul>
															</v-tabs-window-item>

															<v-tabs-window-item value="exercises">
																Two
															</v-tabs-window-item>

															<v-tabs-window-item value="materials">
																Three
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
		</VContainer>
	</section>
</template>
