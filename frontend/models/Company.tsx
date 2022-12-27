import axios from "axios";
import { Address } from "./Address";
import { Phone } from "./Phone";
import { Site } from "./Site";

export default interface Company {
    uuid?: string | null;
    name: string;
    physical: Address;
    mailing: Address;
    phone: Phone;
    sites?: Site[];
    api_key?: string;
    updated_at?: string;
    updated_by?: string;
}
