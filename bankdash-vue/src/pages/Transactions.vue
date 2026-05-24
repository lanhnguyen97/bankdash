<script setup lang="ts">
import MyCards from '../components/MyCards.vue';
import MyExpense from '../components/MyExpense.vue';
import TransactionsTable from '../components/TransactionsTable.vue';
import Pagination from '../components/Pagination.vue';
</script>

<template>
  <section class="grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-[30px] mb-[30px]">
    <MyCards action="add-card" />
    <MyExpense />
  </section>

  <section>
    <TransactionsTable />
    <Pagination />
  </section>
</template>
