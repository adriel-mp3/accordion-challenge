<script setup lang="ts">
import TopicTabsPanel from "@/components/TopicTabsPanel.vue";
import SummaryDetails from "@/components/SummaryDetails.vue";
import type { Topic } from "@/types";

defineProps<{ topics: Topic[] }>();
</script>

<template>
	<v-expansion-panels>
		<v-expansion-panel v-for="topic in topics" :key="topic.id">
			<v-expansion-panel-title>
				<div>
					<p class="mb-2 font-bold">{{ topic.title }}</p>
					<SummaryDetails :summary="topic.summary" />
				</div>
			</v-expansion-panel-title>

			<v-expansion-panel-text>
				<TopicTabsPanel :topic="topic" />
			</v-expansion-panel-text>
		</v-expansion-panel>
	</v-expansion-panels>
</template>
