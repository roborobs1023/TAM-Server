export type Phone = {
    uuid?: string;
    is_mobile: boolean;
    number: string;
}

export let Phones: Phone[] = [
    {
        uuid: "1",
        is_mobile: true,
        number: '863-651-1827'
    },
    {
        uuid: "2",
        is_mobile: false,
        number: '407-571-6174'
    },
    {
        uuid: "3",
        is_mobile: false,
        number: "407-679-9716"
    },
]

export const getPhone = (uuid: string) => {
    let phone = Phones.find(Phone => Phone.uuid === uuid)
    if (phone !== undefined) return phone
    return {} as Phone
}