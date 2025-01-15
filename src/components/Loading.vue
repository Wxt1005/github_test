<template>
    <div class="loading">
      <p>加载中...</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Loading'
  }
  </script>
  
  <style scoped>
  .loading {
    position: fixed;
    top: 50%;
    left: 55%;
    transform: translate(-50%, -55%);
    font-size: 20px;
    font-weight: bold;
    color: #000;
  }
  </style>
  