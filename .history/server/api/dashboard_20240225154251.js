export default defineEventHandler(async (event) => {
    console.log("here") ;
    let url = 
    const { data } = await $fetch('')
    return { message: "Hello API" } 
})