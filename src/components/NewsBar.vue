<template>
  <div class="newsbar">
    <div class="page-title">
      <h2>Top Headlines</h2>
    </div>
    <div class="select-div">
      <span>Select a news source</span>
      <select class="selectpicker" data-size="7" data-style="btn btn-primary btn-round btn-block" title="Single Select">
        <option disabled selected>Single Option</option>
        <option value="2">Foobar</option>
        <option value="3">Is great</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    $('.selectpicker').selectpicker('refresh');
  }
}
</script>


<style lang="scss" scoped>
.newsbar {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  .page-title {
    h2 {
      font-size: 24px;
      margin-bottom: 0px;
    }
  }

  .select-div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-basis: 300px;
  }

  @media only screen and (max-width: 430px) {
    flex-wrap: wrap;
  }
}
</style>
