<template>
  <q-page class="items-center justify-evenly">
    <h1>My Tasks</h1>
    <q-list bordered separator>
      <q-item
        @click="markDone(item.id, !item.data.done)"
        clickable
        v-ripple
        v-for="item in data"
        :key="item.id"
      >
        <q-item-section avatar>
          <q-icon v-if="item.data.done" name="done" />
        </q-item-section>
        <q-item-section>{{ item.data.label }}</q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from 'vue';
import { doc, setDoc, getFirestore, onSnapshot } from 'firebase/firestore';
import { collection } from 'firebase/firestore';

export default defineComponent({
  name: 'PageIndex',
  setup() {
    const db = getFirestore();

    const data = ref();

    watchEffect(() => {
      void (() => {
        onSnapshot(collection(db, 'todos'), (querySnapshot) => {
          const todos = querySnapshot.docs.map((doc) => {
            // eslint-disable-next-line

            return { id: doc.id, data: doc.data() };
          });

          data.value = todos;
        });
      })();
    });

    async function markDone(id: string, done: boolean) {
      const cityRef = doc(db, 'todos', id);
      await setDoc(cityRef, { done }, { merge: true });
    }

    return { data, markDone };
  },
});
</script>
