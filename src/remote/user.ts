import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from 'firebase/firestore'

import { User } from '@models/user'
import { COLLECTIONS } from '@constants/firebase'
import { store } from './firebase'

export async function addUserIfNotExist(user: User) {
  const snapshot = await getDocs(
    query(collection(store, COLLECTIONS.USER), where('uid', '==', user.uid)),
  )

  if (snapshot.size === 0) {
    await addUser(user)
  }
}

export async function addUser(user: User) {
  setDoc(doc(collection(store, COLLECTIONS.USER), user.uid), user)
}
