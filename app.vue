<script lang="ts" setup>
onMounted(() => {
  const initTinyMCE = () => {
    if (typeof window.tinymce !== "undefined") {
      window.tinymce.init({
        selector: "#editor",
        height: 500,
        menubar: false,
        plugins:
          "advlist autolink lists link image charmap print preview anchor searchreplace visualblocks code fullscreen insertdatetime media table paste code help wordcount",
        toolbar:
          "undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",
      });
    } else {
      console.error("TinyMCE is not defined on window object");
    }
  };

  // 檢查 TinyMCE 是否已加載
  if (typeof window.tinymce !== "undefined") {
    initTinyMCE();
  } else {
    // 等待 TinyMCE 加載完成
    window.addEventListener("load", initTinyMCE);
  }
});

const setContent = () => {
  console.log("test");
  // window.tinymce.activeEditor.setContent('<a href="https://www.google.com" target="_blank">Hello, World!</a>');
  window.tinymce.activeEditor.setContent(
    '<iframe width="560" height="315" src="https://www.youtube.com/embed/oPZFuijjXrc?si=UM3P6_p3PpBvRofs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>'
  );
};

const getContent = () => {
  console.log(window.tinymce.activeEditor.getContent());
};

const insertContent = () => {
  window.tinymce.activeEditor.selection.setContent("Inserted Text");
};

const copyContent = () => {
  navigator.clipboard.writeText(
    '<a href="https://www.google.com.tw">Google</a>'
  );
};
</script>

<template>
  <div>
    <div id="editor"></div>
    <button @click="setContent">Set Hello World</button>
    <button @click="getContent">Get content</button>
    <button @click="insertContent">Insert content</button>
    <button @click="copyContent">Copy content</button>
  </div>
</template>
