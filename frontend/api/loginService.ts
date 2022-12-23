/* import { useQuery, useQueryClient } from 'react-query';
import apiClient from './http-common';

export interface LoginProps {
    username: string,
    password: string,
}

export interface Credential {
    uuid: string,
    user_uuid: string,
    company_uuid?: string,
    username: string,
    displayName: string,
    userType: string,
    secGroups?: string[],
}

const loginRequest = async (username: string, password: string) => {
    const {token, ...otherData} = await apiClient.post<Token>('/login', { username, password })).data }, {
        onSuccess: () => {
            queryClient.invalidateQueries('get-credential')
        }
}

const submitLogin = ({username, password}: LoginProps) => {
    const queryClient = useQueryClient()
    const response = useQuery<Credential, Error>('get-credential', async () => { return (await apiClient.post<Credential>('/login', { username, password })).data }, {
        onSuccess: () => {
            queryClient.invalidateQueries('get-credential')
        }
    })
    
    if (response.isSuccess) {
        
        return response.data
    }

    if (response.isError) {
        throw new Error(response.error.message)
    }
}

const LoginService = {
    submitLogin,

}

export default LoginService */