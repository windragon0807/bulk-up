import { collection, getDocs, query, where } from 'firebase/firestore'
import { store } from './firebase'
import { COLLECTIONS } from '@/constants'

export async function checkUser({ email }: { email: string }) {
  const snapshot = await getDocs(
    query(collection(store, COLLECTIONS.USER), where('email', '==', email)),
  )
}
