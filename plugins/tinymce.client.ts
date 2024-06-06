import { defineNuxtPlugin } from '#app';
// import tinymce from 'tinymce';

export default defineNuxtPlugin(() => {
  if (process.client) {
    const script = document.createElement('script');
    script.src = '/tinymce/tinymce.min.js';
    script.async = true;
    script.onload = () => {
      console.log('TinyMCE loaded', tinymce);
    };
    document.head.appendChild(script);
  }
});
