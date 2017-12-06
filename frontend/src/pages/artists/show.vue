<template>
  <div>
    {{ pageName }} #{{ $route.params.artistId }}
  </div>
</template>

<script>
export default {
  // props: {
  //   artistId: {
  //     type: [String, Number],
  //     required: true,
  //   },
  // },
  data() {
    return {
      pageName: 'artists.show',
    };
  },
};
</script>

<style>

</style>
