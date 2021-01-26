<template>
  <div>
    <div
      class="drop-zone1 dropzone"
      @dragover.prevent
      @dragenter.prevent
      @drop="drop"
    >
      <div
        class="rec1"
        v-for="item in listOne"
        :key="item.title"
        draggable="true"
        @dragstart="dragStart"
      >
        {{ item.title }}
      </div>
    </div>
    <!-- <div class="drop-zone2" @dragover="dragOver(e)" @drop="drop($e, 1)"> -->
    <div
      class="drop-zone2 dropzone"
      @dragover.prevent
      @dragenter.prevent
      @drop="drop"
    >
      <div
        class="rec2"
        v-for="item in listTwo"
        :key="item.title"
        draggable="true"
        @dragstart="dragStart"
      >
        {{ item.title }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { id: 0, title: 'A', list: 1 },
        { id: 1, title: 'B', list: 1 },
        { id: 2, title: 'C', list: 2 },
      ],
    };
  },
  computed: {
    listOne() {
      const list = this.items.filter(item => item.list === 1); // list: 1에 해당하는 요소를 찾아 배열로 반환
      console.log('listOne', list);
      return list;
    },
    listTwo() {
      const list = this.items.filter(item => item.list === 2);
      console.log('listTwo', list);
      return list;
    },
  },
  methods: {
    dragStart: (evt, item) => {
      console.log('start');
      evt.dataTransfer.dropEffect = 'move';
      evt.dataTransfer.effectAllowed = 'move';
      evt.dataTransfer.setData('itemID', item.id);
      console.log('end');
    },
    drop(evt, list) {
      const itemID = evt.dataTransfer.getData('itemID');
      const item = this.items.find(item => item.id === itemID);
      item.list = list;
    },
    dragEnd(e) {
      console.log('end');
      e;
    },
    // var dragged;
    // /* events fired on the draggable target */
    // dragg() {
    //   document.addEventListener('drag', function(event) {}, false);
    // },
    // dragstart() {
    //   document.addEventListener(
    //     'dragstart',
    //     function(event) {
    //       console.log('dragstart');
    //       // store a ref. on the dragged elem
    //       dragged = event.target;
    //       // make it half transparent
    //       event.target.style.opacity = 0.5;
    //     },
    //     false,
    //   );
    // },

    // dragend() {
    //   document.addEventListener(
    //     'dragend',
    //     function(event) {
    //       console.log('dragend');
    //       // reset the transparency
    //       event.target.style.opacity = '';
    //     },
    //     false,
    //   );
    // },

    // /* events fired on the drop targets */
    // dragover() {
    //   document.addEventListener(
    //     'dragover',
    //     function(event) {
    //       console.log('dragover');
    //       // prevent default to allow drop
    //       event.preventDefault();
    //     },
    //     false,
    //   );
    // },

    // dragenter() {
    //   document.addEventListener(
    //     'dragenter',
    //     function(event) {
    //       // highlight potential drop target when the draggable element enters it
    //       if (event.target.className == 'dropzone') {
    //         event.target.style.background = 'purple';
    //       }
    //     },
    //     false,
    //   );
    // },

    // dragleave() {
    //   document.addEventListener(
    //     'dragleave',
    //     function(event) {
    //       // reset background of potential drop target when the draggable element leaves it
    //       if (event.target.className == 'dropzone') {
    //         event.target.style.background = '';
    //       }
    //     },
    //     false,
    //   );
    // },

    // drop() {
    //   document.addEventListener(
    //     'drop',
    //     function(event) {
    //       // prevent default action (open as link for some elements)
    //       event.preventDefault();
    //       // move dragged elem to the selected drop target
    //       if (event.target.className == 'dropzone') {
    //         event.target.style.background = '';
    //         dragged.parentNode.removeChild(dragged);
    //         event.target.appendChild(dragged);
    //       }
    //     },
    //     false,
    //   );
    // },
  },
};
</script>

<style lang="scss">
.drop-zone1,
.drop-zone2 {
  width: 100%;
  height: 200px;
  margin-top: 20px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eeeeee;
  .rec1 {
    background-color: #65e1a9;
  }
  .rec2 {
    background-color: rgb(187, 128, 235);
  }
}
// .drop-zone1 {
// border: 1px solid #42b983;
// }
// .drop-zone2 {
// border: 1px solid rgb(136, 39, 216);
// }
.rec1,
.rec2 {
  width: 100px;
  height: 100px;
  margin: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: aliceblue;
}
</style>
