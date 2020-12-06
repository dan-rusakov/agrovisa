<template>
  <div class="content">
    <WelcomeScreen />
    <About />
    <Advantages />
    <Products />
    <Contacts />
  </div>
</template>

<script>
  import WelcomeScreen from '../components/WelcomeScreen';
  import About from '../components/About';
  import Advantages from '../components/Advantages';
  import Products from '../components/Products';
  import Contacts from '../components/Contacts';

  export default {
    name: 'Home',
    components: {
      WelcomeScreen,
      About,
      Advantages,
      Products,
      Contacts,
    }
  }
</script>
