import { configureStore } from '@reduxjs/toolkit'
import itemReducer from './Items'



export default configureStore({

	reducer: {
		item: itemReducer
	}
})
