import { createStore } from "vuex";
import { categories } from "@/mocks/category"; 
import type { Notebook, Category } from "@/types";
import { portugueseNotebooksWithoutCategory } from "@/mocks/notebook";

export default createStore({
	state: {
		notebooks: [] as Notebook[],
		notebookCategories: {} as { [key: number]: Category[] },
		loading: {} as { [key: number]: boolean },
	},
	mutations: {
		SET_NOTEBOOKS(state, notebooks: Notebook[]) {
			state.notebooks = notebooks;
		},
		SET_CATEGORIES(state, { notebookId, categories }: { notebookId: number; categories: Category[] }) {
			state.notebookCategories[notebookId] = categories;
		},
		SET_LOADING(state, { notebookId, status }: { notebookId: number; status: boolean }) {
			state.loading[notebookId] = status;
		},
	},
	actions: {
		async fetchNotebooks({ commit }) {

			const notebooks: Omit<Notebook, "categories">[] = portugueseNotebooksWithoutCategory;

			commit("SET_NOTEBOOKS", notebooks);
		},

		async fetchCategories({ commit }, notebookId: number) {
			if (categories[notebookId]) {
				commit("SET_LOADING", { notebookId, status: true });

				await new Promise((resolve) => setTimeout(resolve, 1500));

				commit("SET_CATEGORIES", { notebookId, categories: categories[notebookId] });
				commit("SET_LOADING", { notebookId, status: false });
			}
		},
	},
	getters: {
		getCategoriesByNotebook: (state) => (notebookId: number) => state.notebookCategories[notebookId] || [],
		getLoadingState: (state) => (notebookId: number) => state.loading[notebookId] || false,
	},
});
