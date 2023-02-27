import { configureStore } from '@reduxjs/toolkit'
import patientSlice from '../../features/patients/patientSlice'

export const store = configureStore({
  reducer: {
    patients: patientSlice,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch