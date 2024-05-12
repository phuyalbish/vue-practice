<script>
import PageLayout from "./PageLayout.vue";
import HomeContainer from "./PageComponents/container/HomeContainer.vue";
import CategoryContainer from "./PageComponents/container/CategoryContainer.vue";
import ProductContainer from "./PageComponents/container/ProductContainer.vue";
import ProfileContainer from "./PageComponents/container/ProfileContainer.vue";
import Header from "./PageComponents/Header.vue";
import Footer from "./PageComponents/Footer.vue";
import Sidebar from "./PageComponents/Sidebar.vue";
export default {
  components: {
    PageLayout,
    HomeContainer,
    ProductContainer,
    ProfileContainer,
    CategoryContainer,
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
      <HomeContainer v-show="$store.state.navbarState === 'home'" />
      <ProductContainer v-show="$store.state.navbarState === 'product'" />
      <CategoryContainer v-show="$store.state.navbarState === 'category'" />
      <ProfileContainer v-show="$store.state.navbarState === 'profile'" />
    </template>
    <template #footer>
      <Footer />
    </template>
  </PageLayout>
</template>
