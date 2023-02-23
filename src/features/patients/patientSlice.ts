import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const name = 'Sarah'
const url = `ws/rest/v1/patient?q\=${name}&\=default&limit=1`
// const url1 = '/ws/rest/v1/patient?q\=Sarah&v\=default&limit=full'
// const url = 'https://jsonplaceholder.typicode.com/users'
const initialState = {
    searchValue: '',
    patient: [],
    isError: '',
    isSuccess: false,
    isLoading: false,
}

interface SearchArgs {
    query: string;
}

// interface AsyncThunkConfig {
//     rejectValue: string;
//   }

// let user = 'admin'
// let pass = 'Admin123'

export const patientSearch = createAsyncThunk<any>('patient/search', async () => {
    // const token = btoa('admin:Admin123')
    const token = Buffer.from('admin:Admin123', "base64")
    console.log(token)
    const headers = new Headers()
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Authorization', 'Basic ' + token)

    console.log(url)
    console.log(JSON.stringify(url))
    try {

        
          await fetch(JSON.stringify(url), {
            
             headers: headers,
         })
         .then((Response=>Promise.all(([Response.headers, Response.json()]))))
            .then(([_,response])=> {
                console.log(response)
                return response
            })
        
    } catch (error) {
        console.log('Failed to connect')
        // return rejectWithValue(error)
    }
})

export const patientSlice = createSlice({
    name: 'patient',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(patientSearch.pending, (state) => {
            state.isLoading = true
        })
        .addCase(patientSearch.fulfilled, (state, {payload}) => {
            state.isSuccess = true
            state.isLoading = false
            state.patient = payload
        })
        .addCase(patientSearch.rejected, (state, {payload}) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError =  'Failed to search patients'
        })
    }
})

export default patientSlice.reducer
