export default defineEventHandler(async (event) => {
    console.log("here") ;
    let url = process.env.A
    const { data } = await $fetch('')
    return { message: "Hello API" } 
})