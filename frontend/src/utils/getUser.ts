import {instance} from "./instance";
import bridge from "@vkontakte/vk-bridge";

export interface IUserData {
    _id: number;
    name: string;
    level: number;
    history: any[];
    photo_200: string;
}

export const getUser = async () => {
    const [userFromDB, vkUser] = await Promise.all([
        instance.get('/api/users/get', {
            headers: {
                Authorization: `Bearer ${window.location.search.split("?")[1]}`
            }
        }) as Promise<any>,
        bridge.send("VKWebAppGetUserInfo")
    ]);

    return {
        ...userFromDB.data,
        name: `${vkUser.first_name} ${vkUser.last_name}`,
        photo_200: vkUser.photo_200
    } as IUserData
}