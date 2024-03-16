<script>
  export let title = '';
  export let date = '';
  export let author = '';
</script>

<article class="blog-post">
  <h2>{title}</h2>
  <p class="meta">{date} - {author}</p>
  
  <div class="content">
    <slot></slot>
  </div>
</article>

<style>
  .blog-post {
    margin-bottom: 20px;
  }
  
  .meta {
    font-size: 0.8em;
    color: #888;
  }
</style>