<template>
  <div id="header">
    <slot name="header"></slot>
  </div>
  <div id="main-content">
    <div id="sidebar">
      <slot name="sidebar"></slot>
    </div>
    <div id="body">
      <slot name="body"></slot>
    </div>
  </div>
  <div id="footer">
    <slot name="footer"></slot>
  </div>
</template>
<style>
#header {
  height: 10vh;
  background-color: cyan;
}
#main-content {
  display: flex;
  background-color: cyan;
  width: 100%;
  border: 1px solid grey;
  height: 80vh;
  #body {
    border-left: 1px solid grey;
  }

  #sidebar {
    background-color: cyan;
    width: 20vw;
  }
}

#sidebar {
  padding: 10px;
}

#footer {
  width: 100%;
  height: 10vh;
  display: flex;
  padding: 20px;
  justify-content: center;
  background-color: cyan;
}
</style>
