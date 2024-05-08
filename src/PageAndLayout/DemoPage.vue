<script>
import PageLayout from "./PageLayout.vue";
import HomeContainer from "./PageComponents/container/HomeContainer.vue";
import Header from "./PageComponents/Header.vue";
import Footer from "./PageComponents/Footer.vue";
import Sidebar from "./PageComponents/Sidebar.vue";
export default {
  components: {
    PageLayout,
    HomeContainer,
    Header,
    Footer,
    Sidebar,
  },
};
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
      <HomeContainer />
    </template>
    <template #footer>
      <Footer />
    </template>
  </PageLayout>
</template>
