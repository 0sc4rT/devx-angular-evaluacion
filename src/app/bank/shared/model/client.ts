import { Name } from "./name";
import { Location } from "./location";
import { Picture } from "./picture";

export interface Client {
    id: string,
    gender: string,
    name: Name,
    location: Location,
    email: string,
    picture: Picture
}
