<template>
  <div>
    <component :is="componentName" />
  </div>
</template>

<script>
//We load all the components in full_projects folder. In order to do that we have to create an index.js in that folder and export them.
import * as components from "./../components/full_projects";

export default {
  //We destructure and register all the imported components. FullProject1, FullProject2.... Now we can reference them.
  components: {   
    ...components 
  },
  data() {
    return {
      componentName: "FullProject" + this.$route.params.id
    };
  }
};
</script>
