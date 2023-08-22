import {User }from "../interfaces/User"

export type UserData = Omit<User, 'user_id'>;