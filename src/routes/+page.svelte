<script>
  import "../app.css";
</script>

<div>
  <div>
    <h1>Albertus Angga Raharja</h1>
    <p>
      Visit <a href="https://albertus.dev">albertus.dev</a> to see the old crappy
      website!
    </p>
  </div>
  <div />
</div>

<style>
  div:first-of-type {
    display: grid;
    grid-template-columns: 3fr 1fr;
    place-items: center;
    width: 100%;
    height: 100vh;
  }

  div:first-of-type > div:first-child {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  div:first-of-type > div:last-child {
    padding: 1rem;
    background-color: #f5f5f5;
    width: 100%;
    height: 100%;
  }
</style>
