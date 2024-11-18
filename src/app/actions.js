"use server";

import { cookies } from "next/headers";
const loggedInCookieName = "isLoggedIn";

export async function setLoginCookie() {
    cookies().set(loggedInCookieName, "true");
}

export async function resetLoginCookie() {
    cookies().delete(loggedInCookieName);
}