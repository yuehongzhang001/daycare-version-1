<template>
  <div class="page-header-my">
        <div class="word-container">
            <span class="word"><slot></slot></span>
        </div>
    </div>
</template>

<script>
export default {
    name:"page-header"
    
}
</script>

<style lang="css" scoped>
.page-header-my{
    width: 100%;
    background-color:#f8f7f3;
    color: #b70707;
    font-family: 'Open Sans';
    font-size: 2.5rem;
    opacity: 1;
    font-weight:350;
    box-shadow: 0 2px 0 rgb(0 0 0 / 7%);
    text-align: center;
}

.word-container{
    margin: auto;
    width: 60%;
    text-align: left;
    padding: 0.8rem;

}
.word{
    margin: 0;
    
}
</style>