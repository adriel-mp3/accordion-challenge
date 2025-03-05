export interface Notebook {
	id: number;
	title: string;
	summary: CategorySummary;
	categories: Category[];
}

export interface Category {
	id: number;
	title: string;
	summary: CategorySummary;
	topics: Topic[];
}

export interface CategorySummary {
	lessonsCount: number;
	lessonsTime: string;
	exercisesCount: number;
	exercisesTime: string;
	materialsCount: number;
	materialsTime: string;
}

export interface Topic {
	id: number;
	title: string;
	summary: CategorySummary;
	lessons: Lesson[];
	exercises: Exercise[];
	materials: Material[];
}

export interface Exercise {
	id: number;
	title: string;
	completed: boolean;
}

export interface Material {
	id: number;
	title: string;
	completed: boolean;
}

export interface Lesson {
	id: number;
	title: string;
	duration: string;
	completed: boolean;
}
