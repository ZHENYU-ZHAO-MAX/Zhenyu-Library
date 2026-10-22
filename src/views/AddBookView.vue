<template>
  <h1>Add Book</h1>

  <p>
    <input
      v-model="name"
      placeholder="Book Name"
    />
  </p>

  <p>
    <input
      v-model="isbn"
      placeholder="ISBN"
    />
  </p>

  <button @click="addBook">
    Add Book
  </button>

  <button @click="updateBook">
 Update
</button>

<button @click="deleteBook">
 Delete
</button>
</template>

<script setup>
import { ref } from "vue"
import { db } from "../firebase/init"

import {
  collection,
  addDoc,
  namedQuery
} from "firebase/firestore"
import {
 doc,
 updateDoc
} from "firebase/firestore"
import {
 deleteDoc
} from "firebase/firestore"

const name = ref("")
const isbn = ref("")

const addBook = async () => {

  await addDoc(
    collection(db, "books"),
    {
      name: name.value,

isbn: Number(isbn.value)
    }
  )

  alert("Book Added")
}
const updateBook = async () => {

  const bookRef = doc(
    db,
    "books",
    "DOCUMENT_ID"
  )

  await updateDoc(
    bookRef,
    {
      title:"Updated Book"
    }
  )

  alert("Updated")
}
const deleteBook = async () => {

  const bookRef = doc(
    db,
    "books",
    "DOCUMENT_ID"
  )

  await deleteDoc(bookRef)

  alert("Deleted")
}
</script>