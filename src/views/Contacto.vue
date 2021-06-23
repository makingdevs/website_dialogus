<template>
    <div>

    </div>
</template>


<script>
    export default{
        created: function () {
          window.addEventListener('scroll', this.handleScroll);
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
        },
    };
    </script>