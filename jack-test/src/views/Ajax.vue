<template>
  <div>
    <button @click="Req">GET</button>
    <br />
    <br />
    <span>{{ get }}</span>
  </div>
</template>

<script>
import { getReq } from '../api';

export default {
  data() {
    return {
      get: '',
    };
  },
  methods: {
    async Req() {
      const URL =
        'https://36bl37sesg.execute-api.ap-northeast-2.amazonaws.com/recurit/helloSmartjack';
      const config = {};
      const get = await getReq(URL, config);
      this.get = get;
    },
  },
};
</script>

<style></style>
