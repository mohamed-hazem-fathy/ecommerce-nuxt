export default defineNuxtRouteMiddleware( (to , from) => {
    if (!useCookie("loggedIn").value === true) {
        return navigateTo("/login")
    }
})