export default defineEventHandler(async (event) => {
    console.log("here") ;
    const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=cur_live_QaWBVSk0yNL032irdU1zL7Mm1OsGyAoYXOYLGz6K')
    return { message: "Hello API" } ;
}) ;