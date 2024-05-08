<script setup>
import PageLayout from "./PageLayout.vue";
import Header from "./PageComponents/Header.vue";
import Body from "./PageComponents/Body.vue";
import Footer from "./PageComponents/Footer.vue";
import Sidebar from "./PageComponents/Sidebar.vue";
</script>
<template>
  <PageLayout>
    <template #header>
      <Header />
    </template>
    <template #sidebar>
      <Sidebar />
    </template>
    <template #body>
      <Body />
    </template>
    <template #footer>
      <Footer />
    </template>
  </PageLayout>
</template>
