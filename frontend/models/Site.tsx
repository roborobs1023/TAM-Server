import { Address } from './Address'
import { getPhone, Phone } from './Phone'

export type Site = {
    uuid?: string;
    name: string;
    company_uuid: string;
    address: Address;
    phone: Phone;
}
