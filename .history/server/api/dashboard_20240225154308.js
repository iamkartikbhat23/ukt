export default defineEventHandler(async (event) => {
    console.log("here") ;
    let url = process.env.API_URL ;
    const { data } = await $fetch('')
    return { message: "Hello API" } 
})