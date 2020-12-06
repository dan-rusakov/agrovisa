<template>
  <div class="content" v-if="acf && contacts">
    <WelcomeScreen :slider="acf.slider"/>
    <About :content="acf.about" />
    <Advantages />
    <Products :products="acf.products" />
    <Contacts :contacts="contacts" />
  </div>
</template>

<script>
  import WelcomeScreen from '../components/WelcomeScreen';
  import About from '../components/About';
  import Advantages from '../components/Advantages';
  import Products from '../components/Products';
  import Contacts from '../components/Contacts';
  import api from '../api/index.js';

  export default {
    name: 'Home',
    components: {
      WelcomeScreen,
      About,
      Advantages,
      Products,
      Contacts,
    },
    data() {
      return {
        acf: null,
        contacts: null,
      };
    },
    created() {
      api.getCurrentPage('main', (response) => {
        this.acf = response[0]?.acf;
      });
      api.getCurrentPage('contacts', (response) => {
        this.contacts = {
          address: response[0]?.acf.main_address,
          phone: response[0]?.acf.main_phone,
          email: response[0]?.acf.main_email,
        };
      });
    }
  }
</script>
