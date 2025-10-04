<script setup lang="ts">
import { GenCC, Schemes } from 'creditcard-generator';
import { useQueryParamOrStorage } from '@/composable/queryParams';

const schemes = Object.keys(Schemes);

const selectedScheme = useQueryParamOrStorage({ name: 'type', storageName: 'credit-card-gen:t', defaultValue: 'VISA' });
const count = useQueryParamOrStorage({ name: 'count', storageName: 'credit-card-gen:c', defaultValue: 5 });

const cards = ref('');

function generateCards() {
  cards.value = GenCC(selectedScheme.value, count.value).join('\n');
}
</script>

<template>
  <div style="max-width: 600px;">
    <c-select
      v-model:value="selectedScheme"
      :options="schemes"
      label="Credit Card Scheme:"
      label-position="left"
      placeholder="Select Scheme"
      mb-1
    />
    <n-form-item label="Number of Credit Card to generate:" label-placement="left">
      <n-input-number
        v-model:value="count"
        :min="1"
        :max="50"
        placeholder="Number of cards"
      />
    </n-form-item>
    <n-space justify="center">
      <n-button type="primary" mb-3 @click="generateCards">
        Generate Random Credit Card numbers
      </n-button>
    </n-space>

    <c-card v-if="cards" title="Generated Credit Card numbers">
      <textarea-copyable :value="cards" />
    </c-card>
  </div>
</template>
