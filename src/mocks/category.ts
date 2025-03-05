import type { Category } from "@/types";

export const categories: { [key: number]: Category[] } = {
	1: [
		{
			id: 1,
			title: "Interpretação de Textos",
			summary: {
				exercisesCount: 50,
				exercisesTime: "50h",
				lessonsTime: "20h",
				lessonsCount: 40,
				materialsTime: "5h",
				materialsCount: 15,
			},
			topics: [
				{
					id: 1,
					title: "Palavras, Imagem e Vida Social",
					leassonType: "Teoria + Questões",
					exerciseType: "Compreensão Leitora",
					materialType: "Artigos e Ensaios",
					summary: {
						exercisesCount: 20,
						exercisesTime: "15h",
						lessonsTime: "10h",
						lessonsCount: 10,
						materialsTime: "2h",
						materialsCount: 5,
					},
					lessons: [
						{ id: 1, title: "Introdução ao Texto", duration: "5h", completed: false },
						{ id: 2, title: "Leitura Crítica", duration: "5h", completed: true },
					],
					exercises: [
						{ id: 1, title: "Exercício de interpretação 1", completed: false, duration: "1h" },
						{ id: 2, title: "Exercício de interpretação 2", completed: true, duration: "2h" },
					],
					materials: [
						{ id: 1, title: "Artigo sobre Análise de Texto", completed: false, duration: "30min" },
					],
				},
			],
		},
		{
			id: 2,
			title: "Etimologia das palavras",
			summary: {
				exercisesCount: 40,
				exercisesTime: "30h",
				lessonsTime: "15h",
				lessonsCount: 20,
				materialsTime: "3h",
				materialsCount: 8,
			},
			topics: [
				{
					id: 2,
					title: "Morfologia",
					leassonType: "Estrutura e Formação das Palavras",
					exerciseType: "Classificação Morfológica",
					materialType: "Resumos e Esquemas",
					summary: {
						exercisesCount: 15,
						exercisesTime: "10h",
						lessonsTime: "5h",
						lessonsCount: 5,
						materialsTime: "1h",
						materialsCount: 3,
					},
					lessons: [
						{ id: 3, title: "Estrutura das Palavras", duration: "2h", completed: true },
						{ id: 4, title: "Processos de Formação", duration: "3h", completed: false },
					],
					exercises: [
						{ id: 3, title: "Classifique as palavras", completed: false, duration: "1h" },
					],
					materials: [
						{ id: 2, title: "Esquema sobre Morfologia", completed: true, duration: "40min" },
					],
				},
			],
		},
	],

	2: [
		{
			id: 3,
			title: "Redação",
			summary: {
				exercisesCount: 60,
				exercisesTime: "40h",
				lessonsTime: "20h",
				lessonsCount: 30,
				materialsTime: "4h",
				materialsCount: 10,
			},
			topics: [
				{
					id: 3,
					title: "Estrutura do Texto Dissertativo",
					leassonType: "Elementos Textuais",
					exerciseType: "Práticas de Escrita",
					materialType: "Guias e Modelos",
					summary: {
						exercisesCount: 25,
						exercisesTime: "20h",
						lessonsTime: "10h",
						lessonsCount: 10,
						materialsTime: "2h",
						materialsCount: 5,
					},
					lessons: [
						{ id: 5, title: "Introdução e Tese", duration: "3h", completed: true },
						{ id: 6, title: "Desenvolvimento Argumentativo", duration: "5h", completed: false },
					],
					exercises: [
						{ id: 4, title: "Escreva uma Introdução", completed: true, duration: "2h" },
					],
					materials: [
						{ id: 3, title: "Modelo de Redação Nota 1000", completed: false, duration: "1h" },
					],
				},
			],
		},
	],
};
