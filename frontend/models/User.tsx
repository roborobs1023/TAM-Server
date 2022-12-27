import { Department } from './Department';
import { Site } from './Site';
import { Phone } from './Phone';
import { v4 as uuidv4 } from 'uuid';
import { useRef } from 'react';

export type DbUser = {
    uuid?: string;
    company_uuid?: string;
    username: string;
    password: string;
    confPass?: string;
    displayName: string;
    userType: string;
    active?: boolean
}

export let DbUsers: DbUser[] = [
    {
        uuid: '1',
        company_uuid: 'Comp1',
        username: 'rtucker',
        password: 'password',
        displayName: 'Robert Tucker',
        userType: 'administrator',
        active: true
    },
    {
        uuid: '2',
        company_uuid: 'Comp1',
        username: 'acooper',
        password: 'password2',
        displayName: 'Alice Cooper',
        userType: 'standard',
        active: false
    },
    {
        uuid: "0",
        username: "root",
        password: "password1",
        displayName: "Global Administrator",
        userType: "global admin",
        active: true
    }
]


export function getDbUsers(Active?: boolean, globalAdmin?: boolean) {
    let list = [] as DbUser[]
    if (Active && globalAdmin) {
        list = DbUsers.filter(user => user.active)
    } else if (!Active && globalAdmin) {
        list = DbUsers
    } else if (Active && !globalAdmin) {
        list = DbUsers.filter(user => (user.active && user.userType !== "global admin"))
    } else if (!globalAdmin) {
        list = DbUsers.filter(user => user.userType !== "global admin")
    }
    return list
}


export function getDbUser(username: string) {
    return DbUsers.find(DbUser => DbUser.username === username)
}

export function getDbUserByuuID(uuid: string) {
    return DbUsers.find(DbUser => DbUser.uuid === uuid)
}

/* export function GetDbUserCompuuID(dbUser: DbUser) {
    let user = Users.find(User => User.uuid === dbUser.uuid)
    return user?.company_uuid
} */

export function getDbUsersByCompanyuuID(companyuuID: string, active?: boolean) {

    let dbUsers = []
    if (active) {
        dbUsers = DbUsers.filter(user => user.active = true)
        return (dbUsers.filter(user => user.company_uuid = companyuuID))
    }

    return DbUsers.filter(user => user.company_uuid = companyuuID)
}

interface NewDbUserProps {
    user: User;
}

export function NewDbUser({ user }: NewDbUserProps) {
    let dbUser = {} as DbUser

    dbUser = {
        uuid: user.uuid,
        username: user.username,
        displayName: `${user.firstName} ${user.lastName}`,
        password: generatePassword(),
        userType: 'standard',
        active: true,
    }
    DbUsers.push(dbUser)
    console.log(dbUser)
}

function generatePassword(): string {
    let password = randomString(24)
    return password
}


function randomString(length: number) {
    return Math.round((Math.pow(36, length + 1) - Math.random() * Math.pow(36, length))).toString(36).slice(1);
}
export function UpdateDbUser(u: Partial<DbUser> | undefined) {
    if (u === undefined) return

    for (const user of DbUsers) {
        if (user.uuid === u.uuid) {
            user.displayName = u.displayName!
            console.log(user)
            break
        }
    }

}

export type User = {
    uuid?: string;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    office?: Phone;
    mobile?: Phone;
    home?: Phone;
    ext?: number;
    company_uuid?: string;
    department?: Department;
    secUser: boolean;
    site?: Site;
    rootUser?: boolean;
}





function generateid() {
    let id = uuidv4()
    return id
}


