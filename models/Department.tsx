export type Department = {
    uuid?: string;
    name: string;
    manager?: string;
    company_uuid: string;
}

export let Departments: Department[] = [
    {
        uuid: "1",
        name: "Administration",
        manager: "dhaselton",
        company_uuid: "1",
    },
]

