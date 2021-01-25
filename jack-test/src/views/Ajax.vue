<template>
  <div>
    <button @click="Req">GET</button>
    <br />
    <br />
    <span>{{ get }}</span>
  </div>
</template>

<script>
import { getR } from '../api';

export default {
  data() {
    return {
      get: '',
    };
  },
  methods: {
    //
    // async Req() {
    //   const URL =
    //     "https://36bl37sesg.execute-api.ap-northeast-2.amazonaws.com/recurit/helloSmartjack";
    //   const config = {};
    //   const get = await getReq(URL, config);
    //   this.get = get;
    // },
    async Req() {
      const data = await getR();
      console.log('data =>', data);
      this.get = data;
    },
  },
};
</script>

<style></style>
