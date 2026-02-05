<!-- https://svelte.dev/playground/c85cb197c606408094bef11cb3db5ac2?version=5.49.2 -->

<script></script>

<div class="loader">
  <span />
  <span />
  <span />
</div>

<style>
  .loader {
    width: 30px;
    height: 30px;
    position: relative;
  }

  span {
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: rgba(225, 225, 225, 0.1);
    border-radius: 4px;
    animation: chase 2s ease infinite;
  }

  span:nth-child(2) {
    animation-delay: 0.5s;
  }

  span:nth-child(3) {
    animation-delay: 1s;
  }

  @keyframes chase {
    0% {
      top: 0;
      left: 0;
    }

    12.5% {
      top: 0;
      left: 50%;
    }

    25% {
      top: 0;
      left: 50%;
    }

    37.5% {
      top: 50%;
      left: 50%;
    }

    50% {
      top: 50%;
      left: 50%;
    }

    62.5% {
      top: 50%;
      left: 0;
    }

    75% {
      top: 50%;
      left: 0;
    }

    87.5% {
      top: 0;
      left: 0;
    }

    100% {
      top: 0;
      left: 0;
    }
  }
</style>
